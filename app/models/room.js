var q = require("q");
var db = require("../common/database");

var conn = db.getConnection();

function addRoom(room) {
  if (room) {
    var defer = q.defer();
    var query = conn.query('INSERT INTO rooms SET ?', room, function (err, result) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(result);
      }
    });
    return defer.promise;
  }
  return false;
}

module.exports = {
  addRoom: addRoom
}