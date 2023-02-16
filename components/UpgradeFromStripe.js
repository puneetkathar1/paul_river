import React, { Component } from 'react'
import {
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import Swal from 'sweetalert2'
import { useSession, getSession, signOut, signIn } from 'next-auth/react'

const Upgrade = ({ clientSecret }) => {
  const { data: session, status } = useSession()


  return (
    <section className="signup-area">
      <div className="row m-0">
        <div className="col-lg-6 col-md-12 p-0">
          <div className="signup-image">
            <img src="/images/signup-bg.jpg" alt="image" />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 p-0">
          <div className="signup-content">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="signup-form">
                  <div className="logo">
                    <a href="/">
                      <img src="/images/logo.png" alt="image" />
                    </a>
                  </div>

                  <h3>Upgrade to Pro now</h3>

                  <form action="/api/create-checkout-session" method="POST">
                    <input type="hidden" name="priceId" value="price_1MOmYzISD02ap540aAaG1jt1" />

                    <button type="sybmit" className="default-btn mt-4">
                      <i className="bx bxs-hot"></i>
                      Pay - $10/monthly
                      <span></span>
                    </button>
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

export default Upgrade
