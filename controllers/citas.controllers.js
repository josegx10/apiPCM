import Citas from "../models/citas.models.js";

export const getCitas = async (req, res) => {
  const citas = await Citas.find();
  res.json(citas);
};

export const postCitas = async (req, res) => {
  const citas = new Citas(req.body);

  const existe = await Citas.exists({fecha: req.body.fecha,hora: req.body.hora});
  if(existe){
    return res.status(400).json({mensaje: 'Ya esta ocupado'})
  }
  await citas.save();
  return res.json(citas);
};

export const putCitas = async (req, res) => {
  const updateCitas = await Citas.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(updateCitas);
};

export const deleteCitas = async (req, res) => {
  const deletedTask = await Citas.findByIdAndDelete(req.params.id);
  if (!deletedTask)
    return res.status(404).json({ message: "Citas not found" });
  return res.json({
    message: "Citas Eliminate",
    result: deletedTask,
  });
};
