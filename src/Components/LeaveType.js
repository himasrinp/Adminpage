import styled from "styled-components";

export default function LeaveTypes(props){

    return (
        <div>
             <DigitalFont>{props.count}</DigitalFont>
             <Text12Bold>{props.type}</Text12Bold>
        </div>
    );
}

const Text12Bold=styled.div`
white-space: nowrap;
color: rgb(255,255,255);
font-size: 12px;
font-weight: 400;
display: flex;
justify-content: center;
background-color:#260446;
padding-left:15px;
padding-right:15px;
padding-bottom:3px;
border-bottom-right-radius:8px;
border-bottom-left-radius:8px;
`

const DigitalFont =styled.div`
font-family: digital;
text-align:center;
font-size:32px;
letter-spacing:10px;
padding-top:10px;
padding-bottom:10px;
border-top-left-radius:10px;
border-top-right-radius:10px;
background-color:#D9D9D9;
`