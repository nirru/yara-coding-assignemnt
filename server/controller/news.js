import {News} from '../models/news';
import {uploadImage} from '../utils/fileManager';

const createNews = async (req,res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'News content can not be empty'
    });
  }
  const image = await uploadImage(req.body.thumbnail);

  News.create({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    thumbnail: image.path,
    pubishDate: req.body.pubishDate
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
};

const getAllNews = (req,res) => {
  News.findAll({})
    .then(news => {
      res.json(news);
    })
    .catch(err => res.json(err));
};

module.exports = {createNews,getAllNews};