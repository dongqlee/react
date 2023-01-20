import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Members from './Pages/Members';
import Shop from './Pages/Shop';

function App() {
  return (
    <div className="App">
      <ul className='lnb'>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/members'>MEMBERS</Link></li>
        <li><Link to='/shop'>SHOP</Link></li>
      </ul>
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

export default App;
