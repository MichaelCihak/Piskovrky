class KontrolaVyhry {
  constructor() {}

  kontrolaVyhry() {
    var herniPole = document.getElementById("herniPole").children;
    var velikost = parseInt(document.getElementById("velikostPole").value);

    function ziskatSymbol(i, j) {
      return herniPole[j + i * velikost].innerHTML.trim();
    }

    if (this.kontrolaRadku() || this.kontrolaSloupcu() || this.kontrolaDiagonaly()) {
      return true;
    }

    console.log("Žádná výhra");
    return false;
  }

  kontrolaRadku() {
    var velikost = parseInt(document.getElementById("velikostPole").value);
  
    for (var i = 0; i < velikost; i++) {
      var win = false;
      var symbol = this.ziskatSymbol(i, 0);
      if (symbol === "") continue;
      let count = 1;
      for (let j = 1; j < velikost; j++) {
        if (symbol !== this.ziskatSymbol(i, j)) {
          win = false;
          break;
        }
        count++;
        if (count >= 3) {
          win = true;
          break;
        }
      }
      if (win) {
        console.log("Výhra podle řádků");
        return true;
      }
    }
    return false;
  }
  
  kontrolaSloupcu() {
    var velikost = parseInt(document.getElementById("velikostPole").value);
  
    for (var i = 0; i < velikost; i++) {
      var win = false;
      var symbol = this.ziskatSymbol(0, i);
      if (symbol === "") continue;
      let count = 1;
      for (let j = 1; j < velikost; j++) {
        if (symbol !== this.ziskatSymbol(j, i)) {
          win = false;
          break;
        }
        count++;
        if (count >= 3) {
          win = true;
          break;
        }
      }
      if (win) {
        console.log("Výhra podle sloupců");
        return true;
      }
    }
    return false;
  }

  kontrolaDiagonaly() {
    var velikost = parseInt(document.getElementById("velikostPole").value);
    var winDiagLeft = false;
    var winDiagRight = false;
    var symbolLeft = this.ziskatSymbol(0, 0);
    var symbolRight = this.ziskatSymbol(0, velikost - 1);

    if (symbolLeft !== "") {
      for (var i = 1; i < velikost; i++) {
        if (symbolLeft !== this.ziskatSymbol(i, i)) {
          winDiagLeft = false;
          break;
        }
      }
      if (i >= 3) {
        winDiagLeft = true;
      }
    }

    if (symbolRight !== "") {
      for (var i = 1; i < velikost; i++) {
        if (symbolRight !== this.ziskatSymbol(i, velikost - 1 - i)) {
          winDiagRight = false;
          break;
        }
      }
      if (i >= 3) {
        winDiagRight = true;
      }
    }

    if (winDiagLeft || winDiagRight) {
      console.log("Výhra po diagonálách");
      return true;
    }

    return false;
  }

  ziskatSymbol(i, j) {
    var herniPole = document.getElementById("herniPole").children;
    var velikost = parseInt(document.getElementById("velikostPole").value);
    return herniPole[j + i * velikost].innerHTML.trim();
  }
}
