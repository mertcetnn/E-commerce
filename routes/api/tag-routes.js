const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: "ProductTag",
      },
    ],
  })
    .then((TagData) => {
      res.json(TagData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  Tag.findByPk(req.params.id, {
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: "ProductTag",
      },
    ],
  })
    .then((foundTag) => {
      res.json(foundTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag

  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one product by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tagRemoved) => {
      res.json({ message: "No post found with this id" });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
