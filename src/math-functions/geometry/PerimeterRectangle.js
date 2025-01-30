const PerimeterRectangle = (values) => {
  const {
    'input-PR-altura': h,
    'input-PR-base': base,
    'input-PR-perimetro': Perimetro,
  } = values;

  if (Perimetro === undefined) {
    return [
      {
        result: Number((2 * (base + h)).toFixed(2)),
        resultName: 'Perímetro',
      },
    ];
  } else if (base === undefined) {
    return [
      {
        result: Number((Perimetro / 2 - h).toFixed(2)),
        resultName: 'Base',
      },
    ];
  } else if (h === undefined) {
    return [
      {
        result: Number((Perimetro / 2 - base).toFixed(2)),
        resultName: 'Altura',
      },
    ];
  } else {
    console.error('Invalid input');
  }
};

export default PerimeterRectangle;
