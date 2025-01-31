const InternalAnglePolygon = (values) => {
  const {
    'input-AnguloInternoPoligono-AnguloInterno': internalAngle,
    'input-AnguloInternoPoligono-n': n,
  } = values;

  if (n) {
    return [
      {
        resultName: 'Ângulo Interno',
        resultValue: Number((((n - 2) * 180) / n).toFixed(2)),
      },
    ];
  } else if (internalAngle) {
    return [
      {
        resultName: 'n',
        resultValue: Number((360 / (internalAngle - 180)).toFixed(2)),
      },
    ];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default InternalAnglePolygon;
