import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'; 

const Container = styled.div`
  height: 60px;
   
`;
const Wrapper = styled.div`
     padding: 10px 20px;
     display: flex;
     justify-content: space-between;
     align-items: center;`;

const Left = styled.div`
   flex:1;
   display:flex;
   align-items: center;

   `;

const Language = styled.span`
   font-size:14px;
   cursor:pointer;
   
   `;

const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items: center;
margin-left:25px;
padding:5px;
`;

const Input = styled.input`
border:none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Center = styled.div`
flex:1;
text-align:center;`;

const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content: flex-end;`;

  const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
  margin-left:25px;
  `;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <SearchIcon style={{color:"gray, fontSize:16px"}}/>
            </SearchContainer>
        </Left>
        <Center>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>ShopNest.</Logo></Link>
        </Center>
        <Right>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <MenuItem>HOME</MenuItem></Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
            <MenuItem>REGISTER</MenuItem></Link>

            <Link to="/login" style={{ textDecoration: 'none' }}>
            <MenuItem>SIGN IN</MenuItem></Link>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon />
    </Badge>
    </MenuItem></Link>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
