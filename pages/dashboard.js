import React, { useState } from 'react'
import { useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Services2 from '../components/Services/ServicesStyleTwo'
import NavbarThree from '../components/Layouts/NavbarThree'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import Loader from '../components/Shared/Loader'


export default function Page({ isPro }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  console.log(status)
  if (status === 'loading') {
    return <Loader loading={true} />
  }

  return (
    <>
      <NavbarThree isPro={isPro} />
      <Services2 />
    </>
  )
}

export async function getServerSideProps({ res, req }) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    const checkPro = async () => {
      const res = await axios(`${baseUrl}/api/verifySubscription`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          email: session.user.email,
        }),
      })
      // const res2 = await res.json()
      return await res.data.message
    }
    const isPro = await checkPro()
    return {
      props: { isPro },
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }
}
