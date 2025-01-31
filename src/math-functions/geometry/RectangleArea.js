const RectangleArea = (values) => {
  const {
    'input-AR-altura': h,
    'input-AR-area': Area,
    'input-AR-base': base,
  } = values;

  if (Area === undefined) {
    return [{
      resultValue: Number((base * h).toFixed(2)),
      resultName: 'Área',
    }];
  } else if (base === undefined) {
    return [{
      resultValue: Number((Area / h).toFixed(2)),
      resultName: 'Base',
    }];
  } else if (h === undefined) {
    return [{
      resultValue: Number((Area / base).toFixed(2)),
      resultName: 'Altura',
    }];
  } else {
    console.error('Invalid input');
  }
};

export default RectangleArea;
