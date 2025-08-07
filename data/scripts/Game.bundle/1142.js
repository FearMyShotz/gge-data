Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./1882.js");
var c = require("./4417.js");
var u = require("./21.js");
var d = require("./26.js");
var p = require("./12.js");
var h = require("./45.js");
var g = require("./13.js");
var C = require("./15.js");
var _ = require("./4.js");
var m = require("./52.js");
var f = require("./27.js");
var O = require("./9.js");
var E = require("./24.js");
var y = require("./20.js");
var b = require("./4418.js");
var D = require("./8.js");
var I = require("./11.js");
var T = require("./114.js");
var v = require("./492.js");
var S = require("./1901.js");
var A = require("./4419.js");
var L = require("./4422.js");
var P = function (e) {
  function DonationEventDialog() {
    return e.call(this, DonationEventDialog.NAME) || this;
  }
  n.__extends(DonationEventDialog, e);
  DonationEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    D.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_shop], y.ClickFeedbackButtonHover);
    for (var i = 0; i < DonationEventDialog.NUM_MAX_TABS; i++) {
      D.ButtonHelper.initButton(this.dialogDisp["tab_" + i], 1, b.ClickFeedbackButtonHoverTabButton);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new r.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_tenthAnniversary_timer"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_speechBubble.txt_copy, new r.LocalizedTextVO("dialog_mainDonationEvent_architect")).autoFitToBounds = true;
    this.dialogDisp.mc_char.mc_selected.visible = false;
    this.dialogDisp.mc_char.mouseChildren = false;
    this.dialogDisp.mc_char.actLikeButton = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_shop.toolTipText = "eventBuilding_apprenticeSmith";
  };
  DonationEventDialog.prototype.showLoaded = function (t) {
    var i = this;
    if (t === undefined) {
      t = null;
    }
    e.prototype.showLoaded.call(this, t);
    if (this.eventVO) {
      _.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
      _.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRemoveEvent));
      _.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
      for (var n = 0; n < DonationEventDialog.NUM_MAX_TABS; n++) {
        this.dialogDisp["tab_" + n].visible = false;
        this.dialogDisp["tab_" + n].mc_ranking_1.visible = false;
        this.dialogDisp["tab_" + n].mc_ranking_2.visible = false;
        this.dialogDisp["tab_" + n].mc_bubble1.visible = false;
        this.dialogDisp["tab_" + n].mc_bubble2.visible = false;
      }
      this._subLayer = new Map();
      var a = 0;
      this.tab_types = [];
      this.eventVO.settingVO.pointTypeVOs.forEach(function (e) {
        i._subLayer.set(e.name, new A.DonationEventDialogDonate(i.dialogDisp.sublayer_type));
        o.MovieClipHelper.clearMovieClip(i.dialogDisp["tab_" + a].mc_icon_1);
        o.MovieClipHelper.clearMovieClip(i.dialogDisp["tab_" + a].mc_icon_2);
        i.dialogDisp["tab_" + a].mc_icon_1.addChild(new E.CastleGoodgameExternalClip("DonationIcon_" + e.name, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(DonationEventDialog.NAME)));
        i.dialogDisp["tab_" + a].mc_icon_2.addChild(new E.CastleGoodgameExternalClip("DonationIcon_" + e.name, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(DonationEventDialog.NAME)));
        i.tab_types.push(e);
        i.dialogDisp["tab_" + a].visible = true;
        i.dialogDisp["tab_" + a].toolTipText = "dialog_mainDonationEvent_tooltip_" + e.name;
        a++;
      });
      this._subLayer.set(DonationEventDialog.TAB_RANKING, new L.DonationEventDialogRanking(this.dialogDisp.sublayer_ranking));
      this.dialogDisp["tab_" + a].mc_ranking_1.visible = true;
      this.dialogDisp["tab_" + a].mc_ranking_2.visible = true;
      this.dialogDisp["tab_" + a].visible = true;
      this.dialogDisp["tab_" + a].toolTipText = "ranking";
      o.BasicModel.smartfoxClient.sendCommandVO(new c.C2SGetDonationPointTypeVO());
      this.changeCategory(this.eventVO.settingVO.pointTypeVOs[0].name);
      this.dialogDisp.mc_speechBubble.visible = false;
      o.CommandController.instance.executeCommand(C.CastleBasicController.TRACK_DONATION_EVENT, [l.DonationEventTrackingEvent.OPENED_DONATION_MAIN_DIALOG]);
      D.ButtonHelper.enableButton(this.dialogDisp.btn_shop, !!this.apprenticeSmithEventVO);
    } else {
      this.hide();
    }
  };
  DonationEventDialog.prototype.hide = function () {
    _.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    _.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRemoveEvent));
    _.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    e.prototype.hide.call(this);
  };
  DonationEventDialog.prototype.onClick = function (t) {
    if (t.target != this.dialogDisp.mc_char && this.dialogDisp.mc_speechBubble.visible) {
      this.dialogDisp.mc_speechBubble.visible = false;
      this.dialogDisp.mc_char.mc_selected.visible = false;
    }
    if (D.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          if (a.instanceOfClass(this._currentSublayer, "DonationEventDialogDonate") && this._currentSublayer.selectedPoints() > 0) {
            O.CastleDialogHandler.getInstance().registerDialogs(S.ModernYesNoBlueDialog, new v.CastleStandardYesNoDialogProperties(r.Localize.text("attention"), r.Localize.text("dialog_donationEvent_maxWarning", [this._currentSublayer.selectedPoints()]), this.bindFunction(this.hide)));
            return;
          }
          this.hide();
          break;
        case this.dialogDisp.tab_0:
        case this.dialogDisp.tab_1:
        case this.dialogDisp.tab_2:
        case this.dialogDisp.tab_3:
          var i = parseInt(t.target.name.charAt(4));
          if (a.instanceOfClass(this._currentSublayer, "DonationEventDialogDonate") && this._currentSublayer.selectedPoints() > 0) {
            O.CastleDialogHandler.getInstance().registerDialogs(S.ModernYesNoBlueDialog, new v.CastleStandardYesNoDialogProperties(r.Localize.text("attention"), r.Localize.text("dialog_donationEvent_maxWarning", [this._currentSublayer.selectedPoints()]), this.bindFunction(this.switchTabCheck), null, null, "", "", [i]));
            return;
          }
          this.switchTabCheck([i]);
          break;
        case this.dialogDisp.btn_help:
          I.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("dialog_mainDonationEvent_helpPopup"));
          break;
        case this.dialogDisp.btn_shop:
          this.apprenticeSmithEventVO.openMerchantDialog(true, this.getCurrencyPackageID());
      }
    }
  };
  DonationEventDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.mc_char) {
      this.dialogDisp.mc_speechBubble.visible = !this.dialogDisp.mc_speechBubble.visible;
      this.dialogDisp.mc_char.mc_selected.visible = this.dialogDisp.mc_speechBubble.visible;
    }
  };
  DonationEventDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.dialogDisp.mc_char) {
      this.dialogDisp.mc_speechBubble.visible = false;
      this.dialogDisp.mc_char.mc_selected.visible = false;
    }
  };
  DonationEventDialog.prototype.getCurrencyPackageID = function () {
    var e = this.apprenticeSmithEventVO;
    if (e) {
      var t = e.getVisiblePackages(_.CastleModel.userData.userLevel, _.CastleModel.userData.userLegendLevel, _.CastleModel.areaData.activeAreaInfo.areaType);
      var i = h.CollectableHelper.createVO(p.CollectableEnum.GENERIC_CURRENCY, 1, m.ClientConstCurrency.ID_IMPERIAL_PATRONAGE_CHARTER);
      if ((t = t.filter(function (e) {
        return e.firstReward.isCombineAbleWith(i);
      })).length > 0) {
        return t[0].packageID;
      }
    }
    return -1;
  };
  DonationEventDialog.prototype.switchTabCheck = function (e) {
    if (e[0] < this.typesAmount) {
      this.changeCategory(this.tab_types[e[0]].name);
    } else {
      this.changeCategory(DonationEventDialog.TAB_RANKING);
    }
  };
  DonationEventDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(this._currentCategory), [this.tab_types.find(function (e) {
        return e.name == t;
      })]);
      for (var i = 0; i < DonationEventDialog.NUM_MAX_TABS; i++) {
        if (i < this.tab_types.length && this._currentCategory == this.tab_types[i].name || i == this.tab_types.length && this._currentCategory == DonationEventDialog.TAB_RANKING) {
          D.ButtonHelper.getBasicButton(this.dialogDisp["tab_" + i]).selected();
        } else {
          D.ButtonHelper.getBasicButton(this.dialogDisp["tab_" + i]).deselected();
        }
      }
    }
  };
  DonationEventDialog.prototype.onTimer = function (e = null) {
    if (this.eventVO) {
      var t = this.eventVO.remainingEventTimeInSeconds;
      f.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_time, t);
    }
  };
  DonationEventDialog.prototype.onRemoveEvent = function (e) {
    D.ButtonHelper.enableButton(this.dialogDisp.btn_shop, !!this.apprenticeSmithEventVO);
    if (e.specialEventVO && e.specialEventVO.eventId == s.EventConst.EVENTTYPE_DONATION) {
      this.hide();
    }
  };
  DonationEventDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageHeight < e * 600) {
        e = this.disp.stage.stageHeight / 600;
      }
      e = Math.min(e, 1);
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = e;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
      this.dialogDisp.mc_speechBubble.x = Math.max(-570, -this.disp.stage.stageWidth / 2 + 160);
      this.dialogDisp.mc_char.x = Math.max(-570, -this.disp.stage.stageWidth / 2 + 157);
      this.dialogDisp.mc_char.visible = this.disp.stage.stageWidth >= 1350;
      this.dialogDisp.mc_char.mc_selected.visible &= this.dialogDisp.mc_speechBubble.visible &= this.dialogDisp.mc_char.visible;
    }
  };
  Object.defineProperty(DonationEventDialog.prototype, "typesAmount", {
    get: function () {
      return this.eventVO.settingVO.pointTypeVOs.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialog.prototype, "eventVO", {
    get: function () {
      return _.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_DONATION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventDialog.prototype, "apprenticeSmithEventVO", {
    get: function () {
      return _.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
    },
    enumerable: true,
    configurable: true
  });
  DonationEventDialog.NAME = "DonationEventMain_1";
  DonationEventDialog.TAB_RANKING = "ranking";
  DonationEventDialog.NUM_MAX_TABS = 3;
  return DonationEventDialog;
}(T.CastleExternalSubLayerDialog);
exports.DonationEventDialog = P;
a.classImplementsInterfaces(P, "ICollectableRendererList");