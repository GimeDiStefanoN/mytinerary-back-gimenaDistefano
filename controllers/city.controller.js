import Cities from '../models/City.js';

const controller = {
    getCities: async(req,res)=>{ //OBTENER TODAS LAS CIUDADES

        let queries = {}

        if(req.query.name){ //FILTRO PARA NAME
            queries.name = new RegExp(`^${req.query.name}`, 'i')
        }
        if(req.query.region){ //FILTRO PARA REGION
            queries.region = req.query.region
        }

        try{
            const allCities= await Cities.find(queries).populate('itineraries')
            if(allCities.length>0){
                return res.status(200).json({
                    success: true,
                    allCities
                })
            }
            return res.status(404).json({
                success: false,
                message: 'No cities found'
            })
        } catch{
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error getting cities'
            })
        }
    },
    getCityById: async(req, res)=>{ // OBTENER UNA CIUDAD POR ID
        try{
            const oneCity = await Cities.findById(req.params.id)

            if(oneCity){
                return res.status(200).json({
                    success: true,
                    oneCity
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Problems accessing the city'
            })
        } catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error getting city'
            })
        }
    },

    createCity: async (req,res)=>{ //CARGAR CIUDAD
        try{
            const newCity = await Cities.create(req.body);
    
            return res.status(201).json({
                success: true,
                message: 'City created'
            })
        } catch{
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error creating city'
            })
        }
    },

    updateCity: async (req,res)=>{ // MODIFICAR CIUDAD
        try{
            //findOneAndUpdate: busca elemento por algun parametro y actualiza. retorna el elemento antes de actualizarse o ya actualizado
            //findByAndUpdate: busca elemento por su ID y actualiza. retorna el elemento antes de actualizarse o ya actualizado
            //updateOne: actualiza el elemento directamente
            //updateMany: actualiza varios elementos directamente

            await Cities.updateOne({_id: req.params.id}, req.body)

            return res.status(200).json({
                success: true,
                message: 'City updated'
            })
        
        } catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error update city'
            })
        }
    },
    deleteCity: async (req,res)=>{ //BORRAR CIUDAD
        try{
            await Cities.deleteOne({_id: req.params.id})

            return res.status(200).json({
                success: true,
                message: 'City deleted'
            })
        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error delete city'
            })
        }
    },
}

export default controller