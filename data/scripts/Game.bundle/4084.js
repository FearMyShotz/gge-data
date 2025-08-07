Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./58.js");
var l = require("./39.js");
var c = require("./1131.js");
var u = require("./4.js");
var d = require("./89.js");
var p = function (e) {
  function LostAndFoundPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LostAndFoundPanelButton, e);
  LostAndFoundPanelButton.prototype.addEventListener = function () {
    h.CastleComponent.controller.addEventListener(c.CastleLostAndFoundDataEvent.UPDATE_DATA, this.bindFunction(this.onDataUpdated));
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  LostAndFoundPanelButton.prototype.removeEventListener = function () {
    h.CastleComponent.controller.removeEventListener(c.CastleLostAndFoundDataEvent.UPDATE_DATA, this.bindFunction(this.onDataUpdated));
    e.prototype.removeEventListener.call(this);
  };
  LostAndFoundPanelButton.prototype.updateOnVisible = function () {
    e.prototype.updateOnVisible.call(this);
    var t = s.int(Math.min(u.CastleModel.lostAndFoundData.getItemAmount(), 99));
    this.setAmount(t > 0, t);
  };
  Object.defineProperty(LostAndFoundPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_lostAndFound_Relicus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LostAndFoundPanelButton.prototype.isButtonEnabled = function () {
    return u.CastleModel.userData.userLevel >= r.ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND;
  };
  LostAndFoundPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_lostAndFound";
    } else {
      return a.Localize.text(l.ClientConstTextIds.LEVEL_NEEDED, [r.ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND]);
    }
  };
  LostAndFoundPanelButton.prototype.onButtonClicked = function () {
    h.CastleComponent.dialogHandler.registerDefaultDialogs(g.LostAndFoundDialog);
  };
  LostAndFoundPanelButton.prototype.onDataUpdated = function (e) {
    this.update();
  };
  return LostAndFoundPanelButton;
}(d.APanelButton);
exports.LostAndFoundPanelButton = p;
var h = require("./14.js");
var g = require("./4085.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");