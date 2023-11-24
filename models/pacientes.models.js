import mongoose from "mongoose";

const PacientesSchema = new mongoose.Schema(
  {
    nombre: String,
    email: String,
    telefono: String
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Pacientes", PacientesSchema);