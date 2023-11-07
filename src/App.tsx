import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import { Formulaire } from './screens/Formulaire';
import { CV } from './screens/CV';

function App() {
  return (
    <div className=" bg-gray-500 text-white">
      <nav className="mb-3 flex justify-end">
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Mon CV</NavLink>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/form'>Creer son CV</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<CV />}></Route>
        <Route path='/form' element={<Formulaire />}></Route>
      </Routes>
    </div>
  );
}

export default App;
