const CubicRoot = (values) => {
  const {
    'input-RaizCubica-radicando': radicando,
    'input-RaizCubica-resultado': resultado,
  } = values;

  console.log(radicando)
  if (radicando && !resultado) {
    return [
      { resultName: '∛x', result: Number(Math.cbrt(radicando).toFixed(2)) },
    ];
  } else if (!radicando && resultado) {
    return [
      { resultName: 'r', result: Number(Math.cbrt(resultado).toFixed(2)) },
    ];
  } else {
    console.error('Invalid input');
    return null;
  }
};

export default CubicRoot;
