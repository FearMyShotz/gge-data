Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./1.js");
var C = require("./1.js");
var _ = require("./1.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./3.js");
var b = require("./6.js");
var D = require("./28.js");
var I = require("./729.js");
var T = require("./4.js");
var v = require("./24.js");
var S = require("./42.js");
var A = require("./922.js");
var L = require("./41.js");
var P = require("./11.js");
var M = createjs.MouseEvent;
var R = function (e) {
  function CastleWelcomeDialog() {
    var t = this;
    t.selectedNews = 0;
    t.newsSlotOffset = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleWelcomeDialog.NAME) || this;
  }
  n.__extends(CastleWelcomeDialog, e);
  CastleWelcomeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_forum, this.dialogDisp.btn_close, this.dialogDisp.btn_allNews, this.dialogDisp.homeScreenVisibility, this.dialogDisp.btn_facebook]);
    this.placeHolderClass = _.getDefinitionByName("LoadingAnimation");
    this.rightPanel = this.dialogDisp.mc_rightPanelElements;
    this.dialogDisp.mc_static.cacheAsBitmap = true;
    this.dialogDisp.btn_prevNews.basicButton = new o.SmallButton(this.dialogDisp.btn_prevNews, true);
    this.dialogDisp.btn_nextNews.basicButton = new o.SmallButton(this.dialogDisp.btn_nextNews, true);
    this.itxt_nowNew = this.textFieldManager.registerTextField(this.dialogDisp.txt_nowNew, new E.LocalizedTextVO("dialog_welcome_nowTeaser"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_allNews.txt_btn, new E.LocalizedTextVO("dialog_welcome_showAll"));
    this.textFieldManager.registerTextField(this.rightPanel.txt_nextTxt, new E.LocalizedTextVO(""), new u.InternalGGSTextFieldConfigVO(true));
    if (this.rightPanel.txt_archiv) {
      this.textFieldManager.registerTextField(this.rightPanel.txt_archiv, new E.LocalizedTextVO("dialog_welcome_newsArchive"), new u.InternalGGSTextFieldConfigVO(true));
    }
    this.itxt_newsTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_newsTitle, new E.LocalizedTextVO(""));
    this.itxt_newsTitle.autoFitToBounds = true;
    this.itxt_newsTxt = this.textFieldManager.registerTextField(this.dialogDisp.txt_newsTxt, new E.LocalizedTextVO(""));
    this.i_txt_btn = this.textFieldManager.registerTextField(this.dialogDisp.btn_allNews.txt_btn, new E.LocalizedTextVO("dialog_welcome_showAll"));
    this.i_txt_btn.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_didyouknow, new E.LocalizedTextVO("dialog_tip_title_short")).autoFitToBounds = true;
    this.dialogDisp.txt_didyouknow.y += 25;
    var i = Math.round(Math.random() * (CastleWelcomeDialog._hints.length - 1));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_hintbox, new E.LocalizedTextVO(CastleWelcomeDialog._hints[i]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_homeScreenVisibility, new E.LocalizedTextVO("dialog_welcome_hideTeaser"));
    this.dialogDisp.homeScreenVisibility.checkMark.visible = false;
  };
  CastleWelcomeDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.dialogDisp.btn_forum.visible = A.CastleForumHelper.isForumVisible();
    A.CastleForumHelper.assignForumButtonTooltip(this.dialogDisp.btn_forum);
    if (this.dialogDisp.btn_forum.visible) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_forum, new E.LocalizedTextVO("dialog_welcome_discussForum"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_forum, new E.LocalizedTextVO("dialog_welcome_checkInbox"));
    }
    this.dialogDisp.btn_facebook.toolTipText = "dialog_welcome_facebookButton";
    this.showNewest();
    this.checkAndShowNewsArrows();
  };
  CastleWelcomeDialog.prototype.showLoaded = function (t = null) {
    if (this.isOutOfTutorial()) {
      this.dialogDisp.btn_facebook.visible = this.env.useexternallinks;
      e.prototype.showLoaded.call(this, t);
    } else {
      this.hide();
    }
  };
  CastleWelcomeDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this.dialogDisp.removeEventListener(M.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleWelcomeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_prevNews:
        this.onPreviousNews();
        break;
      case this.dialogDisp.btn_nextNews:
        this.onNextNews();
        break;
      case this.dialogDisp.btn_allNews:
        this.onAllNews();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.rightPanel.btn_down:
        this.onPreviousNews();
        break;
      case this.rightPanel.btn_up:
        this.onNextNews();
        break;
      case this.rightPanel.mc_listItem0:
        this.changeVisibleNews(this.newsSlotOffset);
        break;
      case this.rightPanel.mc_listItem1:
        this.changeVisibleNews(this.newsSlotOffset + 1);
        break;
      case this.rightPanel.mc_listItem2:
        this.changeVisibleNews(this.newsSlotOffset + 2);
        break;
      case this.rightPanel.mc_listItem3:
        this.changeVisibleNews(this.newsSlotOffset + 3);
        break;
      case this.rightPanel.mc_listItem4:
        this.changeVisibleNews(this.newsSlotOffset + 4);
        break;
      case this.rightPanel.mc_listItem5:
        this.changeVisibleNews(this.newsSlotOffset + 5);
        break;
      case this.dialogDisp.btn_forum:
        c.CommandController.instance.executeCommand(a.BasicController.COMMAND_OPEN_FORUM);
        break;
      case this.dialogDisp.homeScreenVisibility:
        T.CastleModel.settingsData.isHomeScreenVisible = !T.CastleModel.settingsData.isHomeScreenVisible;
        this.dialogDisp.homeScreenVisibility.checkMark.visible = !this.dialogDisp.homeScreenVisibility.checkMark.visible;
        break;
      case this.dialogDisp.btn_facebook:
        l.BrowserUtil.executeNavigateToURL(new g.URLRequest(I.ClientConstURL.URL_OFICIAL_EMPIRE_FACEBOOK_PAGE));
    }
  };
  CastleWelcomeDialog.prototype.onKeyDown = function (e) {
    if (e.key == p.Keyboard.ESCAPE) {
      this.hide();
    }
  };
  CastleWelcomeDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.rightPanel.mc_listItem0:
      case this.rightPanel.mc_listItem1:
      case this.rightPanel.mc_listItem2:
      case this.rightPanel.mc_listItem3:
      case this.rightPanel.mc_listItem4:
      case this.rightPanel.mc_listItem5:
      case this.rightPanel.mc_listItem6:
        if (t.target.txt_title.length > 0 || t.target.txt_date.text > 0) {
          this.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_CLICK);
        }
    }
  };
  CastleWelcomeDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this.rightPanel.mc_listItem0:
      case this.rightPanel.mc_listItem1:
      case this.rightPanel.mc_listItem2:
      case this.rightPanel.mc_listItem3:
      case this.rightPanel.mc_listItem4:
      case this.rightPanel.mc_listItem5:
      case this.rightPanel.mc_listItem6:
        this.layoutManager.customCursor.setCursorType(s.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  CastleWelcomeDialog.prototype.onMouseWheel = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.delta < 0 && this.newsSlotOffset > 0) {
      this.onButtonUp();
    }
    if (t.delta > 0 && CastleWelcomeDialog.MAX_SHOWN_ENTRIES + this.newsSlotOffset < this.dialogProperties.features.length) {
      this.onButtonDown();
    }
  };
  CastleWelcomeDialog.prototype.showNewest = function () {
    this.rightPanel.gotoAndStop(1);
    this.changeVisibleNews(0);
    this.setRightPanelFeature(0);
  };
  CastleWelcomeDialog.prototype.setRightPanelFeature = function (e) {
    d.MovieClipHelper.clearMovieClip(this.rightPanel.mc_next);
    if (e < this.dialogProperties.features.length) {
      var t = b.int(this.dialogProperties.features[e].id);
      var i = "CastleWelcomeNews" + (t + 1);
      this.rightPanel.mc_next.addChild(new v.CastleGoodgameExternalClip(i, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, false, this.placeHolderClass).asDisplayObject());
      this.textFieldManager.registerTextField(this.rightPanel.txt_nextTxt, new E.LocalizedTextVO("teaser_announcement_" + t + "_text"), new u.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.rightPanel.txt_archiv, new E.LocalizedTextVO(""), new u.InternalGGSTextFieldConfigVO(true));
    } else {
      this.textFieldManager.registerTextField(this.rightPanel.txt_nextTxt, new E.LocalizedTextVO(""), new u.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleWelcomeDialog.prototype.onPreviousNews = function () {
    this.changeVisibleNews(this.selectedNews + 1);
    var e = this.selectedNews - this.newsSlotOffset;
    if (e >= CastleWelcomeDialog.MAX_SHOWN_ENTRIES) {
      this.newsSlotOffset += e - CastleWelcomeDialog.MAX_SHOWN_ENTRIES + 1;
      this.updateNewsSlots();
    }
  };
  CastleWelcomeDialog.prototype.onNextNews = function () {
    this.changeVisibleNews(this.selectedNews - 1);
    var e = this.selectedNews - this.newsSlotOffset;
    if (e < 0) {
      this.newsSlotOffset += e;
      this.updateNewsSlots();
    }
  };
  CastleWelcomeDialog.prototype.checkAndShowNewsArrows = function () {
    this.dialogDisp.btn_nextNews.enabled = this.dialogDisp.btn_nextNews.visible = this.selectedNews > 0;
    this.dialogDisp.btn_prevNews.enabled = this.dialogDisp.btn_prevNews.visible = this.selectedNews < this.dialogProperties.features.length - 1;
  };
  CastleWelcomeDialog.prototype.changeVisibleNews = function (e) {
    if (!(e < 0) && !(e >= this.dialogProperties.features.length)) {
      var t = b.int(this.dialogProperties.features[e].id);
      d.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_news);
      var i = "CastleWelcomeNews" + t;
      this.dialogDisp.mc_news.addChild(new v.CastleGoodgameExternalClip(i, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, false, this.placeHolderClass));
      this.itxt_newsTitle.textContentVO.textId = "teaser_news_" + t + "_title";
      var n = "teaser_news_network_" + t + "_text";
      if (this.env.useexternallinks || f.Localize.text(n) == n) {
        this.itxt_newsTxt.textContentVO.textId = "teaser_news_" + t + "_text";
      } else {
        this.itxt_newsTxt.textContentVO.textId = n;
      }
      this.itxt_nowNew.visible = e == 0;
      if (this.rightPanel.currentFrame == 1) {
        var o = this.selectedNews - this.newsSlotOffset;
        var a = new Date();
        if (o > -1 && o < CastleWelcomeDialog.MAX_SHOWN_ENTRIES) {
          this.rightPanel["mc_listItem" + o].gotoAndStop(1);
          this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + o].txt_title, new E.LocalizedTextVO("teaser_news_" + this.dialogProperties.features[this.newsSlotOffset + o].id + "_title"), new u.InternalGGSTextFieldConfigVO(true)).verticalAlign = S.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
          a.setTime(this.dialogProperties.features[this.newsSlotOffset + o].timestamp * D.ClientConstTime.SEC_2_MILLISEC);
          this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + o].txt_date, new O.LocalizedDateTimeVO(a, m.DateTimeStyle.SHORT, m.DateTimeStyle.NONE), new u.InternalGGSTextFieldConfigVO(true));
        }
        if ((o = e - this.newsSlotOffset) > -1 && o < CastleWelcomeDialog.MAX_SHOWN_ENTRIES) {
          this.rightPanel["mc_listItem" + o].gotoAndStop(2);
          this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + o].txt_title, new E.LocalizedTextVO("teaser_news_" + this.dialogProperties.features[this.newsSlotOffset + o].id + "_title"), new u.InternalGGSTextFieldConfigVO(true)).verticalAlign = S.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
          a.setTime(this.dialogProperties.features[this.newsSlotOffset + o].timestamp * D.ClientConstTime.SEC_2_MILLISEC);
          this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + o].txt_date, new O.LocalizedDateTimeVO(a, m.DateTimeStyle.SHORT, m.DateTimeStyle.NONE), new u.InternalGGSTextFieldConfigVO(true));
        }
      }
      this.selectedNews = e;
      this.checkAndShowNewsArrows();
    }
  };
  CastleWelcomeDialog.prototype.onAllNews = function () {
    if (this.rightPanel.currentFrame < 1) {
      this.i_txt_btn.textContentVO.textId = "dialog_welcome_back";
      this.rightPanel.gotoAndStop(2);
      this.loadFeatureList();
      this.rightPanel.btn_up.basicButton = new o.SmallButton(this.rightPanel.btn_up, true);
      this.rightPanel.btn_down.basicButton = new o.SmallButton(this.rightPanel.btn_down, true);
      this.dialogDisp.addEventListener(M.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      this.dialogDisp.addEventListener(h.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
      this.textFieldManager.registerTextField(this.rightPanel.txt_nextTxt, new E.LocalizedTextVO(""), new u.InternalGGSTextFieldConfigVO(true));
      for (var e = 0; e < CastleWelcomeDialog.MAX_SHOWN_ENTRIES; e++) {
        L.CastleMovieClipHelper.createHitArea(this.rightPanel["mc_listItem" + e]);
        this.rightPanel["mc_listItem" + e].mouseChildren = false;
      }
    } else {
      this.dialogDisp.removeEventListener(M.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      this.dialogDisp.removeEventListener(h.KeyboardEvent.KEY_DOWN, this.bindFunction(this.onKeyDown));
      this.i_txt_btn.textContentVO.textId = "dialog_welcome_showAll";
      this.rightPanel.gotoAndStop(1);
      this.setRightPanelFeature(0);
      this.textFieldManager.registerTextField(this.rightPanel.txt_archiv, new E.LocalizedTextVO(""), new u.InternalGGSTextFieldConfigVO(true));
    }
  };
  CastleWelcomeDialog.prototype.isAllNewsActive = function () {
    return this.rightPanel.currentFrame >= 1;
  };
  CastleWelcomeDialog.prototype.loadFeatureList = function () {
    if (this.rightPanel.txt_archiv) {
      this.textFieldManager.registerTextField(this.rightPanel.txt_archiv, new E.LocalizedTextVO("dialog_welcome_newsArchive"), new u.InternalGGSTextFieldConfigVO(true));
    }
    if (this.dialogProperties.features.length < CastleWelcomeDialog.MAX_SHOWN_ENTRIES) {
      this.newsSlotOffset = 0;
    } else {
      this.newsSlotOffset = b.int(Math.max(0, this.selectedNews - 3));
    }
    this.fillNewsSlots();
    this.checkAndShowListArrows();
  };
  CastleWelcomeDialog.prototype.checkAndShowListArrows = function () {
    this.rightPanel.btn_up.visible = this.newsSlotOffset > 0;
    this.rightPanel.btn_down.visible = CastleWelcomeDialog.MAX_SHOWN_ENTRIES + this.newsSlotOffset < this.dialogProperties.features.length;
  };
  CastleWelcomeDialog.prototype.fillNewsSlots = function () {
    for (var e = 0; e < CastleWelcomeDialog.MAX_SHOWN_ENTRIES; e++) {
      if (this.newsSlotOffset + e < this.dialogProperties.features.length) {
        if (this.newsSlotOffset + e == this.selectedNews) {
          this.rightPanel["mc_listItem" + e].gotoAndStop(2);
        } else {
          this.rightPanel["mc_listItem" + e].gotoAndStop(1);
        }
        var t = new Date();
        t.setTime(this.dialogProperties.features[this.newsSlotOffset + e].timestamp * D.ClientConstTime.SEC_2_MILLISEC);
        this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + e].txt_title, new E.LocalizedTextVO("teaser_news_" + this.dialogProperties.features[this.newsSlotOffset + e].id + "_title"), new u.InternalGGSTextFieldConfigVO(true)).verticalAlign = S.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
        this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + e].txt_date, new O.LocalizedDateTimeVO(t, m.DateTimeStyle.SHORT, m.DateTimeStyle.NONE), new u.InternalGGSTextFieldConfigVO(true));
      } else {
        this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + e].txt_title, new E.LocalizedTextVO(""), new u.InternalGGSTextFieldConfigVO(true));
        this.textFieldManager.registerTextField(this.rightPanel["mc_listItem" + e].txt_date, new y.TextVO(""), new u.InternalGGSTextFieldConfigVO(true));
      }
    }
  };
  CastleWelcomeDialog.prototype.onButtonUp = function () {
    this.newsSlotOffset--;
    this.updateNewsSlots();
  };
  CastleWelcomeDialog.prototype.onButtonDown = function () {
    this.newsSlotOffset++;
    this.updateNewsSlots();
  };
  CastleWelcomeDialog.prototype.updateNewsSlots = function () {
    if (this.isAllNewsActive()) {
      this.fillNewsSlots();
      this.checkAndShowListArrows();
    }
  };
  Object.defineProperty(CastleWelcomeDialog.prototype, "hasPreloaderDialog", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(P.CastleExternalDialog.prototype, "hasPreloaderDialog").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWelcomeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWelcomeDialog.__initialize_static_members = function () {
    CastleWelcomeDialog.NAME = "CastleWelcome";
    CastleWelcomeDialog.MAX_SHOWN_ENTRIES = 6;
    CastleWelcomeDialog._hints = ["teaser_hint_01", "teaser_hint_02", "teaser_hint_03", "teaser_hint_04_v2", "teaser_hint_05", "teaser_hint_06", "teaser_hint_07", "teaser_hint_08", "teaser_hint_09", "teaser_hint_10", "teaser_hint_11", "teaser_hint_12", "teaser_hint_13", "teaser_hint_14", "teaser_hint_15"];
  };
  return CastleWelcomeDialog;
}(P.CastleExternalDialog);
exports.CastleWelcomeDialog = R;
C.classImplementsInterfaces(R, "ICollectableRendererList");
R.__initialize_static_members();