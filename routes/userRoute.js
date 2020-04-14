const fs =require ('fs')
const {join} = require('path')

const filePath = join (__dirname,"user.join")

const getUsers = () =>{
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    :[]
    try{
        return JSON.parse(data)
    }catch (error){
        return[]
    }
    
}
const saveUser = (user) => fs.readFileSync(filePath,JSON.stringify(user,null,'/t'))

const userRoute = (app) =>{
    app.route('/users/:id?')
    .get((req,res) => {
        const user = getUsers()

        res.send({ user})
    })
    .post((req,res) => {
        const user = getUsers()

      user.push(req.body)
      saveUser(user)

      res.status(201).send('OK')
    })
    .put((req, res) => {
        const users = getUsers()
        saveUser(users.map(user => {
            if (user.id === req.params.id) {
                return {
                    ...user,
                    ...req.body
                }
            }

            return user
        }))

        res.status(200).send('OK')
    })
    .delete((req, res) => {
        const users = getUsers()
        saveUser(users.filter(user => user.id !== req.params.id))

        res.status(200).send('OK')
    })    

}
module.exports  = userRoute