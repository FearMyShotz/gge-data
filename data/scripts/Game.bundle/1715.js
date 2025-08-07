Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./1074.js");
var u = require("./4.js");
var d = require("./1716.js");
var p = createjs.Point;
var h = function (e) {
  function FactionAttackPveBox(t) {
    return e.call(this, t) || this;
  }
  n.__extends(FactionAttackPveBox, e);
  FactionAttackPveBox.prototype.show = function () {
    e.prototype.show.call(this);
    this.updateTexts();
    this.updateIcon();
  };
  FactionAttackPveBox.prototype.hide = function () {
    e.prototype.hide.call(this);
  };
  FactionAttackPveBox.prototype.onLMSUpdate = function (t) {
    e.prototype.onLMSUpdate.call(this, t);
    this.updateTexts();
    this.updateIcon();
  };
  Object.defineProperty(FactionAttackPveBox.prototype, "defaultShowMeButtonTooltip", {
    get: function () {
      if (FactionAttackPveBox.allEnemyTowersDestroyed) {
        return "dialog_faction_capital_tooltip";
      } else {
        return "dialog_faction_towers_tooltip";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AFactionAttackBox.prototype, "defaultShowMeButtonTooltip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionAttackPveBox.prototype.updateTexts = function () {
    if (FactionAttackPveBox.enemyCapitalDestroyed) {
      this.itxt_header.textContentVO.textId = "dialog_faction_capital_header";
      this.itxt_description.textContentVO.textId = "dialog_faction_capitalDestroyed_copy";
    } else if (FactionAttackPveBox.allEnemyTowersDestroyed) {
      this.itxt_header.textContentVO.textId = "dialog_faction_capital_header";
      this.itxt_description.textContentVO.textId = "dialog_faction_capital_copy";
    } else {
      this.itxt_header.textContentVO.textId = "dialog_faction_towers_header";
      this.itxt_description.textContentVO.textId = "dialog_faction_towers_copy";
    }
  };
  FactionAttackPveBox.prototype.updateIcon = function () {
    var e;
    a.MovieClipHelper.clearMovieClip(this._disp.mc_icon);
    e = FactionAttackPveBox.enemyCapitalDestroyed || FactionAttackPveBox.allEnemyTowersDestroyed ? new _.FactionCapitalMapobjectVO() : new m.FactionTowerMapobjectVO();
    var t = l.int(u.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION).otherFactionKingPlayerId);
    e.ownerInfo = u.CastleModel.otherPlayerData.getOwnerInfoVO(t);
    this._disp.mc_icon.addChild(O.WorldmapObjectIconHelper.drawMapObjectIcon(e, d.AFactionAttackBox.ICON_SIZE, true, false, false));
  };
  Object.defineProperty(FactionAttackPveBox, "allEnemyTowersDestroyed", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION).isOtherCapitalReachable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionAttackPveBox, "enemyCapitalDestroyed", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION).isOtherFactionInLMS;
    },
    enumerable: true,
    configurable: true
  });
  FactionAttackPveBox.prototype.onClickShowMe = function () {
    if (!C.FlashBlockHelper.checkFlashBlock(s.FactionConst.KINGDOM_ID)) {
      f.CastleLayoutManager.getInstance().hideDialog(E.FactionEventMainDialog);
      var e = u.CastleModel.userData.castleList.getMainCastleByKingdomID(s.FactionConst.KINGDOM_ID);
      var t = e ? e.absAreaPos : new p(0, 0);
      o.CommandController.instance.executeCommand(g.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [s.FactionConst.KINGDOM_ID, t.x, t.y]);
      u.CastleModel.smartfoxClient.sendCommandVO(new c.C2SFindNextTowerVO());
    }
  };
  return FactionAttackPveBox;
}(d.AFactionAttackBox);
exports.FactionAttackPveBox = h;
var g = require("./29.js");
var C = require("./160.js");
var _ = require("./619.js");
var m = require("./620.js");
var f = require("./17.js");
var O = require("./70.js");
var E = require("./661.js");