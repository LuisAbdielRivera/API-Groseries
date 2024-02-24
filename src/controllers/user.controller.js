import { compile } from 'ejs'
import userDAO from '../dao/user.dao.js'

export const getAll = (req, res) => {
    userDAO.getAll()
    .then(users=>{
        if(users != null){
            res.render('../src/views/user', {users})
        }else{
            res.json({ status: "Server unaviable" })
        }})
    .catch(err=>console.log(err))
}

export const getOne = (req, res) => {
    userDAO.getOne(req.params.identify)
    .then(user => {
        if(user != null)
            res.render('../src/views/userupdate', {user})
        else
            res.json({status:"User not found"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const insertUser = (req, res) => {
    userDAO.insertUser (req.body)
    .then(result => {
        if(result)
            res.redirect('/register/products')
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const updateUser = (req, res) => {
    userDAO.updateUser (req.params.identify, req.body)
    .then(result => {
        if(result)
            res.redirect('/register/products')
        else
            res.json({status: "Server unaviable"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const deleteUser = (req, res) => {
    userDAO.deleteUser (req.params.identify)
    .then(result => {
        if(result)
            res.redirect('/register/products')
        else
            res.json({status: "Server unaviable"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

