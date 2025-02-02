const AverageSpeed = (values) => {
  const {
    'input-CalculoVelocidadeMedia-v': v,
    'input-CalculoVelocidadeMedia-ΔS': ΔS,
    'input-CalculoVelocidadeMedia-Δt': Δt,
  } = values;

  if (!v && ΔS && Δt) {
    return [{ resultName: 'v', resultValue: Number((ΔS / Δt).toFixed(2)) }];
  } else if (v && !ΔS && Δt) {
    return [{ resultName: 'ΔS', resultValue: Number((v * Δt).toFixed(2)) }];
  } else if (v && ΔS && !Δt) {
    return [{ resultName: 'Δt', resultValue: Number((ΔS / v).toFixed(2)) }];
  } else {
    console.error('Invalid input values');
  }
};

export default AverageSpeed;
