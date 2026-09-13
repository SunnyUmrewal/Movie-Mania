
import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Movie Mania
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-1 gap-2">
            


              {/* //--------------------------------------- */}
              <li className="nav-item dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Themes
              </button>

              <ul className="dropdown-menu small-dropdown-item">
                <li>
                  <a className="dropdown-item" onClick={()=>props.changeTheme("dark")} href="#">
                    Dark
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" onClick={()=>props.changeTheme("light")} href="#">
                    Light
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" onClick={()=>props.changeTheme("retro")} href="#">
                    Retro
                  </a>
                </li>
              </ul>
            </li>



          </ul>

          

        </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
