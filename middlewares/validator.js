export const validator = (schema) =>[
    (req, res, next)=>{
        const validation = schema.validate(req.body, {abortEarly:false})

        //en caso de error
        if(validation.error){
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(error => error.message)
            })
        }
        //en caso de exito
        return next()
    }
]