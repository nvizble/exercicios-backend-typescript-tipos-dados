
type Usuario = {
  nome: string;
  idade: number;
  status: boolean;
}[]

const usuarios: Usuario = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
]


const filtrarUsuarios = (nome: string, usuarios: Usuario): Usuario => {

  const usuariosFiltrados: Usuario = usuarios.filter((usuario) => {
    return usuario.nome.toLowerCase() === nome.toLowerCase() || usuario.nome.toLowerCase().includes(nome.toLowerCase())
  })

  return usuariosFiltrados
}


filtrarUsuarios("jo", usuarios)

