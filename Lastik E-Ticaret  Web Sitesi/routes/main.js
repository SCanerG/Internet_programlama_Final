const express = require('express')
const { userInfo } = require('os')
const router = express.Router()
const Post =require('../models/Post')
const User =require('../models/User')

router.get('/anasayfa',(req,res)=>{
    res.render('site2/anasayfa')
    })

router.get('/',(req,res)=>{
    res.render('site2/anasayfa')
    })
    
    router.get('/lastikler',(req,res)=>{
        Post.find({}).then(products => {
            res.render('site2/lastikler',{ products , products})
        })
        })
        router.get('/gizlilik-politikasi',(req,res)=>{
            res.render('site2/gizlilik-politikasi')
                })
                router.get('/gorusler',(req,res)=>{
                    res.render('site2/görüşler')
                        })
                        router.get('/iletisim',(req,res)=>{
                            res.render('site2/iletisim')
                                })
                                router.get('/lastikDetay',(req,res)=>{
                                    res.render('site2/lastikDetay')
                                        })
                                                router.get('/register',(req,res)=>{
                                                    res.render('site2/register')
                                                        })
                                                        router.get('/signin',(req,res)=>{
                                                            res.render('site2/signin')
                                                                })
                                                                router.get('/sorular',(req,res)=>{
                                                                    res.render('site2/sorular')
                                                                        })
                                                                router.get('/odeme',(req,res)=>{
                                                                    res.render('site2/odeme')
                                                                        })
                                                                        router.post('/users/newUser',(req,res)=>{
                                                                        User.create(req.body)    
                                                                        res.redirect('/')
                                                                        })
                                                                        
                                                        router.post('/users/login',(req,res)=>{
                                                              const    {_name,pass} =req.body
                                                              User.findOne({_name},(error,user)=> {
                                                                if(user){
                                                                    if(user.pass == pass){
                                                            res.redirect('/')
                                                                    } 
                                                                    else{
                                                                        res.redirect('/signin')

                                                                    }
                                                                }
                                                                else{
                                                                    res.redirect('/register')
                                                                }
                                                              }) 
                                                                })
                                                                        
        module.exports=router