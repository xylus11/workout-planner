import { AiFillDelete} from "react-icons/ai";
import Dropdown from "./Dropdown";
export default function Workout( {onClick, workout})
{
    return  (<div className="card m-3 p-3 shadow" >
        <div className="row align-items-center">
            <div className="col-6">
            <Dropdown/>
            </div>
            <div className="col-5">

<div className="d-flex just-content-center">
    <h3>
        <input type="number"
        style={{
      border:"none",
      borderBottom :"1px solid lightGray",
      maxWidth:60,
      textAlign:"center",
      outline:"none",
      margin:"none",
      marginBottom:"1.5rem",




        }} />
        
    </h3>
    <span className="text-muted py-3">
        <select style={{border:"none"}}>
            <option value="Min">min</option>
            <option value="km">km</option>

        </select>
    </span>
    <div class="badge rounded-pill bg-purple text-white px-3 fs-6"></div>
 <input
 type="time"
 style={{
 width:"180px",
 margin:"10px",
 border:"none",
 borderRadius:"20px",
 outline:"none",
 color:"#fff",
 fontWeight:500,
 backgroundColor: "var(--purple)",



 }}
 
 
 
 />
</div>
            </div>
            <button className="btn col-1 text-danger fw-bold fs-4" onClick={()=>onClick(workout.id)}><AiFillDelete/></button>
        </div>
      
    </div>
    );
}