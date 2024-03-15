import React from 'react';

const CircularElementWithSVG = ({ number, svgSrc }) => {
  return (
    <div style={{
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '15px solid rgba(1, 106, 112, 1) ',
    //   background: ;

      backgroundColor: 'transparent', // This makes the circle hollow
      color:'rgb(0, 253, 117)',
      padding: '10px'
    }}>
      <img src={svgSrc} alt="Plastic Bottles" style={{ height: '50px', marginBottom: '10px' }} />
      <span>{number}</span>
    </div>
  );
};

export default CircularElementWithSVG;



