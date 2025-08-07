Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3998.js");
var p = require("./4.js");
var h = require("./8.js");
var g = createjs.MouseEvent;
var C = createjs.Rectangle;
var _ = function (e) {
  function AllianceHelpRequestScrollItem(t) {
    var i = e.call(this, t) || this;
    i._disp.addEventListener(g.MOUSE_DOWN, i.bindFunction(i.onMouseDown));
    i._disp.addEventListener(g.MOUSE_OUT, i.bindFunction(i.onMouseUp));
    return i;
  }
  n.__extends(AllianceHelpRequestScrollItem, e);
  AllianceHelpRequestScrollItem.prototype.customFillItem = function () {
    this.textFieldManager.registerTextField(this.disp.txt_playername, new u.TextVO(this.itemVO.allianceRequestVO.playerName));
    var e = new C(0, 0, this.disp.txt_request_type.width - 2, this.disp.txt_request_type.height - 2);
    this.textFieldManager.registerTextField(this.disp.txt_request_type, this.getTextContentByID(this.itemVO.allianceRequestVO.requestTypeId)).fitTextSizeToBounds(e);
    this.textFieldManager.registerTextField(this.disp.txt_progress, new c.LocalizedTextVO("dialog_allianceHelp_menu_counterHelpers", [this.itemVO.allianceRequestVO.progress, this.itemVO.allianceRequestVO.neededProgress]));
    this.textFieldManager.registerTextField(this.disp.btn_help.txt_help, new c.LocalizedTextVO("dialog_allianceHelp_menu_HelpButton")).autoFitToBounds = true;
    this.disp.progressbar.scaleX = this.itemVO.allianceRequestVO.progress / this.itemVO.allianceRequestVO.neededProgress;
    h.ButtonHelper.enableButton(this.disp.btn_help, !this.itemVO.allianceRequestVO.isOwnPlayer);
    this.disp.btn_help.toolTipText = this.itemVO.allianceRequestVO.isOwnPlayer ? "dialog_allianceHelp_disabled_tooltip" : null;
    this._disp.btn_help.scaleX = this._disp.btn_help.scaleY = 1;
  };
  AllianceHelpRequestScrollItem.prototype.getTextContentByID = function (e) {
    switch (e) {
      case r.AllianceConst.ALLIANCE_HELP_RECRUITMENT:
      case r.AllianceConst.ALLIANCE_HELP_LOOP_RECRUIT:
      case r.AllianceConst.ALLIANCE_HELP_RECRUITMENT_LIST:
        return new c.LocalizedTextVO("dialog_allianceHelp_recruitUnits");
      case r.AllianceConst.ALLIANCE_HELP_HEAL_UNIT:
        return new c.LocalizedTextVO("dialog_allianceHelp_healUnits");
      case r.AllianceConst.ALLIANCE_HELP_REPAIR:
        return new c.LocalizedTextVO("dialog_allianceHelp_repairBuildings");
      case r.AllianceConst.ALLIANCE_HELP_BUILD:
        return new c.LocalizedTextVO("ringmenu_allianceHelp_reduceConstructionTime");
    }
    return null;
  };
  AllianceHelpRequestScrollItem.prototype.onMouseClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onMouseClick.call(this, t);
      if (t.target == this.disp.btn_help) {
        h.ButtonHelper.enableButton(t.target, false);
        p.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceHelpConfirmedVO(this.itemVO.allianceRequestVO.listID, l.WorldDessert.KINGDOM_ID));
      }
    }
  };
  AllianceHelpRequestScrollItem.prototype.onMouseDown = function (e) {
    if (e.target == this.disp.btn_help) {
      this._disp.btn_help.scaleX = this._disp.btn_help.scaleY = 0.85;
    }
  };
  AllianceHelpRequestScrollItem.prototype.onMouseUp = function (e) {
    if (e.target == this.disp.btn_help) {
      this._disp.btn_help.scaleX = this._disp.btn_help.scaleY = 1;
    }
  };
  AllianceHelpRequestScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this._disp.removeEventListener(g.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener(g.MOUSE_OUT, this.bindFunction(this.onMouseUp));
  };
  Object.defineProperty(AllianceHelpRequestScrollItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceHelpRequestScrollItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return AllianceHelpRequestScrollItem;
}(a.ScrollItem);
exports.AllianceHelpRequestScrollItem = _;
s.classImplementsInterfaces(_, "MovieClip");