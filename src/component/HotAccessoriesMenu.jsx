import React from 'react'
import '../styles/hotaccessoriesmenu.css'
import { Link } from 'react-router-dom'

function HotAccessoriesMenu() {
  return (
    <div className="HotAccessoriesMenu">
             <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
             <Link className="HotAccessoriesLink" to="/smartDevice">Smart Devices</Link>
             <Link className="HotAccessoriesLink" to="/home">Home</Link>
             <Link className="HotAccessoriesLink" to="/lifestyle">Lifestyle</Link>
             <Link className="HotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
            
        </div>
  )
}

export default HotAccessoriesMenu