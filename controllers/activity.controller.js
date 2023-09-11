import Activity from '../models/Activity.js';

const controller = {
    getActivities: async (req,res)=>{
        let queries = {}
        
       try{
        const allActivities= await Activity.find(queries);
        if(allActivities.length>0){
            return res.status(200).json({
                success: true,
                allActivities
            })
        }
        return res.status(404).json({
            success: false,
            message: 'No Activities found'
        })
       }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error getting activities'
            })
        }
    },
    createActivity: async(req, res)=>{
        try{
            const newActivity = await Activity.create(req.body);
            return res.status(200).json({
                success: true,
                message: 'Activity created'
            })

        }catch(error){
            console.log(error);
            res.status(500),json({
                sucess: false,
                message: 'error creating Activity'
            })
        }

    },
    deleteActivity: ()=>{

    },
}

export default controller