import React from 'react';


console.log(navigator);
console.log(navigator.userAgent);
console.log(navigator.userAgent.indexOf("Chrome") !== -1);

const Basic = () => {
  return (
    <div >
      <h1> Basic Test</h1>
         <p> This is a basic Test Component</p>
    </div>
  );
}

export default Basic;
