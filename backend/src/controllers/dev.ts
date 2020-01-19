import { Request, Response } from 'express';
import axios from 'axios';
import Dev from '../models/Dev';
import parseStringAsArray from '../utils/parseStringAsArray';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req: Request, res: Response): Promise<Response> {
    const {
      gitHubUserName, techs, latitude, longitude,
    } = req.body;

    let dev = await Dev.findOne({ gitHubUserName });

    if (!dev) {
      const gitHubUser = await axios.get(`https://api.github.com/users/${gitHubUserName}`);

      const {
        login, name = login, avatar_url, bio,
      } = gitHubUser.data;

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        gitHubUserName,
        name,
        bio,
        location,
        avatarUrl: avatar_url,
        techs: parseStringAsArray(techs),
      });
    }

    return res.json(dev);
  },
};
