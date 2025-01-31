const InternalAnglePolygon = (values) => {
  const {
    'input-AnguloInternoPoligono-AnguloInterno': internalAngle,
    'input-AnguloInternoPoligono-n': n,
  } = values;

  console.log(n, internalAngle);
  if (n) {
    const result = ((n - 2) * 180) / n;
    return [{ resultName: 'Ângulo Interno', result }];
  } else if (internalAngle) {
    const result = 360 / (internalAngle - 180);
    return [{ resultName: 'n', result }];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default InternalAnglePolygon;
