import Itinerary from '../models/Itinerary.js';

const controller = {
    getItineraries: async (req,res)=>{
        let queries = {}
        
       try{
        const allItineraries= await Itinerary.find(queries).populate('user'); //con populate me va aparecer el objeto del user dentro del itinerary
        if(allItineraries.length>0){
            return res.status(200).json({
                success: true,
                allItineraries
            })
        }
        return res.status(404).json({
            success: false,
            message: 'No Itineraries found'
        })
       }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error getting itineraries'
            })
        }
    },
    createItinerary: async(req, res)=>{
        try{
            const newItinerary = await Itinerary.create(req.body);
            return res.status(200).json({
                success: true,
                message: 'Itinerary created'
            })

        }catch(error){
            console.log(error);
            res.status(500),json({
                sucess: false,
                message: 'error creating Itinerary'
            })
        }

    },
    deleteItinerary: ()=>{

    },
}

export default controller