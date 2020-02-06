module.exports = (sequelize, DataTypes) => {
  let Burger = sequelize.define("Burger", {
    burger_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });
  return Burger;
}