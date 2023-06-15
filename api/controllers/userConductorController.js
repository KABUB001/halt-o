//@desc Get all conductors
//@route GET /api/users/conducteurs
//@access public
const getAllConductors = (req, res)=>{
    res.status(200).json({message: "Get all conducteurs"})
}

//@desc Create new conductor
//@route POST /api/users/conducteurs
//@access public
const createConductor = (req, res)=>{
    res.status(201).json({message: "Create conducteur"})
}

//@desc Get contact
//@route GET /api/users/conducteurs/:id
//@access public
const getConductor = (req, res)=>{
    res.status(201).json({message: `Get conducteur for ${req.params.id}`});
}

//@desc Update conductor
//@route PUT /api/users/conducteurs/:id
//@access public
const updateConductor = (req, res)=>{
    res.status(200).json({message: `Update conducteur for ${req.params.id}`});
}

//@desc Delete conductor
//@route DELETE /api/users/conducteurs/:id
//@access public
const deleteConductor = (req, res)=>{
    res.status(200).json({message: `Delete conducteur for ${req.params.id}`})
}






module.exports = {getAllConductors, createConductor, getConductor, updateConductor, deleteConductor};