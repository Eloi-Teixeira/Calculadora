const logarithmSimple = (value) => {
  const { 'input-LogaritmoSimples-b': b, 'input-LogaritmoSimples-x': x } =
    value;

  const result = Math.log(x) / Math.log(b);

  return [{ resultName: 'log(x)', result }];
};

export default logarithmSimple;
