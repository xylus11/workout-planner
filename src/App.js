import './App.css';
import Home from './Routes/Home';
import { FaHome, FaUser, FaChartLine } from 'react-icons/fa'
import { BsPlusCircleFill, BsBellFill } from 'react-icons/bs'
import { NavLink, Outlet } from 'react-router-dom';
function App() {


  return (
    <div className="App">
      <nav className='navbar'>
        
        <NavLink to="/Home" className={({isActive})=>
          isActive ? "text-purple" : "text-black-50" 
        }><FaHome /></NavLink>
        <NavLink to="/User" className={({isActive})=>
          isActive ? "text-purple" : "text-black-50" 
        }><FaUser /></NavLink>

        <NavLink to="/Workout" className={({isActive})=>
          isActive ? "text-purple" : "text-black-50" 
        }><FaChartLine /></NavLink>

        <NavLink to="/Add" className={({isActive})=>
          isActive ? "text-purple" : "text-black-50" 
        }><BsPlusCircleFill /></NavLink>

        <NavLink to="Notifications" className={({isActive})=>
          isActive ? "text-purple" : "text-black-50" 
        }><BsBellFill /></NavLink>

      </nav>

      <div className='outlet'>
        <Outlet/>

      </div>
    
    </div>
  );
}

export default App;
