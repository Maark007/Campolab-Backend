const { Model, DataTypes } = require("sequelize");

class Producers extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Farms, {
      foreignKey: "id_producer",
      as: "farm_producer",
    });
  }
}

module.exports = Producers;
