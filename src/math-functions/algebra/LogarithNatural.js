const LogarithmNatural = (value) => {
  const { 'input-LogaritmoNatural-x': x } = value;

  return [
    { resultName: 'log(x)', resultValue: Number(Math.log(x).toFixed(2)) },
  ];
};

export default LogarithmNatural;
