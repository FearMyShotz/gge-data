Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./57.js");
var p = require("./153.js");
var h = require("./40.js");
var g = require("./1028.js");
var C = require("./8.js");
var _ = function (e) {
  function AAutoRecruitmentCopyListItemVE(t) {
    var i = this;
    i._onSelectionChanged = new d.Signal();
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._checkButton = t.getChildByName("btn_select");
    C.ButtonHelper.initBasicButton(i._checkButton);
    i.changeSelection(false, false, false);
    return i;
  }
  n.__extends(AAutoRecruitmentCopyListItemVE, e);
  AAutoRecruitmentCopyListItemVE.prototype.assignNewData = function (e) {
    this._vo = e;
    this.updateSelectButton();
    this.updateGreyOut();
    this.updateKingdomSymbol();
    this.applyNewVO();
  };
  AAutoRecruitmentCopyListItemVE.prototype.updateSelectButton = function (e = false) {
    this.changeSelection(!!this.vo && this.vo.isSelected, e, false);
  };
  AAutoRecruitmentCopyListItemVE.prototype.updateKingdomSymbol = function () {
    var e = u.int(this.vo ? this.vo.kingdomId : l.WorldClassic.KINGDOM_ID);
    var t = new a.ColorTransform();
    t.color = p.KingdomEnum.getTypeById(e).symbolBgColor;
    this.disp.mc_kingdom.mc_color.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
  };
  AAutoRecruitmentCopyListItemVE.prototype.updateGreyOut = function () {
    var e = !this.vo || !this.vo.hasError;
    var t = u.int(this.vo ? this.vo.errorId : r.ERROR.ALL_OK);
    this.enableComponent(e);
    C.ButtonHelper.enableButton(this.disp, !e);
    this.disp.mouseChildren = e;
    this.disp.toolTipText = this.getErrorToolTipTextId(t);
  };
  AAutoRecruitmentCopyListItemVE.prototype.applyNewVO = function () {};
  AAutoRecruitmentCopyListItemVE.prototype.changeSelection = function (e, t = true, i = true) {
    this._checkButton.gotoAndStop(Object(e ? 2 : 1));
    this._checkButton.toolTipText = e ? "dialog_copyQueue_deselect" : "dialog_copyQueue_select";
    if (this.vo) {
      this.vo.isSelected = e;
    }
    if (t && e && g.AutoRecruitmentHelper.isEventKingdom(this.vo.kingdomId) && g.AutoRecruitmentHelper.getRemainingEventKingdomTime(this.vo.kingdomId) < this.vo.recruitmentTime) {
      m.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_warning"), c.Localize.text(this.eventTimeWarningTextId)));
    }
    if (i) {
      this.onSelectionChanged.dispatch();
    }
  };
  Object.defineProperty(AAutoRecruitmentCopyListItemVE.prototype, "eventTimeWarningTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AAutoRecruitmentCopyListItemVE.prototype.getErrorToolTipTextId = function (e) {
    switch (e) {
      case r.ERROR.TOO_MUCH_UNITS:
        return "dialog_copyQueue_disabled_tooManyUnits";
      case r.ERROR.NOT_ENOUGH_RESOURCES:
        return "dialog_copyQueue_disabled_resources";
      default:
        return "";
    }
  };
  AAutoRecruitmentCopyListItemVE.prototype.onClick = function (e) {
    if (C.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.btn_select:
          this.changeSelection(!this.vo.isSelected);
      }
    }
  };
  Object.defineProperty(AAutoRecruitmentCopyListItemVE.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAutoRecruitmentCopyListItemVE.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return AAutoRecruitmentCopyListItemVE;
}(h.CastleItemRenderer);
exports.AAutoRecruitmentCopyListItemVE = _;
s.classImplementsInterfaces(_, "ICollectableRendererList");
var m = require("./9.js");
var f = require("./38.js");