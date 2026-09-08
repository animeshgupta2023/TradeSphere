import Hero from "./Hero"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Universe from "./Universe"
import Navbar from "../../Navbar"
import Footer from "../../Footer"

export default function HomePage(){
    return (
        <>
            <Navbar/>
            <Hero/>
            <LeftSection/>
            <RightSection/>
            <Universe/>
            <Footer/>
        </>
    )
}