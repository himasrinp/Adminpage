import React from "react";
import styled from "styled-components";
import Invisible from "../assets/Invisible.png";
import Eye from "../assets/Eye.png";
function EmployeeView(){
return(
    <Tabdiv>
      <Table1>
      <Tabcaption> LEAVE MANAGER 03-01-2023</Tabcaption>
      <Trow>
        
          <Tabhead>Employee ID</Tabhead>
          <Tabhead>Status</Tabhead>
          <Tabhead>From Date</Tabhead>
          <Tabhead>Till Date</Tabhead>
          <Tabhead>Leave Type</Tabhead>
          <Tabhead>Reason</Tabhead>
          <Tabhead>Rep-Officer</Tabhead>
          <Tabhead><img src={Invisible}></img></Tabhead>
        </Trow>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <Tdata>{val.EId}</Tdata>
              <Tdata>{val.Status}</Tdata>
              <Tdata>{val.Fdate}</Tdata>
              <Tdata>{val.Tdate}</Tdata>
              <Tdata>{val.Ltype}</Tdata>
              <Tdata>{val.Reason}</Tdata>
              <Tdata>{val.Repofficr}</Tdata>
              <Tdata><img src={Eye}></img></Tdata>
            
            </tr>
          )
        })}
        
      </Table1>
</Tabdiv>
);
    }
    // table styling...


const Table1=styled.table`
border: 2px solid #260446;
width: 900px;
border-collapse: collapse;        
box-shadow: 1px 3px 1px #260446;
background-color:#E4E4E4;

`
const Tabdiv=styled.div`
width: 100%;
display: flex;
justify-content: center;
padding-top:30px;
`
const Tabhead =styled.th`
border:1px solid #AD81D5;
font-size: 12px;
font-weight: 600;
font-family: Poppins;
`
const Tdata= styled.td`
border:1px solid #AD81D5;
font-size: 12px;
text-align: center;
font-family: Poppins;
`
const Trow=styled.tr`
border-bottom: 1px solid #AD81D5;
`
const Tabcaption=styled.caption`
color:white;
background-color:#260446;
text-align:left;
border-Top-Left-Radius:20px;
border-Top-Right-Radius:20px;
padding-left:20px;
font-family: Poppins;
`
const data = [
{ EId: "IMIOT-P001", Status:"Pending", Fdate: "04-jan-2023" ,Tdate: "05-jan-2023" ,Ltype: "Casual" ,Reason: "Meeting",Repofficr:"HR" },
{ EId: "IMIOT-P002", Status: "Approved", Fdate: "05-jan-2023",Tdate: "05-jan-2023",Ltype: "Casual",Reason: "Meeting",Repofficr:"HR" },

]

    export default EmployeeView