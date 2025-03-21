import { Outlet } from "react-router"

function Layout() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="./index.html">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link me-4 active" href="./index.html">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link me-4" href="./product.html">Product</a>
                    <a className="nav-item nav-link me-4" href="./detail.html">Detail</a>
                    <a className="nav-item nav-link" href="./cart.html"><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
        </nav>
        <Outlet/>
        <div className="bg-light py-4">
        <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
            <p className="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
            <div className="input-group w-md-50 mt-md-0 mt-3">
                <input type="text" className="form-control rounded-0" placeholder="" />
                <div className="input-group-append">
                <button className="btn btn-dark rounded-0" type="button" id="search">
                    Lorem ipsum
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="bg-dark py-5">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
            <a className="text-white h4" href="./index.html">LOGO</a>
            <ul className="d-flex list-unstyled mb-0 h4">
                <li><a href="#" className="text-white mx-3"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#" className="text-white mx-3"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" className="text-white ms-3"><i className="fab fa-line"></i></a></li>
            </ul>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
            <div className="mb-md-0 mb-1">
                <p className="mb-0">02-3456-7890</p>
                <p className="mb-0">service@mail.com</p>
            </div>
            <p className="mb-0">© 2020 LOGO All Rights Reserved.</p>
            </div>
        </div>
    </div>
    </>)
}

export default Layout