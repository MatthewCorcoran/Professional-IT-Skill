const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    const token = req.header('x-access-token');

    if(!token){
        return res.status(406).json({err:"No Valid Token,Authorization declined"})
    }

    const verified = jwt.verify(token,"5B8h?s'6;;wx`<j5Bc[]}]j?_/{=2Hd\9])#wGJ!Z\"!YeyEPN")

    if(!verified)return res.status(406).json({err:"Token Could Not be Verified"})

    req.user_id = verified.id;
    next()
}

module.exports= auth