const LogarithmNatural = (value) => {
  const { 'input-LogaritmoNatural-x': x } = value;
  const result = Number(Math.log(x).toFixed(2));

  return [{ resultName: 'log(x)', result }];
};

export default LogarithmNatural;
