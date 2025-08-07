Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./18.js");
var u = require("./4.js");
var d = require("./24.js");
var p = require("./619.js");
var h = function (e) {
  function ButtonAttackCollectorComponent(t) {
    return e.call(this, t.basicButton) || this;
  }
  n.__extends(ButtonAttackCollectorComponent, e);
  ButtonAttackCollectorComponent.prototype.initAttackButton = function (t) {
    var i = this;
    e.prototype.initAttackButton.call(this, t);
    if (this._worldMapObjectVO && (this._button.disp.mouseChildren = false, this._button.disp.visible = this.isVisible, this.isVisible)) {
      a.MovieClipHelper.clearMovieClip(this._button.disp);
      var n = "CollectorRingMenueBtn_" + this.eventVO.collectInfoVO.collectorEventSkinName;
      var s = new d.CastleGoodgameExternalClip(n, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n));
      this._button.disp.addChild(s);
      s.doWhenLoaded(function (e) {
        if (i._button.enabled) {
          if (i._worldMapObjectVO.ownerInfo.level > 70 ? u.CastleModel.userData.level - i._worldMapObjectVO.ownerInfo.level > 10 + Math.max((u.CastleModel.userData.level - 70) / 2, 0) : u.CastleModel.userData.level - i._worldMapObjectVO.ownerInfo.level > 10) {
            i._button.enableButton = false;
            i._button.toolTipText = "collector_attack_restriction_tooltip";
          }
        }
        if (i._button.enabled && !i.shopEventVO) {
          i._button.enableButton = false;
          i._button.toolTipText = "errorCode_actionNotPossible";
        }
        i._button.disp.toolTipText = i._button.toolTipText;
      });
    }
  };
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "shopEventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackCollectorComponent.prototype.initNormalCastleHandling = function (t = true) {
    e.prototype.initNormalCastleHandling.call(this, true);
  };
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "isVisible", {
    get: function () {
      return this._worldMapObjectVO.areaType == l.WorldConst.AREA_TYPE_CASTLE && this.eventVO && this._worldMapObjectVO.ownerInfo.playerID != u.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  ButtonAttackCollectorComponent.prototype.onClick = function () {
    g.AttackHelper.executeAttackCommand(this._worldMapObjectVO, c.ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK, null);
  };
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_military_menu_eventAttack";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ButtonAttackComponent.prototype, "infoTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "targetMC", {
    get: function () {
      return this._button.disp;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ButtonAttackComponent.prototype, "targetMC").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonAttackCollectorComponent.prototype, "eventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_COLLECTOR);
    },
    enumerable: true,
    configurable: true
  });
  return ButtonAttackCollectorComponent;
}(p.ButtonAttackComponent);
exports.ButtonAttackCollectorComponent = h;
var g = require("./250.js");
s.classImplementsInterfaces(h, "IWorldMapObjectRingmenuButtonComponent");