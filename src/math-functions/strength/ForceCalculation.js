const ForceCalculation = (values) => {
  const {
    'input-CalculoForca-F': F,
    'input-CalculoForca-a': a,
    'input-CalculoForca-m': m,
  } = values;

  if (!F && a && m) {
    return [{ resultName: 'F', resultValue: Number((m * a).toFixed(2)) }];
  } else if (F && !a && m) {
    return [{ resultName: 'a', resultValue: Number((F / m).toFixed(2)) }];
  } else if (F && a && !m) {
    return [{ resultName: 'm', resultValue: Number((F / a).toFixed(2)) }];
  } else {
    console.error('Invalid input');
  }
};

export default ForceCalculation;
