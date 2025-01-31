const BhaskaraEquation = (values) => {
  const {
    'input-EquacaoBhaskara-a': a,
    'input-EquacaoBhaskara-b': b,
    'input-EquacaoBhaskara-c': c,
  } = values;

  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    console.error('Erro: delta negativo, raízes complexas.');
    alert('Erro: delta negativo, raízes complexas.');
    return [{ resultName: 'x1', result: 0 }, { resultName: 'x2', result: 0 }];
  }

  const x1 = Number(((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2));
  const x2 = Number(((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2));

  return [
    { resultName: 'x1', resultValue: x1 },
    { resultName: 'x2', resultValue: x2 },
  ];
};

export default BhaskaraEquation;
