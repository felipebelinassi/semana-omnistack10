import mongoose from 'mongoose';
import PointSchema from './utils/PointSchema';

const DevSchema = new mongoose.Schema({
  name: String,
  gitHubUserName: String,
  bio: String,
  avatarUrl: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
});

const Dev = mongoose.model('Dev', DevSchema);

export default Dev;
