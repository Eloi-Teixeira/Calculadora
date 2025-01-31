const AreaTriangle = (values) => {
  const {
    'input-AT-altura': h,
    'input-AT-area': Area,
    'input-AT-base': base,
  } = values;

  if (Area === undefined) {
    return [{
      resultValue: Number((base * h / 2).toFixed(2)),
      resultName: 'Área',
    }];
  } else if (base === undefined) {
    return [{
      resultValue: Number((Area * 2 / h).toFixed(2)),
      resultName: 'Base',
    }];
  } else if (h === undefined) {
    return [{
      resultValue: Number((Area * 2 / base).toFixed(2)),
      resultName: 'Altura',
    }];
  } else {
    console.error('Invalid input');
  }
};

export default AreaTriangle;
