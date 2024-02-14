class HerniPole {
  constructor() {
    this.hraci = ["X", "O"];
    this.aktualniHracIndex = 0;
    this.hraSkoncila = false;
    this.hraciInfo = [
      { symbol: "X", vyhry: 0 },
      { symbol: "O", vyhry: 0 }
    ];
  }


ziskejJmena() {
  return JSON.parse(localStorage.getItem("historieJmen")) || [];
}

zobrazJmena() {
  const historieJmenList = document.getElementById("historieJmenList");
  historieJmenList.innerHTML = "";

  const jmena = this.ziskejJmena();

  jmena.forEach(jmeno => {
    const listItem = document.createElement("li");
    listItem.textContent = jmeno;
    historieJmenList.appendChild(listItem);
  });
}

generovatPole() {
  var velikost = parseInt(document.getElementById("velikostPole").value);
  var herniPole = document.getElementById("herniPole");

  const historieJmen = this.ziskejJmena();

  herniPole.innerHTML = '';
  var velikostPolicka = velikost > 3 ? 50 : 100;
  var fontVelikost = velikost > 3 ? "14px" : "18px";

  herniPole.style.gridTemplateColumns = `repeat(${velikost}, ${velikostPolicka}px)`;
  herniPole.style.gridTemplateRows = `repeat(${velikost}, ${velikostPolicka}px)`;


  for (var i = 0; i < velikost * velikost; i++) {
    var cell = document.createElement("div");
    cell.classList.add("piskvorky-cell");
    cell.setAttribute("data-index", i);
    cell.innerHTML = " ";
    cell.style.fontSize = fontVelikost; 
    cell.addEventListener("click", (event) => this.umistitSymbol(event));
    herniPole.appendChild(cell);
  }

  this.hraSkoncila = false;
  this.aktualniHracIndex = 0;

  this.nastavitHistoriiJmen(historieJmen);
}

nastavitHistoriiJmen(historieJmen) {
  const jmenaTabulka = document.getElementById("historieJmenList");
  jmenaTabulka.innerHTML = "";

  historieJmen.forEach(jmeno => {
    const listItem = document.createElement("li");
    listItem.textContent = jmeno;
    jmenaTabulka.appendChild(listItem);
  });
}

novaHra(herniPoleInstance, velikostPoleInput) {
  this.hraSkoncila = false;
  this.aktualniHracIndex = 0;
  var velikost = parseInt(velikostPoleInput.value);

  herniPoleInstance.innerHTML = '';
  var velikostPolicka = velikost > 4 ? 50 : 100;
  var fontVelikost = velikost > 4 ? "14px" : "18px";

  herniPoleInstance.style.gridTemplateColumns = `repeat(${velikost}, ${velikostPolicka}px)`;
  herniPoleInstance.style.gridTemplateRows = `repeat(${velikost}, ${velikostPolicka}px)`;

  for (var i = 0; i < velikost * velikost; i++) {
    var cell = document.createElement("div");
    cell.classList.add("piskvorky-cell");
    cell.setAttribute("data-index", i);
    cell.innerHTML = " ";
    cell.style.fontSize = fontVelikost;
    cell.addEventListener("click", (event) => this.umistitSymbol(event));
    herniPoleInstance.appendChild(cell);
  }
}
  
    umistitSymbol(event) {
      if (this.hraSkoncila) {
        return;
      }
  
      
      var index = event.target.getAttribute("data-index");
      this.umistitSymbolPodleIndexu(index);
    }
    

    umistitSymbolPodleIndexu(index) {
      var ctverec = document.querySelector(`[data-index="${index}"]`);
    
      if (ctverec && ctverec.innerHTML === " " && !this.hraSkoncila) {
        ctverec.innerHTML = `<span>${this.hraci[this.aktualniHracIndex]}</span>`;
    
        if (this.kontrolaVyhry()) {
          alert("Hra skončila, hráč hrající za: " + this.hraci[this.aktualniHracIndex ^ 1] + " vyhrál!");
          this.hraSkoncila = true;
    
          const vyherceIndex = this.aktualniHracIndex;
          this.hraciInfo[vyherceIndex].vyhry++;
    
          this.aktualizovatPocetVyhry();
    
          this.pridatVyhruDoTabulky(this.hraci[this.aktualniHracIndex]);
        }
    
        this.aktualniHracIndex = (this.aktualniHracIndex + 1) % this.hraci.length;
      }
    }
  
  aktualizovatPocetVyhry() {
    var hrac1VyhryElement = document.getElementById("hrac1-vyhry-value");
    var hrac2VyhryElement = document.getElementById("hrac2-vyhry-value");

    if (hrac1VyhryElement && hrac2VyhryElement) {
      hrac1VyhryElement.innerText = this.hraciInfo[0].vyhry;
      hrac2VyhryElement.innerText = this.hraciInfo[1].vyhry;
    } else {
      console.error("Elementy pro počet výher nebyly nalezeny.");
    }
  }
  
  aktualizovatTabulkuVyher() {
    const jmenaTabulka = document.getElementById("historieJmenList");

    const jmenaVyhry = JSON.parse(localStorage.getItem("jmenaVyhry")) || {};

    jmenaTabulka.innerHTML = "";

    for (const [jmeno, vyhry] of Object.entries(jmenaVyhry)) {
        const newRow = jmenaTabulka.insertRow();
        const cellJmeno = newRow.insertCell(0);
        cellJmeno.innerHTML = jmeno;

        const cellVyhry = newRow.insertCell(1);
        cellVyhry.innerHTML = vyhry;
    }
}
  
pridatVyhruDoTabulky(vyherce) {
  const vyherceIndex = this.aktualniHracIndex;
  if (vyherceIndex !== -1) {
      const hracJmeno = this.ziskejJmena()[vyherceIndex];
      const jmenaVyhry = JSON.parse(localStorage.getItem("jmenaVyhry")) || {};

      jmenaVyhry[hracJmeno] = (jmenaVyhry[hracJmeno] || 0) + 1;
      localStorage.setItem("jmenaVyhry", JSON.stringify(jmenaVyhry));

      this.aktualizovatTabulkuVyher();
  } else {
      console.error("Hráč s tímto jménem nebyl nalezen v historii jmen.");
  }
}

  kontrolaVyhry() {
      var kontrola = new KontrolaVyhry();
      return kontrola.kontrolaVyhry(this.herniPole);
  }
}

window.onload = function() {
  herniPole = new HerniPole();
  herniPole.aktualizovatTabulkuVyher();
};
