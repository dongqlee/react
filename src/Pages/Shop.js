import styled from "styled-components";
import bests from "./shopdata";
import './page.css'
import { useState } from "react";

const Button = styled.button`
  display: inline-block;
  width: 50%;
  height: 50px;
  background-color: #eee;
  box-sizing: border-box;

  &:hover {
    background-color: #999;
    cursor: pointer;
  }
`

export default function Shop() {
  //popup띄울거고 상태변경훅
  //popup 초기값은 false 자리에 들어감. false 이니 안떴다는 의미.
  //상태 제어변수: popup, 훅 setPopup 상태변경할 수 있는 set함수사용
  //false 대신 0 가능
  //hook을 쓸때는 
  const [popup, setPopup] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div className="best_page">
      <h2>Best 상품</h2>
      <section className="best_section">
        {
          bests.map((best, index) => {
            return(
              <div className="best" >
                <img src={best.image} alt="" style={{width:280, height: 280}} onClick={() => {
                //클릭시 true로 변경
                setPopup(true)
                setIndex(index)
              }} />
                <p className="desc" style={{fontSize: 12}}>{best.desc}</p>
                <h4 className="title">{best.title}</h4>
                <p className="price">{best.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+'원'}</p>
                <div>
                  <Button className="btn_01">찜하기</Button>
                  <Button className="btn_03">장바구니</Button>
                </div>
              </div>
            )
          })
        }
      </section>
        {popup === true ? <Popup setPopup={setPopup} best={bests} index={index} /> : null}
    </div>
  )
}
//best={bests}  부모가 가진 데이터를 쓰겠다는 의미

//setPopup={setPopup} 부모의 setPopup을 그 이름 그대로 받아서 쓰겠다. 같은 것이 아님 
//<Popup onClose={setPopup} />와
//const {onClose} = props 로 수정해도 사용가능
//setPopup(false)} 대신에 onClose(false) 기입

//? true : false
//section 안에 map이 들어가 있기에 안에 popup 넣으면 8개 모두가 뜨기에 section 밖에 정의해야함 section아래 참고


//popup component
//() 안에 props를 기입.!
//컴포넌트 호출시 사용할 props를 위 컴포넌트에 props값을 줘야 받아서 랜더링 함
//부모가 가지고 있는 값은 자식이 상속받아서 사용할 때에는 무조건 props로 받아서 사용해야한다.

//자식이 popup과 setpopup을 받아서 써야한다. 자식은 부모의 기능 등을 상속 받아서 사용할 때 props라는 매개변수를 선언해야한다. 
function Popup(props) {
//비구조화 리스트럭처링!!!
//const {setPopup} =props 를 선언하지 않으면 
//() => setPopup(false) 대신에 
//() => props.setPopup(false)
  const {setPopup, index} = props
  
  const [cnt, setCnt] = useState(0)
  const onChange = (e) => {
    setCnt(e.target.value)
  };

  return (
    <div className="product_popup" >
      <span className="btn_close" onClick={() => setPopup(false)}>X</span>
      <h2 className="pop_title">상품명 : {bests[index].title}</h2>
      <img src={bests[index].image} alt="" style={{width: 280, height:280}} />
      <p>{bests[index].desc}</p>
      <div className="right_box">
        <p className="pop_price">가격 : {bests[index].price.toLocaleString()}원</p>

        <p>수량 : <input type="number" className="lab01" onChange={onChange} value={cnt} /> 개</p>

        <p>총 금액 : {(bests[index].price * cnt).toLocaleString()}원</p>
      </div>
      
      <div className="btn_box">
        <Button>장바구니</Button>
        <Button>구매하기</Button>
      </div>
    </div>
  )
}


//배열 형식으로 데이터를 받음 
//bests[0] 이 1번째 
// 클릭한 div가 몇 번째인지 찾으면 된다.
//위에 map 안에 index가 중요!
