const tabuada = (numeros: number[]): void => {
  numeros.forEach((numero) => {
    let resultado: string = ""

    for (let i = 1; i <= 10; i++) {
      const resultadoMulti: number = numero * i
      resultado += `${numero} x ${i} = ${resultadoMulti} \n`

    }

    resultado += "---------------------------------\n\n"

    console.log(resultado)
  })
}

const numeros: number[] = [3, 5, 7, 9, 11]

tabuada(numeros);
