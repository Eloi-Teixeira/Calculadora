const TotalCylinderArea = (values) => {
  const {
    'input-ATC-raio': raio,
    'input-ATC-altura': h,
    'input-ATC-area': area,
  } = values;

  if (area === undefined) {
    return {
      result: Number((2 * Math.PI * raio * (raio + h)).toFixed(2)),
      resultName: 'Área Total',
    };
  } else if (h === undefined) {
    return {
      result: Number((area / (2 * Math.PI * raio)).toFixed(2)),
      resultName: 'Altura',
    };
  } else if (raio === undefined) {
    return {
      result: Number(
        (area / (2 * Math.PI * h)).toFixed(2)
      ),
      resultName: 'Raio',
    };
  } else {
    console.error('Invalid input');
  }
};

export default TotalCylinderArea;
