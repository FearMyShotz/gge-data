Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  return function IsoHelperClass() {
    this.view = new s.IsoHelperView();
    this.data = new a.IsoHelperData();
    this.zSort = new r.IsoHelperZSort();
    this.walkmap = new o.IsoHelperWalkmap();
  };
}();
var o = require("./2040.js");
var a = require("./2041.js");
var s = require("./2821.js");
var r = require("./2823.js");
exports.IsoHelper = new n();