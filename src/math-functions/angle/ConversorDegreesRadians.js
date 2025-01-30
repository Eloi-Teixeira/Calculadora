const conversionDegreesRadians = (values) => {
  const {
    'input-ConversaoGrausRadianos-Graus': Graus,
    'input-ConversaoGrausRadianos-Radianos': Radianos,
  } = values;

  console.log(values);

  if (Graus) {
    const result = (Graus * Math.PI) / 180;
    return [{ resultName: 'Radianos', result }];
  } else if (Radianos) {
    const result = (Radianos * 180) / Math.PI;
    return [{ resultName: 'Graus', result }];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default conversionDegreesRadians;
