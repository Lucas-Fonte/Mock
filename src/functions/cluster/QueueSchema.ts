import { Schema, model } from 'mongoose';

const QueueSchema = new Schema({
  action: {
    type: String,
    required: true,
  },
});

export default model('queues', QueueSchema);
