const CentralAngleCircle = (values) => {
  const {
    'input-AnguloCentralCirculo-AnguloCentral': centralAngle,
    'input-AnguloCentralCirculo-Arco': arcLength,
    'input-AnguloCentralCirculo-Raio': radius,
  } = values;
  if (centralAngle && arcLength) {
    const result = arcLength / centralAngle;
    return [{ resultName: 'Raio', result }];
  } else if (arcLength && radius) {
    const result = arcLength / radius;
    return [{ resultName: 'Ângulo Central', result }];
  } else if (radius && centralAngle) {
    const result = centralAngle * radius;
    return [{ resultName: 'Arco', result }];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default CentralAngleCircle;
