Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./26.js");
var r = require("./4.js");
var l = require("./9.js");
var c = require("./556.js");
var u = require("./89.js");
var d = function (e) {
  function DistrictGachaEventPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DistrictGachaEventPanelButton, e);
  DistrictGachaEventPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshItem));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
  };
  Object.defineProperty(DistrictGachaEventPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Gacha;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DistrictGachaEventPanelButton.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshItem));
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRefreshItem));
  };
  DistrictGachaEventPanelButton.prototype.onRefreshItem = function (e = null) {
    this.update();
  };
  DistrictGachaEventPanelButton.prototype.isButtonVisible = function () {
    var e = r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_DECO_GACHA);
    return !!e && e.minLevel <= r.CastleModel.userData.level;
  };
  DistrictGachaEventPanelButton.prototype.getButtonTooltip = function () {
    return "tooltip_gachaName_GachaDeco2x2";
  };
  DistrictGachaEventPanelButton.prototype.onButtonClicked = function () {
    l.CastleDialogHandler.getInstance().registerDialogs(c.GachaEventMainDialog);
  };
  return DistrictGachaEventPanelButton;
}(u.APanelButton);
exports.DistrictGachaEventPanelButton = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");