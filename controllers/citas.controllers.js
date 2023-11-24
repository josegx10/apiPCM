import Citas from "../models/citas.models.js";

export const getCitas = async (req, res) => {
  const citas = await Citas.find();
  res.json(citas);
};

export const postCitas = async (req, res) => {
  const citas = new Citas(req.body);
  await citas.save();
  return res.json(citas);
};
