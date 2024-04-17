type Produto = {
  nome: string;
  lote: number;
  ano: number;
  quantidade: number;
}


const etiquetadora = (produto: Produto): string[] => {
  const lote: string = String(produto.lote);
  const ano: string = String(produto.ano);
  const quantidade: number = produto.quantidade;
  const etiquetas: string[] = [];
  for (let i = 0; i < quantidade; i++) {
    const quantidadeEtiquetas = String(i + 1).padStart(3, "0")
    etiquetas.push(`${lote}-${ano}-${quantidadeEtiquetas}`)
  }

  return etiquetas;
}

const produto: Produto = {
  nome: "Logitech G X PRO Wireless II",
  lote: 321,
  ano: 2024,
  quantidade: 5
}

console.log(etiquetadora(produto))
