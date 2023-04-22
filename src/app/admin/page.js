"use client"

import { useContext } from "react"
import { Contexto } from "../context/Contexto"

import Link from "next/link"
import "../styles.css"

const PanelPage = () => {

    const {first} = useContext(Contexto)
 
  return (
   <div className="container">  
    <div className="card" style={{ width: "80rem" }}>
      <div className="card-body">
        <h5 className="card-title">Panel de Control</h5>
        <h6 className="card-subtitle mb-2 text-muted">{first}</h6>
        <h6 className="card-text">
          
             <button >+</button>

        </h6>
        <Link href="/" className="card-link">Pagina principal</Link>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  </div>  
  )
}

export default PanelPage