const AverageAcceleration = (values) => {
  const {
    'input-CalculoAceleracaoMedia-a': a,
    'input-CalculoAceleracaoMedia-Δv': Δv,
    'input-CalculoAceleracaoMedia-Δt': Δt,
  } = values;

  if (!a && Δv && Δt) {
    return [{ resultName: 'a', resultValue: Number((Δv / Δt).toFixed(2)) }];
  } else if (a && !Δv && Δt) {
    return [{ resultName: 'Δv', resultValue: Number((a * Δt).toFixed(2)) }];
  } else if (a && Δv && !Δt) {
    return [{ resultName: 'Δt', resultValue: Number((Δv / a).toFixed(2)) }];
  } else {
    console.error('Invalid input values');
  }
};

export default AverageAcceleration;
