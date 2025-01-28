import React from 'react';

const Intro = ({ title, text }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <h2>Fórmulas Comuns:</h2>
      <span className="separator-horizontal"></span>
    </>
  );
};

export default Intro;
