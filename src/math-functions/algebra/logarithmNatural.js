const logarithmNatural = (value) => {
  const { 'input-LogaritmoNatural-x': x } = value;
  const result = Number(Math.log(x).toFixed(2));

  return [{letter:'log(x)',result}]
};

export default logarithmNatural;
