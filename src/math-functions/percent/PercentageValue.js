import React from 'react'

const PercentageValue = (values) => {

  const {
    'input-PercentualValor-percentual': percentage,
    'input-PercentualValor-resultado': part,
    'input-PercentualValor-valor': value,
  } = values;

  if (percentage === undefined) {
    return [{
      resultName: 'P%',
      result: Number(((part / value) * 100).toFixed(2)),
    }]
  }
  if (part === undefined) {
    return [{
      resultName: 'P',
      result: Number(((percentage * value) / 100).toFixed(2)),
    }]
  }
  if (value === undefined) {
    return [{
      resultName: 'V',
      result: Number(((part * 100) / percentage).toFixed(2)),
    }]
  }
}

export default PercentageValue
