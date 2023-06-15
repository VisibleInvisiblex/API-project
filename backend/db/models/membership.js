'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Membership.belongsTo(models.User, { foreignKey: userId})
      Membership.belongsTo(models.User, { foreignKey: userId})
    }
  }
  Membership.init({
    status: {
      type: DataTypes.ENUM('organizer', 'co-host', 'member', 'pending'),
      allowNull: false,
      validate: {
      isIn: [['Online', 'In person']]
      }
    }
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};
