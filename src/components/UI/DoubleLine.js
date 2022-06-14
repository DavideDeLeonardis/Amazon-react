const DoubleLine = (props) => {
   return (
      <div className={`${props.className} doubleLine`}>
         <span>{props.lineOne}</span>
         <span>{props.lineTwo}</span>
      </div>
   );
};

export default DoubleLine;
