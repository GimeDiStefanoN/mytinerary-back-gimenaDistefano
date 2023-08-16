import User from '../models/User.js';

const controller = {
    getUsers: (req,res)=>{
        // res.json({
        //     user: 'Gimena Distefano',
    //});
    },
    createUser: async(req, res)=>{
        try{
            const newUser = await User.create(req.body);
            return res.status(200).json({
                success: true,
                message: 'User created'
            })

        }catch(error){
            console.log(error);
            res.status(500),json({
                sucess: false,
                message: 'error creating User'
            })
        }

    },
    deleteUsers: ()=>{

    },
}

export default controller