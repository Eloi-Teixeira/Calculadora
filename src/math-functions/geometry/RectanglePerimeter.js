const RectanglePerimeter = (values) => {
  const {
    'input-PR-altura': h,
    'input-PR-base': base,
    'input-PR-perimetro': Perimetro,
  } = values;

  if (Perimetro === undefined) {
    return [
      {
        resultValue: Number((2 * (base + h)).toFixed(2)),
        resultName: 'Perímetro',
      },
    ];
  } else if (base === undefined) {
    return [
      {
        resultValue: Number((Perimetro / 2 - h).toFixed(2)),
        resultName: 'Base',
      },
    ];
  } else if (h === undefined) {
    return [
      {
        resultValue: Number((Perimetro / 2 - base).toFixed(2)),
        resultName: 'Altura',
      },
    ];
  } else {
    console.error('Invalid input');
  }
};

export default RectanglePerimeter;
