import React from 'react'
import Title from '../componants/Title'
import { NavLink, Outlet  } from 'react-router-dom'

export default function Workout() {
  return (
    <>
    <Title text={"Workout Plan"} color={"purple"}/>
    <div className='days'>
        <div className='week'>
    <nav className='d-flex mx-3 my-5 justify-content-center fw-bold text-dark'>
        <NavLink to="/Workout/Monday" className={({isActive})=> (isActive ? "day-active" : "day")}>M</NavLink>
    </nav>
    <nav className='d-flex mx-3 my-5 justify-content-center fw-bold text-dark'>
        <NavLink to="/Workout/tuesday" className={({isActive})=> (isActive ? "day-active" : "day")}>T</NavLink>
    </nav>
    <nav className='d-flex mx-3 my-5 justify-content-center fw-bold text-dark'>
        <NavLink to="/Workout/wednesday" className={({isActive})=> (isActive ? "day-active" : "day")}>W</NavLink>
    </nav>
    <nav className='d-flex mx-3 my-5 justify-content-center fw-bold text-dark'>
        <NavLink to="/Workout/thursday" className={({isActive})=> (isActive ? "day-active" : "day")}>T</NavLink>
    </nav>
    <nav className='d-flex mx-3 my-5 justify-content-center fw-bold text-dark'>
        <NavLink to="/Workout/friday" className={({isActive})=> (isActive ? "day-active" : "day")}>F</NavLink>
    </nav>
    <nav className='d-flex mx-3 my-5 justify-content-center fw-bold tex-dark'>
        <NavLink to="/Workout/saturday" className={({isActive})=> (isActive ? "day-active" : "day")}>S</NavLink>
    </nav>
    <nav className='d-flex mx-3 my-5 justify-content-center fw-bold tex-dark'>
        <NavLink to="/Workout/sunday" className={({isActive})=> (isActive ? "day-active" : "day")}>S</NavLink>
    </nav>
    </div>
    <Outlet/>
 
    </div>
  
    </>
  )
}
