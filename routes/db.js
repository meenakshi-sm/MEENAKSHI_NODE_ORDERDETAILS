var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var collection;
module.exports = {
    database: function () {
        try {
            mongo.connect(url, (err, database) => {
                if (err) res.status(404).json({ error: err });
                else {
                    var db = database.db("OrderDb");
                    collection = db.collection("Order Details");
                }
            });
        }
        catch (e) {
            res.json({ message: "Connectivity Error" });
        }
    },
    getData: function () {
        return collection;
    }
}