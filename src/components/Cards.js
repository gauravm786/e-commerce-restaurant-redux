
//before
// import React, { useState } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Cardsdata from './CardsData'
// import './style.css'

// const Cards = () => {
    
    //     const[data,setData]=useState(Cardsdata)
    //     // console.warn(data)
    
    //   return (
        //     <div className='container mt-3'>
        //         <h2>Welcome to Heaven in Apetite 🍽️</h2>

//     {/* card is from react bootstrap      */}
//     <div className='row'>
//     <Card style={{ width: '18rem' }}>
//     <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//     Some quick example text to build on the card title and make up the bulk of
//     the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//     </Card>    
//     </div>
//     </div>
//   )
// }

// export default Cards


// after mapping cards
// import React, { useState } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Cardsdata from './CardsData'
// import './style.css'

// //     <Card.Img variant="top" src="holder.js/100px180" />
// const Cards = () => {
    
//     const[data,setData]=useState(Cardsdata)
//     // console.warn(data)

//     return (
//         <div className='container mt-3' >
//         <h2 className='text-center'>Welcome to Heaven in Multicuisine 🍽️</h2>

//     {/* card is from react bootstrap      */}
//     <div className='row d-flex justify-content-center align-items-center' >
//         {
//             data.map((element,id)=>{
//                 return (
//                     <>
//     <Card style={{ width:'22rem',border:"none" }} className="mx-2 mt-4 ">
//     <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} />
//     <Card.Body>
//     <Card.Title>{element.rname}</Card.Title>
//     <Card.Text>
//         Price: ₹ {element.price}
//     </Card.Text>
//     <div className='button_div d-flex justify-content-center'>
//     <Button variant="primary" className='col-lg' >Add to Cart</Button>
//     </div>
//     </Card.Body>
//     </Card>    
//                     </>
//                 )
//             })
//         }
   
//     </div>
//     </div>
//   )
// }

// export default Cards


//to see the details of food item by clicking on Add to cart button we use useDisptch
import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import './style.css'
import { useDispatch} from 'react-redux'
// import {ADD} from '../redux/actions/actions'
import { ADD } from '../redux/actions/actions' 


const Cards = () => {
    const[data,setData]=useState(Cardsdata)
    // console.warn(data)
    
//to trigger/call the function inside action.js we will use useDispatch
const dispatch=useDispatch()

//element contains all the objects of our cards and on whatever food item we click,we will get data with the help of element 
const send =(e)=>{
    // console.log(e)

    //now we will send data of objects to action.js file in redux folder    

    //using dispatch  and now we will get object of cardsData in carts array inside reducers.js
    dispatch(ADD(e))
}


    return (
        <div className='container mt-3' >
        {/* <h2 className='text-center'>Welcome to Heaven in Multicuisine 🍽️</h2> */}

    {/* card is from react bootstrap      */}
    <div className='row d-flex justify-content-center align-items-center' >
        {
            data.map((element)=>{
                return (
                    // <>
    <Card style={{ width:'22rem',border:"none" }} className="mx-2 mt-4 " key={element.id}>
    <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} />
    <Card.Body>
    <Card.Title>{element.rname}</Card.Title>
    <Card.Text>
        Price: ₹ {element.price}
    </Card.Text>
    <div className='button_div d-flex justify-content-center'>
    <Button variant="primary" className='col-lg'
    //element contains all the objects of our cart and on whatever food item we click,we will get data with the help of element 
    onClick={()=>send(element)}>Add to Cart</Button>
    </div>
    </Card.Body>
    </Card>    
                    // </>
                )
            })
        }
   
    </div>
    </div>
  )
}

export default Cards





// const getdata=useSelector((state)=>state.cartreducer)
// // console.log(getdata)

// //to trigger/call the function inside action.js we will use useDispatch
// const dispatch=useDispatch()