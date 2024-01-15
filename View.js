class RegistracniForm{
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
  //vytvoření formuláře
 createInput(id, type, placeholder, required) {
    var input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    input.required = required;
    return input;
  }
  
}

