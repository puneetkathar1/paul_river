import React, { Component } from 'react'
import Link from 'next/link'
import { useSession, signOut, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]'
import Loader from '../components/Shared/Loader'

const Login = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [email, setEmail] = React.useState()

  console.log(status)
  if (status === 'loading') {
    return <Loader loading={true} />
  }

  if (status === 'authenticated') {
    router.push('/dashboard')
  }
  return (
    <section className="login-area">
      <div className="row m-0">
        <div className="col-lg-6 col-md-12 p-0">
          <div className="login-image">
            <img src="/images/login-bg.jpg" alt="image" />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 p-0">
          <div className="login-content">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="login-form">
                  <div className="logo">
                    <a href="/">
                      <img src="/images/logo.png" alt="image" />
                    </a>
                  </div>

                  <h3>Welcome back</h3>
                  {/* <p>New to Hepro? <Link href="/signup"><a>Sign up</a></Link></p> */}

                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                      />
                    </div>

                    {/* <div className="form-group">
                                                <input type="password" placeholder="Your password" className="form-control" />
                                            </div> */}
                    <a
                      onClick={() => {
                        signIn('email', {
                          email,
                          callbackUrl: '/dashboard',
                        })
                      }}
                      className="default-btn"
                    >
                      <i className="bx bxs-hot"></i>
                      Login
                      <span></span>
                    </a>

                    {/* Connect with social links */}
                    <div className="connect-with-social">
                      <a
                        className="facebook"
                        target="_blank"
                        onClick={() => signIn('facebook')}
                      >
                        <i className="bx bxl-facebook"></i>
                        Connect with Facebook
                      </a>

                      <a
                        className="google"
                        target="_blank"
                        onClick={() => signIn('google')}
                      >
                        <i className="bx bxl-google"></i>
                        Connect with Google
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login

export async function getServerSideProps({ res, req }) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session) {
    return {
      props: {},
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/dashboard',
      },
    }
  }
}
