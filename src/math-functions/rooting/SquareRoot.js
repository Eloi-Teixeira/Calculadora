const SquareRoot = (values) => {
  const {
    'input-RaizQuadrada-radicando': radicando,
    'input-RaizQuadrada-resultado': resultado,
  } = values;

  if (radicando && !resultado) {
    return [
      { resultName: 'x', result: Number(Math.sqrt(radicando).toFixed(2)) },
    ];
  } else if (resultado && !radicando) {
    return [
      { resultName: 'r', result: Number((resultado * resultado).toFixed(2)) },
    ];
  } else {
    console.log('Input invalid');
  }
};

export default SquareRoot;
