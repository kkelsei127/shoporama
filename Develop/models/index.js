// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'id',
  });

// Category has many Product
Category.hasMany(Product, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
  });

// Product belongsToMany Tag (through ProductTag)
Product.belongsToMany(Tag, {
    // Define the third table needed to store the foreign keys
    through: {
      model: ProductTag,
      unique: false,
      
    },
    // Define an alias for when data is retrieved
    as: 'product_by_tag'
  });
  

// Tag belongsToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
    // Define the third table needed to store the foreign keys
    through: {
        model: ProductTag,
        unique: false
    },
    // Define an alias for when data is retrieved
    as: "tags_product"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
