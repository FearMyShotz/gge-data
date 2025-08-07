Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./1832.js");
var p = require("./21.js");
var h = require("./31.js");
var g = require("./19.js");
var C = require("./4.js");
var _ = require("./8.js");
var m = require("./25.js");
var f = require("./817.js");
var O = createjs.Point;
var E = function (e) {
  function CastleGGSGiftDialog() {
    var t = this;
    t.rewardIcons = [];
    t.startIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleGGSGiftDialog.NAME) || this;
  }
  n.__extends(CastleGGSGiftDialog, e);
  CastleGGSGiftDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons(this.dialogButtons());
    this.textFieldManager.registerTextField(this.dialogDisp.btn_collect.txt_collect, new c.LocalizedTextVO("dialog_pickGift_button")).autoFitToBounds = true;
  };
  CastleGGSGiftDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._eventVO = C.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_GGS_GIFT);
    C.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    var i = this._eventVO && this._eventVO.skinID ? "_" + this._eventVO.skinID : "";
    this.textFieldManager.registerTextField(this.dialogDisp.text_plate.txt_tip, new c.LocalizedTextVO("dialog_pickGift" + i)).autoFitToBounds = true;
    this.setStartIndex(0);
    this.onTimer();
  };
  CastleGGSGiftDialog.prototype.dialogButtons = function () {
    return [this.dialogDisp.btn_collect, this.dialogDisp.btn_cancel, this.dialogDisp.btn_left, this.dialogDisp.btn_right];
  };
  CastleGGSGiftDialog.prototype.onClick = function (t) {
    if (_.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_left:
          this.setStartIndex(this.startIndex - CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS);
          break;
        case this.dialogDisp.btn_right:
          this.setStartIndex(this.startIndex + CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS);
          break;
        case this.dialogDisp.btn_collect:
          if (!this.dialogProperties.isTest) {
            C.CastleModel.smartfoxClient.sendCommandVO(new d.C2SRequestGoodgamesGift(1));
            this._eventVO.collect();
          }
        case this.dialogDisp.btn_cancel:
          this.hide();
      }
    }
  };
  CastleGGSGiftDialog.prototype.setStartIndex = function (e) {
    this.startIndex = e;
    this.updateRewardItems();
    this.dialogDisp.btn_left.visible = e > 0;
    this.dialogDisp.btn_right.visible = this.rewardList.length > e + CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS;
  };
  CastleGGSGiftDialog.prototype.onTimer = function (e = null) {
    if (!this.dialogProperties.isTest && (!this._eventVO || !this._eventVO.isCollectable() || !!C.CastleModel.privateOfferData.isHiddenEvent(this._eventVO.eventId))) {
      this.hide();
    }
  };
  CastleGGSGiftDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    C.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleGGSGiftDialog.prototype.updateRewardItems = function () {
    this.destroyCollectableRenderList();
    if (this.rewardIcons != null) {
      for (var e = 0, t = this.rewardIcons; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.dispose();
        }
      }
    }
    this.rewardIcons = [];
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_reward_list);
    var n = this.rewardList.list.slice(this.startIndex, this.startIndex + CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS);
    var a = 0;
    var s = 0;
    if (n.length > CastleGGSGiftDialog.REWARD_ICON_COLUMNS) {
      var r = u.int(n.length / CastleGGSGiftDialog.REWARD_ICON_ROWS);
      for (var l = 0; l < CastleGGSGiftDialog.REWARD_ICON_ROWS; ++l) {
        s = r + (l == CastleGGSGiftDialog.REWARD_ICON_ROWS - 1 ? 0 : Math.ceil(n.length % 2));
        this.createRewardIconRow(s, CastleGGSGiftDialog.REWARD_ICON_DISTANCE_Y * l, a);
        a += s;
      }
    } else {
      var c = u.int(n.length);
      for (var d = 0; d < CastleGGSGiftDialog.REWARD_ICON_ROWS; ++d) {
        s = u.int(Math.min(CastleGGSGiftDialog.REWARD_ICON_COLUMNS, c));
        this.createRewardIconRow(s, CastleGGSGiftDialog.REWARD_ICON_DISTANCE_Y * d, a);
        a += s;
        c -= s;
      }
    }
  };
  CastleGGSGiftDialog.prototype.createRewardIconRow = function (e, t, i) {
    var n = CastleGGSGiftDialog.REWARD_ICON_WIDTH * (CastleGGSGiftDialog.REWARD_ICON_COLUMNS - e);
    var o = CastleGGSGiftDialog.REWARD_ICON_WIDTH * e;
    var r = Math.min((384 - o - n) / (e - 1), 200);
    var l = -(o + r * (e - 1)) / 2 + CastleGGSGiftDialog.REWARD_ICON_WIDTH / 2;
    var c = this.rewardList.list.slice(this.startIndex, this.startIndex + CastleGGSGiftDialog.REWARD_ICON_COLUMNS * CastleGGSGiftDialog.REWARD_ICON_ROWS);
    for (var u = 0; u < e; ++u) {
      var d = new a.GoodgameDisplayObjectClipExternal(CastleGGSGiftDialog.REWARD_ICON_ASSET_NAME, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleGGSGiftDialog.NAME));
      d.recycleAsset = false;
      this.rewardIcons.push(d);
      this.dialogDisp.mc_reward_list.addChild(d);
      d.name = "mc_reward" + (i + u);
      d.x = l;
      d.y = t;
      l += CastleGGSGiftDialog.REWARD_ICON_WIDTH + r;
      var p = new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_ADVANCED, new O(50, 50));
      p.textfield.useKiloAbbreviationForAmount = true;
      var C = d.currentshownDisplayObject;
      var _ = new h.CollectableRenderClips(C);
      _.addItemMc(C.reward_basic);
      _.addIconMc(C.reward_basic.mc_icon);
      _.addInfoBtn(C.btn_info);
      _.addTextfield(C.reward_basic.txt_text);
      m.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, _, c[i + u], p);
    }
  };
  Object.defineProperty(CastleGGSGiftDialog.prototype, "rewardList", {
    get: function () {
      return this.dialogProperties.rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGGSGiftDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGGSGiftDialog.NAME = "CastleGGSGiftDialogExternalBigList";
  CastleGGSGiftDialog.REWARD_ICON_COLUMNS = 5;
  CastleGGSGiftDialog.REWARD_ICON_ROWS = 2;
  CastleGGSGiftDialog.REWARD_ICON_DISTANCE_Y = 96;
  CastleGGSGiftDialog.REWARD_ICON_WIDTH = 67;
  CastleGGSGiftDialog.REWARD_ICON_ASSET_NAME = "GGSGiftReward_MC";
  return CastleGGSGiftDialog;
}(f.SkinnableDialog);
exports.CastleGGSGiftDialog = E;
r.classImplementsInterfaces(E, "ICollectableRendererList");