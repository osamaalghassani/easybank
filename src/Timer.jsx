import React,{useState,useEffect} from 'react';

const Timer = ({name}) => {
    const[second,setSocond]=useState('60');
    const [ShouldAlert,setShouldAlert ]=useState(false);
    const[isCountDownRunning,setisCountDownRunning]=useState(false);
    useEffect(()=>{
        const secondsLeft=parseInt(second);
        if(isCountDownRunning && secondsLeft>0){
            setTimeout(() => {
                setSocond(secondsLeft-1);
            }, 1000);
        }else{
            setisCountDownRunning(false);
            if(ShouldAlert){

                alert(  `  ${name} CountDown is Done ` );
                setShouldAlert(false);
            }
        }

    },[isCountDownRunning,second]);
    return (
        <div>       <label > {name}</label>
        <input type="number" 
        disabled={isCountDownRunning}
        onChange={e=>setSocond(e.target.value)}
        value={second}
        />
<button onClick={()=>{
    
    setisCountDownRunning(true)
    setShouldAlert(true)}}>
        CountDown
    </button>        
    <br/>
        <br/>


        </div>
      );
}
 
export default Timer;