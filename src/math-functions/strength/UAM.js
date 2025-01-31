const UAM = (values) => {
  const {
    'input-EquacaoVelocidadeMUV-v₀': v0,
    'input-EquacaoVelocidadeMUV-a': a,
    'input-EquacaoVelocidadeMUV-t': t,
    'input-EquacaoVelocidadeMUV-v': v,
  } = values;

  console.log(values);
  if (!v && v0 && a && t) {
    return [{ resultName: 'v', result: Number((v0 + a * t).toFixed(2)) }];
  } else if (v && !v0 && a && t) {
    return [{ resultName: 'v₀', result: Number((v - a * t).toFixed(2)) }];
  } else if (v && v0 && !a && t) {
    return [{ resultName: 'a', result: Number(((v - v0) / t).toFixed(2)) }];
  } else if (v && v0 && a && !t) {
    return [{ resultName: 't', result: Number(((v - v0) / a).toFixed(2)) }];
  } else {
    console.error('Invalid input values');
  }
};

export default UAM;
