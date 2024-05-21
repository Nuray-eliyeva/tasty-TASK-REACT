import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { LuBeef } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import { FaChampagneGlasses } from "react-icons/fa6";
import axios from 'axios';

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
                <li><Link to={'/admin'} className='admin'>Admin</Link></li>
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
            <div className="col-lg-6 col-12 about-pict ">
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
      </div>

  
    
    </>
  )
}
export default Home