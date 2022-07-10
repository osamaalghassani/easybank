import React,{useState} from 'react';
import Timer from '../Timer';
const TimerManger = () => {
    const [time,setTime]=useState([
   
     ]);
     const [text,setText]=useState("");
    return ( 
        <>
        <div className="container">
        <form onSubmit={
            (e)=>{
              e.preventDefault();  
              const copy=[...time];
              copy.push(text);
              setTime(copy);
            }
        }>
            <input type="text"  onChange={(e)=>setText(e.target.value)} />
            <button >Add New Timer</button>
        </form>
        {time.map(tit=>{
          return(<Timer name={tit}/>)
        })}
        </div>
          </>
        
     );
}
 
export default TimerManger;