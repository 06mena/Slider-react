const Navbar = ()=>{

    const navbarStyles = {
        
    }

    return (
        <ul style={{
            display:"flex", 
            flexDirection:"row", 
            gap:"60px", 
            color: 'white',
            background:"#A2C579", 
            width:"100%", 
            height:"50px", 
            alignItems:"center", 
            justifyContent:"center", 
            fontSize:"20px", 
            margin:"0", 
            padding:"0"
            }}>
            <li style={{color:"white", listStyle:"none", cursor:"pointer"}}>Inicio</li>
            <li style={{color:"white", listStyle:"none", cursor:"pointer"}}>Nosotros</li>
            <li style={{color:"white", listStyle:"none", cursor:"pointer"}}>Contacto</li>
        </ul>
    )

}

export default Navbar