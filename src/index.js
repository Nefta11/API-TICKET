import app from "./app.js"
import conexion from "./db.js"

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
})