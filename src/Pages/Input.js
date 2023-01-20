import { useState } from "react";

export default function Input() {
  const [num, setNum] = useState(0)
  const onChange = (e) => {
    setNum(e.target.value)
  };

  return(
    <div>
      <input onChange = {onChange} value = {num}/>
      <div>
        <p>{2 * num}</p>
      </div>
    </div>
  )
}