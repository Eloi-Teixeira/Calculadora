const Weight = (values) => {
  const {
    'input-ForcaPeso-P': w,
    'input-ForcaPeso-g': g,
    'input-ForcaPeso-m': m,
  } = values;

  if (w && g && !m) {
    return [{ resultName: 'm', result: w / g }];
  } else if (w && !g && m) {
    return [{ resultName: 'g', result: w / m }];
  } else if (!w && g && m) {
    return [{ resultName: 'P', result: m * g }];
  } else {
    console.error('Invalid input');
  }
};

export default Weight;
