class RegistracniForm{
    
//vytvoření formuláře
    
constructor(){
    this.form = document.createElement("form");
    this.form.id = "dynamicForm";
    this.form.onsubmit = this.onSubmit.bind(this);

    this.inputJmeno1 = this.createInput("jmeno1", "text", "jmeno hrace 1", true);
    this.inputJmeno2 = this.createInput("jmeno2", "text", "jmeno hrace 2", true);

    this.buttonRegistrace = document.createElement("input");
    this.buttonRegistrace.type = "submit";
    this.buttonRegistrace.value = "Registrace";
    this.buttonRegistrace.id = "registrace";

    this.form.appendChild(this.inputJmeno1);
    this.form.appendChild(this.inputJmeno2);
    this.form.appendChild(this.buttonRegistrace);

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
    
  onSubmit(event){
      event.preventDeafult();
      this.startGame();
  }
// získání hodnot jmen z formuláře
startGame(){
        let jmeno1 = document.getElementById("jmeno1").value;
    let jmeno2 = document.getElementById("jmeno2").value;

    let data = {
      jmeno1: jmeno1,
      jmeno2: jmeno2
    };
    // asynchronní odeslání dat XMLHttpRequest
    
    let ajax = new XMLHttpRequest();
    ajax.open("POST", "pridatDoSession.php", true);
    ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
        console.log(ajax.responseText);
      }
    };

    ajax.send(JSON.stringify(data));
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
