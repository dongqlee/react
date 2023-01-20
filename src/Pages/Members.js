import { Routes, Route, Link } from "react-router-dom"
import Member from './Member'

export default function Members() {

  const style = {
    fontSize: 24, //'24px'도 가능
    color: 'blue'
  }

  return(
    <div>
      <h2>회원 리스트</h2>
      <ul className="sub_lnb">
        <li><Link to='/members/family' style={style}>Family</Link></li>
        <li><Link to='/members/silver' style={
          {
            color: 'red',
            fontSize: 30, 
            fontWeight: 'bold',
            textDecoration: 'none'
          }
        }>Silver</Link></li>
        <li><Link to='/members/gold'>Gold</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path='/*' element={<div>등급을 클릭하시면 해당 회원을 볼 수 있습니다.</div>} />
        <Route path=':memberShip' element={<Member />} />
      </Routes>

    </div>
  )
}