import React from "react";

const Input = React.forwardRef((props, ref) => {
   return <input className={props.classNames} ref={ref} {...props.input} />;
});

export default Input;
