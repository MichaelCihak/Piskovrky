class HerniPole{
  constructor(){
  this.hraci = ["X", "O"];
  this.aktualniHracIndex = 0;
  this.hraSkoncila = false;
  this.hrac1Vyhry = 0;
  this.hrac2Vyhry = 0;  
  }

generovatPole() {
      var velikost = parseInt(document.getElementById("velikostPole").value);
      var herniPole = document.getElementById("herniPole");
  
      herniPole.innerHTML = '';
      herniPole.style.gridTemplateColumns = `repeat(${velikost}, 100px)`;
      herniPole.style.gridTemplateRows = `repeat(${velikost}, 100px)`;
  
      for (var i = 0; i < velikost * velikost; i++) {
        var cell = document.createElement("div");
        cell.classList.add("piskvorky-cell");
        cell.setAttribute("data-index", i);
        cell.innerHTML = " ";
        cell.addEventListener("click", (event) => this.umistitSymbol(event));
        herniPole.appendChild(cell);
      }
      // reset hry
      
      this.hraSkoncila = false;
      this.aktualniHracIndex = 0;
    }

novaHra(herniPole, velikostPoleInput) {
      this.hraSkoncila = false;
      this.aktualniHracIndex = 0;
      var velikost = parseInt(velikostPoleInput.value);

// vyprázdnění pole a nastavení stylu buněk
  
      herniPole.innerHTML = '';
      herniPole.style.gridTemplateColumns = `repeat(${velikost}, 100px)`;
      herniPole.style.gridTemplateRows = `repeat(${velikost}, 100px)`;

// tvorba div elementů pro každou buňku
  
      for (var i = 0; i < velikost * velikost; i++) {
        var cell = document.createElement("div");
        cell.classList.add("piskvorky-cell");
        cell.setAttribute("data-index", i);
        cell.innerHTML = " ";
        cell.addEventListener("click", (event) => this.umistitSymbol(event));
        herniPole.appendChild(cell);
      }
    }

umistitSymbol(event){
      if (this.hraSkoncila) {
        return;
      }
  
      var index = event.target.getAttribute("data-index");
      this.umistitSymbolPodleIndexu(index);
  }
  
 umistitSymbolPodleIndexu(index) {
      var ctverec = document.querySelector(`[data-index="${index}"]`);
  
      if (ctverec && ctverec.innerHTML === " " && !this.hraSkoncila) {
        ctverec.innerHTML = this.hraci[this.aktualniHracIndex];
        this.aktualniHracIndex = (this.aktualniHracIndex + 1) % this.hraci.length;
      }
        if (this.kontrolaVyhry()) {
          alert("Hra skončila, hráč hrající za: " + this.hraci[this.aktualniHracIndex ^ 1] + " vyhrál!");
          this.hraSkoncila = true;
  
          // přiřazování výher
          if (this.hraci[this.aktualniHracIndex ^ 1] === "X") {
            this.hrac1Vyhry++;
          } else if (this.hraci[this.aktualniHracIndex ^ 1] === "O") {
            this.hrac2Vyhry++;
          }
  
          this.aktualizovatPocetVyhry();
        }
   }

  aktualizovatPocetVyhry() {
        var hrac1VyhryElement = document.getElementById("hrac1-vyhry");
        var hrac2VyhryElement = document.getElementById("hrac2-vyhry");
    
        if (hrac1VyhryElement && hrac2VyhryElement) {
            hrac1VyhryElement.innerText = "Hráč 1: " + this.hrac1Vyhry;
            hrac2VyhryElement.innerText = "Hráč 2: " + this.hrac2Vyhry;
        } else {
            console.error("Elementy pro počet výher nebyly nalezeny.");
        }
    }
  
  kontrolaVyhry() {
      var kontrola = new KontrolaVyhry();
      return kontrola.kontrolaVyhry();
    }
  
}
