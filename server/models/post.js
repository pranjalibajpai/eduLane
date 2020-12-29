import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'title',
    },   
    content: {
        type: String,
        default: 'content',
    },
    author: {
        type: String,
        required: true
    },
    hashtags: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    likes: {
        type: Number,
        default: 0
    },  
    comments: [String]
});

const Post = mongoose.model('post', postSchema);

export default Post;