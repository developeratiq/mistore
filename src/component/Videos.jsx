import React from 'react'
import '../styles/videos.css'
import VideoCard from "./VideoCard"


function Videos({videos}) {
  return (
    <div className="videos">
    {
        videos.map((item,index)=>(
           <VideoCard  index={index} key={item.image} image={item.image} name={item.name}/>
        ))
    }
</div>
  )
}

export default Videos