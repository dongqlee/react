import bests from "./shopdata"
import './page.css'
import styled from "styled-components"
import { useState } from "react"

const Button = styled.button`
  display: inline-block;
  width: 50%;
  height: 50px;
  background-color: #eee;
  box-sizing: border-box;

  &:hover {
    background-color: #999;
    color: #eee;
    cursor: pointer;
  }
`

export default function Shop01() {

  const [popup, setPopup] = useState(false)
  const [index, setIndex] = useState(0)

  return(
    <div className="best_page">
      <h2>BEST 상품</h2>
      <section className="best_section">
        {
          bests.map((best, index) => {
            return(
              <div className="best" onClick={() => {
                setPopup(true)
                setIndex(index)
              }}>
                <img src={best.image} alt="" style={{width: 280, height: 280}} />
                <p className="desc">{best.desc}</p>
                <h4 className="title">{best.title}</h4>
                <p className="price">{best.price}</p>
                <div>
                  <Button className="btn_01">찜</Button>
                  <Button className="btn_01">장바구니</Button>
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

function Popup(props) {
  const {setPopup, index} = props

  return (
    <div className="product_popup" onClick={() => setPopup(false)}>
      <h2>상품명 : </h2>
      <img src={bests[index].image} alt="" style={{width: 280, height: 280}}/>
      <p>가격 : {bests[index].price}</p>
    </div>
  )
}