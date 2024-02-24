import User from '../models/user.model.js'

const userDAO = {}

userDAO.getAll = async() => {
    const users = await User.find()
    return users
}

userDAO.getOne = async(identify) => {
    const user = await User.findOne({id:identify})
    return user
}

userDAO.insertProduct = async(user) => {
    const userSaved = new User(user)
    userSaved.save()
    return true
}

userDAO.updateProduct = async(identify, user) =>{
    const userUpdated = await User.findOneAndUpdate({id:identify}, user)
    if(userUpdated != null){
        return true
    }else
        return false
}

userDAO.deleteProduct = async (identify) => {
    const userDeleted = await User.findOneAndDelete({id:identify})
    if(userDeleted!= null){
        return true
    }else
        return false
}

export default userDAO