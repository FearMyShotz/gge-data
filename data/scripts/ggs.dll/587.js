Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = function (e) {
  function FileReference() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(FileReference, e);
  FileReference.prototype.save = function (e, t = null) {};
  return FileReference;
}(createjs.EventDispatcher);
exports.FileReference = a;