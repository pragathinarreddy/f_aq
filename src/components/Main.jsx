import React, { useState } from 'react'
import data from '../data.json'

function Main() {
    const [activeIndex,setActiveIndex]=useState(false) 
    console.log(activeIndex,"CTIVEEEE")

    // const handleClick = (each) => {
    //     setActiveIndex(each)
        
    // }
  return (
    <div className='container'>
        <center>
            <h2 className='heading'>CLOSED STATE</h2>
            {
                data.map((each,index) => 
                    <>
                    <h2 onClick={()=>setActiveIndex( activeIndex === index  ? false : index)} className='question'>{each.Q }{index === activeIndex ? "👇" : "👆"}</h2>
                    {
                        index === activeIndex ?  <p className='answer'>{each.A }👆</p> : ""

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