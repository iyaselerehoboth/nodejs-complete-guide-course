exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{
            title: 'First Post',
            content: 'This is the first post'
        },{
            title: 'Second Post',
            content: 'This is a second post'
        }]
    });
};

exports.createPosts = (req, res, next) => {
    const title = req.body.title;
    const content =  req.body.content;
    var date = new Date();

    //create post in db
    res.status(201).json({
        message: 'Post created successfully',
        post: { 
            id: new Date().toJSON(),
            title: title,
            content: content
        }
    });
};