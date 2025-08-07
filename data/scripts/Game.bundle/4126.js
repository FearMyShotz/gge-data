Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./89.js");
var s = createjs.Point;
var r = function (e) {
  function ActionPlaceHolderButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ActionPlaceHolderButton, e);
  Object.defineProperty(ActionPlaceHolderButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.ActionPanel_Placeholder_Icon;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ActionPlaceHolderButton.prototype.isButtonEnabled = function () {
    return false;
  };
  ActionPlaceHolderButton.prototype.isButtonVisible = function () {
    return l.CastleLayoutManager.getInstance().getPanel(c.CastleActionPanel).buttons.amountOfVisibleButtons() < 9;
  };
  Object.defineProperty(ActionPlaceHolderButton.prototype, "iconDimension", {
    get: function () {
      return new s(40, 40);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.APanelButton.prototype, "iconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ActionPlaceHolderButton.prototype.onButtonClicked = function () {};
  return ActionPlaceHolderButton;
}(a.APanelButton);
exports.ActionPlaceHolderButton = r;
var l = require("./17.js");
var c = require("./559.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");