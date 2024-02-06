import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  const [pList, SetPList] = useState([]);

  const increaseCounter = () => {
    setCount(count + 1);
    SetPList(pList.concat('a'));
  };
  return (
    <>
      <button onClick={increaseCounter}>Button {count}</button>
      {pList.map((item, idx) => <p>{item}</p>)}
    </>
  );
};

export default Button;
