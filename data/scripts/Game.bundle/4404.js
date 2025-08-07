Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./274.js");
var g = require("./1900.js");
var C = require("./21.js");
var _ = require("./26.js");
var m = require("./4.js");
var f = require("./27.js");
var O = require("./43.js");
var E = require("./24.js");
var y = require("./8.js");
var b = require("./11.js");
var D = require("./93.js");
var I = require("./4405.js");
var T = require("./4406.js");
var v = require("./4407.js");
var S = createjs.MovieClip;
var A = function (e) {
  function CastleColossusEventDialog() {
    return e.call(this, CastleColossusEventDialog.NAME) || this;
  }
  n.__extends(CastleColossusEventDialog, e);
  CastleColossusEventDialog.prototype.onDeposit = function () {
    if (this.isCoinColossusEvent()) {
      b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(P.CastleCoinColossusDonateDialog, new I.CastleColossusDonateDialogProperties(this.eventVO));
    } else {
      b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(M.CastleColossusDonateDialog, new I.CastleColossusDonateDialogProperties(this.eventVO));
    }
  };
  CastleColossusEventDialog.prototype.onRefreshEvent = function (e) {
    if (e.specialEventVO.eventType == "Colossus") {
      var t = e.specialEventVO;
      this.eventVO = t;
      this.listDelegate.eventVOUpdated();
      this.arrowDelegate.setLawOrderValue(c.ColossusConst.getDecoPoints(t.ownPoints));
      this.dialogDisp.mc_arrow.toolTipText = {
        t: "dialog_eventColossus_meter_tt",
        p: [c.ColossusConst.getDecoPoints(t.ownPoints)]
      };
    }
  };
  CastleColossusEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_deposit, this.dialogDisp.mc_itemList.btn_up, this.dialogDisp.mc_itemList.btn_down, this.dialogDisp.btn_search]);
    this.dialogDisp.mc_arrow.mouseChildren = false;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new d.TextVO(""));
  };
  CastleColossusEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.eventVO = m.CastleModel.specialEventData.getActiveEventByAnyEventId(h.ClientConstEvent.COLOSSUS_EVENTS);
    this.eventDelegator = new v.ColossusEventDelegator(this.eventVO.eventId);
    this.eventDelegator.showLoaded(this.dialogDisp);
    this.itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_input_search, new u.LocalizedTextVO("dialog_highscore_search"));
    this._defaultSearchText = this.itxt_search.text;
    this.itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_input_search, new u.LocalizedTextVO("dialog_highscore_search"));
    this._defaultSearchText = this.itxt_search.text;
    this.arrowDelegate = new T.CastleColossusMeterDelegate(this.dialogDisp.mc_arrow);
    this.listDelegate = new R.CastleColossusHighscoreListDelegate(this.dialogDisp.mc_itemList);
    m.CastleModel.specialEventData.addEventListener(_.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    m.CastleModel.specialEventData.addEventListener(_.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshEvent));
    m.CastleModel.timerData.addEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    this.onUpdateEventTime();
    this.itxt_search.focusIn.add(this.bindFunction(this.onFocusIn));
    this.itxt_search.focusOut.add(this.bindFunction(this.onFocusOut));
    this.itxt_search.keyDown.add(this.bindFunction(this.checkEnterPress));
    m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SColossusGetHighscoreVO());
    this.dialogDisp.mc_arrow.toolTipText = {
      t: "dialog_eventColossus_meter_tt",
      p: [c.ColossusConst.getDecoPoints(this.eventVO.ownPoints)]
    };
    var i = new E.CastleGoodgameExternalClip("ResourcePointsIcon", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ResourcePointsIcon"), null, 0, false);
    if (i.isLoaded) {
      this.onPointIconLoaded(i);
    } else {
      i.clipLoaded.addOnce(this.bindFunction(this.onPointIconLoaded));
    }
  };
  CastleColossusEventDialog.prototype.onPointIconLoaded = function (e) {
    var t = e.asDisplayObject();
    this.dialogDisp.mc_rpicon_holder.addChild(t);
    this.dialogDisp.mc_rpicon_holder.mouseChildren = false;
    this.dialogDisp.mc_rpicon_holder.toolTipText = "colossus_donateResource_labelPoints";
    V.CastleMovieClipHelper.scaleWithAntiAliasing(this.dialogDisp.mc_rpicon_holder, 25, 38, -1, false);
  };
  CastleColossusEventDialog.prototype.onUpdateEventTime = function (e = null) {
    if (this.eventVO && this.itxt_time.textContentVO) {
      f.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.eventVO.remainingEventTimeInSeconds);
      f.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.eventVO.remainingEventTimeInSeconds);
    }
  };
  CastleColossusEventDialog.prototype.setCopyTexts = function () {
    e.prototype.setCopyTexts.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_rank_header, new u.LocalizedTextVO("rank"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name_header, new u.LocalizedTextVO("dialog_alliance_chronic_name"));
  };
  CastleColossusEventDialog.prototype.hideLoaded = function (t = null) {
    m.CastleModel.specialEventData.removeEventListener(_.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    m.CastleModel.specialEventData.removeEventListener(_.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshEvent));
    m.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    this.itxt_search.focusIn.remove(this.bindFunction(this.onFocusIn));
    this.itxt_search.focusOut.remove(this.bindFunction(this.onFocusOut));
    this.itxt_search.keyDown.remove(this.bindFunction(this.checkEnterPress));
    if (this.listDelegate) {
      this.listDelegate.dispose();
      this.listDelegate = null;
    }
    if (this.arrowDelegate) {
      this.arrowDelegate.dispose();
      this.arrowDelegate = null;
    }
    e.prototype.hideLoaded.call(this);
  };
  CastleColossusEventDialog.prototype.onFocusOut = function (e) {
    if (e.text == "") {
      e.textContentVO = new u.LocalizedTextVO(this._defaultSearchText);
    }
  };
  CastleColossusEventDialog.prototype.onFocusIn = function (e) {
    if (e.text == this._defaultSearchText) {
      e.clearText();
    }
  };
  Object.defineProperty(CastleColossusEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusEventDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.arrowDelegate.setLawOrderValue(0);
      this.hide();
    }
  };
  CastleColossusEventDialog.prototype.setToolTips = function () {
    var e;
    e = this.isCoinColossusEvent() ? "dialog_eventCoinColossus_btnDeposit_tt" : "dialog_eventColossus_btnDeposit_tt";
    this.dialogDisp.btn_deposit.toolTipText = e;
    this.dialogDisp.btn_close.toolTipText = a.GenericTextIds.BUTTON_CLOSE;
    this.dialogDisp.btn_search.toolTipText = "dialog_highscore_search";
  };
  CastleColossusEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (y.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_deposit:
          this.onDeposit();
          break;
        case this.dialogDisp.mc_itemList.btn_up:
          this.listDelegate.pageUp();
          break;
        case this.dialogDisp.mc_itemList.btn_down:
          this.listDelegate.pageDown();
          break;
        case this.dialogDisp.btn_search:
          this.onSearch();
      }
      if (t.target instanceof S && t.target.name.indexOf("item") > -1) {
        var i = parseInt(t.target.name.slice(4));
        i += p.int(this.listDelegate.offsetRank - R.CastleColossusHighscoreListDelegate.NUM_RANKING_ENTRIES + 1);
        var n = this.eventVO.getRankingEntryByRank(i);
        if (n && n.playerId > 0) {
          b.CastleExternalDialog.dialogHandler.registerDialogsWithTypeAndDefaultValues(L.CastlePlayerInfoDialog, new D.CastlePlayerInfoDialogProperties(n.playerId), O.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        }
      }
    }
  };
  CastleColossusEventDialog.prototype.checkEnterPress = function (e) {
    if (e.key == r.Keyboard.ENTER) {
      this.onSearch();
    }
  };
  CastleColossusEventDialog.prototype.onJumpToTop = function () {
    m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SColossusGetHighscoreVO("1"));
  };
  CastleColossusEventDialog.prototype.onSearch = function () {
    var e = this.itxt_search.text.trim();
    if (e != "" && s.TextValide.isSmartFoxValide(e)) {
      this.listDelegate.search(e);
    } else {
      this.listDelegate.resetSearchValue();
    }
  };
  CastleColossusEventDialog.prototype.isCoinColossusEvent = function () {
    return this.dialogProperties.eventVO.isCoinColossusEvent();
  };
  CastleColossusEventDialog.NAME = "CastleColossusEvent";
  return CastleColossusEventDialog;
}(b.CastleExternalDialog);
exports.CastleColossusEventDialog = A;
var L = require("./94.js");
var P = require("./1901.js");
var M = require("./1902.js");
var R = require("./4410.js");
var V = require("./41.js");
l.classImplementsInterfaces(A, "ICollectableRendererList");