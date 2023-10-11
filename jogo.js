class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "atacou";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso da classe Hero
const meuHeroi = new Hero("Gandalf", 150, "mago");
meuHeroi.atacar(); // Saída: "O mago atacou usando usou magia"

const outroHeroi = new Hero("Aragorn", 35, "guerreiro");
outroHeroi.atacar(); // Saída: "O guerreiro atacou usando usou espada"
