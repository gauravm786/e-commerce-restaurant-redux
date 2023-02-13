// import { fontSize } from '@mui/system'
// import React, { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table'
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'

// const CardsDetails = () => {

// const[data,setData]=useState([])  
// console.log(data)

// //  to get the id,we use useparams hook from react-router-dom
// const {id}=useParams()
// // console.log(id)

// //we want to get item details with the help of id by using useselector(inside browser console)
// const getdata=useSelector((state)=>state.cartreducer.carts)
// // console.log(getdata)

// //we want to get particular item details(only one) by matching with id in the url
// const compare = ()=>{
//   let comparedata = getdata.filter((e)=>{
//     return e.id == id
//   })
//   // console.log(comparedata)
//   setData(comparedata) //will get data on webpage
// }

// // now compare function will render/call when id is called by using useeffect
// useEffect(()=>{
//   compare()
// },[id])



//   return (
//     <div className='container mt-2'>
//       <h2 className='text-center' >
//         Item Detail Page
//       </h2>
//       <section className='container mt-3  ' >
//         <div className='iteamsdetails '>
//         <div className="items_img" >
//           <img src= "https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
//         alt=" https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"/>
//         </div>

//         <div className="details">
//           <Table>
//             <tr>
//               <td>
//                 <p> <strong>Restaurant</strong>:Massala Theory</p>
//                 <p> <strong>Price</strong> : ₹ 300</p>
//                 <p> <strong>Dishes</strong> : North Indian, Biryani, Mughlai</p>
//                 <p> <strong>Total</strong> : ₹ 300</p>
//               </td>
//               <td>
//                 <p> <strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> 4.5 ★</span>  </p>
//                 <p> <strong>Order Review :</strong> <span> 2500 + order placed from here recently</span>  </p>
//                 <p> <strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:"20px",cursor:"pointer"}}></i> </span>  </p>
//               </td>
//             </tr>
//           </Table>
//         </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default CardsDetails


//now we will get data on the webpage by mapping

import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { DLT,ADD,REMOVE } from '../redux/actions/actions';


const CardsDetails = () => {

const[data,setData]=useState([])  
// console.log(data)

//url id
//  to get the id,we use useparams hook from react-router-dom
const {id}=useParams()
// console.log(id)

//getdata id
//we want to get item details with the help of id by using useselector(inside browser console)
const getdata=useSelector((state)=>state.cartreducer.carts)
// console.log(getdata)

//we want to get particular item details(only one) by matching with id in the url
const compare = ()=>{
  let comparedata = getdata.filter((e)=>{
    return e.id == id
  })
  // console.log(comparedata)
  setData(comparedata) //will get data on webpage
}

// now compare function will render/call when id is called by using useeffect
useEffect(()=>{
  compare()
},[id])


//here when we click on trash to delete the item just like we did in cardsdetails 
const dispatch = useDispatch()


//this dlt function will be called in trash
const dlt = (id)=>{
  dispatch(DLT(id));
  history("/menu");
}

//add item increment
const send = (e)=>{
  // console.log(e);
  dispatch(ADD(e));
}

//remove item decrement
const remove = (item)=>{
  dispatch(REMOVE(item))
}


//now the page will be redirected to menu page when all the items are delete from cart page
const history = useNavigate(); //this history function will be used in  dlt function

  return (
    <div className='container mt-2'>
      <h2 className='text-center' >
        Item Detail 
      </h2>
      <section className='container mt-3  ' >
        <div className='iteamsdetails '>
          {
            data.map((ele,index)=>{
              return(
                <>
                <div className="items_img" key={index} >
          <img src= {ele.imgdata}alt=" "/>
        </div>

        <div className="details">
          {/* <> */}
          <Table>
            <tr >
              <td>
                <p> <strong>Item</strong>:<br></br>{ele.rname}</p>
                <p> <strong>Price</strong> : ₹{ele.price}</p>
                <p> <strong>Dishes</strong> : {ele.address}</p>
                {/* <p> <strong>Total</strong> : ₹ 300</p> */}

                {/* will set price depending on the quantity */}
                <p> <strong>Total</strong> : ₹ {ele.price * ele.qnty}</p>

                {/* increment and decrement of Quantity */}
                <Typography left={{xs:"60%",sm:"0%"}} position="relative"
                 className='mt-5 d-flex justify-content-between align-items-center'
                style={{width:100,cursor:"pointer",backgroundColor:'#757575',margin:"auto"
                }}>
                  {/* <span style={{fontSize:24}} onClick={()=>remove(ele)}>-</span> */}

                  {/* if the quantity becomes zero then automatically remove the item from cart  */}
                  <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele) }>-</span>



                  <span style={{fontSize:22}}>{ele.qnty}</span>
                  {/* here whole object ele will passed */}
                  <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                </Typography>
              </td>
              <td>
                <p> <strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> {ele.rating} ★</span>  </p>
                <p> <strong>Order Review :</strong> <span> {ele.somedata}</span>  </p>
                {/* use onclick before style otherwise dlt function will not work,personal experience */}
                <p> <strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={()=>dlt(ele.id)}  style={{color:"red",fontSize:"20px",cursor:"pointer"}} ></i> </span>  </p>
              </td>
            </tr>
          </Table>
          {/* </> */}
        </div>                
                </>
              )
            })
          }
        
        </div>
      </section>
    </div>
  )
}

export default CardsDetails