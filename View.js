class RegistracniForm {
    constructor() {
        this.form = document.createElement("form");
        this.form.id = "dynamicForm";
        this.form.onsubmit = this.onSubmit.bind(this);
  
        this.jmena = JSON.parse(localStorage.getItem("historieJmen")) || [];
  
        for (let i = 1; i <= 2; i++) {
            const input = this.createInput(`jmeno${i}`, "text", `jmeno hrace ${i}`, true);
            this.form.appendChild(input);
        }
  
        this.buttonRegistrace = document.createElement("input");
        this.buttonRegistrace.type = "submit";
        this.buttonRegistrace.value = "Registrace";
        this.buttonRegistrace.id = "registrace";
  
        this.form.appendChild(this.buttonRegistrace);
  
        document.getElementById("registraceForm").appendChild(this.form);
    }
  
    createInput(id, type, placeholder, required) {
        var input = document.createElement("input");
        input.id = id;
        input.type = type;
        input.placeholder = placeholder;
        input.required = required;
        return input;
    }
  
    onSubmit(event) {
        event.preventDefault();
        this.startGame();
    }
  
    startGame() {
        const novaJmena = [];
    
        for (let i = 1; i <= 2; i++) {
            const jmeno = document.getElementById(`jmeno${i}`).value.trim();
            if (jmeno !== "") {
                novaJmena.push(jmeno);
            }
        }
    
        if (novaJmena.length < 2) {
            alert("Musíte zadat alespoň dvě jména.");
            return;
        }
    
        const existujiciJmena = this.jmena.slice(0, 8);
        const novaJmenaBezExistujicich = novaJmena.filter(jmeno => !existujiciJmena.includes(jmeno));
    
        if (novaJmenaBezExistujicich.length < 2) {
            const existujiciJmeno = existujiciJmena.find(jmeno => novaJmena.includes(jmeno));
            alert(`Jméno '${existujiciJmeno}' je již ve hře, zadej prosím jiné.`);
            return;
        }
    
        this.jmena = [...novaJmenaBezExistujicich, ...existujiciJmena];
        localStorage.setItem("historieJmen", JSON.stringify(this.jmena));
    
        window.location.href = `./Hra.html?jmeno=${novaJmenaBezExistujicich.join('&jmeno=')}`;
    }
}
