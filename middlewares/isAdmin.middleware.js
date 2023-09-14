import User from "../models/User.js"
import jwt from 'jsonwebtoken';

export const isAdmin = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, '0ZjL957DaOCEktK6cdgPST3efMzVnWbw'); // Reemplaza 'tu_clave_secreta_del_jwt' con tu clave secreta JWT
        const userId = decoded.id;
        const user = await User.findById(userId);

        if (user) {
            if (user.rol === 'Admin') {
                return next();
            } else {
                return res.status(401).json({
                    success: false,
                    message: 'Unauthorized'
                });
            }
        } else {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
    } catch (error) {
        next(error);
    }
};


// export const isAdmin = async ( req, res, next )=>{
//     try{
//         const user = await User.findById(req.query.userId)

//         if(user.rol == 'Admin'){
//             return next()
//         }
    
//         return res.status(401).json({
//             success: false,
//             message: 'Unauthorized'
//         })
//     }catch(error){
//         next(error)
        
//     } 
// }