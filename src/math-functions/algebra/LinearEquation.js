const linearEquationY = (x, m, b) => {
  return m * x + b;
};
const linearEquationM = (x, y, b) => {
  return (y - b) / x;
};
const linearEquationX = (y, m, b) => {
  return (y - b) / m;
};

const linearEquationB = (x, m, y) => {
  return y - m * x;
};

const manageLinearEquation = (values) => {
  const {
    'input-EquacaoLinear-x': x,
    'input-EquacaoLinear-m': m,
    'input-EquacaoLinear-b': b,
    'input-EquacaoLinear-y': y,
  } = values;

  let result;
  let letter;

  switch (true) {
    case x === undefined:
      result = linearEquationX(y, m, b);
      letter = 'x';
      break;
    case m === undefined:
      result = linearEquationM(x, y, b);
      letter = 'm';
      break;
    case b === undefined:
      result = linearEquationB(x, m, y);
      letter = 'b';
      break;
    case y === undefined:
      result = linearEquationY(x, m, b);
      letter = 'y';
      break;
    default:
      console.log('Invalid equation type');
  }

  result = Number(result.toFixed(2));
  return [{ letter, result }];
};

export default manageLinearEquation;
