const Weight = (values) => {
  const {
    'input-ForcaPeso-P': w,
    'input-ForcaPeso-g': g,
    'input-ForcaPeso-m': m,
  } = values;

  if (w && g && !m) {
    return [{ resultName: 'm', resultValue: Number((w / g).toFixed(2)) }];
  } else if (w && !g && m) {
    return [{ resultName: 'g', resultValue: Number((w / m).toFixed(2)) }];
  } else if (!w && g && m) {
    return [{ resultName: 'P', resultValue: Number((m * g).toFixed(2)) }];
  } else {
    console.error('Invalid input');
  }
};

export default Weight;
