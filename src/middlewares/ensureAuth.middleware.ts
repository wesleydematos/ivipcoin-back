import {Response, NextFunction} from "express"
import jwt from "jsonwebtoken"

type DecodedJwt = {
  sub: string;
  name: string;
}

const ensureAuthMiddleware = async (req: any, res: Response, next: NextFunction) => {
  let token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      message: "Invalid token"
    })
  }

  token = token.split(' ')[1]

  const decodedtoken = jwt.decode(token) as DecodedJwt

  req.user = {
    id: decodedtoken?.sub,
    name: decodedtoken?.name
  };

  return next()
}

export {ensureAuthMiddleware}