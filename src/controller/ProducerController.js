const Producer = require("../model/Producer");

module.exports = {
  async index(req, res) {
    const producers = await Producer.findAll();

    return res.json(producers);
  },
  async store(req, res) {
    const { name, email, phone } = req.body;
    const producer = await Producer.create({
      name,
      email,
      phone,
    });

    return res.json(producer);
  },
  async delete(req, res) {
    const { id } = req.params;
    const producer = await Producer.findOne({ where: { id } });

    if (!producer)
      return res.status(400).json({ error: "Produtor não encontrado." });

    await Producer.destroy({ where: { id } });
    return res.status(200).json("Produtor deletado.");
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const producer = await Producer.findOne({ where: { id } });

    if (!producer)
      return res.status(400).json({ error: "Produtor não encontrado." });

    (producer.name = !name ? producer.name : name),
      (producer.email = !email ? producer.email : email),
      (producer.phone = !phone ? producer.phone : phone);
    await producer.save();

    return res.status(200).json("Produtor atualizado.");
  },
};
