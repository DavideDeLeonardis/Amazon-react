const Select = (props) => {
   const selectValues = props.values.map((value, index) => (
      <option key={index} value={value}>
         {value}
      </option>
   ));

   return (
      <select className={props.className}>
         <option value={props.defaultValue}>
            {props.defaultValue}
         </option>
         {selectValues}
      </select>
   );
};

export default Select;
