import { connect } from 'mongoose';

export async function connectDB() {
  try {
    await connect('mongodb://localhost/sociya', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB is Connected');
  } catch (err) {
    console.log('Error Connecting MongoDB', err.message);
  }
}
