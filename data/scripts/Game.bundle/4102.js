Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./37.js");
var s = require("./33.js");
var r = require("./14.js");
var l = require("./323.js");
var c = require("./357.js");
var u = require("./239.js");
var d = require("./89.js");
var p = function (e) {
  function ConstructionItemsPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ConstructionItemsPanelButton, e);
  ConstructionItemsPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
    r.CastleComponent.controller.addEventListener(a.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onRefreshItem));
  };
  Object.defineProperty(ConstructionItemsPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Constructor;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsPanelButton.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    r.CastleComponent.controller.removeEventListener(a.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onRefreshItem));
  };
  ConstructionItemsPanelButton.prototype.onRefreshItem = function (e = null) {
    this.update();
  };
  ConstructionItemsPanelButton.prototype.isButtonVisible = function () {
    return u.ConstructionItemsHelper.hasConstructorBuilding && !!s.Iso.data && r.CastleComponent.layoutManager.isInMyCastle;
  };
  ConstructionItemsPanelButton.prototype.getButtonTooltip = function () {
    return "ringmenu_building_constructor";
  };
  ConstructionItemsPanelButton.prototype.onButtonClicked = function () {
    r.CastleComponent.dialogHandler.registerDefaultDialogs(l.CastleConstructionItemsMainDialog, new c.CastleConstructionItemsMainDialogProperties());
  };
  return ConstructionItemsPanelButton;
}(d.APanelButton);
exports.ConstructionItemsPanelButton = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");