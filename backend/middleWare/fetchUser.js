const jwt = require('jsonwebtoken');
const JWT_SECRET = "greatnessloading...";

const fetchUser = async(req, res, next)=>{
    //  get the user from jwt token and add it to to req Object
    const token = req.header('auth-token');
    console.log('hello')
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try {
        // here data is the data we provided to jwt during login so we are fetching that data from here 
        const data = await jwt.verify(token, JWT_SECRET);
        // data contains id and we are doing req.id = id basically 
        console.log(data)
        req.id = data.id
        next();
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }

}

module.exports = fetchUser;