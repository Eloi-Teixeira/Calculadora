const CircleArea = (values) => {
  const { 'input-AC-raio': r, 'input-AC-area': area } = values;

  if (area === undefined) {
    return {
      result: Number((Math.PI * Math.pow(r, 2)).toFixed(2)),
      resultName: 'Área',
    };
  } else if (r === undefined) {
    return {
      result: Number(Math.sqrt(area / Math.PI).toFixed(2)),
      resultName: 'Raio',
    };
  } else {
    console.error('Invalid input');
  }
};

export default CircleArea;
