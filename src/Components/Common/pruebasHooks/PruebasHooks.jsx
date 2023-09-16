import { useState, useEffect } from "react"


const PruebasHooks = ( {contador, setContador} ) => {

    let arr = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7129052/pexels-photo-7129052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18111088/pexels-photo-18111088/free-photo-of-playa-vacaciones-gente-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18171438/pexels-photo-18171438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

   ]

    
    const [img, setImg ] = useState("")

    useEffect( ()=>{

       setImg(arr[contador])

    }, [contador] )
    
    console.log("Me ejecute tantas veces como se renderiza el componente")

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px", background:"#016A70", height:"600px"}}>
        <h4 style={{fontSize:"20px", color:"white"}}>{contador}</h4>
        <img style={{width:"513px", height:"337px", justifyContent:"center", objectFit:"cover", borderRadius:"27px", boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)'}} src={img} alt="" />
        <div style={{
          display:"flex",
          flexDirection:"row",
          gap:"50px",
        }}>
        <button style={{
          cursor:"pointer",
          background:"#E4E4D0",
          color:"black",
          width:"86px",
          height:"38px",
          border:"none",
          fontWeight: "bold",
          fontSize : "15px"
        
        }} onClick={ ()=> {
          if (contador > 0) {
            setContador(contador - 1);
          }
        }}>Izquierda</button>
        
        <button style={{
          cursor:"pointer",
          background:"#E4E4D0",
          color:"black",
          width:"86px",
          height:"38px",
          border:"none",
          fontWeight: "bold",
          fontSize : "15px"
          }} onClick={ ()=> {
            if (contador < 5) {
              setContador(contador + 1);
            }
          }}>Derecha</button>
 
     </div>
    </div>
   
  )
}

export default PruebasHooks