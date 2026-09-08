import Hero from "./Hero"
import CreateTicket from "./CreateTicket"
import Navbar from "../../Navbar"
import Footer from "../../Footer"

export default function Hero(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <CreateTicket/>
            <Footer/>
        </>
    )
}