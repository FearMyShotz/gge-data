Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./25.js");
var a = function () {
  function BasicGGSTextFieldMouseOutBehaviour() {}
  BasicGGSTextFieldMouseOutBehaviour.prototype.execute = function (e = null) {
    if (i.BasicLayoutManager.getInstance().customCursor) {
      i.BasicLayoutManager.getInstance().customCursor.showCustomCursor();
      if (i.BasicLayoutManager.getInstance().customCursor != null) {
        i.BasicLayoutManager.getInstance().customCursor.isEnabled = true;
      }
    }
  };
  return BasicGGSTextFieldMouseOutBehaviour;
}();
exports.BasicGGSTextFieldMouseOutBehaviour = a;