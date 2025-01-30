const RectangleArea = (values) => {
  const {
    'input-AR-altura': h,
    'input-AR-area': Area,
    'input-AR-base': base,
  } = values;

  console.log(values);

  if (Area === undefined) {
    return [{
      result: Number((base * h).toFixed(2)),
      resultName: 'Área',
    }];
  } else if (base === undefined) {
    return [{
      result: Number((Area / h).toFixed(2)),
      resultName: 'Base',
    }];
  } else if (h === undefined) {
    return [{
      result: Number((Area / base).toFixed(2)),
      resultName: 'Altura',
    }];
  } else {
    console.error('Invalid input');
  }
};

export default RectangleArea;
