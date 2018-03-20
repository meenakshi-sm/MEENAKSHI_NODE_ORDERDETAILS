var express = require("express");
var router = express.Router();
var mongodb = require("./db");

router.get("/getdata", (req, res, next) => {
  var resultArray = [];
  var database = mongodb.getData();
  database
    .find()
    .toArray((err, doc) => {
      if (doc[0] != null)
        res.json({
          resultArray: doc
        });
      else
        res.json({
          message: "No data available"
        });
    });
});

module.exports = router;
