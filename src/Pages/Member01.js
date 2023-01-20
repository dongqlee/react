import { useParams } from "react-router-dom";
import memberList01 from "./memberdata01";

export default function Member01() {
  const {memberShip01} = useParams()
  const member01 = memberList01[memberShip01]

  if(!member01) {
    return <h3>404 Not Found!!</h3>
  }

  return (
    <div>
      <h2>회원 : {memberShip01}({member01.name})</h2>
      <h3>주소 : {member01.addr}</h3>
    </div>
  )
}