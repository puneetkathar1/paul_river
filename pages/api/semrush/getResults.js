require('dotenv').config()
import axios from 'axios'
import dbConnect from '../../../lib/dbConnect.ts'
import User from '../../../model/User.js'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth].js'

//var csv is the CSV file with headers
function csvJSON(csv) {
  var lines = csv.split('\n')

  var result = []

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers = lines[0].split(';')

  for (var i = 1; i < lines.length; i++) {
    var obj = {}
    var currentline = lines[i].split(';')

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }

    result.push(obj)
  }

  return result //JavaScript object
  //   return JSON.stringify(result) //JSON
}

export default async (req, res) => {
  const { keywordInput, projectName, isPro, database } = req.body
  console.log(req.body)

  const session = await unstable_getServerSession(req, res, authOptions)
  if (session.user.email) {
    //Overview
    const overview = await axios
      .get(
        `https://api.semrush.com/?type=phrase_all&key=${process.env.SEMRUSH_API}&phrase=${keywordInput}&export_columns=Dt,Db,Ph,Nq,Cp,Co,Nr&database=${database}`,
      )
      .then(async function (response) {
        // handle success
        console.log(response.data)
        const jsonData = await csvJSON(response.data)
        return await jsonData
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        return res.status(200).json({ error })
      })

    //Organic
    const organic = await axios
      .get(
        `https://api.semrush.com/?type=phrase_organic&key=${
          process.env.SEMRUSH_API
        }&phrase=${keywordInput}&export_columns=Dn,Ur,Fk,Fp&database=${database}&display_limit=${
          isPro ? '50' : '10'
        }`,
      )
      .then(async function (response) {
        // handle success
        console.log(response.data)
        const jsonData = await csvJSON(response.data)
        return await jsonData
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        return res.status(200).json({ error })
      })

    //Related
    const related = await axios
      .get(
        `https://api.semrush.com/?type=phrase_related&key=${
          process.env.SEMRUSH_API
        }&phrase=${keywordInput}&export_columns=Ph,Nq,Cp,Co,Nr,Td,Rr,Fk&database=${database}&display_limit=${
          isPro ? '50' : '10'
        }&display_sort=nq_desc&display_filter=%2B|Nq|Lt|1000`,
      )
      .then(async function (response) {
        // handle success
        console.log(response.data)
        const jsonData = await csvJSON(response.data)
        return await jsonData
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        return res.status(200).json({ error })
      })

    let str = keywordInput + ';'
    await related.map((d, i) => {
      if (i == related.length - 1) {
        str = str + d.Keyword
      } else {
        str = str + d.Keyword + ';'
      }
    })
    console.log(str)

    //Difficulty
    const difficulty = await axios
      .get(
        `https://api.semrush.com/?type=phrase_kdi&key=${process.env.SEMRUSH_API}&export_columns=Ph,Kd&phrase=${str}&database=${database}`,
      )
      .then(async function (response) {
        // handle success
        console.log(response.data)
        const jsonData = await csvJSON(response.data)
        return await jsonData
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        return res.status(200).json({ error })
      })

    //Push to DB
    await dbConnect()

    // Find user with the email
    const user = await User.findOne({
      email: session.user.email,
    })
    if (!user.projects[projectName]) {
      console.log('Project doesnt exists!')
      return res.status(200).json({ error: 'Project doesnt exists!' })
    }
    if (user.requestLeft == 0) {
      console.log('Limit Reached')
      return res.status(200).json({ error: 'Limit Reached' })
    }
    user.projects[projectName].archive.push({
      overview,
      organic,
      related,
      difficulty,
      date: new Date(),
    })
    user.requestsLeft = user.requestsLeft - 1
    user.markModified('projects')

    await user.save()

    return await res.status(200).json({
      message: 'Got Data!',
      data: user.projects[projectName],
    })
  } else {
    return res.status(400).json({ error: 'err' })
  }
}
