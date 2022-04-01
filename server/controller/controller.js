const { toHaveErrorMessage } = require('@testing-library/jest-dom/dist/matchers');
const bcrypt = require('bcrypt')
const User = require('../model/schema');
const jwt = require('jsonwebtoken');

exports.login = async (req,res) =>{

    try{

      
        const{email,password} = req.body

        const user = await User.findOne({email})
        if(!user)
        return res.status(406).json({err:"No account with this email"})

      
        const isMatch = await bcrypt.compare(password,user.password);

       // if (isMatch)return res.status(406).json({err:"Invalid Entry"})

       const token = jwt.sign({id : user._id},"5B8h?s'6;;wx`<j5Bc[]}]j?_/{=2Hd\9])#wGJ!Z\"!YeyEPN")

        res.json({token,username:user.username,email: user.email})

        if(!email || !password)
        return res.status(406).json({err:"Not all feild have been filled"})

    }catch(error){
        res.status(500).json({err:error.message||"Error while login"})
    }

}

exports.registerU = async (req,res) =>{
    try{

        

        let {email,password,passwordCheck,username} = req.body

        if(!email||!password||!passwordCheck)
            return res.status(406).json({err:"Not all feilds have been filled"})
        if(password !== passwordCheck)
            res.status(406).json({err:"Passwords must be the same"});

            //hash password
            const hash = await bcrypt.hashSync(password,10)

            const newUser = new User({
                email,
                password:hash,
                username
            })

            newUser
            .save(newUser)
            .then(register=>{
                res.json(register)
            })
            .catch(error =>{
                res.status(406).json({err: error.message || "something went wrong while registration"})
            })

       
    }catch(error){
        res.status(500).json({err:error.message || "Error while resgistration"})
    }
};


//delete user
exports.delete = async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.user_id)
        res.json({msg:"user Deleted Successfully"});
    }catch(error){
        res.status(500).json({err:error.message || "error while deleting user"})
    }
}