var mongoose = require('mongoose');
var postsSchema = mongoose.Schema(
    {
        title: String,
        body: String
    }
);
var Posts = mongoose.model('posts', postsSchema);
exports.Model = Posts;