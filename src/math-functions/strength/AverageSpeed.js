const AverageSpeed = (values) => {
  const {
    'input-CalculoVelocidadeMedia-v': v,
    'input-CalculoVelocidadeMedia-ΔS': ΔS,
    'input-CalculoVelocidadeMedia-Δt': Δt,
  } = values;

  if (!v && ΔS && Δt) {
    return [{ resultName: 'v', result: Number((ΔS / Δt).toFixed(2)) }];
  } else if (v && !ΔS && Δt) {
    return [{ resultName: 'ΔS', result: Number((v * Δt).toFixed(2)) }];
  } else if (v && ΔS && !Δt) {
    return [{ resultName: 'Δt', result: Number((ΔS / v).toFixed(2)) }];
  } else {
    console.error('Invalid input values');
  }
};

export default AverageSpeed;
