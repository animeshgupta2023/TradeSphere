export default function RightSection({
    imageURL,
    Title,
    Description,
    linkName,
}){
    return (
        <div className="container mt-5 px-5">
            <div className="row px-5 mt-5">
                <div className="col-5 p-5 ">
                    <br /><br /><br />
                    <h1 className="mt-5">{Title}</h1>
                    <p>{Description}</p>
                    <div>
                        <a href="#" style={{textDecoration:"none"}}>{linkName} <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-6 px-5">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col"></div> 
            </div>
        </div>
    )
}