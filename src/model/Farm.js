const { Model, DataTypes } = require("sequelize");

class Farms extends Model {
  static init(sequelize) {
    super.init(
      {
        name_farm: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Producers, { foreignKey: "id_producer", as: "farm_producer" });
  }
}

module.exports = Farms;
