import React from 'react';

const Button = (props) => {
 

  return (
    <div>
      <button className={`p-2 rounded-lg w-full `} style={{ backgroundColor: props.color, color: props.text }}>{props.name}</button>
    </div>
  );
};

export default Button;
