Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./21.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./43.js");
var g = require("./821.js");
var C = require("./8.js");
var _ = require("./93.js");
var m = require("./3703.js");
var f = createjs.MouseEvent;
var O = function (e) {
  function CastleEilandTitleItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleEilandTitleItem, e);
  CastleEilandTitleItem.prototype.show = function () {
    e.prototype.show.call(this);
    d.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleEilandTitleItem.prototype.customFillItem = function () {
    this._disp.btn_assignTitle.visible = this.titleItemVO.canAssignTitles;
    var e = this.titleItemVO.canAssignTitles && !(this.titleVO.assignmentCooldown > 0);
    C.ButtonHelper.enableButton(this._disp.btn_assignTitle, e);
    var t = p.CastleTimeStringHelper.getLongEventTimeString(this.titleVO.assignmentCooldown);
    this._disp.btn_assignTitle.toolTipText = C.ButtonHelper.isButtonEnabled(this._disp.btn_assignTitle) ? "dialog_eiland_titleMenu_title_give" : {
      t: "dialog_eiland_titleMenu_title_wait",
      p: [t]
    };
    this._disp.btn_revokeTitle.visible = this.titleItemVO.canAssignTitles && this.titleVO.isAssigned;
    this._disp.btn_revokeTitle.toolTipText = "dialog_eiland_titleMenu_title_take";
    C.ButtonHelper.enableButton(this._disp.btn_revokeTitle, this.titleItemVO.canAssignTitles && this.titleVO.isAssigned);
    this.textFieldManager.registerTextField(this._disp.txt_titleName, new l.LocalizedTextVO(this.titleVO.textID));
    if (this.titleVO.isAssigned) {
      this.textFieldManager.registerTextField(this._disp.txt_playerName, new c.TextVO(this.titleVO.currentAssignee));
    } else {
      this.textFieldManager.registerTextField(this._disp.txt_playerName, new l.LocalizedTextVO("dialog_eiland_titleMenu_title_unassigned"));
    }
    this.textFieldManager.registerTextField(this._disp.txt_description, new c.TextVO(g.CastleEilandTextComposer.generateBonusText(this.titleVO)));
    this.disp.txt_playerName.addEventListener(f.MOUSE_OVER, this.bindFunction(this.onMouseOverName));
    this.disp.txt_playerName.addEventListener(f.MOUSE_OUT, this.bindFunction(this.onMouseOutName));
  };
  CastleEilandTitleItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.disp.txt_playerName.removeEventListener(f.MOUSE_OVER, this.bindFunction(this.onMouseOverName));
    this.disp.txt_playerName.removeEventListener(f.MOUSE_OUT, this.bindFunction(this.onMouseOutName));
    d.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleEilandTitleItem.prototype.onTimerUpdate = function (e) {
    if (!C.ButtonHelper.isButtonEnabled(this.disp.btn_assignTitle) && this.titleVO.assignmentCooldown <= 0) {
      C.ButtonHelper.enableButton(this.disp.btn_assignTitle, true);
    }
    this.updateTooltip();
  };
  CastleEilandTitleItem.prototype.onMouseClick = function (t) {
    e.prototype.onMouseClick.call(this, t);
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      if (t.target == this.disp.btn_revokeTitle || t.target == this.disp.btn_assignTitle) {
        var i = t.target == this.disp.btn_revokeTitle;
        E.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleEilandAssignTitleDialog, new m.CastleEilandAssignTitleDialogProperties(this.titleVO, i));
      } else if (this.titleVO.isAssigned && t.target == this.disp.txt_playerName) {
        E.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(b.CastlePlayerInfoDialog, new _.CastlePlayerInfoDialogProperties(this.titleVO.currentAssigneePID), h.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleEilandTitleItem.prototype.updateTooltip = function () {
    var e = p.CastleTimeStringHelper.getLongEventTimeString(this.titleVO.assignmentCooldown);
    this._disp.btn_revokeTitle.toolTipText = "dialog_eiland_titleMenu_title_take";
    this._disp.btn_assignTitle.toolTipText = C.ButtonHelper.isButtonEnabled(this._disp.btn_assignTitle) ? "dialog_eiland_titleMenu_title_give" : {
      t: "dialog_eiland_titleMenu_title_wait",
      p: [e]
    };
  };
  CastleEilandTitleItem.prototype.onMouseOverName = function (e) {
    if (this.titleVO.isAssigned) {
      this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleEilandTitleItem.prototype.onMouseOutName = function (e) {
    this.layoutManager.nativeCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleEilandTitleItem.prototype, "titleVO", {
    get: function () {
      return this.titleItemVO.titleVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleItem.prototype, "titleItemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleItem.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEilandTitleItem.prototype, "layoutManager", {
    get: function () {
      return y.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandTitleItem;
}(s.ScrollItem);
exports.CastleEilandTitleItem = O;
var E = require("./9.js");
var y = require("./17.js");
var b = require("./94.js");
var D = require("./3704.js");
r.classImplementsInterfaces(O, "MovieClip");