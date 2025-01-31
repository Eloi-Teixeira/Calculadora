const ManageLinearEquation = (values) => {
  const {
    'input-EquacaoLinear-x': x,
    'input-EquacaoLinear-m': m,
    'input-EquacaoLinear-b': b,
    'input-EquacaoLinear-y': y,
  } = values;

  let result;
  let resultName;

  switch (true) {
    case x === undefined:
      result = (y - b) / m;
      resultName = 'x';
      break;
    case m === undefined:
      result = (y - b) / x;
      resultName = 'm';
      break;
    case b === undefined:
      result = y - m * x;
      resultName = 'b';
      break;
    case y === undefined:
      result = m * x + b;
      resultName = 'y';
      break;
    default:
      console.e('Invalid equation type');
  }

  return [{ resultName, resultValue: Number(result.toFixed(2)) }];
};

export default ManageLinearEquation;
