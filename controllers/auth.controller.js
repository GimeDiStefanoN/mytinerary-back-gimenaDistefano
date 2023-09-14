import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const controller = {
    signup: async (req, res, next)=>{
        try{
            req.body.verified_code = crypto.randomBytes(10).toString('hex');
            req.body.password = bcryptjs.hashSync(req.body.password, 10)

            const user = await User.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'User create Ok'
            })
        } catch(error){
            res.status(500).json({
                success: false,
                message: 'Error create User'
            })
        }
    },

    signin: async (req, res, next) =>{
        try{
            let user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: true},
                {new: true}
            )
            
            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    photo: user.photo
                },
                process.env.SECRET,
                {
                    expiresIn: "10h" 
                }
            )

            user.password = null;
            
            res.status(200).json({
                success:true,
                message:' Login Ok',
                response: {
                    user,
                    token
                }
            })

        }catch(error){
            res.status(500).json({
                success: false,
                message: 'Error Login User'
            })
        }
    }
}

export default controller