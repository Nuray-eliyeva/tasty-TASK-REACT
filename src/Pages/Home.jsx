import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { LuBeef } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import { FaChampagneGlasses } from "react-icons/fa6";
import axios from 'axios';
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
      axios.get("http://localhost:8000/cards")
       .then(res=>setdata(res.data))
     }, [data])
     
  return (
    <>
      <div className="menu">
        <div className="container">
          <div className="row ">
              <nav>
              <div className="logo"> Tasty</div>
              <ul >
                <li>Home</li>
                <li>Menu</li>
                <li>Specialties</li>
                <li>Reservation</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                <Link to={'/admin'} className='admin'>Admin</Link>
              </ul>
            </nav>
          </div>

          <div className="center">
          <h1>Tasty & Delicious Food</h1>
          <button className='btn'>Book a table</button>
       </div>
         <div className="form">
          <input type="text" placeholder='Name' />
          <input type="text"  placeholder='Phone' />
          <input type="text"  placeholder='Name'/>
          <input type="text"  placeholder='Time' />
          <input type="text" placeholder='Person'/>
          <button >Book a Table</button>
         </div>
      </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  col-12 about-pict ">
              <img src="https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg" alt="" />
            </div>
            <div className="col-lg-6 col-12 about-txt">
              <span>ABOUT TASTY</span>
              <h3 className='mb-5 mt-5'>Our chef cooks the most delicious food for you</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="discover">
        <div className="container">
          <span>OUR MENU</span>
          <h2>Discover Our Exclusive Menu</h2>
          <div className="buton mb-5 mt-5">
            <button className='m-btn main-btn'><LuBeef />Main</button>
            <button className='m-btn'><ImSpoonKnife />Desert</button>
            <button className='m-btn'><FaChampagneGlasses />Drinks</button>
          </div>
          <div className="row card-container">
          {
                data.map(item=>{
                    return(
                 
                        <div className="col-lg-5 col-12 s-card" key={item.id}>
                         <div className='photo'> <img src={item.file}alt="" /></div>
                         <div>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        </div>
                        <div>
                        <p>${item.cost}</p>
                        </div>
                    </div>
                   
                    )
                }
              )}
              <br />
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
              <button className='btn2'>Make a Reservation</button>
          </div>
        </div>
    
     <div className="guest">
      <div className="container">
      </div>
       <div className="head-txt"> <span>GUESTS SAY</span>
      <h3 className='mb-5 mt-3'>Our Satisfied Guests say</h3>
      </div>
        <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
           <div className='guest-card'>
            <div><img src="https://media.istockphoto.com/id/1314997483/photo/portrait-of-a-confident-mature-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OxN-O2qe4LbgYuOnp_VkgXOV5p7CDC_uWja9iWFM-OA=" alt="" /></div>
            <div className="starts  mb-4 mt-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque omnis accusantium repellendus totam quaerat. Deserunt ut maiores dolorem voluptate ab.</p>
            <h4>Dennis Green</h4>
            <span>Guest from italy</span>
            
           </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
           <div className='guest-card'>
            <div><img src="https://media.istockphoto.com/id/1314997483/photo/portrait-of-a-confident-mature-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OxN-O2qe4LbgYuOnp_VkgXOV5p7CDC_uWja9iWFM-OA=" alt="" /></div>
            <div className="starts mb-4 mt-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque omnis accusantium repellendus totam quaerat. Deserunt ut maiores dolorem voluptate ab.</p>
            <h4>Dennis Green</h4>
            <span>Guest from italy</span>
           
           </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
           <div className='guest-card'>
            <div><img src="https://media.istockphoto.com/id/1314997483/photo/portrait-of-a-confident-mature-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OxN-O2qe4LbgYuOnp_VkgXOV5p7CDC_uWja9iWFM-OA=" alt="" /></div>
            <div className="starts  mb-4 mt-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque omnis accusantium repellendus totam quaerat. Deserunt ut maiores dolorem voluptate ab.</p>
            <h4>Dennis Green</h4>
            <span>Guest from italy</span>
           
           </div>
          </div>

      
        </div>
      </div>
     </div>
  
  <div className="blog">
    <div className="container">
      <div className="row">

      <div className="head-txt"> <span>Blog</span>
      <h3 className='mb-5 mt-3'>Recent Blog</h3>
      </div>
        <div className="col-lg-4 col-md-6 col-12 blog-card">
          <div className='blog-card'>
             <div className="img"><img src="https://media.cnn.com/api/v1/images/stellar/prod/211006114703-best-meal-delivery-service-freshly.jpg?q=w_1601,h_900,x_0,y_0,c_fill" alt="" /></div>
          </div>
           <span>july8, 2018-Admin</span>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos veritatis nihil laboriosam odio aspernatur nulla animi facere commodi eveniet!</p>
           <span> Read more</span>
        </div>
        <div className="col-lg-4 col-md-6 col-12 blog-card">
          <div className='blog-card'>
             <div className="img"><img src="https://media.cnn.com/api/v1/images/stellar/prod/211006114703-best-meal-delivery-service-freshly.jpg?q=w_1601,h_900,x_0,y_0,c_fill" alt="" /></div>
          </div>
           <span>july8, 2018-Admin</span>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos veritatis nihil laboriosam odio aspernatur nulla animi facere commodi eveniet!</p>
           <span> Read more</span>
        </div>
        <div className="col-lg-4 col-md-6 col-12 blog-card">
          <div className='blog-card'>
             <div className="img"><img src="https://media.cnn.com/api/v1/images/stellar/prod/211006114703-best-meal-delivery-service-freshly.jpg?q=w_1601,h_900,x_0,y_0,c_fill" alt="" /></div>
          </div>
           <span>july8, 2018-Admin</span>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos veritatis nihil laboriosam odio aspernatur nulla animi facere commodi eveniet!</p>
           <span> Read more</span>
        </div>

      </div>
    </div>
  </div>
    
    </>
  )
}
export default Home