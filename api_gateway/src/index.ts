import express from 'express'

const app = express()
app.use(express.json())
const PORT=3000
app.get('/',(_req, res)=>{
    console.log("productos corriendo")
    res.send("microservicio api_gateway")
})
app.listen(PORT,()=>{
  console.log(`Mi primer Servicio de Productos! ${PORT}`)
})
