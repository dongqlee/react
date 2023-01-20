export default function Home() {
  return (
    <div>
      <h1>Home page 입니다.</h1>
      <img src={process.env.PUBLIC_URL+'/images/visual_main_01.jpg'} alt='' />

    </div> 
  )
} //화살표 함수 사용 불가!