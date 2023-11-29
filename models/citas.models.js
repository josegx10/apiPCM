import mongoose from "mongoose";

const CitasSchema = new mongoose.Schema(
  {
    nombre: String,
    fecha: String,
    motivo: String,
    hora: String,
    telefono: String,
    pago: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Citas", CitasSchema);