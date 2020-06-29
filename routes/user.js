const express = require('express');
const {
    userById, 
    allUsers, 
    getUser, 
    updateUser, 
    deleteUser, 
    userPhoto,
    addFollowing,
    addFollower,
    removeFollowing,
    removeFollower,
    // followingRequest,
    findPeople,
    myFollowing,
    hasAuthorization
} = require('../controllers/user');
const { requireSignin } = require('../controllers/auth');

const router = express.Router();

router.put('/user/follow', requireSignin, addFollowing, addFollower);
router.put('/user/unfollow', requireSignin, removeFollowing, removeFollower);
// router.put('/user/followingRequest', requireSignin, followingRequest);

router.get('/users', allUsers);
router.get('/user/:userId', requireSignin, getUser);
router.put('/user/:userId', requireSignin, hasAuthorization,updateUser);
router.delete('/user/:userId', requireSignin, hasAuthorization,deleteUser);

router.get("/user/photo/:userId", userPhoto);
router.delete('/user/:userId', requireSignin, deleteUser);

router.get('/user/findpeople/:userId', requireSignin, findPeople);
router.get('/user/myfollowing/:userId', requireSignin, myFollowing);

// Any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

// Any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;