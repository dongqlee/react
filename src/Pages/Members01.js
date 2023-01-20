import { Routes, Route, Link } from 'react-route-dom'
import Member01 from './Member01'

export default function Members01() {
  const style = {
    fontSize: 24,
    color: 'red'
  }

  return(
    <div>
      <h2>회원 리스트</h2>
      <ul className='sub_lnb'>
        <li><Link to='/members01/family' style={style}>Family</Link></li>
        <li><Link to='/members01/silver'>Silver</Link></li>
        <li><Link to='/members01/gold'>Gold</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path='/*' element={<div>등급을 클릭하시면 해당 회원을 보실 수 있습니다.</div>}/>
        <Route path=':memberShip01' element={<Member01 />} />
      </Routes>
    </div>
  )
}