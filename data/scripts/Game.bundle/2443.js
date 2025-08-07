Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = createjs.Point;
var c = function (e) {
  function CastleTitleSelectionItem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).itxt_title = o.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_titleName, new r.LocalizedTextVO(""));
    i.itxt_title.mouseEnabled = false;
    return i;
  }
  n.__extends(CastleTitleSelectionItem, e);
  CastleTitleSelectionItem.prototype.customFillItem = function () {
    this.itxt_title.textContentVO.textId = this.selectionItemVO.title.textID;
    this.disp.background.gotoAndStop(1 + (this.selectionItemVO.selected ? 1 : 0));
    this.disp.toolTipText = this.selectionItemVO.selected ? "dialog_titleSelection_selected_tooltip" : "dialog_titleSelection_select_tooltip";
    u.CastleTitleSystemHelper.setTitleSystemIcon(this.disp.icon_titleSystem, this.selectionItemVO.title.titleSystem, CastleTitleSelectionItem.SYSTEM_ICON_DIMENSION);
  };
  Object.defineProperty(CastleTitleSelectionItem.prototype, "selectionItemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleSelectionItem.__initialize_static_members = function () {
    CastleTitleSelectionItem.SYSTEM_ICON_DIMENSION = new l(25, 21.5);
  };
  return CastleTitleSelectionItem;
}(a.ScrollItem);
exports.CastleTitleSelectionItem = c;
var u = require("./117.js");
s.classImplementsInterfaces(c, "MovieClip");
c.__initialize_static_members();