const { response } = require("express");
const { where } = require("sequelize");
const { Note } = require("../database/database");

exports.Addnote = async (req, res) => {
  const { blog_title, blog_description, blog_author, blog_file } = req.body;

  const addnote = await Note.create({
    blog_title,
    blog_description,
    blog_author,
    blog_file,
  });
  res.json("OK");
};

exports.Shownotes = async (req, res) => {
  const shownote = await Note.findAll().then((response) => {
    res.json(response);
  });
};
exports.Deletenote = async (req, res) => {
  const blog_id = req.params.blog_id;
  try {
    await Note.destroy({ where: { blog_id: blog_id } }).then((response) => {
      res.json("Data deleted");
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.UpdateNote = async (req, res) => {
  const { blog_title, blog_description, blog_author, blog_file } = req.body;
  console.log(req.body);
  const blog_id = req.params.blog_id;
  try {
    await Note.update(
      {
        blog_title,
        blog_description,
        blog_author,
        blog_file,
      },
      { where: { blog_id } }
    );
  } catch (error) {
    console.log(error);
  }
};
