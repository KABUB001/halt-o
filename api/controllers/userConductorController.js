//@desc Get all conductors
//@route GET /api/users/conductors
//@access public
const getAllConductors = (req, res)=>{
    res.status(200).json({message: "Get all conductors"})
}

//@desc Create new conductor
//@route POST /api/users/conductors
//@access public
const createConductor = (req, res)=>{
    res.status(201).json({message: "Create conductor"})
}

//@desc Get conductor
//@route GET /api/users/conductors/:id
//@access public
const getConductor = (req, res)=>{
    res.status(201).json({message: `Get conductor for ${req.params.id}`});
}

//@desc Update conductor
//@route PUT /api/users/conductors/:id
//@access public
const updateConductor = (req, res)=>{
    res.status(200).json({message: `Update conductor for ${req.params.id}`});
}

//@desc Delete conductor
//@route DELETE /api/users/conductors/:id
//@access public
const deleteConductor = (req, res)=>{
    res.status(200).json({message: `Delete conductor for ${req.params.id}`})
}






module.exports = {getAllConductors, createConductor, getConductor, updateConductor, deleteConductor};