import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PreNavBar from './component/PreNavBar'
import NavBar from './component/NavBar'

import  {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Slider from './component/Slider'
import data from './data/data.json'
import Offers from './component/Offers'
import Heading from './component/Heading'
import StartProduct from './component/StartProduct'
import HotAccessoriesMenu from './component/HotAccessoriesMenu'
import HotAccessories from './component/HotAccessories'
import ProductReviews from './component/ProductReviews'
import Videos from './component/Videos'
import Banner from './component/Banner'
import Footer from './component/Footer'
import NavOptions from './component/NavOptions'





function App() {
  

  return (
    <Router>
      <PreNavBar/>
      <NavBar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start}/>
      <Offers offers={data.offer}/>
      <Heading text='STAR PRODUCTS'/>
       <StartProduct starProduct={data.starProduct}/>
      <Heading text='HOT ACCESSORIES'/>
      <HotAccessoriesMenu/>
      <Routes>
      <Route path='music/*' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
      <Route path='smartDevice/*' element={<HotAccessories  smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
      <Route path='home/*' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}/>
      <Route path='lifestyle/*' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
      <Route path='mobileAccessories/*' element={<HotAccessories  mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>
      <Heading text='HOT ACCESSORIES'/>
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />
   
    </Router>
  )
}

export default App
