import React from "react";

const Input = React.forwardRef((props, ref) => {
   return (
      <div>
         <input classame={props.classes} ref={ref} {...props.input} />
      </div>
   );
});

export default Input;
