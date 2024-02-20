import {Nav,Foot} from './components'
import {Routes, Route} from 'react-router-dom'
import {Add,Home,View} from './pages'

function App() {
  return (
    <div>

      <Nav/>
      <Foot/>

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/add' element={<Add/>}  />
        <Route path='/view' element={<View/>} />

      </Routes>


    
    </div>
  );
}

export default App;
