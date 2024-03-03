import React,{useState} from 'react';

import Workout from './Workout';
import Workoutday from './Workoutday';
import Button from "./Button";
import {v4 as uuidv4} from "uuid";

export default function WorkoutTypeCard() {
const [workouts ,setWork] =useState([]);

const addWorkout =(workout)=>{
const newWorkout =[...workouts,workout];
newWorkout.filter((workout) =>
!workout.id ? (workout.id = uuidv4()) : workout.id  );
setWork(newWorkout);


};
const handleRemove =(id)=>{
  setWork(workouts.filter((workouts)=>
   workouts.id !==id
  ))
 };

  return (<>

<Workoutday text={Workoutday} />
<Button text={"Add Workout"}
classes={"purple rounded-pill w-30"}
onClick={addWorkout} />

{workouts.map((workout)=>(<Workout key={workout.id} workout={workout} onClick={handleRemove}/>))}
</> )
}
