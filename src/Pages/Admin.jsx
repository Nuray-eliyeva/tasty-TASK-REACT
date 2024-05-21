import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [data, setdata] = useState([])
  const [search, setsearch] = useState("")
  const [selectValue, setSelectValue] = useState("normal")
//-------GET------
  useEffect(() => {
    axios.get("http://localhost:8000/cards")
      .then(res => setdata(res.data))
  }, [])
//--------DELETE--------
  const deleteData = function (id) {
    axios.delete(`http://localhost:8000/cards/${id}`)
      .then(res => console.log(res.data))
  }
//---------------SORT-----------
  const sortData = function () {
   return setdata([...data].sort((a, b) => a.cost - b.cost))
  }

  //-----FILTER-----
  const filteredData = data.filter(item => {
    return item.name.toLowerCase().startsWith(search.toLowerCase()
  )
  });

  return (
    <div>
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
        </div>
      </div>

      <div className="admin-center">
        <div className="links">

        <select onChange={(e)=>setSelectValue(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>

          <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder="Search" />
          <Link to={'/add'} className='add'>Add</Link>
        </div>
        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>FILE</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th>COST</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredData.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><img src={item.file} alt="" className='td-img' /></td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.cost}</td>
                    <td><button className='btn1' onClick={() => deleteData(item.id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Admin
