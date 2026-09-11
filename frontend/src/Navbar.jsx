import {Link} from 'react-router-dom'

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container px-5"> 
                <div>
                    <Link className="navbar-brand mx-5" to="/">
                        <img 
                            src="media/images/logo.svg" 
                            alt="logo image" 
                            style={{width:"25%"}}
                        />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/signup">
                                    Signup
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="product">
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    )
}