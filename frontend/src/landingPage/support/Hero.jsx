export default function Hero(){
    return (
        <section className="container-fluid px-5" id="supportHero">
            <div className="mt-5 p-5" id="supportWrapper">
                <h4 className="px-5 ">Support Portal</h4>
                <a href="" style={{color:"white"}} className="px-5">Track Tickets</a>
            </div>
            <div className="row px-5 mb-5">
                <div className="col"></div>
                <div className="col-5 px-5 mb-5">
                    <h1 className="fs-4">Search for an answer or browse help topics to create a Tickets</h1> <br />
                    <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected.." id="inp"/> <br />
                    <a href="" style={{color:"white"}}>Track account opening</a> &nbsp; &nbsp; 
                    <a href="" style={{color:"white"}}>Track segment opening</a>&nbsp;&nbsp; 
                    <a href="" style={{color:"white"}}>Intraday margins</a>&nbsp;&nbsp; 
                    <a href="" style={{color:"white"}}>Kite user manual</a>&nbsp;&nbsp; 
                </div>
                <div className="col-6 px-5 mb-5">
                    <h1 className="fs-4">Featured</h1> <br />
                    <a href="" style={{color:"white"}}>1.  Current Takeovers and Delisting - January 2026</a> <br /><br />
                    <a href="" style={{color:"white"}}>2.  Latest Intraday leverages - MIS & CO</a>
                </div>
            </div>
        </section>
    )
}