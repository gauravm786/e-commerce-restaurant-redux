import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge'; // badge is from material ui mui
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { NavLink } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Table } from 'react-bootstrap';
// import './style.css'
import { DLT } from '../redux/actions/actions';
import { Typography } from '@mui/material';


const Header = () => {

//to see the object we use useselector
// const getdata=useSelector((state)=>state.cartreducer)
// console.log(getdata)

//will show all  objects when we click [] array and now we will add gedata inside badge with length property,so that we can know how many numbers of food items are added.
const getdata=useSelector((state)=>state.cartreducer.carts)
// console.log(getdata)

const dispatch = useDispatch()
// now we will trigger/call  DLT function of reducer 

const[price,setPrice]=useState(0)

 const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  //here we are calling/trigerrin DLT function of reducer
  const dlt = (id)=>{ //this dlt function will be called in trash
    dispatch(DLT(id))
  }
  
  const total = ()=>{
    let price=0
    getdata.map((ele)=>{
      price=ele.price * ele.qnty + price //the price variable will store the price of all the data in the object
    })
    setPrice(price)
  }
  
  useEffect(()=>{
    total() 
    //whenever there will be changes in add to cart then total function will be rendered
  },[total]) 

  return (
    // <div>Header</div>
    <>
    {/*navbar from react bootstrap  */}
      <Navbar bg="dark" variant="dark" style={{height:"50px"}}>
    <Container>
    <Link to='/' className="text-decoration-none text-light mx-3">Home</Link>
    <Nav className="me-auto">
      <Link to='/menu'className="text-decoration-none text-light">Menu</Link>
      <Outlet />
    </Nav>

    {/* here we change color of cart icon by using text-light,font awesome icon  */}
    {/* <i class="fas fa-shopping-cart text-light" style={{fontSize:"25px",cursor:"pointer"}}></i> */}

    <Badge badgeContent={getdata.length} color="primary"
         id="basic-button"
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
    >
    <i className="fas fa-shopping-cart text-light" style={{fontSize:"25px",cursor:"pointer"}}></i>
    </Badge>
    </Container>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* Your cart is empty */}
        {/* <div className='card_details d-flex justify-content-center align-items-center' style={{ height:"2.5rem", width:"16rem",margin:5,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:-10,right:"3px",fontSize:20,cursor:"pointer"}}></i>
                    <p style={{fontSize:18,top:"-0.9rem",position:"absolute"}}>Your cart is empty
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" 
                    alt="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" 
                    className='emptycart_img' 
                    style={{width:"4rem",top:"1px",position:"relative"}} /> </p>
                   </div>   */}


  {/* //if the cart is empty then there will be different design but if not then there will be other design */}

  {
    getdata.length ? 
    <div className="card_details" style={{width:"24rem",padding:10}}>
      <Table>
        <thead>
          <tr>
            <th>Photo </th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {
          // {/* mapping of data which will be added to cart */}
            getdata.map((e,index)=>{
              return (
                // <>
                <tr key={index}>
                  <td>
                    {/* <img src={e.imgdata} alt="" style={{width:"5rem",height:"5rem"}}  /> */}
                    
                    {/* by clicking on image we will redirect to item details page 
                    and id will let us know about item of the object */}
                    {/* <Link to={`/cart/${e.id}`}>  */}

                    {/* removing righside menu after clickig on the image */}
                    <Link to={`/cart/${e.id}`}   onClick={handleClose}> 

                    <img src={e.imgdata} alt="" style={{width:"5rem",height:"5rem"}}  />
                    </Link>
                  </td>
                  <td>
                    <p>{e.rname}</p>
                    <p>Price :₹{e.price}</p>
                    <p>Quantity :{e.qnty}</p>
                    <p style={{color:"red",fontsize:"20px",cursor:"pointer"}} 

                    // this will delete the data of  particular id send by the user  
                    onClick={()=>dlt(e.id)}>
                      <i className='fas fa-trash smalltrash'></i></p> 
                      {/* smalltrash is used for mobile layout for small screen and will not be visiblr for pc or laptop */}
                  </td>
                  <td className='mt-5' style={{color:"red",fontsize:"20px",cursor:"pointer"}}
                  onClick={()=>dlt(e.id)}>
                      <i className='fas fa-trash largetrash'></i>
                  </td>
                </tr>
                // </>
                )
              })
            }
            <p className='text-center'>Total : ₹{price}</p>
        </tbody>
      </Table>
    </div> 
    :
  <div className='card_details d-flex justify-content-center align-items-center' style={{ height:"2.5rem", width:"16rem",margin:5,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:-10,right:"3px",fontSize:20,cursor:"pointer",display:"block"}}></i>
                    
                    <Typography style={{fontSize:16,top:"-0.9rem",position:"absolute"}}>Your cart is empty
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" 
                    alt="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" 
                    // className='emptycart_img' 
                    style={{width:"4rem",top:"1px",position:"relative"}} /> </Typography>
                   </div>   

  }



      </Menu>  
  </Navbar>
    </>
  )
}

export default Header



