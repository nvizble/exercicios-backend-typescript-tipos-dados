const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

const buscarDonoPet = (lista: { nome: string, pets: string[] }[], nomePet: string) => {

  let usuarioEncontrado;


  for (const usuario of lista) {
    if (usuario.pets.includes(nomePet)) {
      usuarioEncontrado = usuario;
    }
  }

  if (!usuarioEncontrado) {
    console.log(`Que pena ${nomePet}, Não encontramos o seu dono`);
    return
  }

  console.log(`O dono(a) do(a) pet ${nomePet} é o(a) ${usuarioEncontrado.nome}`);
}
buscarDonoPet(usuarios, 'Guido');
