export default function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}){
    return (
        <div className="container mt-5 px-5">
            <div className="row px-5">
                <div className="col-6 p-5">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col"></div> 
                <div className="col-5 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{textDecoration:"none",  marginLeft: "4rem"}}>Learn more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay} >
                            <img src="media\images\googlePlayBadge.svg" alt="google play" />
                        </a>
                        <a href={appStore} style={{marginLeft: "1rem"}}>
                            <img src="\media\images\appstoreBadge.svg" alt="app store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}