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
        pageTitle="Something went wrong!"
        pageDescription="Please try with a different card."
      />
    </div>
  )
}

export default success

export async function getServerSideProps({ res, req }) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    return {
      props: { isPro: false },
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
