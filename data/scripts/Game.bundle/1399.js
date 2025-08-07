Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./13.js");
var u = require("./8.js");
var d = function (e) {
  function CastleAllianceBattlegroundEventDialogRanking(t, i) {
    var n = this;
    n._defaultSearchText = "";
    n.searchName = "";
    n.isWaitingForServerMessage = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this).mainDialog = i;
    n.init();
    return n;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogRanking, e);
  CastleAllianceBattlegroundEventDialogRanking.prototype.init = function () {
    u.ButtonHelper.initButtons([this.dialogDisp.btn_search, this.dialogDisp.btn_findme], g.ClickFeedbackButton);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_findme], C.ClickFeedbackButtonBackground);
    this._highscore = new p.ModernHighscoreComponent(this.subLayerDisp.mc_list, CastleAllianceBattlegroundEventDialogRanking.MAX_VISIBLE_ITEMS, this.listItemClass, this.highscoreID, -1);
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRanking.prototype, "highscoreID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRanking.prototype, "listItemClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRanking.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._highscore.onShow();
    this._highscore.requestOwnRankFromServer();
    this.searchField = this.textFieldManager.registerTextField(this.dialogDisp.mc_find.txt_input, new l.LocalizedTextVO("dialog_highscore_search"));
    this.searchField.type = s.TextFieldType.INPUT;
    this.searchField.selectable = true;
    this._defaultSearchText = this.searchField.text;
    this.searchField.keyDown.add(this.bindFunction(this.inputKeyDown));
    this.searchField.focusIn.add(this.bindFunction(this.onFocusInSearchText));
    this.searchField.focusOut.add(this.bindFunction(this.onFocusOutSearchText));
    this.dialogDisp.mc_find.gotoAndStop(1);
    this.dialogDisp.btn_alliance.actLikeButton = true;
    this.dialogDisp.btn_player.actLikeButton = true;
    this.subLayerDisp.btn_alliance.mouseChildren = false;
    this.subLayerDisp.btn_player.mouseChildren = false;
    if (this.dialogDisp.btn_alliance.txt_text) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.txt_text, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("allianceContest")));
    }
    if (this.dialogDisp.btn_player.txt_text) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_text, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("singleplayerContest")));
    }
    if (this.dialogDisp.btn_alliance.txt_text1) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_alliance.txt_text1, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("allianceContest")));
    }
    if (this.dialogDisp.btn_player.txt_text1) {
      this.textFieldManager.registerTextField(this.dialogDisp.btn_player.txt_text1, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("singleplayerContest")));
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.searchField) {
      this.searchField.keyDown.remove(this.bindFunction(this.inputKeyDown));
      this.searchField.focusIn.remove(this.bindFunction(this.onFocusInSearchText));
      this.searchField.focusOut.remove(this.bindFunction(this.onFocusOutSearchText));
    }
    this._highscore.onHide();
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.inputKeyDown = function (e) {
    if (e.keyCode == a.Keyboard.ENTER) {
      this.onSearchButton();
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_search:
          if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
            this.searchName = this.searchField.text;
            this.requestHighscoreData(this.searchName);
            this.dialogDisp.mc_find.gotoAndStop(2);
          }
          break;
        case this.dialogDisp.btn_findme:
          this.searchName = this.findMeSearchName;
          this.requestHighscoreData(this.searchName);
          break;
        case this.dialogDisp.btn_alliance:
          this.mainDialog.setCategory(h.CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE);
          break;
        case this.dialogDisp.btn_player:
          this.mainDialog.setCategory(h.CastleAllianceBattleGroundEventDialog.TAB_RANKING_PLAYER);
      }
    }
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRanking.prototype, "findMeSearchName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRanking.prototype.onFocusInSearchText = function (e) {
    if (this.searchField.text == this._defaultSearchText) {
      this.searchField.clearText();
      this.dialogDisp.mc_find.gotoAndStop(2);
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.onFocusOutSearchText = function (e) {
    if (this.searchField.text == "") {
      this.searchField.textContentVO = new l.LocalizedTextVO("dialog_highscore_search");
      this.searchName = "";
      this.dialogDisp.mc_find.gotoAndStop(1);
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.onSearchButton = function () {
    if (this.searchField.text != "" && this.searchField.text != this._defaultSearchText) {
      this.disp.stage.focus = null;
      this.searchName = this.searchField.text.trim();
      this.requestHighscoreData(this.searchName);
      this.dialogDisp.mc_find.gotoAndStop(2);
    }
  };
  CastleAllianceBattlegroundEventDialogRanking.prototype.requestHighscoreData = function (e) {
    this._highscore.requestDataFromServer(-1, e);
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRanking.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRanking.MAX_VISIBLE_ITEMS = 7;
  return CastleAllianceBattlegroundEventDialogRanking;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleAllianceBattlegroundEventDialogRanking = d;
o.classImplementsInterfaces(d, "ICollectableRendererList", "ISublayer");
var p = require("./754.js");
var h = require("./249.js");
var g = require("./36.js");
var C = require("./121.js");