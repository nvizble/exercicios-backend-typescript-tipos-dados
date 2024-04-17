const soletrando = (palavra: string): string => {
  return palavra.split('').join('-');
}

const palavra = 'soletrando';

console.log(soletrando(palavra))
