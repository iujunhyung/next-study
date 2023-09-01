export default function handler(req, res) {
    const email = req.body.email;
    console.log(email);
    res.status(200).json({ 
        text: 'Hello' ,
        email: email ?? 'No email'
    });
  }