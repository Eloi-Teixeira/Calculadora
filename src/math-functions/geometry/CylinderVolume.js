const CylinderVolume = (values) => {

  const {
    'input-VolumeCilindro-altura': h,
    'input-VolumeCilindro-volume': Volume,
    'input-VolumeCilindro-raio': r,
  } = values;

  if (Volume === undefined) {
    return [{
      result: Number((Math.PI * (r ** 2) * h).toFixed(2)),
      resultName: 'Volume',
    }];
  } else if (r === undefined) {
    return [{
      result: Number((Volume / (Math.PI * (h ** 2))).toFixed(2)),
      resultName: 'Raio',
    }];
  } else if (h === undefined) {
    return [{
      result: Number((Volume / (Math.PI * (r ** 2))).toFixed(2)),
      resultName: 'Altura',
    }];
  } else {
    console.error('Invalid input');
  }
}

export default CylinderVolume
