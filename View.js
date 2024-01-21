class RegistracniForm {

// vytvoření formuláře

  constructor() {
    this.form = document.createElement("form");
    this.form.id = "dynamicForm";
    
    this.inputJmeno1 = this.createInput("jmeno1", "text", "jmeno hrace 1", true);
    this.inputJmeno2 = this.createInput("jmeno2", "text", "jmeno hrace 2", true);


    this.form.appendChild(this.inputJmeno1);
    this.form.appendChild(this.inputJmeno2);
    
    document.getElementById("registraceForm").appendChild(this.form);
  }

  // nový prvek input

  createInput(id, type, placeholder, required) {
    var input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    input.required = required;
    return input;
  }

  // odeslání formuláře, event.preventDefault() - zabraňuje poslání dat, místo toho se volá metoda startGame()

  onSubmit(event) {
    event.preventDefault();
    this.startGame();
  }

  // získání hodnot jmen z formuláře
  
  startGame() {
    let jmeno1 = document.getElementById("jmeno1").value;
    let jmeno2 = document.getElementById("jmeno2").value;

    let data = {
      jmeno1: jmeno1,
      jmeno2: jmeno2
    }
  }
}

function go(){
      var jmeno1 = document.getElementById("jmeno1").value;
  var jmeno2 = document.getElementById("jmeno2").value;

  if (jmeno1 === "" || jmeno2 === "") {
    alert("Prosím, vyplňte obě jména před registrací do hry.");
  } else {
    window.location.href = "./Hra.php";
  }
}
