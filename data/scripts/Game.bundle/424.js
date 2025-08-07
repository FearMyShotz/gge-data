Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./24.js");
var u = require("./8.js");
var d = createjs.MovieClip;
var p = createjs.MouseEvent;
var h = function () {
  function ABGTowerConnectionStateComponent(e, t, i = true) {
    this._size = 0;
    var o = n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
    this._size = t;
    this._clip = new c.CastleGoodgameExternalClip(e, o, null, 0, false);
    this._clip.doWhenLoaded(this.bindFunction(this.onLoaded));
    this._disp = new d();
    this._disp.mouseChildren = false;
    this._disp.addChild(this._clip);
    if (i) {
      u.ButtonHelper.initBasicButton(this._disp);
    }
  }
  ABGTowerConnectionStateComponent.prototype.onLoaded = function (e) {
    this.icon.mc_playerDead.visible = false;
    this.icon.mc_playerAlive.visible = false;
    this.icon.mc_dead.visible = false;
    this.icon.mc_alive.visible = false;
    a.MovieClipHelper.scaleToFit(this.icon, this._size, this._size);
  };
  ABGTowerConnectionStateComponent.prototype.setConnection = function (e) {
    this._connection = e;
    this._clip.doWhenLoaded(this.bindFunction(this.setConnectionLoaded));
  };
  ABGTowerConnectionStateComponent.prototype.setConnectionLoaded = function (e) {
    var t = !!this._connection && this._connection.playerName == l.CastleModel.userData.userName;
    var i = r.int(this._connection ? this._connection.status : ABGTowerConnectionStateComponent.STATE_EMPTY);
    this.icon.mc_playerDead.visible = t && i == ABGTowerConnectionStateComponent.STATE_DEFEATED;
    this.icon.mc_playerAlive.visible = t && i == ABGTowerConnectionStateComponent.STATE_ALIVE;
    this.icon.mc_dead.visible = !t && i == ABGTowerConnectionStateComponent.STATE_DEFEATED;
    this.icon.mc_alive.visible = !t && i == ABGTowerConnectionStateComponent.STATE_ALIVE;
    switch (i) {
      case ABGTowerConnectionStateComponent.STATE_ALIVE:
        this.disp.toolTipText = t ? s.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_player_tooltip", ["dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_statusAlive"]) : s.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_other_tooltip", [this._connection.playerName, "dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_statusAlive"]);
        break;
      case ABGTowerConnectionStateComponent.STATE_DEFEATED:
        this.disp.toolTipText = t ? s.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_player_tooltip", ["dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_statusDead"]) : s.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_other_tooltip", [this._connection.playerName, "dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_statusDead"]);
        break;
      case ABGTowerConnectionStateComponent.STATE_EMPTY:
        this.disp.toolTipText = s.Localize.text("dialog_beyondTheHorizon_AllianceTower_playerStatusIndicator_empty_tooltip");
    }
    var n = u.ButtonHelper.getBasicButton(this._disp);
    if (n) {
      if (i == ABGTowerConnectionStateComponent.STATE_EMPTY) {
        this._disp.removeEventListener(p.CLICK, this.bindFunction(this.onClick));
        n.mouseOverScale = 1;
      } else {
        this._disp.addEventListener(p.CLICK, this.bindFunction(this.onClick));
        n.mouseOverScale = 1.05;
      }
    }
    _.CastleMovieClipHelper.updateParentCache(this.disp);
  };
  ABGTowerConnectionStateComponent.prototype.onClick = function (e) {
    var t = new C.UnknownMapobjectVO();
    t.parseAreaInfo([this._connection.absAreaPos.x, this._connection.absAreaPos.y, this._connection.kingdomId]);
    o.CommandController.instance.executeCommand(g.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, t);
  };
  Object.defineProperty(ABGTowerConnectionStateComponent.prototype, "icon", {
    get: function () {
      return this._clip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGTowerConnectionStateComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  ABGTowerConnectionStateComponent.prototype.destroy = function () {
    this._clip.dispose();
    this._clip = null;
    this._connection = null;
  };
  ABGTowerConnectionStateComponent.TYPE_DIALOG = "ABGTowerConnectionState_Dialog2";
  ABGTowerConnectionStateComponent.TYPE_MAP = "ABGTowerConnectionState_Map2";
  ABGTowerConnectionStateComponent.SIZE_MAP = 24;
  ABGTowerConnectionStateComponent.SIZE_DIALOG = 22;
  ABGTowerConnectionStateComponent.SIZE_DIALOG_BIG = 34;
  ABGTowerConnectionStateComponent.SPACING_DIALOG = 7;
  ABGTowerConnectionStateComponent.SPACING_MAP = 5;
  ABGTowerConnectionStateComponent.STATE_ALIVE = 0;
  ABGTowerConnectionStateComponent.STATE_DEFEATED = 1;
  ABGTowerConnectionStateComponent.STATE_EMPTY = 2;
  return ABGTowerConnectionStateComponent;
}();
exports.ABGTowerConnectionStateComponent = h;
var g = require("./29.js");
var C = require("./1231.js");
var _ = require("./41.js");