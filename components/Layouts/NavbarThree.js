import React, { Component } from 'react'
import Link from '../../utils/ActiveLink'
import { useSession, getSession, signOut, signIn } from 'next-auth/react'

class NavbarTwo extends Component {
  // Navbar
  _isMounted = false
  state = {
    display: false,
    collapsed: true,
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  componentDidMount() {
    let elementId = document.getElementById('navbar')
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { collapsed } = this.state
    const { isPro } = this.props
    const classOne = collapsed
      ? ' navbar-collapse'
      : ' navbar-collapse collapse'
    const classTwo = !collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right '

    return (
      <>
        <div id="navbar" className="navbar-area navbar-style-two">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="logo">
                  <a href="/">
                    <img src="/images/logo.png" alt="image" />
                  </a>
                </div>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>
                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item" activeClassName="active">
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/about" activeClassName="active">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">Pricing</a>
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link href="#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Pages <i className="bx bx-chevron-down"></i>
                        </a>
                      </Link>
                    </li> */}

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="others-options">
                  {isPro != true && isPro != false ? (
                    <Link href="/contact">
                      <a className="default-btn">
                        <i className="bx bxs-hot"></i> Get Started <span></span>
                      </a>
                    </Link>
                  ) : isPro == false ? (
                    <Link href="/upgrade">
                      <a className="default-btn mr-3">
                        <i className="bx bxs-hot"></i> Upgrade <span></span>
                      </a>
                    </Link>
                  ) : null}
                  {isPro == true ? (
                    <Link href="/dashboard">
                      <a className="default-btn mr-3">
                        <i className="bx bxs-hot"></i> My Account <span></span>
                      </a>
                    </Link>
                  ) : null}

                  {isPro != true && isPro != false ? (
                    <Link href="/login">
                      <a className="default-btn black-btn">
                        <i className="bx bx-log-in"></i> Sign In <span></span>
                      </a>
                    </Link>
                  ) : (
                    <a
                      onClick={() => signOut()}
                      className="default-btn black-btn"
                    >
                      <i className="bx bx-log-in"></i> Sign Out <span></span>
                    </a>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NavbarTwo
