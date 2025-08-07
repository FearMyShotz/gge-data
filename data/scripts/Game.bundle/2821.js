Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./415.js");
var u = createjs.Point;
var d = function (e) {
  function InfoTooltipBuilding() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.InfoTooltip_Building()) || this).dispMC.mouseChildren = false;
    t.dispMC.mouseEnabled = false;
    t.effectIcon = new Library.CastleInterfaceElements_Icons.Icon_BuildingWithEffect();
    t.relicIcon = new Library.CastleInterfaceElements_Icons.Icon_BuildingRelic();
    t._itxt_line1 = t.textFieldManager.registerTextField(t.infoToolTip.txt_line1, new r.TextVO(""));
    t._itxt_line2 = t.textFieldManager.registerTextField(t.infoToolTip.txt_line2, new r.TextVO(""));
    t._itxt_line3 = t.textFieldManager.registerTextField(t.infoToolTip.txt_line3, new r.TextVO(""));
    t.infoToolTip.addChild(t.effectIcon);
    t.infoToolTip.addChild(t.relicIcon);
    return t;
  }
  n.__extends(InfoTooltipBuilding, e);
  Object.defineProperty(InfoTooltipBuilding.prototype, "dispMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  InfoTooltipBuilding.prototype.updateMenuPosition = function () {
    var e = this.target;
    if (e && e.elementContainer) {
      var t = e.uiDisp.localToGlobal(e.getLocalDispPosTopCenter());
      var i = new u(Math.max(this._itxt_line1.textWidth, this._itxt_line2.textWidth, this._itxt_line3.textWidth), this.infoToolTip.getBounds(null).height);
      t.x = a.MathBase.clamp(t.x, i.x / 2 + 10, this.disp.stage.stageWidth - i.x / 2 - 10);
      t.y = a.MathBase.max(t.y, i.y + 30);
      this.disp.x = t.x;
      this.disp.y = t.y;
    } else {
      this.hide();
    }
  };
  Object.defineProperty(InfoTooltipBuilding.prototype, "worldLayer", {
    get: function () {
      return p.Iso.renderer.layers.transformLayer;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicIngameUIComponent.prototype, "worldLayer").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  InfoTooltipBuilding.prototype.initComponent = function () {
    this._itxt_line1.clearText();
    this._itxt_line2.clearText();
    this._itxt_line3.clearText();
    var e = this.target.vo;
    this._itxt_line1.textContentVO.stringValue = e.getInfoTooltipLine1();
    this._itxt_line2.textContentVO.stringValue = e.getInfoTooltipLine2();
    this._itxt_line3.textContentVO.stringValue = l.CastleModel.areaData.activeArea && l.CastleModel.areaData.activeArea.isMyArea ? e.getInfoTooltipLine3() : "";
    this.effectIcon.visible = s.instanceOfClass(e, "DecoBuildingVO") && e.allBuildingEffects.length > 0;
    this.effectIcon.x = -this._itxt_line1.textWidth / 2 - 30;
    this.effectIcon.y = this._itxt_line1.y + this._itxt_line1.height / 2;
    o.MovieClipHelper.scaleToFit(this.effectIcon, 30, 30);
    this.relicIcon.visible = s.instanceOfClass(e, "ABasicBuildingVO") && e.isRelicBuilding;
    this.relicIcon.x = -this._itxt_line1.textWidth / 2 - 30;
    this.relicIcon.y = this._itxt_line1.y + this._itxt_line1.height / 2;
    o.MovieClipHelper.scaleToFit(this.relicIcon, 30, 30);
  };
  Object.defineProperty(InfoTooltipBuilding.prototype, "infoToolTip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  InfoTooltipBuilding.__initialize_static_members = function () {
    InfoTooltipBuilding.NAME = "InfoTooltipBuilding";
  };
  return InfoTooltipBuilding;
}(c.BasicIngameUIComponent);
exports.InfoTooltipBuilding = d;
var p = require("./33.js");
d.__initialize_static_members();