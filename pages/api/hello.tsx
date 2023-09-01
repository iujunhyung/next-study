import { NextApiRequest, NextApiResponse } from "next";

// 이것은 원래 handler라는 이름의 함수임

export default (req: NextApiRequest, res: NextApiResponse) => {
    const email = req.body.email;
    console.log(email);
    res.status(200).json({ 
        text: 'Hello' ,
        email: email ?? 'No email'
    });
  }