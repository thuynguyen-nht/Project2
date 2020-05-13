module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
    UserId: DataTypes.STRING,
    ingredientCountUnit: DataTypes.TEXT
  });
  return Ingredient;
};