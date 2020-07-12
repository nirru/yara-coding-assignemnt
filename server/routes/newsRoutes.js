import express from 'express';
import {createNews, getAllNews} from '../controller/news';

const newsRoutes = express.Router();

newsRoutes.post('/news', createNews);
newsRoutes.get('/news', getAllNews);

module.exports = {newsRoutes};