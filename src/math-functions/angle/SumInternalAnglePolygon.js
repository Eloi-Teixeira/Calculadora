const SumInternalAnglePolygon = (values) => {
  const {
    'input-SomaAngulosInternosPoligono-Soma': Sum,
    'input-SomaAngulosInternosPoligono-n': n,
  } = values;
  if (n) {
    return [
      {
        resultName: 'Ângulo Interno',
        resultValue: Number(((n - 2) * 180).toFixed(2)),
      },
    ];
  } else if (Sum) {
    return [
      { resultName: 'n', resultValue: Number((Sum / 180 + 2).toFixed(2)) },
    ];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default SumInternalAnglePolygon;
