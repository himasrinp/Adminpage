import styled from "styled-components";

export default function LeaveDates(props){

    return (
        <DateContainer>
          <DateButton>{props.label}</DateButton><DateWrapper>{props.data}</DateWrapper>
        </DateContainer>
    );

}


const DateContainer = styled.div`
display:grid;
grid-template-columns: 70px 1fr;
margin-bottom: 20px;
margin-top: 5px;
font-size: 16px;
font-weight: 400;
text-align:center;

`

const DateButton = styled.div`
background-color:#260446;
color: #ffffff;
padding:8px 8px 8px 5px;
border-top-left-radius: 10px;
border-bottom-left-radius:10px;
`

const DateWrapper = styled.div`
background-color:#C8ABE3;
color: #000000;
font-size:16px;
font-weight:400;
padding:5px 5px 5px 15px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
text-align: justify;
`