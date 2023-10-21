import jwt from 'jsonwebtoken'

const secret = 'family-da248796-4992-486f-97d2-d2434fc04836'

type DecodedData = {
  Enrollment: string | string[]
  Manager: string | string[]
  Student: string | string[]
  Course: string | string[]
  Class: string | string[]
  exp: number
  role: string[]
}

export const validateToken = (token: string) => {
  let isValidToken = true
  let decodedData = {} as DecodedData

  jwt.verify(token, secret, async function (err, decoded) {
    if (new Date((decoded as DecodedData)?.exp * 1000) < new Date())
      isValidToken = false

    if (err) isValidToken = false

    decodedData = decoded as DecodedData
  })

  return { isValidToken, decodedData }
}
