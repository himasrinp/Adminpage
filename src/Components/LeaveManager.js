import React from "react";
import styled from "styled-components";
import LeaveDates from "./LeaveDates";
import LeaveTypes from "./LeaveType";
import Clock from "./clock.js"
function LeaveManager(){
    return(
<div>
<Maindiv style={{marginBottom: '100px'}}>
 <Submain>
     <Leavedisplay> 
        <Leavetitle>
          <TextBold>IMIOT-P001 </TextBold>
          <VrLine></VrLine>
          <TextBold> AKSHAY ASHOKAN POTHAN </TextBold>
          <VrLine></VrLine>
          <TextBold> CEO </TextBold> 
          <VrLine></VrLine>
          <TextBold>CASUAL-1DAY </TextBold>
        </Leavetitle>
        <Con1>
        <LeaveContainer> 
        <TitleWrapper>
          <TextBold>Leave Reason</TextBold>
        </TitleWrapper>
        <lReasonwrapper>
          <p>lorem lipsum, lorem lipsum, lorem lipsum, lorem lipsumlorem lipsum, lorem lipsum, lorem lipsum, lorem lipsum, lorem lipsum,lorem lipsum,lorem lipsum</p>
        </lReasonwrapper>  
      </LeaveContainer>
      <LeaveReasonContainer>
        <LeaveDates label={'From'} data={'02-Jan-2023'}/>
        <LeaveDates label={'To'} data={'02-Jan-2023'}/>
        <LeaveDates label={'Type'} data={'Casual'}/>
      </LeaveReasonContainer>
      <Leavewrapper>
      <LeaveContainer>
        <TitleWrapper>
        <TextBold>ANALYTICS-JANUARY</TextBold>
        </TitleWrapper>
        
          <CounterWrapper>
            <LeaveTypes count={'01'} type={'CASUAL'}/>
            <LeaveTypes count={'00'} type={'MEDICAL'}/>
            <LeaveTypes count={'00'} type={'EARNED'}/>
            <LeaveTypes count={'00'} type={'OTHER'}/>
          </CounterWrapper>
          </LeaveContainer>
          <Buttoncontr>
            <StyleButton style={{backgroundColor:'#27AC11',borderColor:'#27AC11'}}>Approve</StyleButton>
            <StyleButton style={{backgroundColor:'#B6060C',borderColor:'#B6060C'}}>Reject</StyleButton>
          </Buttoncontr>
          </Leavewrapper>
    </Con1>

    </Leavedisplay>  
  </Submain>
  </Maindiv>

  <div style={{display:'flex',justifyContent:'center', position:'fixed' ,bottom:'0',width:'100%'}}>
    <Clockstyle><Clock/> </Clockstyle>  
  </div>
  
  </div>
  );
}
// Leave-display Section styling..const 

const Maindiv=styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-top:30px;
font-family: Poppins;
`


const Submain=styled.div`
display:flex;
width:100%;
justify-content:center;
margin-top: 2rem;
`
const Leavedisplay=styled.div`
width: 70%;
display:flex;
background-color:#e4e4e4;
flex-direction:column;
justify-items:center;
`
const Leavetitle=styled.div`
background-color:#260446;
display:flex;
flex-direction:row;
width:100%;
justify-content:space-between;
border-top-left-radius:10px;
border-top-right-radius:10px;
`
const Con1=styled.div`
display:grid;
grid-template-columns: 250px 1fr 400px;
column-gap:1rem;
background-color:#E4E4E4;		
color:black;
margin-left:10px;
margin-right:10px;
`
const TextBold=styled.div`
white-space: nowrap;
color: rgb(255,255,255);
font-size: 18px;
font-weight: 400;
padding: 0px 10px 0px 10px;
margin-left: 25px;
margin-right: 25px;
margin-bottom: 10px;
margin-top: 10px;
width: 100%;
display: flex;
justify-content: center;
`
const TitleWrapper = styled.div`
background-color:#260446;
display:flex;

width:100%; 
justify-content: space-between;
border-top-left-radius:10px;
border-top-right-radius:10px;
`
const VrLine = styled.div`
border-left: 1px solid #ffffff;
margin-top: 10px;
margin-bottom:10px
 `


const LeaveContainer = styled.div`
margin-top:10px;
margin-bottom:10px; 
border-radius:10px;
background-color:#C8ABE3;
 `

const LeaveReasonContainer = styled.div`
margin-top:10px; margin-bottom:10px; `

const Leavewrapper=styled.div`
padding:10px;
`
const CounterWrapper=styled.div`
display:flex;
flex-direction:row;
padding:10px;
justify-content: space-between;
`
const Buttoncontr=styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
bottom:0;
justify-content:'space-between'
`
const StyleButton = styled.button`
padding:5px 40px 5px 40px;
font-weight: 400;
font-size: 18px;
color:#ffffff;
border-radius: 10px;
`
const Clockstyle=styled.div`
width: 200px;
height:30px;
textAlign: center;
border-top-right-radius:10px;
border-top-left-radius:10px;
padding:10px;
`
export default LeaveManager