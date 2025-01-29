import React from 'react'
import FormulaInfo from './FormulaInfo'
import FormulaResponse from './FormulaResponse'

const FormulaContainer = ({values, example, inputIDs, info, title, results}) => {

  if (!values || !example || !info) {
    return null
  }
  return (
    <>
    <h3>{title}</h3>
    <div className="formula-container">
      <FormulaInfo example={example} values={values} info={info}/> 
      <span className="separator-vertical"></span>
      <FormulaResponse example={example} inputValues={values} inputIDs={inputIDs} results={results}/>
    </div>
    </>
  )
}

export default FormulaContainer
