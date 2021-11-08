import { Request, Response } from "express";
const axios = require('axios')
const crypto = require('crypto')

const checkPassword = async (req: Request, res: Response) => {
  return res.send({})
};

export default checkPassword;