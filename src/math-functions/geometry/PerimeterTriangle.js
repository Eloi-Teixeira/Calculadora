const PerimeterTriangle = (values) => {
  const {
    'input-PT-lado1': a,
    'input-PT-lado2': b,
    'input-PT-lado3': c,
    'input-PT-perimetro': Perimetro,
  } = values;

  if (a && b && c && Perimetro === undefined) {
    return [{
      resultValue: Number((a + b + c).toFixed(2)),
      resultName: 'Perímetro',
    }];
  } else if (Perimetro && b && c && a === undefined) {
    return [{
      resultValue: Number((Perimetro - b - c).toFixed(2)),
      resultName: 'Lado 1',
    }];
  } else if (a && Perimetro && c && b === undefined) {
    return [{
      resultValue: Number((Perimetro - a - c).toFixed(2)),
      resultName: 'Lado 2',
    }];
  } else if (a && b && Perimetro && c === undefined) {
    return [{
      resultValue: Number((Perimetro - a - b).toFixed(2)),
      resultName: 'Lado 3',
    }];
  } else {
    console.error('Invalid input');
  }
};

export default PerimeterTriangle;
