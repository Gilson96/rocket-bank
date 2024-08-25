import './App.css';
import Login from './screens/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './screens/Dashboard'

const App = () => {

  return (
    <div className="w-full h-full bg-black">
     
      <Routes>
        {/* <Route path='/' element={<Login />}/> */}
        <Route path='/' element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
