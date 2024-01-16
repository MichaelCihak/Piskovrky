class HerniPole(){
  constructor(){

    
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
    
  }

  
}
