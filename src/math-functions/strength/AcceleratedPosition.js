import BhaskaraEquation from "../algebra/BhaskaraEquation";

const AcceleratedPosition = (values) => {
  const {
    'input-EquacaoPosicaoMUV-S': S,
    'input-EquacaoPosicaoMUV-S₀': S0,
    'input-EquacaoPosicaoMUV-a': a,
    'input-EquacaoPosicaoMUV-t': t,
    'input-EquacaoPosicaoMUV-v₀': v0,
  } = values;

  if (!S && S0 && a && t && v0) {
    return [{ resultName: 'S', result: Number((S0 + v0 * t + (a * t ** 2) / 2).toFixed(2)) }];
  } else if (S && !S0 && a && v0 && t) {
    return [{ resultName: 'S₀', result: Number((S - v0 * t + (a * t ** 2) / 2).toFixed(2)) }];
  } else if (S && S0 && !a && t && v0) {
    return [{ resultName: 'a', result: Number((2 * (S - S0 - v0 * t) / (t * t)).toFixed(2)) }];
  } else if (S && S0 && a && !v0 && t) {
    return [{ resultName: 'v₀', result: Number((S - S0 - (a * (t * t) / 2) / t).toFixed(2)) }];
  } else if (S && S0 && a && v0 && !t) {
    const value = {
      'input-EquacaoBhaskara-a': a / 2,
      'input-EquacaoBhaskara-b': v0,
      'input-EquacaoBhaskara-c': S - S0,
    }
    const result = BhaskaraEquation(value);
    result.map(item => {
      if (item.resultName === 'x1') {
        return item.resultName = 't₁';
      } else if (item.resultName === 'x2') {
        return item.resultName = 't₂';
      }
    })
    return result
  } else {
    console.error('Invalid input');
  }
}

export default AcceleratedPosition
