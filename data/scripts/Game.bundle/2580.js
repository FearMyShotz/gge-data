Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./43.js");
var d = require("./8.js");
var p = require("./149.js");
var h = function (e) {
  function ListSearchAllianceItem(t) {
    var i = e.call(this, t) || this;
    d.ButtonHelper.initButtons([t], _.ClickFeedbackButtonHover, 1);
    i.itxt_allianceName = i.textFieldManager.registerTextField(t.txt_name, new c.TextVO(""));
    i.itxt_distance = i.textFieldManager.registerTextField(t.txt_distance, new l.NumberVO(0));
    i.itxt_member = i.textFieldManager.registerTextField(t.txt_member, new l.NumberVO(0));
    i.itxt_language = i.textFieldManager.registerTextField(t.txt_language, new r.LocalizedTextVO(""));
    return i;
  }
  n.__extends(ListSearchAllianceItem, e);
  ListSearchAllianceItem.prototype.customFillItem = function () {
    this.itxt_allianceName.textContentVO.stringValue = this.itemVO.listVO.allianceName;
    this.itxt_distance.textContentVO.numberValue = Math.round(this.itemVO.listVO.distance * 10) / 10;
    this.itxt_member.textContentVO.numberValue = this.itemVO.listVO.memberCount;
    this.itxt_language.textContentVO.textId = this.itemVO.listVO.allianceLanguage ? "language_native_" + this.itemVO.listVO.allianceLanguage : "dialog_allLanguages_desc";
  };
  Object.defineProperty(ListSearchAllianceItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListSearchAllianceItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ListSearchAllianceItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    g.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(C.CastleAllianceInfoDialog, new p.CastleAllianceInfoDialogProperties(this.itemVO.listVO.allianceID), u.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  return ListSearchAllianceItem;
}(a.ScrollItem);
exports.ListSearchAllianceItem = h;
var g = require("./9.js");
var C = require("./132.js");
var _ = require("./20.js");
s.classImplementsInterfaces(h, "MovieClip");