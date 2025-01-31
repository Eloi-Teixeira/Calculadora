const ConversionDegreesRadians = (values) => {
  const {
    'input-ConversaoGrausRadianos-Graus': Graus,
    'input-ConversaoGrausRadianos-Radianos': Radianos,
  } = values;

  if (Graus) {
    const result = (Graus * Math.PI) / 180;
    return [
      {
        resultName: 'Radianos',
        resultValue: Number(((Graus * Math.PI) / 180).toFixed(2)),
      },
    ];
  } else if (Radianos) {
    return [
      {
        resultName: 'Graus',
        resultValue: Number(((Radianos * 180) / Math.PI).toFixed(2)),
      },
    ];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default ConversionDegreesRadians;
