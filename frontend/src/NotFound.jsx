import {Link} from 'react-router-dom'

export default function NotFound(){
    return (
        <div className="container p-5 mb-4">
            <div className="row text-center"> 
                <h1 className="mt-5 fs-3">404 not found</h1>
                <p className="fs-5 text-muted fs-6">
                    Sorry the page you are looking for does not exist.    
                </p>
                <Link to="/">
                    <button className="p-2 btn btn-primary fs-5 mt-3" style={{width:"17%", margin:"0 auto"}}>
                        Go Home
                    </button>
                </Link>
            </div>
        </div>
    )
}