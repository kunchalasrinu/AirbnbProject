const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsyc.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedin, isReviewAuthor } = require("../middleware.js");

const reviewcontroller = require("../controllers/reviews.js");
const review = require("../models/reviews.js");

//post review Route
router.post("/", isLoggedin, validateReview, wrapAsync(reviewcontroller.createReview));
  
  //Delete Review Route
  router.delete("/:reviewId", isLoggedin, isReviewAuthor, wrapAsync(reviewcontroller.destroyReview));

module.exports = router;