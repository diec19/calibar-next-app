"use client"
import {React} from 'react'

import Carousel from './components/Carousel';
import { Datos } from './context/Contexto';
import PanelPage from './admin/page';






/*async function getPokemons(){
  const res = await fetch('https://randomuser.me/api/?results=8');
  const data = await res.json();
  return data.results

http://vnfs.californiasa.com.ar:4010/images/api/v1/get?sku=77940080113

 }*/

 function IndexPage(){
   //const poke =await getPokemons()
       return (
        <Datos>
    <div>
      
     <Carousel />
     <PanelPage />

      
    </div>
    </Datos>
  )
}

export default IndexPage