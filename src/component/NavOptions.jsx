import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.jsx"
import "../styles/NavOptios.css"

import { useLocation } from 'react-router-dom';




const NavOptions = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);


   const location = useLocation()


   useEffect(() => {
    // console.log(window.location.pathname)
     
    if(location.pathname === "/miphones"){
        return  ( setMiPhoneToggle(true),
        setAccessoriesToggle(false),
        setAudioToggle(false),
        setFitnessToggle(false),
        setLaptopToggle(false),
        setTvToggle(false),
        setHomeToggle(false),
        setRedmiPhoneToggle(false))
            
       }
     if(location.pathname === "/redmiphones"){
        return  ( setMiPhoneToggle(false),
        setRedmiPhoneToggle(true),
        setAccessoriesToggle(false),
        setAudioToggle(false),
        setFitnessToggle(false),
        setLaptopToggle(false),
        setTvToggle(false),
        setHomeToggle(false))     
       }
       if(window.location.pathname === "/tv"){
        return  ( setMiPhoneToggle(false),
        setAccessoriesToggle(false),
        setAudioToggle(false),
        setFitnessToggle(false),
        setLaptopToggle(false),
        setTvToggle(true),
        setHomeToggle(false),
        setRedmiPhoneToggle(false))
       }
       if(location.pathname === "/laptops"){
        return  ( setMiPhoneToggle(false),
        setAccessoriesToggle(false),
        setAudioToggle(false),
        setFitnessToggle(false),
        setLaptopToggle(true),
        setTvToggle(false),
        setHomeToggle(false),
        setRedmiPhoneToggle(false))
       }
       if(location.pathname === "/lifestyle"){
         return  ( setMiPhoneToggle(false),
        setAccessoriesToggle(false),
        setAudioToggle(false),
        setFitnessToggle(true),
        setLaptopToggle(false),
        setTvToggle(false),
        setHomeToggle(false),
        setRedmiPhoneToggle(false))
       }
       if(window.location.pathname === "/home"){
        return  ( setMiPhoneToggle(false),
        setAccessoriesToggle(false),
        setAudioToggle(false),
        setFitnessToggle(false),
        setLaptopToggle(false),
        setTvToggle(false),
        setHomeToggle(true),
        setRedmiPhoneToggle(false))
       }
       if(location.pathname === "/audio"){
        return  ( setMiPhoneToggle(false),
        setAccessoriesToggle(false),
        setAudioToggle(true),
        setFitnessToggle(false),
        setLaptopToggle(false),
        setTvToggle(false),
        setHomeToggle(false),
        setRedmiPhoneToggle(false))
       }
       
       if(location.pathname === "/accessories"){
        return  ( setMiPhoneToggle(false),
        setAccessoriesToggle(true),
        setAudioToggle(false),
        setFitnessToggle(false),
        setLaptopToggle(false),
        setTvToggle(false),
        setHomeToggle(false),
        setRedmiPhoneToggle(false))
       }

       
   }, [location])

    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item)=>(

                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item)=>(

               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ?   tv.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

               {homeToggle ?   home.map((item)=>(

                   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default NavOptions