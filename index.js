//step1 : import json-server
const jsonServer = require('json-server')

//step2 : create an instance of jsonServer
const server = jsonServer.create()

//step3 : create middleware
const middleware = jsonServer.defaults()

//step4 : create router
const router = jsonServer.router('db.json')

//step5: use
server.use(middleware)
server.use(router)

//step6: Define Port
const PORT = 3000 || process.env.PORT

//step7: Listen
server.listen(PORT,()=>{
    console.log(`The json Server running on the Port ${PORT}`);
})