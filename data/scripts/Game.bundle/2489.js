Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./16.js");
var h = require("./2490.js");
var g = require("./102.js");
var C = require("./4.js");
var _ = require("./180.js");
var m = require("./43.js");
var f = require("./8.js");
var O = require("./34.js");
var E = require("./93.js");
var y = require("./149.js");
var b = require("./1378.js");
var D = createjs.MouseEvent;
var I = function (e) {
  function CastleAllianceDialogOverview(t) {
    var i = this;
    i._currentPage = 0;
    i._maxPage = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._scrollComponent = new v.CastleTextScrollComponent(new _.CastleTextScrollVO(i.subLayerDisp.txt_anouncement, i.subLayerDisp.mc_scrollHandle.btn_up, i.subLayerDisp.mc_scrollHandle.btn_down, i.subLayerDisp.mc_scrollHandle.btn_slider, i.subLayerDisp.mc_scrollHandle.mc_sliderLine, [i.subLayerDisp.mc_scrollHandle]));
    i._scrollComponent.invisibleOnFit = true;
    f.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_editAnouncement, i.subLayerDisp.mc_list.btn_up, i.subLayerDisp.mc_list.btn_down]);
    return i;
  }
  n.__extends(CastleAllianceDialogOverview, e);
  CastleAllianceDialogOverview.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_date, new c.LocalizedTextVO("generic_date"));
    this.itxt_anouncementTitle = this.textFieldManager.registerTextField(this.subLayerDisp.txt_anouncementTitle, new c.LocalizedTextVO("anouncement"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_chronic, new c.LocalizedTextVO("dialog_alliance_chronic"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_player, new c.LocalizedTextVO("dialog_alliance_chronic_name"));
    if (!this.itxt_anouncement) {
      this.itxt_anouncement = this.textFieldManager.registerTextField(this.subLayerDisp.txt_anouncement, new u.TextVO(" "));
      this.itxt_anouncement.selectable = true;
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_anouncementTitle, new c.LocalizedTextVO("anouncement"));
    f.ButtonHelper.enableButton(this.subLayerDisp.btn_editAnouncement, C.CastleModel.allianceData.hasRight(C.CastleModel.userData.allianceRank, s.AllianceConst.RIGHT_ANNOUNCEMENT));
    if (f.ButtonHelper.isButtonEnabled(this.subLayerDisp.btn_editAnouncement)) {
      this.subLayerDisp.btn_editAnouncement.toolTipText = "dialog_alliance_changeAnouncement";
    } else {
      this.subLayerDisp.btn_editAnouncement.toolTipText = "dialog_alliance_rankToLow";
    }
    C.CastleModel.allianceData.addEventListener(g.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, this.bindFunction(this.onActionListUpdate));
    this.subLayerDisp.mc_list.addEventListener(D.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    this.itxt_anouncement.textContentVO.stringValue = this.allianceInfoVO.anouncement;
    this._scrollComponent.onShow();
    this._scrollComponent.scrollToStart();
    C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SAllianceActionListVO());
  };
  CastleAllianceDialogOverview.prototype.hide = function () {
    this._scrollComponent.onHide();
    C.CastleModel.allianceData.removeEventListener(g.CastleAllianceDataEvent.ALLIANCE_ACTIONLIST_UPDATED, this.bindFunction(this.onActionListUpdate));
    this.subLayerDisp.mc_list.removeEventListener(D.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    e.prototype.hide.call(this);
  };
  CastleAllianceDialogOverview.prototype.onActionListUpdate = function (e) {
    this.fillActionList();
  };
  CastleAllianceDialogOverview.prototype.fillActionList = function () {
    if (this.allianceInfoVO.actionList) {
      this.initArrows(this.allianceInfoVO.actionList.length);
    }
    var e = this._currentPage * CastleAllianceDialogOverview.QUESTS_PER_PAGE;
    for (var t = 0; t < CastleAllianceDialogOverview.QUESTS_PER_PAGE; t++) {
      var i = this.subLayerDisp.mc_list["i" + t];
      i.btn_playerName.txt_playerName.mouseEnabled = true;
      f.ButtonHelper.initBasicButton(i.btn_playerName);
      if (e < this.allianceInfoVO.actionList.length) {
        var n = this.allianceInfoVO.actionList[e];
        this.textFieldManager.registerTextField(i.txt_date, new l.LocalizedDateTimeVO(n.bornDate)).autoFitToBounds = true;
        var o = n.getActionText();
        this.textFieldManager.registerTextField(i.txt_action, o);
        var a = n.playerName.indexOf("!!!_") == 0;
        var r = d.int(a ? -1 : n.playerID);
        var p = d.int(n.playerID == -1 ? n.actionValues[0] : -1);
        var h = !a;
        if (a) {
          this.textFieldManager.registerTextField(i.btn_playerName.txt_playerName, new c.LocalizedTextVO("deleted_Player")).autoFitToBounds = true;
        } else if (n.playerID == -1) {
          var g;
          switch (n.action) {
            case s.AllianceConst.TOURNAMENTREWARD:
              g = n.actionValues[2];
              r = -1;
              p = -1;
              h = false;
              break;
            case s.AllianceConst.TOURNAMENTRANK:
              g = "";
              r = -1;
              p = -1;
              h = false;
              break;
            default:
              if (!(g = n.actionValues[1])) {
                h = false;
              }
          }
          this.textFieldManager.registerTextField(i.btn_playerName.txt_playerName, new u.TextVO(g)).autoFitToBounds = true;
        } else {
          this.textFieldManager.registerTextField(i.btn_playerName.txt_playerName, new u.TextVO(n.playerName)).autoFitToBounds = true;
        }
        i.btn_playerName.playerID = r;
        i.btn_playerName.allianceID = p;
        f.ButtonHelper.enableButton(i.btn_playerName, h);
        this.changeBackgroundColor(i, n.action);
        i.visible = true;
      } else {
        i.visible = false;
        f.ButtonHelper.enableButton(i.btn_playerName, false);
      }
      e++;
    }
  };
  CastleAllianceDialogOverview.prototype.changeBackgroundColor = function (e, t) {
    var i = new o.ColorTransform();
    switch (t) {
      case s.AllianceConst.MEMBER_JOIN:
      case s.AllianceConst.MEMBER_LEFT:
      case s.AllianceConst.MEMBER_KICKED:
      case s.AllianceConst.MEMBER_NEW_LEADER:
      case s.AllianceConst.MEMBER_DEMOTE:
      case s.AllianceConst.MEMBER_PROMOTE:
        i.color = p.ClientConstColor.ALLIANCE_COLOR_MEMBER;
        break;
      case s.AllianceConst.MEMBER_DONATE_C1:
      case s.AllianceConst.MEMBER_DONATE_C2:
      case s.AllianceConst.MEMBER_DONATE_RES:
        i.color = p.ClientConstColor.ALLIANCE_COLOR_DEPOSIT;
        break;
      case s.AllianceConst.CHANGE_DIPLOMACY:
      case s.AllianceConst.GET_REQUEST_DIPLOMACY:
      case s.AllianceConst.SEND_REQUEST_DIPLOMACY:
      case s.AllianceConst.REFUSE_DIPLOMACY:
        i.color = p.ClientConstColor.ALLIANCE_COLOR_DIPLOMACY;
        break;
      case s.AllianceConst.LEVEL_DOWN:
      case s.AllianceConst.LEVEL_UP:
      case s.AllianceConst.DONATE_C1_BY_LEVELUP:
      case s.AllianceConst.DONATE_C2_BY_LEVELUP:
      case s.AllianceConst.DONATE_RES_BY_LEVELUP:
      case s.AllianceConst.MEMBER_EARN_FAME:
      case s.AllianceConst.TOURNAMENTREWARD:
      case s.AllianceConst.ALLIANCE_BATTLE_GROUND_MALUS_INCREASED:
      case s.AllianceConst.ALLIANCE_BATTLE_GROUND_OWNED_TOWER_DEFEATED:
      case s.AllianceConst.DAIMYO_ALLIANCE_CASTLE_CONTRACT_COMPLETED:
      case s.AllianceConst.DAIMYO_ALLIANCE_TOWNSHIP_CONTRACT_COMPLETED:
        i.color = p.ClientConstColor.ALLIANCE_COLOR_LEVEL;
        break;
      case s.AllianceConst.CONQUERED_CAPITAL:
      case s.AllianceConst.LOST_CAPITAL:
      case s.AllianceConst.LOOSING_CAPITAL:
        i.color = p.ClientConstColor.ALLIANCE_COLOR_PALACE;
        break;
      case s.AllianceConst.CHANGE_NAME:
      case s.AllianceConst.CHANGE_ANNOUNCEMENT:
      case s.AllianceConst.CHANGE_DESCRIPTION:
      case s.AllianceConst.UPGRADE:
      case s.AllianceConst.TOURNAMENTRANK:
      case s.AllianceConst.ALLIANCE_BATTLE_GROUND_MALUS_RESET:
      case s.AllianceConst.ALLIANCE_BATTLE_GROUND_POINTS_GAINED:
      default:
        i.color = p.ClientConstColor.ALLIANCE_COLOR_DEFAULT;
    }
    e.mc_backgroundColor.useFilters([new createjs.ColorFilter(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
  };
  CastleAllianceDialogOverview.prototype.initArrows = function (e) {
    this._maxPage = d.int((e - 1) / CastleAllianceDialogOverview.QUESTS_PER_PAGE);
    this.subLayerDisp.mc_list.btn_down.visible = this._maxPage > 0 && this._currentPage < this._maxPage;
    this.subLayerDisp.mc_list.btn_up.visible = this._maxPage > 0 && this._currentPage > 0;
  };
  CastleAllianceDialogOverview.prototype.onMouseUp = function (e) {
    if (f.ButtonHelper.isButtonEnabled(e.target)) {
      if (f.ButtonHelper.hasBasicButton(e.target)) {
        if (e.target.playerID > -1) {
          T.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(S.CastlePlayerInfoDialog, new E.CastlePlayerInfoDialogProperties(e.target.playerID), m.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        } else if (e.target.allianceID > -1) {
          T.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(A.CastleAllianceInfoDialog, new y.CastleAllianceInfoDialogProperties(e.target.allianceID), m.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        }
      }
      switch (e.target) {
        case this.subLayerDisp.btn_editAnouncement:
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleChangeAnouncementDialog, new b.CastleChangeDescriptionDialogPrpoerties(this._params[0]));
          break;
        case this.subLayerDisp.mc_list.btn_up:
        case this.subLayerDisp.mc_list.btn_down:
          this.onClickArrow(e);
      }
    }
  };
  CastleAllianceDialogOverview.prototype.onMouseWheel_0 = function (t) {
    e.prototype.onMouseOut.call(this, t);
    var i = this.subLayerDisp.txt_anouncement;
    if (t.target != i) {
      if (t.delta < 0) {
        this.scrollUp();
      } else if (t.delta > 0) {
        this.scrollDown();
      }
    }
  };
  CastleAllianceDialogOverview.prototype.showHelp = function () {
    T.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_allianceOverview"));
  };
  CastleAllianceDialogOverview.prototype.onClickArrow = function (e) {
    if (e.target == this.subLayerDisp.mc_list.btn_up) {
      this.scrollUp();
    } else {
      this.scrollDown();
    }
  };
  CastleAllianceDialogOverview.prototype.scrollUp = function () {
    var e = this._currentPage;
    this._currentPage = d.int(Math.max(0, this._currentPage - 1));
    if (e != this._currentPage) {
      this.fillActionList();
    }
  };
  CastleAllianceDialogOverview.prototype.scrollDown = function () {
    var e = this._currentPage;
    this._currentPage = d.int(Math.min(this._maxPage, this._currentPage + 1));
    if (e != this._currentPage) {
      this.fillActionList();
    }
  };
  Object.defineProperty(CastleAllianceDialogOverview.prototype, "allianceInfoVO", {
    get: function () {
      return C.CastleModel.allianceData.myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogOverview.QUESTS_PER_PAGE = 6;
  return CastleAllianceDialogOverview;
}(O.CastleDialogSubLayer);
exports.CastleAllianceDialogOverview = I;
var T = require("./9.js");
var v = require("./182.js");
var S = require("./94.js");
var A = require("./132.js");
var L = require("./2491.js");
a.classImplementsInterfaces(I, "ICollectableRendererList", "ISublayer");