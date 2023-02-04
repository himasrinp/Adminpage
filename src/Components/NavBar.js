import React from "react";
import styled from "styled-components";
import Imiot1 from "../assets/Imiot.svg";

function NavBar(){
const menuItems =[
    {name: 'HOME',link: '#home',active: false },
    {name: 'LEAVE',link: '#leave',active: true },
    {name: 'TASK',link: '#task',active: false },
    {name: 'CLAIM',link: '#claim',active: false },
    {name: 'ANNOUNCEMENTS',link: '#announcements',active: false },
    {name: 'SETTINGS',link: '#settings',active: false },
    ];
  
    return(
<Nav>
  <NavStyle>
  <Logowrapper1>
    <Logo1 src={Imiot1}></Logo1>
  </Logowrapper1>
  <NavWrapper>
  {menuItems.map((menu, key) => {
          return (
            <div key={key} style={{padding:'10px', marginLeft:'20px', marginRight:'20px'}}>
              {/* change to nave link */}
              <Navtext  href={menu.link}>{menu.name}</Navtext>
            </div>
          )
        })}
    </NavWrapper>
  </NavStyle>
  </Nav>
    );
}
const Nav=styled.div`
display:flex;
flex-direction:row;
box-shadow: 1px 3px 1px #9E9E9E;
background-color:#260446;
`
const NavStyle=styled.div`
display:flex;
flexDirection:row; 
aligntems:center;
width:100%;
alignContent:space-around;
justifyContent:space-evenly;
`
const Logowrapper1=styled.div`
flexGrow:1;
`
const NavWrapper=styled.div`
display:flex;
alignItems:center;
justifyContent:space-evenly;
flexDirection:row;
width:100%;
justify-content: flex-end;
align-items: center;
`
const Logo1=styled.img`			 
justify-content:center;
 `
// const Navbar=styled.ul`
// display:flex;
// align-item:right;
// `
// const Navlink=styled.li`
// list-style:none;
// position:relative;
// margin-left: 120px
// `
const Navtext=styled.a`
color:white;
style:none;
text-decoration:none;
text-align:center;


`
// navbar styling....

export default NavBar