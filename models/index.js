//make associations between models Post, Comment, and User

const User = require('./User');
const Post = require('./Post')
const Comment = require('./Comment')


Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
    
Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});



module.exports = User;
module.exports = Comment;
module.exports = Post;