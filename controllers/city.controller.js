const controller = {
    getCities: (req,res)=>{
        res.json({
            cities: [
                {name:'Buenos Aires'},
                {name:'Paris'}
            ]
        })
    },
    postCities: ()=>{},
    deleteCities: ()=>{},
}

export default controller