import React from 'react'
import PageTitleArea from '../components/Common/PageTitleArea'
import NavbarThree from '../components/Layouts/NavbarThree'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from './api/auth/[...nextauth]'

function success({ isPro }) {
  return (
    <div className="text-center">
      <NavbarThree isPro={isPro} />

      <PageTitleArea
        pageTitle="Welcome to PRO!"
        pageDescription="Your subscription has be created Successfully."
      />
    </div>
  )
}

export default success

export async function getServerSideProps({ res, req }) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    return {
      props: { isPro: true },
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
