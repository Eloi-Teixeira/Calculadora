const VolumeCube = (values) => {
  const { 
    'input-VC-aresta': l,
    'input-VC-volume': Volume,
  } = values;

  if (Volume === undefined) {
    return [{
      resultValue: Number((l ** 3).toFixed(2)),
      resultName: 'Volume',
    }];
  } else if (l === undefined) {
    return [{
      resultValue: Number((Volume ** (1 / 3)).toFixed(2)),
      resultName: 'Aresta',
    }];
  } else {
    console.error('Invalid input');
  }
}

export default VolumeCube
