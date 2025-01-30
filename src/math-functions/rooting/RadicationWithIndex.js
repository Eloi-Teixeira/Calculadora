const RadicationWithIndex = (values) => {
  const {
    'input-RaizComIndice-indice': indice,
    'input-RaizComIndice-radicando': radicando,
    'input-RaizComIndice-resultado': resultado,
  } = values;

  if (indice && radicando && !resultado) {
    return [{ resultName: 'r', result: Math.pow(radicando, 1 / indice) }];
  } else if (indice && !radicando && resultado) {
    return [{ resultName: 'x', result: Math.pow(resultado, indice) }];
  } else if (!indice && radicando && resultado) {
    return [
      {
        resultName: 'n',
        result: Number((Math.log(resultado) / Math.log(radicando)).toFixed(2)),
      },
    ];
  } else {
    console.log('invalid input');
  }
};

export default RadicationWithIndex;
