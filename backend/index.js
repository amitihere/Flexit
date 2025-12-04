const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const app = express()
const salt = 10
require('dotenv').config();
const PORT = process.env.PORT
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


app.use(express.json())
app.use(cors())



app.post('/signup', async (req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(404).json({message: 'Insufficient data'})
    }

    const users = await prisma.user.findFirst({
        where: {
            OR: [
                {name:name},
                {email:email}
            ]
        }
    })
    if(users) return res.status(404).json({message: 'Already exists'})

    const hashedPass = await bcrypt.hash(password,salt)

    const userSend = await prisma.user.create({
        data: {
            name:name,
            email:email,
            password:hashedPass
        }
    })
    console.log(userSend)
    if(userSend) return res.status(200).json({message:'Successfully created'})
})


app.post('/login', async (req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(404).json({message: 'Insufficient data'})
    }

    
    const users = await prisma.user.findFirst({
        where: 
                {email:email}
    })
    if (!users) {
        return res.status(404).json({ message: 'User not found' });
      }
    const balancePass = await bcrypt.compare(password,users.password)

    if(!balancePass) return res.status(404).json({message: 'Incorrect credentials'})
    console.log('Login successful',users)
    return res.status(200).json({message: 'Successful login'})
})


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on ${PORT}`);
  });
  
