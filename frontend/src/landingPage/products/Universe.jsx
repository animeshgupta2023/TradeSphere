export default function Universe(){
    return (
        <div className="container text-center p-5">
            <h1 className="mt-5 fs-3">The Zerodha Universe</h1>
            <p className="pt-2">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row mt-5 p-5 text-muted" style={{fontSize:"14px"}}>
                <div className="col 4 p-5">
                    <div>
                        <img src="media/images/zerodhaFundhouse.png" alt="zerodha fund"  style={{width:"50%"}} className="mb-3"/> 
                        <p>
                            Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                        </p>
                    </div>
                    <br /> <br />
                    <div>
                        <img src="media\images\streakLogo.png" alt="streak" style={{width:"50%"}} className="mb-3"/>
                        <p>
                            Systematic trading platform that allows you to create and backtest strategies without coding.
                        </p>
                    </div>
                </div>
                <div className="col-4 p-5">
                    <div>
                        <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" style={{width:"68%"}} className="mb-4"/>
                        <p>
                            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
    
                        </p>
                    </div>
                    <br />
                    <div>
                        <img src="media\images\smallcaseLogo.png" alt="smallcaseLogo" style={{width:"60%"}} className="mb-3"/>
                        <p>
                            Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                        </p>
                    </div>
                </div>
                <div className="col-4 p-5">
                    <div>
                        <img src="media/images/dittoLogo.png" alt=" ditto" style={{width:"35%"}} className="mb-4"/>
                        <p>
                            Personalized advice on life and health insurance. No spam and no mis-selling.
                        </p>
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <img src="media\images\goldenpiLogo.png" alt="golder pi" style={{width:"50%"}}className="mb-3"/>
                        <p>
                            Systematic trading platform that allows you to create and backtest strategies without coding.
                        </p>
                    </div>
                </div>
            </div>
            <button className="p-2 btn btn-primary fs-5 mt-5" style={{width:"17%", margin:"0 auto"}}>Sign up for free</button>
        </div>
    )
}