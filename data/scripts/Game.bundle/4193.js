Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./43.js");
var r = require("./93.js");
var l = require("./891.js");
var c = function (e) {
  function ButtonPlayerInfoComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonPlayerInfoComponent, e);
  Object.defineProperty(ButtonPlayerInfoComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonPlayerInfoComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.hasOtherPlayerInfo && !this._worldMapObjectVO.isOwnMapobject;
    this._button.visible = this._button.visible || g.instanceOfClass(this._worldMapObjectVO, "ABGAllianceTowerMapobjectVO");
  };
  ButtonPlayerInfoComponent.prototype.onClick = function () {
    if (g.instanceOfClass(this._worldMapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      if (this._worldMapObjectVO.ownerInfo.allianceID == a.CastleModel.userData.allianceID) {
        u.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(p.CastleABGTowerDetailAllianceDialog, new l.CastleABGTowerInfoDialogProperties(this._worldMapObjectVO), s.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      } else {
        u.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(h.CastleABGTowerDetailDialog, new l.CastleABGTowerInfoDialogProperties(this._worldMapObjectVO), s.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    } else if (this._worldMapObjectVO.ownerInfo) {
      u.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(d.CastlePlayerInfoDialog, new r.CastlePlayerInfoDialogProperties(this._worldMapObjectVO.ownerInfo.playerID), s.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  Object.defineProperty(ButtonPlayerInfoComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_playerInfo";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonPlayerInfoComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonPlayerInfoComponent = c;
var u = require("./9.js");
var d = require("./94.js");
var p = require("./1233.js");
var h = require("./1407.js");
o.classImplementsInterfaces(c, "IWorldMapObjectRingmenuButtonComponent");
var g = require("./1.js");