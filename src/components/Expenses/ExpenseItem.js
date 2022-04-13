
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  

  const clickHandler = () => {
    
    console.log("youve just clicked me ");
  };

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Button</button>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
