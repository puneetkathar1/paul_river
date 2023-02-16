import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Loader from '../Shared/Loader'

const ServicesStyleTwo = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState({})
  //Call API to find project

  React.useEffect(() => {
    findProject()
  }, [])

  const findProject = async () => {
    const res = await fetch(`/api/project/listAll`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const res2 = await res.json()
    console.log(res2)
    setData(res2.data)
    if (res2) {
      setLoading(false)
    }
  }

  const inputName = async () => {
    const { value: newProject } = await Swal.fire({
      title: 'Enter your project name',
      input: 'text',
      inputLabel: 'Your project name',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      },
    })

    if (newProject) {
      //Call API to create a new project
      setLoading(true)
      const res = await fetch(`/api/project/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newProject,
        }),
      })
      const res2 = await res.json()
      if (res2.error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Project already exists!',
        })
        setLoading(false)
      }
      if (res2.message) {
        router.push(`/project/${newProject}`)
      }
    }
  }

  return (
    <section className="features-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div onClick={() => inputName()} className="col-lg-4 col-sm-6">
            <div className="features-box">
              <div className="icon">
                <i className="bx bxs-comment-add"></i>
              </div>
              <h3>Create a new project.</h3>

              <div className="back-icon">
                <i className="bx bxs-comment-add"></i>
              </div>
            </div>
          </div>

          {Object.keys(data).map((keyName, i) => (
            <Link key={i} href={`/project/${keyName}`}>
              <div key={i} className="col-lg-4 col-sm-6">
                <div className="features-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h3>{keyName}</h3>
                  <p>{data[keyName].creating}</p>

                  <div className="back-icon">
                    <i className="bx bx-file"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Loader loading={loading} />
    </section>
  )
}

export default ServicesStyleTwo
