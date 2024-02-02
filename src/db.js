import mongoose from "mongoose";

const conexion = mongoose.connect(process.env.CONEXION)
.then(()=>console.log("Exito en la conexion con la base de datos"))
.catch((error)=>console.log("Error al intentar conectar"))

export default conexion;