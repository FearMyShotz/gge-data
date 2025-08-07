Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./100.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./16.js");
var d = require("./4.js");
var p = require("./237.js");
var h = require("./2201.js");
var g = require("./73.js");
var C = createjs.MouseEvent;
var _ = function (e) {
  function ScrollableComboboxItemGeneralOverviewLord(t) {
    var i = e.call(this, new (l.getDefinitionByName("GeneralOverviewLordComboboxItem"))(), t) || this;
    i.disp.actLikeButton = true;
    i.disp.mouseChildren = false;
    i.disp.mc_selected.visible = i.isSelected;
    i._itxt_name = o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.txt_lordName, new c.TextVO(""), new s.InternalGGSTextFieldConfigVO(true));
    i._itxt_name.textContentVO.stringValue = i.label;
    a.MovieClipHelper.clearMovieClip(i.disp.mc_featherHolder);
    if (i.lordVO) {
      g.EquipmentIconHelper.addLordFeather(t, i.disp.mc_featherHolder, i.lordVO.isBaron ? 0.5 : 1);
      i.enableComponent(i.lordVO.isAvailableForGeneralAssignement);
      i.disp.toolTipText = i.isEnabled ? null : "dialog_equipment_lordNotAvailable";
    }
    i._clickfeedBack = new p.ClickFeedbackHoverBehaviour(i.disp);
    return i;
  }
  n.__extends(ScrollableComboboxItemGeneralOverviewLord, e);
  Object.defineProperty(ScrollableComboboxItemGeneralOverviewLord.prototype, "lordVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  ScrollableComboboxItemGeneralOverviewLord.prototype.show = function () {
    e.prototype.show.call(this);
    if (this.lordVO) {
      this.enableComponent(this.lordVO.isAvailableForGeneralAssignement);
      this._itxt_name.textContentVO.stringValue = this.label;
      this.disp.toolTipText = this.isEnabled ? null : "dialog_equipment_lordNotAvailable";
    }
    this._itxt_name.color = this.isSelected ? u.ClientConstColor.MODERN_DEFAULT : u.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    this._clickfeedBack.addEventListener();
  };
  ScrollableComboboxItemGeneralOverviewLord.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._clickfeedBack.removeEventListener();
    if (this.disp) {
      this.disp.removeEventListener(C.CLICK, this.bindFunction(this.onRollOver));
    }
  };
  ScrollableComboboxItemGeneralOverviewLord.prototype.onRollOver = function (e) {
    this._itxt_name.color = u.ClientConstColor.MODERN_DEFAULT;
  };
  ScrollableComboboxItemGeneralOverviewLord.prototype.onRollOut = function (e) {
    this._itxt_name.color = this.isSelected ? u.ClientConstColor.MODERN_DEFAULT : u.ClientConstColor.MODERN_DEFAULT_BRIGHT;
  };
  ScrollableComboboxItemGeneralOverviewLord.prototype.setSelected = function (t) {
    e.prototype.setSelected.call(this, t);
    this.disp.mc_selected.visible = this.isSelected;
    this._itxt_name.color = this.isSelected ? u.ClientConstColor.MODERN_DEFAULT : u.ClientConstColor.MODERN_DEFAULT_BRIGHT;
  };
  Object.defineProperty(ScrollableComboboxItemGeneralOverviewLord.prototype, "label", {
    get: function () {
      if (this.lordVO) {
        if (this.lordVO.isBaron) {
          var e = this.lordVO;
          if (e.lockedInCastleID >= 0 && d.CastleModel.userData.castleList.getCastleVOByID(e.lockedInCastleID) != null) {
            return d.CastleModel.userData.castleList.getCastleVOByID(e.lockedInCastleID).areaNameString;
          } else {
            return c.Localize.text("baron_toolTip_isFree");
          }
        }
        return this.lordVO.label;
      }
      return c.Localize.text("dialog_generals_overview_selectGeneral_assignNobody");
    },
    enumerable: true,
    configurable: true
  });
  return ScrollableComboboxItemGeneralOverviewLord;
}(h.AScrollableComboboxItem);
exports.ScrollableComboboxItemGeneralOverviewLord = _;
r.classImplementsInterfaces(_, "ILayoutable");