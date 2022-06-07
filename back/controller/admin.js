import Signup from "../model/user"

export const admin= async(req,res)=>{
   const user = await Signup.find({
       // khali xodda sabai aauxa 
       // email: email yo lekhda email maatra aauxa
   }).select('-password').select('-name').exec()

   res.json(user)
}

export const singleUser= async(req,res)=>{
    const {id} = req.body
    const findSingleUser= await Signup.findById(
        id,
    )//.select('-password')
    res.json(findSingleUser)
}

export const editUser=async(req,res)=>{
    console.log(req.body)
    //desctructure
    const findandupdateuser=await Signup.findByIdAndUpdate(req.body.id,{name:req.body.name},{new:true}).exec()
    console.log(findandupdateuser)
    res.json(findandupdateuser)
}
export const hello=async(req,res)=>{
    // console.log(req)
    // console.log(req.query)
    const {user}=req.query
    console.log(user)
    const deleteUser=await Signup.findByIdAndDelete(user)
    console.log(deleteUser)
    res.status(200).send("Deleted")
}
