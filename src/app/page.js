"use client"
import {React} from 'react'

import Carousel from './components/Carousel';






/*async function getPokemons(){
  const res = await fetch('https://randomuser.me/api/?results=8');
  const data = await res.json();
  return data.results
 }*/

 function IndexPage(){
   //const poke =await getPokemons()
       return (
    <div>
      
     <Carousel />
 
      
    </div>
  )
}

export default IndexPage