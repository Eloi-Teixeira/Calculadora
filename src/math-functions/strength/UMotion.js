const uMotion = (values) => {
  const {
    'input-EquacaoVelocidadeMUV-v₀': v0,
    'input-EquacaoVelocidadeMUV-a': a,
    'input-EquacaoVelocidadeMUV-t': t,
    'input-EquacaoVelocidadeMUV-v': v,
  } = values;

  if (!v && v0 && a && t) {
    return [{ resultName: 'v', resultValue: Number((v0 + a * t).toFixed(2)) }];
  } else if (v && !v0 && a && t) {
    return [{ resultName: 'v₀', resultValue: Number((v - a * t).toFixed(2)) }];
  } else if (v && v0 && !a && t) {
    return [{ resultName: 'a', resultValue: Number(((v - v0) / t).toFixed(2)) }];
  } else if (v && v0 && a && !t) {
    return [{ resultName: 't', resultValue: Number(((v - v0) / a).toFixed(2)) }];
  } else {
    console.error('Invalid input values');
  }
};

export default uMotion;
