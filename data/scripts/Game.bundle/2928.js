Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./81.js");
var r = require("./4.js");
var l = require("./14.js");
var c = require("./214.js");
var u = require("./235.js");
var d = require("./187.js");
var p = require("./61.js");
var h = require("./2.js");
var g = require("./1.js");
var C = require("./73.js");
var _ = function (e) {
  function CastleBreweryProductionInfoDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleBreweryProductionInfoDialogItem, e);
  CastleBreweryProductionInfoDialogItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
  };
  CastleBreweryProductionInfoDialogItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
  };
  CastleBreweryProductionInfoDialogItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
  };
  CastleBreweryProductionInfoDialogItem.prototype.fill = function () {
    var e = this.getItemMc();
    l.CastleComponent.textFieldManager.registerTextField(e.txt_value, this.valueVO);
    l.CastleComponent.textFieldManager.registerTextField(e.txt_desc, new a.LocalizedTextVO(this.textID));
    h.MovieClipHelper.clearMovieClip(e.mc_icon);
    e.mc_icon.scaleX = e.mc_icon.scaleY = 1;
    e.mc_crest.visible = this.symbolName == "crest";
    if (this.symbolName == "crest") {
      p.CrestHelper.setCrestGraphics(e.mc_crest, r.CastleModel.userData.playerCrest);
    } else if (this.symbolName == "allianceCrest") {
      d.CastleAllianceCrestHelper.setCrestGraphics(e.mc_icon, r.CastleModel.allianceData.myAllianceVO.allianceCrestVO, u.AllianceCrestSizeEnum.XS, c.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    } else if (this.symbolName == "baron") {
      var t = r.CastleModel.lordData.getBaronByCastleId(r.CastleModel.areaData.activeAreaInfo.objectId);
      C.EquipmentIconHelper.addLordIcon(t, e.mc_icon, 30, 30);
    } else {
      var i = new (g.getDefinitionByName(this.symbolName))();
      h.MovieClipHelper.centerMovieClip(i, 30, 30, true);
      e.mc_icon.addChild(i);
    }
    this.setVisibility(true);
  };
  Object.defineProperty(CastleBreweryProductionInfoDialogItem.prototype, "symbolName", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryProductionInfoDialogItem.prototype, "valueVO", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryProductionInfoDialogItem.prototype, "textID", {
    get: function () {
      return this.data[2];
    },
    enumerable: true,
    configurable: true
  });
  return CastleBreweryProductionInfoDialogItem;
}(s.AInfiniteScrollListItem);
exports.CastleBreweryProductionInfoDialogItem = _;
o.classImplementsInterfaces(_, "ICollectableRendererList");