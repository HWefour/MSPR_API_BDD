const {
  getAllBotaniste,
  getBotanisteById,
  createBotaniste,
  updateBotaniste,
  deleteBotaniste,
  getBotanisteComplet,
  getBotanisteCompletById,
} = require("../Models/Botaniste");

exports.getAllBotaniste = async (req, res) => {
  try {
    const botaniste = await getAllBotaniste();
    res.status(200).json(botaniste);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBotanisteById = async (req, res) => {
  const id = req.params.id;
  try {
    const botaniste = await getBotanisteById(id);
    res.status(200).json(botaniste);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBotaniste = async (req, res) => {
  try {
    const botaniste = await createBotaniste(req.body);
    res.status(201).json(botaniste);
  } catch (err) {
    req.status(500).json({ message: err.message });
  }
};

exports.deleteBotaniste = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteBotaniste(id);
    res.status(200).json({ message: "Le botaniste has been deleted" });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred during the suppression of botaniste ",
    });
  }
};

exports.updateBotaniste = async (req, res) => {
  const id = req.params.id;
  try {
    const botaniste = await updateBotaniste(id, req.body);
    res.status(200).json(botaniste);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBotanisteComplet = async (req, res) => {
  try {
    const botaniste = await getBotanisteComplet();
    res.status(200).json(botaniste);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBotanisteCompletById = async (req, res) => {
  const id = req.params.id;
  try {
    const botaniste = await getBotanisteCompletById(id);
    res.status(200).json(botaniste);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
