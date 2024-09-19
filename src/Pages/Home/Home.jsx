import { useContext } from "react"
import { contextName } from "../../contexts/NameContext"

export default function Home(){
    const {name,setName}=useContext(contextName);
    const changeName=()=>{
        setName((name=="Mohamed")?"Shams":"Mohamed");
    }
    return(
        <div style={{height:"800px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h2>Hello {name}</h2>
        <button onClick={()=>{changeName()}}>Toggle Name</button>
        </div>
    )
}