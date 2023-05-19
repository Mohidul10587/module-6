
import mongoose from 'mongoose';
import app from './app';

const port = 5000

async function bootstrap() {

  try {

    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log('database connected')
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log('database not connected')
  }


}

bootstrap()

