const sumInternalAnglePolygon = (values) => {
  const {
    'input-SomaAngulosInternosPoligono-Soma': Sum,
    'input-SomaAngulosInternosPoligono-n': n,
  } = values;
  if (n) {
    const result = (n - 2) * 180;
    return [{ resultName: 'Ângulo Interno', result }];
  } else if (Sum) {
    const result = Sum / 180 + 2;
    return [{ resultName: 'n', result }];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default sumInternalAnglePolygon;
