Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./25.js");
var a = function () {
  function BasicGGSTextFieldMouseOverBehaviour() {}
  BasicGGSTextFieldMouseOverBehaviour.prototype.execute = function (e = null) {
    if (i.BasicLayoutManager.getInstance().customCursor) {
      i.BasicLayoutManager.getInstance().customCursor.hideCustomCursor();
      if (i.BasicLayoutManager.getInstance().customCursor != null) {
        i.BasicLayoutManager.getInstance().customCursor.isEnabled = false;
      }
    }
  };
  return BasicGGSTextFieldMouseOverBehaviour;
}();
exports.BasicGGSTextFieldMouseOverBehaviour = a;