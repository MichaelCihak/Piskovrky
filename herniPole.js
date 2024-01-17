class HerniPole{
  constructor(){
  this.hraci = ["X", "O"];
  this.aktualniHracIndex = 0;
  this.hraSkoncila = false;
    
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
   }
}
