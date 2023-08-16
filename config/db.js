import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO)
    .then(()=> console.log('Batabase Conected'))
    .catch((error)=> console.log(error))