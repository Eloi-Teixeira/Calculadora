const CentralAngleCircle = (values) => {
  const {
    'input-AnguloCentralCirculo-AnguloCentral': centralAngle,
    'input-AnguloCentralCirculo-Arco': arcLength,
    'input-AnguloCentralCirculo-Raio': radius,
  } = values;
  if (centralAngle && arcLength) {
    const result = arcLength / centralAngle;
    return [{ letter: 'Raio', result }];
  } else if (arcLength && radius) {
    const result = arcLength / radius;
    return [{ letter: 'Ângulo Central', result }];
  } else if (radius && centralAngle) {
    const result = centralAngle * radius;
    return [{ letter: 'Arco', result }];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default CentralAngleCircle;
