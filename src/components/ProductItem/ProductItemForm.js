import { useRef, useState } from "react";

import Input from "../UI/Input";

import classes from "../../assets/scss/layout/_main.module.scss";

const ProductItemForm = (props) => {
   const [amountIsValid, setAmountIsValid] = useState(true);
   const amountInputRef = useRef();

   const submitHandler = (event) => {
      event.preventDefault();

      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
         setAmountIsValid(false);
         return;
      }

      props.onAddToCart(enteredAmountNumber);
      props.onShowCart();
   };

   return (
      <form className={classes.form} onSubmit={submitHandler}>
         <div className={classes.input_container}>
            <label>Quantity</label>
            <Input
               className={classes.input}
               ref={amountInputRef}
               input={{
                  id: "amount",
                  type: "number",
                  min: "1",
                  step: "1",
                  defaultValue: "1",
               }}
            />
         </div>
         <button className={classes.btn}>Add to cart</button>
         {!amountIsValid && <p>Please enter a valid amount (Min. 1).</p>}
      </form>
   );
};

export default ProductItemForm;
