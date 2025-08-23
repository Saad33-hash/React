import React from 'react'

const ChildComponent = React.memo(
    (props) => {
    console.log("did i be re render again?");
  return (
    <div>
        <button onClick={props.incclick}>
            {props.buttonname}
        </button>
      
    </div>
  )
}
);

export default ChildComponent
// react.memo->if you wrap anything in react. memo it will only render the component that
// is necessary it will avoid unnecessary re rendering of component
