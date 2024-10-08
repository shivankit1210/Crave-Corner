import { Alert, Box, ButtonBase, Typography, styled } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import LowerNavbar from '../Navbar/LowerNavbar'
import {CgPlayListRemove} from 'react-icons/cg'
import UperFooter from '../Footer/UperFooter'
import { useDispatch, useSelector } from 'react-redux';
import FoodDelivery from './FoodDelivery'
import {MdPlaylistAdd} from 'react-icons/md'
import { slice1_Pop } from '../../store/slice/breakfastSlice'
import LowerFooter from '../Footer/LowerFooter'
const Container=styled(Box)`
    color:white;
    background: #121212e6;
    width:100%;
    height:auto;
`
const Food=styled(Box)`
background: '#fafdfb';
padding:100px 0px;
`
const Heading=styled(Box)({
  paddingTop:10,
  marginBottom:30,
  '& > p':{
    textAlign:'center',
    fontSize:35 ,
    fontWeight:900,
  }
})
const Item = styled(Box)({
  display: 'grid',
  gap: 60,
  gridTemplateColumns: 'auto auto auto',
  justifyContent:'center',
  flexDirection:'column',
  alignItems:'center',
  gap:50,
  '@media (max-width:1188px)':{
    gridTemplateColumns: 'auto auto',
    
},
'@media (max-width:772px)':{
  gridTemplateColumns: 'auto',
  
},
})

const Btn=styled(ButtonBase)({
  color:"black",
  marginLeft:20,
  width:110,
  marginBottom:50,
  height:40,
  borderRadius:17,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  background:`var(--maincol)`,
  '&>svg':{
    fontSize:20,
    marginTop:2,
  }
})

const Empty=styled(Box)({
  margin:'0px 20px'
})
const Delivery=()=> {
  const dispatch=useDispatch();
  useEffect(()=>{
  scrollTo(0, 0)
}, []);
  const [order,setOrder]=useState(false);
    const handleOrder=()=>{
      dispatch(slice1_Pop(Cart_id))

      // if click on new order clear old orders 
      // localStorage.clear();
      
      // and then refresh the page 
      // window.location.reload();
    }

  const Cart_id=useSelector(state=>state.breakfastSlice);
  const handleSubmit=()=>{
    setOrder(true)
    localStorage.clear();
    // window.location.reload();
  }
  return (
    <Container>
         <LowerNavbar />
    <Food>

         <Heading>
    <Typography>
     Place Your Order
    </Typography>
         </Heading>
        {
          Cart_id.length !==0 ? <Btn onClick={handleOrder} ><CgPlayListRemove />&nbsp; Remove</Btn> :<Btn onClick={handleOrder}><MdPlaylistAdd />&nbsp; Add</Btn>
        } 
         {/* food section  */}
         <Item>
          {/* <button onClick={handleClick}>click</button> */}
         {
     Cart_id.map(item=>{
        return(
         <FoodDelivery item={item} />
        )
      })
    }
    <Empty>
    
    {
      Cart_id.length !==0 && <ButtonBase onClick={handleSubmit} style={{width:130,height:50,border:'2px solid gray',fontSize:17,borderRadius:10,background:'rgb(92,145,7 / 0%)'}}>Order Now</ButtonBase>
    }
    {
      Cart_id.length===0 && !order && <Typography>Your order is empty now ,add Item to cart and place your order</Typography>
    }
    </Empty>
    {
        order  && <Alert severity="success">Your Order has been placed</Alert>
      }
   
    
   
         </Item>
         </Food>


         <UperFooter />
        <LowerFooter />
    </Container>
  )
}
export default Delivery