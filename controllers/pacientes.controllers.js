import Pacientes from "../models/pacientes.models.js";

export const getPacientes = async (req, res) => {
  const pacientes = await Pacientes.find();
  res.json(pacientes);
};

export const postPacientes = async (req, res) => {
  const pacientes = new Pacientes(req.body);
  await pacientes.save();
  return res.json(pacientes);
};

export const putPacientes = async (req, res) => {
  const updatePacientes = await Pacientes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(updatePacientes);
};


