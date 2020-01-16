import { Request, Response } from 'express';
import Dev from '../models/Dev';
import parseStringAsArray from '../utils/parseStringAsArray';

export default {
  async index(req: Request, res: Response): Promise<Response> {
    const { latitude, longitude, techs } = req.query;

    const techsArr = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArr,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json(devs);
  },
};
