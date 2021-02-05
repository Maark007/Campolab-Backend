const Farm = require("../model/Farm");
const Producer = require("../model/Producer");

module.exports = {
  async index(req, res) {
    const { id_producer } = req.params;
    const farmProducer = await Producer.findByPk(id_producer, {
      include: { association: "farm_producer" },
    });

    if (!farmProducer)
      return res.status(400).json({ error: "Produtor não encontrado." });

    return res.json(farmProducer);
  },
  async showAll(req, res) {
    const producers = await Farm.findAll();

    return res.json(producers);
  },
  async store(req, res) {
    const { id_producer } = req.params;
    const { name_farm } = req.body;
    const hasProducer = await Producer.findByPk(id_producer);

    if (!hasProducer)
      return res.status(400).json({ error: "Produtor não encontrado." });

    const farm = await Farm.create({ name_farm, id_producer });
    return res.json(farm);
  },
};
