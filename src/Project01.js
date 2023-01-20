import './Project01.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Members from './Pages/Members';
import Shop from './Pages/Shop';

function Project01() {
  return (
    <div className="App">
      <div className="header">
        
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="search_box">
          <input type="text" />
          <span className='btn_search'>

          </span>
        </div>
        <ul className="gnb">
          <li className='login'>로그인</li>
          <li className='join'>회원가입</li>
          <li className='cart'>장바구니</li>
          <li className='center'>고객센터</li>
        </ul>
        <div className="eve_box">
          + 8,000원
        </div>
        <div className="bot">
          <div className="lnb">
            <div className="btn_lnb">
              <div className="icon_box">
                <span className='bar01'></span>
                <span className='bar02'></span>
                <span className='bar03'></span>
              </div>
              <span className="txt">전체 카테고리</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lnb_sheet">
        <ul>
          <li><Link to=''>패키지</Link></li>
          <li><Link to=''>밀키트</Link></li>
        </ul>
        <ul>
          <li><Link to=''>닭가슴살</Link></li>
          <li><Link to=''>스테이크</Link></li>
          <li><Link to=''>스팀/소프트</Link></li>
          <li><Link to=''>볼/큐브</Link></li>
          <li><Link to=''>소시지/햄</Link></li>
          <li><Link to=''>훈제</Link></li>
          <li><Link to=''>저염</Link></li>
          <li><Link to=''>소스</Link></li>
        </ul>
        <ul>
          <li><Link to=''>닭안심살</Link></li>
          <li><Link to=''>소프트</Link></li>
          <li><Link to=''>스테이크</Link></li>
        </ul>
        <ul>
          <li><Link to=''>도시락</Link></li>
          <li><Link to=''>다이어트 도시락</Link></li>
          <li><Link to=''>더담은 도시락</Link></li>
          <li><Link to=''>볶음밥</Link></li>
        </ul>
        <ul>
          <li><Link to=''>즉석/간편식</Link></li>
          <li><Link to=''>분식</Link></li>
          <li><Link to=''>안주</Link></li>
          <li><Link to=''>간식</Link></li>
          <li><Link to=''>반찬/간편식</Link></li>
          <li><Link to=''>치킨/탕수육/피자</Link></li>
        </ul>
        <ul>
          <li><Link to=''>베이커리/스낵</Link></li>
          <li><Link to=''>베이커리</Link></li>
          <li><Link to=''>브리또</Link></li>
          <li><Link to=''>스낵</Link></li>
        </ul>
      </div>
 
      <hr />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='about' element={<About/>}/>
        <Route path='members/*' element={<Members/>}/>
        <Route path='shop' element={<Shop />} />
      </Routes>

    </div>
  );
}

export default Project01;
