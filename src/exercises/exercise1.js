// Exercício 1
// Geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone ou
// resposta para sua pergunta secreta ainda está correto. No entanto, como alguém pode olhar por cima do
// seu ombro, você não quer que isso apareça em sua tela. Em vez disso, nós o mascaramos. Sua tarefa é
// escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#".
// Exemplos:
// "4556364607935616" --> "############5616"
// "64607935616" --> "######5616"
// "1" --> "1"
// "" ---> ""
// "Skippy" --> "##ippy"
// "Nanananananananananana Batman!" --> "##########################man!"


function maskify(string) {
  const options = {
    mask: '#',
    visibleValues: 4,
    minValues: 6,
  };

  if (string.length < options.minValues) {
    return string;
  }

  const endValue = string.slice(-options.visibleValues);

  const valueToMask = string.slice(options.visibleValues);

  const maskedValue = valueToMask.split('').map(char => {
    const output = options.mask;
    return output;
  });

  const maskedString = [...maskedValue, endValue].join('');

  return maskedString;
}

module.exports = maskify;


