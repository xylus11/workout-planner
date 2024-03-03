import Title from "../componants/Title"
import Img from "../a8a27-homeimg.png"
import Button from "../componants/Button"
import { IoPlayCircle } from "react-icons/io5";
import { useState, useEffect } from "react"
import React from "react";
import { NavLink } from "react-router-dom";



export default function Home() {

  const [workoutTime, setWorkoutTime] = useState(0);
  const [workoutDifficulty, setWorkoutDiffi] = useState();
  useEffect(() => {

    if (workoutTime === 0) {
      setWorkoutDiffi("set workout difficulty");
    }
    if (workoutTime > 0) {
      setWorkoutDiffi("Easy");
    }
    if (workoutTime >= 11) {
      setWorkoutDiffi("Medium");
    }
    if (workoutTime >= 21) {
      setWorkoutDiffi("Hard");
    }



  });



  return (
    <><Title text="Exercise & Repeat" color="purple" />
      <header className="text-start ms-3">
        <h2 className="text-secondary fw-light">Welcome to the</h2>
        <h1 className="fw-bold titled">Workout App</h1>
      </header>
      <main className="card row text-left text-white m-5 p-3 bg-orange" id="card">
        <div className="col text-start">
          <h1> Start your daily training</h1>
          <p> with over 32 workout videos for you</p>
          <div className="card bg-purple d-flex flex-row justify-content-between p-3">
            <div className="text-end">

              <Button classes={"light sm"} text={"-"} onClick={() => {
                if (workoutTime > 0) {
                  setWorkoutTime(workoutTime - 1)
                }
              }} />
              <span style={{ margin: ".5rem", color: "white" }}>{workoutTime}min</span>
              <Button classes={"light sm"} text={"+"} onClick={() => setWorkoutTime(workoutTime + 1)} />


            </div>
            <h4 style={{ color: "white" }}>{workoutDifficulty}</h4>
          </div>
        </div>

        <div className="col" >
          <img src={Img} alt="homeimg"/>

        </div>
        {/* <a href="/">



        </a> */}
        <NavLink to="/Workout" >
        <Button classes={"purple rounded-pill my-2 "} text="Get started" icon={<IoPlayCircle className="fs-1 me-2" />} />

        </NavLink>
      </main>

    </>
  )
}
