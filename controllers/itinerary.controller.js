import Itinerary from '../models/Itinerary.js';

const controller = {
    getItineraries: async (req, res) => {
        let queries = {}

        if (req.query.cityId) {
            queries.city = req.query.cityId
        }
        try {
            let itineraries;

            if (req.query.city === 'true') {
                itineraries = await Itinerary.find(queries)
                    .populate('city')
                    .populate('user');

                    if (itineraries.length > 0) {
                        const itinerariesWithUserData = itineraries.map((itinerary) => ({
                            ...itinerary._doc,
                            user: {
                                _id: itinerary.user._id,
                                name: itinerary.user.name,
                                photo: itinerary.user.photo,

                            },
                        }));
    
                        return res.status(200).json({
                            success: true,
                            itineraries: itinerariesWithUserData,
                        });
                    }
            } else {
                itineraries = await Itinerary.find(queries);
            }

            if (itineraries.length > 0) {
                return res.status(200).json({
                    success: true,
                    itineraries: itineraries
                })
            }

            return res.status(404).json({
                success: false,
                message: 'No Itineraries found'
            })
            // const allItineraries= await Itinerary.find(queries).populate('user', 'name lastname photo'); //(.populate('activity'))con populate me va aparecer el objeto del user,activity dentro del itinerary

            // if(allItineraries.length>0){
            //     return res.status(200).json({
            //         success: true,
            //         allItineraries
            //     })
            // }
            // return res.status(404).json({
            //     success: false,
            //     message: 'No Itineraries found'
            // })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error getting itineraries'
            })
        }
    },


    //     let queries = {}

    //     if(req.query.cityId) {
    //         queries.city = req.query.cityId
    //     }
    //    try{
    //     let itineraries;

    //     if (req.query.city === 'true') {
    //         itineraries = await Itinerary.find(queries)
    //         .populate('city')
    //         .populate('user');
    //     } else {
    //         itineraries = await Itinerary.find(queries);
    //     }

    //     if (itineraries.length > 0) {
    //         return res.status(200).json({
    //             success: true,
    //             itineraries: itineraries
    //         })
    //     }

    //     return res.status(404).json({
    //         success: false,
    //         message: 'No Itineraries found'
    //     })

    //     } catch (error) {
    //         console.log(error);
    //         return res.status(500).json({
    //             success: false,
    //             message: 'Error getting itineraries'
    //         });
    //     }
    // },

    getItinerariesbyId: async (req, res) => {
        try {
            // console.log(req.params)
            const oneItinerary = await Itinerary.findById(req.params.id)
                .populate('city')
                .populate('user');

            if (oneItinerary) {

                
                return res.status(200).json({
                    success: true,
                    itinerary: oneItinerary
                })
            }

            return res.status(404).json({
                success: false,
                message: 'No Itinerary found'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'error getting itineraries'
            })
        }
    },

    createItinerary: async (req, res) => {
        try {
            const newItinerary = await Itinerary.create(req.body);
            return res.status(200).json({
                success: true,
                message: 'Itinerary created'
            })

        } catch (error) {
            console.log(error);
            res.status(500), json({
                sucess: false,
                message: 'error creating Itinerary'
            })
        }

    },

    updateItinerary: async (req, res) => {
        try {
            await Itinerary.updateOne({ _id: req.params.id }, req.body)

            return res.status(200).json({
                success: true,
                message: 'update Itinerary'
            })
        } catch (error) {
            console.log(error);
            res.status(500), json({
                sucess: false,
                message: 'error update Itinerary'
            })
        }
    },

    deleteItinerary: async (req, res) => {
        try {
            await Itinerary.deleteOne({ _id: req.params.id })

            return res.status(200).json({
                success: true,
                message: 'delete Itinerary'
            })
        } catch (error) {
            console.log(error);
            res.status(500), json({
                sucess: false,
                message: 'error delete Itinerary'
            })
        }
    },
}

export default controller