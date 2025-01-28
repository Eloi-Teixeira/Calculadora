import React from 'react'

const FormulaInfo = ({example, values, info}) => {
  return (
    <div className="formula-info">
      <p className="example">{example}</p>
      <h4>Informações</h4>
      <ul>
        {values.map((item, index) => (
          <li key={item + index}><strong>{item}:</strong>{info[index]}</li>
        ))}
      </ul>
    </div>
  )
}

export default FormulaInfo
