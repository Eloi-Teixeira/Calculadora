import React from 'react'
import FormulaInfo from './FormulaInfo'
import FormulaResponse from './FormulaResponse'

const FormulaContainer = ({values, example, id, info, title}) => {
  return (
    <>
    <h3>{title}</h3>
    <div className="formula-container">
      <FormulaInfo example={example} values={values} info={info}/> 
      <span className="separator-vertical"></span>
      <FormulaResponse example={example} inputValues={values} inputIDs={id}/>
    </div>
    </>
  )
}

export default FormulaContainer
