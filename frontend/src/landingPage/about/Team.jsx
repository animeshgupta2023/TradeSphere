import {Link} from 'react-router-dom'

export default function Team(){
    return (
        <div className="container">
            <div className="row mb-5">
                <h1 className="fs-3 text-muted text-center">
                    People
                </h1>
            </div>
            <div className="row mb-5 px-5 text-muted">
                <div className="col"></div>
                <div className="col-4 p-5 text-center">
                    <img 
                        src="media\images\nithinKamath.jpg" 
                        alt="nithin kamanth" 
                        style={{borderRadius:"100%", width:"80%"}}
                    />
                    <h4 className="p-2 mt-3">Nithin Kamanth</h4>
                    <h6 className="">Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <Link to="/" style={{textDecoration:"none"}}>Homepage</Link> / 
                        <Link to="#" style={{textDecoration:"none"}}>TradingQnA</Link> / 
                        <Link to="#" style={{textDecoration:"none"}}>Twitter</Link>
                    </p>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}