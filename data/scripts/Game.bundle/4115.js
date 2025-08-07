Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./18.js");
var r = require("./92.js");
var l = require("./263.js");
var c = require("./89.js");
var u = function (e) {
  function HospitalPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HospitalPanelButton, e);
  Object.defineProperty(HospitalPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Hospital;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HospitalPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    g.CastleComponent.controller.addEventListener(r.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onRefreshItem));
  };
  HospitalPanelButton.prototype.removeEventListener = function () {
    e.prototype.addEventListener.call(this);
    g.CastleComponent.controller.removeEventListener(r.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onRefreshItem));
  };
  HospitalPanelButton.prototype.onRefreshItem = function (e) {
    this.update();
  };
  HospitalPanelButton.prototype.getButtonTooltip = function () {
    return a.Localize.text("hospital_name");
  };
  HospitalPanelButton.prototype.onButtonClicked = function () {
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleRecruitDialog, new l.CastleRecruitDialogProperties(s.ClientConstCastle.CATEGORY_HOSPITAL));
  };
  HospitalPanelButton.prototype.isButtonVisible = function () {
    return !!p.Iso.data && p.Iso.data.objects.provider.hasFunctionalBuildingByType(d.IsoObjectEnum.HOSPITAL);
  };
  HospitalPanelButton.prototype.isButtonEnabled = function () {
    return g.CastleComponent.layoutManager.isInMyCastle;
  };
  return HospitalPanelButton;
}(c.APanelButton);
exports.HospitalPanelButton = u;
var d = require("./80.js");
var p = require("./34.js");
var h = require("./9.js");
var g = require("./14.js");
var C = require("./225.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");