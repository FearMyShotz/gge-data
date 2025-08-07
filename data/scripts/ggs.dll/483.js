Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function TestInstanceVO() {
    var t = e.call(this) || this;
    t._type = "Test";
    return t;
  }
  i.__extends(TestInstanceVO, e);
  return TestInstanceVO;
}(require("./55.js").NetworkInstance);
exports.TestInstanceVO = a;