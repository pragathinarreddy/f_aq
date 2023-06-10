import React, { useState } from 'react'
import data from '../data.json'

function Main() {
    const [activeIndex,setActiveIndex]=useState("") 
    console.log(activeIndex,"CTIVEEEE")

    const handleClick = (each) => {
        setActiveIndex(each)
            
    }
  return (
    <div className='container'>
        <center>
            <h2 className='heading'>CLOSED STATE</h2>
            {
                data.map((each,index) => 
                    <>
                    <h2 onClick={() => handleClick(each) } className='question'>{each.Q }{each === activeIndex ? "👇" : "👆"}</h2>
                    {
                        each === activeIndex &&  <p className='answer'>{each.A }👆</p> 

                    }
                    

                    </>
                    
                    )
                }
        </center>
                <hr className='line' />

    </div>
  )
}

export default Main