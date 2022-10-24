const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

//Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

// Category has many Product models.

// Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

// Tag belongs to many Product models.

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
