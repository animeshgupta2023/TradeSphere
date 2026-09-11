export default function Hero(){
    return (
        <div className="container p-5 mb-3 px-5">
            <div className="row text-center" style={{display:"flex", justifyContent:"center"}}>
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5 px-5" style={{width:"75%"}}/>
                <h1 className="mt-3">Invest in everything</h1>
                <p className="fs-5">Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary fs-5 mt-5" style={{width:"17%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    )
}