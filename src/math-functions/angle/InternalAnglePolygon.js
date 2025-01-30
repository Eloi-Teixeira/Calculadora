const internalAnglePolygon = (values) => {
  const {
    'input-AnguloInternoPoligono-AnguloInterno': internalAngle,
    'input-AnguloInternoPoligono-n': n,
  } = values;

  console.log(n, internalAngle);
  if (n) {
    const result = ((n - 2) * 180) / n;
    return [{ letter: 'Ângulo Interno', result }];
  } else if (internalAngle) {
    const result = 360 / (internalAngle - 180);
    return [{ letter: 'n', result }];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default internalAnglePolygon;
