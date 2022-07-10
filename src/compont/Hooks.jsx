import {useState} from 'react';
  const  Hooks=(insivalue)=>{
    const[values,setValues]=useState(0);
    const quoute=[  "There is nothing impossible to they who will try","Nothing is impossible. The word itself says ‘I’m possible!" ,"You define your own life. Don’t let other people write your script"]

    return (
        <h2 onClick={()=>setValues(values+1)}>
       {quoute[values % quoute.length]}
       </h2>
    );
}
export default Hooks;