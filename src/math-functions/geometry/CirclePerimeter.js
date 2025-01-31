const CirclePerimeter = (values) => {
  const {
    'input-PC-raio': r,
    'input-PC-perimetro': Perimeter,
  } = values;

  if (Perimeter === undefined) {
    return [{
      resultValue: Number((2 * Math.PI * r).toFixed(2)),
      resultName: 'Perímetro',
    }];
  } else if (r === undefined) {
    return [{
      resultValue: Number((Perimeter / (2 * Math.PI)).toFixed(2)),
      resultName: 'Raio',
    }];
  } else {
    console.error('Invalid input');
  }
}

export default CirclePerimeter
