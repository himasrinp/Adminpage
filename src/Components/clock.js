import React,{useEffect,useState} from "react";
import styled from "styled-components";

 function Clock() {
    const [clockState, setClockState]= useState();
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() =>{
        setInterval(() =>{
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        },1000);
       return() =>{
        clearInterval(clockState);
       }
            
    },[]);
    
    return(
   <Styledclock>  
     <Clockcontainer>
      <div style={{fontWeight: 'bolder',}}>{clockState}</div> 
      <div style={{fontWeight: "600",}}>{currentDate.toLocaleDateString()}</div>
      
    </Clockcontainer>  

     <Clockbackground></Clockbackground>
     </Styledclock>
    );
 }
 export default Clock;
   
          
const Styledclock=styled.div` `
const Clockcontainer=styled.div`
background-color:#D9D9D9;
color:#260446;
border-color:#AD81D5;
border-style:solid;
margin-left:30px;
height:60px;
border-top-left-radius:10px;
border-top-right-radius:10px;
text-align:center;
width:180px;


`
const Clockbackground=styled.div`
background-color:#9256C8;
border-top-left-radius:50px;
border-top-right-radius:50px;
height:25px;
position:absolute;
z-index:-2;
bottom:0;
width:250px;
`  