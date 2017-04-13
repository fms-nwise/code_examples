const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const User = mongoose.model('User');



//Used for routes that must be authenticated.
function isAuthenticated (req, res, next){
  // if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects

  //allow all get request methods
  if (req.method === "GET"){
    return next();
  }
  if (req.isAuthenticated()){
    return next();
  }

  // if the user is not authenticated then redirect them to login page
  return res.redirect('/#login');
};
//Register the above authentication middleware
router.use('/posts', isAuthenticated);

//API for all posts
    router.get('/posts', function(req, res){
      Post.find(function(err, posts){
        if(err){
          return res.send(500, err);
        }
        return res.send(200,posts);
      });
    })
    //create a new post
    router.post('/posts', function(req, res) {
      let post = new Post();
      post.text = req.body.text;
      post.created_by = req.body.created_by;
      console.log(post);
      post.save(function(err, post) {
        if (err){
          return res.send(500, err);
        }
        return res.json(post);
      });
    })

//API for a specific post


  router.get('/posts/:id', function(req, res){
    Post.findById(req.params.id, function(err, post){
      if(err){
        res.send(err);
      }
      res.json(post);
    });
  })

  //put is used for updating data
  router.put('/posts/:id', function(req, res){
    Post.findById(req.params.id, function(err, post){
			if(err){
				res.send(err);
      }
			post.created_by = req.body.created_by;
			post.text = req.body.text;

			post.save(function(err, post){
				if(err){
					res.send(err);
        }
				res.json(post);
			});
		});
  })

  router.delete('/posts/:id', function(req, res){
    Post.remove({
			_id: req.params.id
		}, function(err) {
			if(err){
				res.send(err);
      }
			res.json("deleted :(");
		});
  })

module.exports = router;
