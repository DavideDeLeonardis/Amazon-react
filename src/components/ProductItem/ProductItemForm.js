import { useRef, useState } from "react";

import Input from "../UI/Input";

const ProductItemForm = (props) => {
   const [amountIsValid, setAmountIsValid] = useState(true);
   const amountInputRef = useRef();

   const submitHandler = (event) => {
      event.preventDefault();

      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      if (
         enteredAmount.trim().length === 0 ||
         enteredAmountNumber < 1
      ) {
         setAmountIsValid(false);
         return;
      }

      props.onAddToCart(enteredAmountNumber);
   };

   return (
      <form onSubmit={submitHandler}>
         <label>Amount</label>
         <Input
            ref={amountInputRef}
            input={{
               id: "amount",
               type: "number",
               min: "1",
               step: "1",
               defaultValue: "1",
            }}
         />
         <button>+ Add</button>
         {!amountIsValid && <p>Please enter a valid amount (Min. 1).</p>}
      </form>
   );
};

export default ProductItemForm;
