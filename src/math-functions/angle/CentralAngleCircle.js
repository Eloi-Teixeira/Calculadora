const CentralAngleCircle = (values) => {
  const {
    'input-AnguloCentralCirculo-AnguloCentral': centralAngle,
    'input-AnguloCentralCirculo-Arco': arcLength,
    'input-AnguloCentralCirculo-Raio': radius,
  } = values;

  if (centralAngle && arcLength) {
    return [
      {
        resultName: 'Raio',
        resultValue: Number((arcLength / centralAngle).toFixed(2)),
      },
    ];
  } else if (arcLength && radius) {
    return [
      {
        resultName: 'Ângulo Central',
        resultValue: Number((arcLength / radius).toFixed(2)),
      },
    ];
  } else if (radius && centralAngle) {
    return [
      {
        resultName: 'Arco',
        resultValue: Number((centralAngle * radius).toFixed(2)),
      },
    ];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default CentralAngleCircle;
