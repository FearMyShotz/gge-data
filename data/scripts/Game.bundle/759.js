Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./938.js");
var C = require("./735.js");
var _ = require("./4.js");
var m = require("./737.js");
var f = require("./738.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./2604.js");
var b = function (e) {
  function CastleFriendListDialog() {
    var t = this;
    t.searchIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleFriendListDialog.NAME) || this;
  }
  n.__extends(CastleFriendListDialog, e);
  CastleFriendListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    O.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.info_btn, this.dialogDisp.btn_up, this.dialogDisp.btn_down, this.dialogDisp.btnSearch]);
    this.searchField = this.textFieldManager.registerTextField(this.dialogDisp.searchField, new d.LocalizedTextVO("dialog_friendsList_search"));
    this.searchField.type = r.TextFieldType.INPUT;
    this.searchField.textContentDefaultVO = new d.LocalizedTextVO("dialog_friendsList_search");
    this.searchField.multiline = false;
    this.defaultSearchText = this.searchField.text.toLowerCase();
    this.dialogDisp.friendCounter.toolTipText = "dialog_friendsList_friends_tooltip";
    this.dialogDisp.friendCounter.mouseChildren = false;
    this.dialogDisp.onlineCounter.toolTipText = "dialog_friendsList_onlineFriends_tooltip";
    this.dialogDisp.onlineCounter.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.header.text, new d.LocalizedTextVO("dialog_friendsList_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.friendsLabel, new d.LocalizedTextVO("friends"));
    this.textFriendCounter = this.textFieldManager.registerTextField(this.dialogDisp.friendCounter.text, new d.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, c.PlayerConst.PLAYER_MAX_FRIEND_CONNECTIONS]));
    this.textFieldManager.registerTextField(this.dialogDisp.onlineLabel, new d.LocalizedTextVO("dialog_friendsList_onlineFriends"));
    this.textOnlineCounter = this.textFieldManager.registerTextField(this.dialogDisp.onlineCounter.text, new p.NumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.friends_list_top.playername, new d.LocalizedTextVO("dialog_alliance_chronic_name"));
    this.textFieldManager.registerTextField(this.dialogDisp.friends_list_top.level, new d.LocalizedTextVO("level")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.friends_list_top.online, new d.LocalizedTextVO("dialog_friendsList_connection")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.friends_list_top.alliance, new d.LocalizedTextVO("dialog_alliance_name_default"));
    this.setUpList();
  };
  CastleFriendListDialog.prototype.updateDialog = function () {
    var e = _.CastleModel.friendListData.friendList;
    var t = e.length;
    var i = 0;
    var n = 0;
    e.sort(y.FriendListScrollItemComparer.compareOnline);
    if (this._itemScrollList) {
      this._itemScrollList.clear();
    } else {
      this._itemScrollList = new I.SliderItemScrollList(this.dialogDisp, this.dialogDisp);
      this._itemScrollList.scrollItemClass = v.FriendListScrollItem;
    }
    for (var o = 0; o < t; o++) {
      var a = e[o];
      if (a.isOnline) {
        n++;
      }
      if (!a.viaReferAFriend) {
        i++;
      }
      this._itemScrollList.pushContent(a);
    }
    this.textFriendCounter.textContentVO.textReplacements = [i, c.PlayerConst.PLAYER_MAX_FRIEND_CONNECTIONS];
    this.textOnlineCounter.textContentVO.numberValue = n;
    if (t > 0) {
      var s = new f.CastleTableSorter();
      s.init(this._itemScrollList.voList, this.bindFunction(this.onMemberListSortingChanged), this.createSorters());
      s.forceSort(this.defaultSorter);
      s.show();
    }
    this.hideArrows();
    this._itemScrollList.initList();
  };
  CastleFriendListDialog.prototype.onSearchKeyDown = function (e) {
    this.searchIndex = 0;
    if (e.key == s.Keyboard.ENTER) {
      document.activeElement.blur();
      this.checkSearchField();
    }
  };
  CastleFriendListDialog.prototype.checkSearchField = function () {
    var e = this.searchField.text.trim().toLowerCase();
    if (e != "" && e != this.defaultSearchText) {
      this.search(e);
    }
  };
  CastleFriendListDialog.prototype.search = function (e) {
    var t = this._itemScrollList.voList || [];
    for (var i = h.int(t.length), n = [], a = 0; a < i; a++) {
      var s = t[a];
      if (s.playerName.toLowerCase().indexOf(e) > -1) {
        n.push(a);
        s.highlight = true;
      } else {
        s.highlight = false;
      }
    }
    var r = n.length;
    if (r > 0) {
      var l = h.int(n[this.searchIndex]);
      this.searchIndex++;
      if (this.searchIndex > r - 1) {
        this.searchIndex = 0;
      }
      this._itemScrollList.initList(l);
    } else {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties("generic_alert_watchout", "alert_friendNotFound_desc"));
    }
  };
  CastleFriendListDialog.prototype.setUpList = function () {
    this.dialogDisp.friends_list_top.playername.mouseEnabled = false;
    this.dialogDisp.friends_list_top.level.mouseEnabled = false;
    this.dialogDisp.friends_list_top.online.mouseEnabled = false;
    this.dialogDisp.friends_list_top.alliance.mouseEnabled = false;
    this.dialogDisp.friends_list_top.distanceIcon.mouseEnabled = false;
    this.dialogDisp.friends_list_top.mightIcon.mouseEnabled = false;
    this.dialogDisp.friends_list_top.playernameSlot.actLikeButton = true;
    this.dialogDisp.friends_list_top.levelSlot.actLikeButton = true;
    this.dialogDisp.friends_list_top.onlineSlot.actLikeButton = true;
    this.dialogDisp.friends_list_top.allianceSlot.actLikeButton = true;
    this.dialogDisp.friends_list_top.distanceSlot.actLikeButton = true;
    this.dialogDisp.friends_list_top.mightSlot.actLikeButton = true;
    this.dialogDisp.friends_list_top.playernameSlot.arrows = this.dialogDisp.friends_list_top.playernameArrows;
    this.dialogDisp.friends_list_top.levelSlot.arrows = this.dialogDisp.friends_list_top.levelArrows;
    this.dialogDisp.friends_list_top.onlineSlot.arrows = this.dialogDisp.friends_list_top.onlineArrows;
    this.dialogDisp.friends_list_top.allianceSlot.arrows = this.dialogDisp.friends_list_top.allianceArrows;
    this.dialogDisp.friends_list_top.distanceSlot.arrows = this.dialogDisp.friends_list_top.distanceArrows;
    this.dialogDisp.friends_list_top.mightSlot.arrows = this.dialogDisp.friends_list_top.mightArrows;
  };
  CastleFriendListDialog.prototype.hideArrows = function () {
    this.dialogDisp.friends_list_top.playernameArrows.visible = false;
    this.dialogDisp.friends_list_top.levelArrows.visible = false;
    this.dialogDisp.friends_list_top.onlineArrows.visible = false;
    this.dialogDisp.friends_list_top.allianceArrows.visible = false;
    this.dialogDisp.friends_list_top.distanceArrows.visible = false;
    this.dialogDisp.friends_list_top.mightArrows.visible = false;
  };
  CastleFriendListDialog.prototype.createSorters = function () {
    var e = [];
    e.push(new m.CastleColumnSortingVO(this.dialogDisp.friends_list_top.playernameSlot, y.FriendListScrollItemComparer.comparePlayername));
    e.push(new m.CastleColumnSortingVO(this.dialogDisp.friends_list_top.levelSlot, y.FriendListScrollItemComparer.compareLevel));
    this.defaultSorter = new m.CastleColumnSortingVO(this.dialogDisp.friends_list_top.onlineSlot, y.FriendListScrollItemComparer.compareOnline);
    e.push(this.defaultSorter);
    e.push(new m.CastleColumnSortingVO(this.dialogDisp.friends_list_top.allianceSlot, y.FriendListScrollItemComparer.compareAlliance));
    e.push(new m.CastleColumnSortingVO(this.dialogDisp.friends_list_top.distanceSlot, y.FriendListScrollItemComparer.compareDistance));
    e.push(new m.CastleColumnSortingVO(this.dialogDisp.friends_list_top.mightSlot, y.FriendListScrollItemComparer.compareMightpoints));
    return e;
  };
  CastleFriendListDialog.prototype.onMemberListSortingChanged = function (e) {
    this.hideArrows();
    e.sortingTrigger.arrows.visible = true;
    e.sortingTrigger.arrows.down.visible = !e.isInAscendingOrder;
    e.sortingTrigger.arrows.up.visible = e.isInAscendingOrder;
    this._itemScrollList.initList();
  };
  CastleFriendListDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    _.CastleModel.friendListData.addEventListener(C.CastleFriendListEvent.FRIEND_LIST_UPDATED, this.bindFunction(this.onFriendListUpdated));
    this.searchField.keyDown.add(this.bindFunction(this.onSearchKeyDown));
  };
  CastleFriendListDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    _.CastleModel.friendListData.removeEventListener(C.CastleFriendListEvent.FRIEND_LIST_UPDATED, this.bindFunction(this.onFriendListUpdated));
    this.searchField.keyDown.remove(this.bindFunction(this.onSearchKeyDown));
  };
  CastleFriendListDialog.prototype.onFriendListUpdated = function (e) {
    this.updateDialog();
  };
  CastleFriendListDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetFriendConnectionsVO());
    this.updateDialog();
  };
  CastleFriendListDialog.prototype.onClick = function (e) {
    if (O.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btnSearch:
          this.checkSearchField();
          return;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          return;
        case this.dialogDisp.info_btn:
          D.CastleDialogHandler.getInstance().showHelper("", u.Localize.text("help_friendsList"));
          return;
      }
    }
  };
  CastleFriendListDialog.__initialize_static_members = function () {
    CastleFriendListDialog.NAME = "CastleFriendList";
  };
  return CastleFriendListDialog;
}(E.CastleExternalDialog);
exports.CastleFriendListDialog = b;
var D = require("./9.js");
var I = require("./314.js");
var T = require("./38.js");
var v = require("./2605.js");
l.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();