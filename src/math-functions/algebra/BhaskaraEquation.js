const BhaskaraEquation = (values) => {
  const {
    'input-EquacaoBhaskara-a': a,
    'input-EquacaoBhaskara-b': b,
    'input-EquacaoBhaskara-c': c,
  } = values;

  const delta = b ** 2 - 4 * a * c;
  const x1 = parseFloat(((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2));
  const x2 = parseFloat(((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2));

  return [
    { resultName: 'x1', result: x1 },
    { resultName: 'x2', result: x2 },
  ];
};

export default BhaskaraEquation;
