const LogarithmSimple = (value) => {
  const { 'input-LogaritmoSimples-b': b, 'input-LogaritmoSimples-x': x } =
    value;

  return [
    {
      resultName: 'log(x)',
      resultValue: Number((Math.log(x) / Math.log(b)).toFixed(2)),
    },
  ];
};

export default LogarithmSimple;
