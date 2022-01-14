import  mongoose  from "mongoose";

const animeSchema = new mongoose.Schema({
      title: {
        type: String,
        trim: true,
        required: [true, 'Please add a anime title']
      },
      description: {
        type: String,
        required: [true, 'Please add a description']
      },
      slug: String,
      createdAt: {
        type: Date,
        default: Date.now
      },
      rating: {
        type: Number,
        min: 1,
        max: 10,
        required: [true, 'Please add a rating between 1 and 10']
      },
      
});

export default  mongoose.model('Anime',animeSchema);