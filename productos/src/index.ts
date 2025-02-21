import express from 'express'
//mandar a llamar al principal o al controlador
// otra prueba
const app = express()
app.use(express.json())
const PORT=3001
app.get('/',(_req, res)=>{
    console.log("productos corriendo")
    res.send("microservicio producto")
})
app.listen(PORT,()=>{
  console.log(`Mi primer Servicio de Productos! ${PORT}`)
})