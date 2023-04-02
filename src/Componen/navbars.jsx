import { Link } from "react-router-dom";
function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Workshop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/galery">Galery</Link>
            </li>
            <li class="nav-item">
                <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
export default Navbar;