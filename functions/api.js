/* eslint-disable no-undef */
import express, { Router } from 'express'
import cors from 'cors'
import 'dotenv/config'
import serverless from 'serverless-http'

const api = express()
const router = Router()
api.use(cors())

const PORT = 8000
const apiKey = process.env.VITE_API_KEY
console.log(apiKey, 'API_KEY')

router.get('/', async (req, res) => {
  const query = new URLSearchParams(req.query)
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${query}`
    )
    const data = await response.json()
    console.log(data)
    if (response.status == 200) {
      res.json(data)
    } else {
      res.statusCode = response.status
      res.json(data)
    }
  } catch (error) {
    res.statusCode = 500
    res.json({ code: 500, message: error })
  }
})

api.use('/.netlify/functions/api', router)
api.listen(8000, () => console.log(`Server is running on ${PORT} `))
export const handler = serverless(api)
