Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./21.js");
var d = require("./139.js");
var p = require("./4.js");
var h = require("./2341.js");
var g = require("./24.js");
var C = require("./1318.js");
var _ = function (e) {
  function StatusIconAttackWarnings() {
    var t = this;
    t._infront = false;
    t._iconLoaded = false;
    t.hornSetup = "";
    CONSTRUCTOR_HACK;
    (t = e.call(this, StatusIconAttackWarnings.ASSET_NAME, O.ACastleStatusIcon.PRIORITY_HIGH, true) || this).allowCaching = false;
    return t;
  }
  n.__extends(StatusIconAttackWarnings, e);
  StatusIconAttackWarnings.prototype.toggleInFront = function () {
    return !!(this._infront = !this._infront);
  };
  StatusIconAttackWarnings.prototype.showLoaded = function (t = null) {
    var i = this.calculateHornSetup();
    if (i != this.hornSetup) {
      this.hornSetup = i;
      this.destroyComponents();
      this.loadIcon();
    } else {
      this.updateIcon();
    }
    e.prototype.showLoaded.call(this, t);
  };
  StatusIconAttackWarnings.prototype.updateIcon = function () {
    if (this._iconLoaded) {
      this.prepareLoadedIcon(this.hornDisp.mc_icon);
      this.updateCounters();
      this.updateTooltip();
      if (this._attackHornTimeListComponent) {
        this._attackHornTimeListComponent.update();
      } else {
        this._attackHornTimeListComponent = new h.CastleAttackHornTimeListComponent(this.hornDisp.mc_timeComponent, StatusIconAttackWarnings.PLAYER, StatusIconAttackWarnings.ALLIANCE, StatusIconAttackWarnings.ALLIANCECITY);
        this._attackHornTimeListComponent.show();
      }
    }
  };
  StatusIconAttackWarnings.prototype.calculateHornSetup = function () {
    var e = "";
    e += p.CastleModel.armyData.getRemainingAttackTimeInMilliseconds() > 0 || p.CastleModel.armyData.attacksOnPlayerCount > 0 ? StatusIconAttackWarnings.PLAYER : "";
    e += p.CastleModel.armyData.getRemainingAllyAttackTimeInMilliseconds() > 0 || p.CastleModel.armyData.attacksOnAlliesCount > 0 ? StatusIconAttackWarnings.ALLIANCE : "";
    return e += p.CastleModel.armyData.getRemainingAllianceCityAttackTimeInMilliseconds() > 0 || p.CastleModel.armyData.attacksOnAllianceCityCount > 0 ? StatusIconAttackWarnings.ALLIANCECITY : "";
  };
  StatusIconAttackWarnings.prototype.loadIcon = function () {
    s.MovieClipHelper.clearMovieClip(this.iconDisp.mc_hornHolder);
    this._iconLoaded = false;
    var e = new g.CastleGoodgameExternalClip(StatusIconAttackWarnings.ASSET_NAME + "_" + this.hornSetup, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(StatusIconAttackWarnings.ASSET_NAME), null, 0, false);
    this.iconDisp.mc_hornHolder.addChild(e);
    e.doWhenLoaded(this.bindFunction(this.onHornClipLoaded));
  };
  StatusIconAttackWarnings.prototype.onHornClipLoaded = function (e = null) {
    this.hornDisp = e.currentshownDisplayObject;
    this._iconLoaded = true;
    this.showLoaded();
  };
  StatusIconAttackWarnings.prototype.updateCounters = function () {
    var e = c.int(p.CastleModel.armyData.attacksOnPlayerCount);
    var t = c.int(p.CastleModel.armyData.attacksOnAlliesCount);
    var i = c.int(p.CastleModel.armyData.attacksOnAllianceCityCount);
    var n = this.hornDisp.mc_icon;
    if (e > 0) {
      n[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.PLAYER].visible = e > 1;
      this.textFieldManager.registerTextField(n[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.PLAYER].txt_count, new l.NumberVO(e), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    }
    if (t > 0) {
      n[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.ALLIANCE].visible = t > 1;
      this.textFieldManager.registerTextField(n[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.ALLIANCE].txt_count, new l.NumberVO(t), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    }
    if (i > 0) {
      n[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.ALLIANCECITY].visible = i > 1;
      this.textFieldManager.registerTextField(n[StatusIconAttackWarnings.COUNTER_PREFIX + StatusIconAttackWarnings.ALLIANCECITY].txt_count, new l.NumberVO(i), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    }
  };
  StatusIconAttackWarnings.prototype.updateTooltip = function () {
    var e = "";
    var t = p.CastleModel.armyData.getRemainingAttackTimeInMilliseconds();
    var i = p.CastleModel.armyData.getRemainingAllyAttackTimeInMilliseconds();
    var n = p.CastleModel.armyData.getRemainingAllianceCityAttackTimeInMilliseconds();
    var o = this.hornDisp.mc_icon;
    if (t > 0) {
      e += (e ? "\n" : "") + r.Localize.text("attackHorn_incomingAttack");
    }
    if (i > 0) {
      e += (e ? "\n" : "") + r.Localize.text("attackHorn_incomingAttack_alliance");
    }
    if (n > 0) {
      e += (e ? "\n" : "") + r.Localize.text("attackHorn_incomingAttack_allianceCity");
    }
    o.toolTipText = e;
  };
  StatusIconAttackWarnings.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    p.CastleModel.armyData.addEventListener(d.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED, this.bindFunction(this.onAttackWarningsUpdated));
  };
  StatusIconAttackWarnings.prototype.removeEventListenerForVisibility = function () {
    e.prototype.removeEventListenerForVisibility.call(this);
    p.CastleModel.armyData.removeEventListener(d.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED, this.bindFunction(this.onAttackWarningsUpdated));
  };
  StatusIconAttackWarnings.prototype.addEventListenerForShowTime = function () {
    p.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconAttackWarnings.prototype.removeEventListenerForShowTime = function () {
    p.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconAttackWarnings.prototype.onTimerUpdate = function (e) {
    this.updateTooltip();
  };
  StatusIconAttackWarnings.prototype.onAttackWarningsUpdated = function (e) {
    if (this.calculateHornSetup() != "") {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAttackWarnings.prototype.setVisibilityLoaded = function () {
    if (this.calculateHornSetup() != "") {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAttackWarnings.prototype.onClick = function () {
    e.prototype.onClick.call(this);
    if (this.hornSetup != "") {
      m.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleMovementOverviewDialog, new C.CastleMovementOverviewDialogProperties());
    } else {
      this.hide();
    }
  };
  Object.defineProperty(StatusIconAttackWarnings.prototype, "infront", {
    get: function () {
      return this._infront;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconAttackWarnings.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.destroyComponents();
  };
  StatusIconAttackWarnings.prototype.disposeLoaded = function () {
    e.prototype.disposeLoaded.call(this);
    this.destroyComponents();
  };
  StatusIconAttackWarnings.prototype.destroyComponents = function () {
    if (this._attackHornTimeListComponent) {
      this._attackHornTimeListComponent.dispose();
      this._attackHornTimeListComponent = null;
    }
  };
  StatusIconAttackWarnings.__initialize_static_members = function () {
    StatusIconAttackWarnings.ASSET_NAME = "Btn_AttackWarnings";
    StatusIconAttackWarnings.COUNTER_PREFIX = "counter_";
    StatusIconAttackWarnings.PLAYER = "P";
    StatusIconAttackWarnings.ALLIANCE = "A";
    StatusIconAttackWarnings.ALLIANCECITY = "C";
  };
  return StatusIconAttackWarnings;
}(require("./2342.js").ACustomInteractiveCastleStatusIcon);
exports.StatusIconAttackWarnings = _;
var m = require("./9.js");
var f = require("./1319.js");
var O = require("./110.js");
_.__initialize_static_members();