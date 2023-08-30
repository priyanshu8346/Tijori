import { React, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/NoteContext';



function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
  const context = useContext(noteContext)
  const { resetNotes } = context;
  useEffect(() => {
    // eslint-disable-next-line
  }, [location]);
  const handleLogOut = () => {
    resetNotes()
    localStorage.removeItem('token');
    localStorage.removeItem('name')
    navigate("/home")
  }
  return (
    <div>
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">TIJORI</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location?.pathname === "/about" ? "" : "active"}`} to="/about" role="button">About</Link>
                </li>
              </ul>
              {!localStorage.getItem('token') ? (<form className="d-flex" role="search">
                <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link>
              </form>) : (
                <form className="d-flex" role="search">
                  <button className="btn btn-primary mx-2" role="button" disabled>
                    {localStorage.getItem('name')}
                  </button>
                  <button className="btn btn-primary mx-2" onClick={handleLogOut} role="button">
                    Log out
                  </button>
                </form>
              )
              }
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar;

