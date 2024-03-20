import React from 'react'
import {Link} from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div style={{
        border: "3px solid red",
    }}>
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black",
        width: "132px",
        height: "753px",
        borderRadius: "40px",
        margin: "30px 0px 0px 30px",
        // border: "3px solid blue"
    }}>
       <div style={{
        color: "white",
        fontSize: "30px",
    }}>
         <h1>F.</h1>
       </div>

        <div style={{
            color: "white",
            // border: "2px solid white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-100px"
        }}>
      <Link to="/home">
        <p style={{cursor: "pointer"}}>Home</p>
      </Link>
      <Link to="/education">
        <p style={{cursor: "pointer"}}>Education</p>
      </Link>
      <Link to="/personal">
        <p style={{cursor: "pointer"}}>Personal</p>
      </Link>
      <Link to="/messages">
        <p style={{cursor: "pointer"}}>Messages</p>
      </Link>
      <Link to="setting">
        <p style={{cursor: "pointer"}}>Setting</p>
      </Link>
        </div>

        <div style={{color: "white",}}>
        <p>Log out</p>
    </div>
    </div>
    </div> //main sidebar
  )
}

export default NavbarComponent