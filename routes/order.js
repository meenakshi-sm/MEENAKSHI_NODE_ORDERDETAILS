var express = require("express");
var router = express.Router();
var mongo = require("mongodb");
var url = "mongodb://localhost:27017/OrderDb";

router.get("/getdata", (req, res, next) => {
  var resultArray = [];
  try {
    mongo.connect(url, (err, database) => {
      if (err) res.status(404).json({ error: err });
      else {
        var db = database.db("OrderDb");
        db
          .collection("Order Details")
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
      }
    });
  } catch (e) {
    res.json({ message: "Connectivity Error" });
  }
});

module.exports = router;
