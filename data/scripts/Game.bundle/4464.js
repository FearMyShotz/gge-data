Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./289.js");
var p = function (e) {
  function CastleLuckyWheelJackpotDialog() {
    var t = this;
    t._isRewarded = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleLuckyWheelJackpotDialog.NAME) || this;
  }
  n.__extends(CastleLuckyWheelJackpotDialog, e);
  CastleLuckyWheelJackpotDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_reward]);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reward.txt_text, new c.LocalizedTextVO("dialog_dailyQuests_activityGift"));
    this._cardList = [];
    this._itxtTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO(""));
  };
  CastleLuckyWheelJackpotDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setTitle("dialog_luckyWheel_jackpotCurrent");
    this._isRewarded = false;
    this.setRewardBtn();
    this.createCards();
    this.setCards();
    this.initAnimation();
  };
  CastleLuckyWheelJackpotDialog.prototype.hideLoaded = function (t = null) {
    this.destroyCards();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleLuckyWheelJackpotDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_reward:
        this.dialogProperties.fillRewardCallback();
        this.hide();
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.createCards = function () {
    var e = this.dialogProperties.eventVO.eventId == l.EventConst.EVENTTYPE_LUCKYWHEEL_SD ? "JackpotCard_SalesDays" : "JackpotCard";
    var t = s.getDefinitionByName(e);
    this._cardList.push(new g.CastleLuckyWheelJackpotCard(new t(), 0, this.bindFunction(this.onClickJackpotCard), this.dialogProperties.eventVO, this.bindFunction(this.onAnimationCompleted)), new g.CastleLuckyWheelJackpotCard(new t(), 1, this.bindFunction(this.onClickJackpotCard), this.dialogProperties.eventVO), new g.CastleLuckyWheelJackpotCard(new t(), 2, this.bindFunction(this.onClickJackpotCard), this.dialogProperties.eventVO));
    for (var i = 0; i < this._cardList.length; i++) {
      var n = this._cardList[i];
      this.dialogDisp.cardlayer.addChild(n.disp);
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.onAnimationCompleted = function () {
    this.setTitle("dialog_luckyWheel_choosePrice");
  };
  CastleLuckyWheelJackpotDialog.prototype.destroyCards = function () {
    for (var e = u.int(this._cardList.length - 1); e >= 0; e--) {
      var t = this._cardList.splice(e, 1)[0];
      this.dialogDisp.cardlayer.removeChild(t.disp);
      t.destroy();
      t.disp = null;
      t = null;
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.onClickJackpotCard = function (e) {
    if (!this._isRewarded) {
      this.setWinnerCard(this._cardList[e]);
      this.removeMatchingReward();
      for (var t = this._cardList.length, i = 0; i < t; i++) {
        var n = this._cardList[i];
        if (n.isClosed()) {
          this.setLoosingCard(n);
        }
      }
      this._isRewarded = true;
      this.setRewardBtn();
      this.setTitle("dialog_luckyWheel_congratulations");
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.setWinnerCard = function (e) {
    e.setOpened(this.dialogProperties.winningItem);
    e.setWinningAppearance();
  };
  CastleLuckyWheelJackpotDialog.prototype.setLoosingCard = function (e) {
    var t = u.int(o.MathUtils.randomInt(0, this.dialogProperties.rewards.length - 1));
    var i = this.dialogProperties.rewards.getItemByIndex(t);
    this.dialogProperties.rewards.removeByIndex(t);
    e.setOpened(i);
  };
  CastleLuckyWheelJackpotDialog.prototype.setCards = function () {
    var e;
    var t = this.dialogProperties.rewards.clone();
    for (var i = 0; i < this._cardList.length; i++) {
      e = t.getItemByIndex(i);
      var n = this._cardList[i];
      n.x = -CastleLuckyWheelJackpotDialog.X_DIST + i * CastleLuckyWheelJackpotDialog.X_DIST;
      n.show();
      n.setOpened(e);
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.initAnimation = function () {
    for (var e = 0; e < this._cardList.length; e++) {
      this._cardList[e].setAnimation(0, 1.5, true, false);
    }
  };
  CastleLuckyWheelJackpotDialog.prototype.setRewardBtn = function () {
    this.dialogDisp.btn_reward.visible = this._isRewarded;
  };
  CastleLuckyWheelJackpotDialog.prototype.setTitle = function (e) {
    this._itxtTitle.textContentVO.textId = e;
  };
  Object.defineProperty(CastleLuckyWheelJackpotDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelJackpotDialog.prototype.removeMatchingReward = function () {
    var e;
    var t = 0;
    var i = this.dialogProperties.rewards.length;
    var n = this.dialogProperties.winningItem;
    for (t = 0; t < i; t++) {
      e = this.dialogProperties.rewards.getItemByIndex(t);
      if (n.itemType == h.CollectableEnum.GEM && e.itemType == h.CollectableEnum.GEM_RANDOM) {
        this.dialogProperties.rewards.removeByIndex(t);
        return;
      }
      if (n.itemType == h.CollectableEnum.EQUIPMENT_RARENESS && e.itemType == h.CollectableEnum.HERO_RANDOM) {
        this.dialogProperties.rewards.removeByIndex(t);
        return;
      }
      if (n.itemType.serverKey == e.itemType.serverKey) {
        if (n.itemType == h.CollectableEnum.EQUIPMENT_UNIQUE) {
          if (n.equipmentVO.uniqueID == e.equipmentVO.uniqueID) {
            this.dialogProperties.rewards.removeByIndex(t);
            return;
          }
          continue;
        }
        if (r.instanceOfClass(n, "ACollectableItemEquipmentVO")) {
          if (n.equipmentVO.rareID == e.equipmentVO.rareID) {
            this.dialogProperties.rewards.removeByIndex(t);
            return;
          }
          continue;
        }
        if (r.instanceOfClass(n, "CollectableItemRelicVO")) {
          if (e.type == d.CollectableItemRelicVO.TYPE_ALL) {
            this.dialogProperties.rewards.removeByIndex(t);
            return;
          }
          var o = n.vo.relicInfoVO;
          var a = e.vo.relicInfoVO;
          if (o.relicTypeId == a.relicTypeId) {
            this.dialogProperties.rewards.removeByIndex(t);
            return;
          }
        }
        if (n.isSameAs(e)) {
          this.dialogProperties.rewards.removeByIndex(t);
          return;
        }
      }
    }
  };
  CastleLuckyWheelJackpotDialog.NAME = "CastleLuckyWheelJackpotDialog";
  CastleLuckyWheelJackpotDialog.X_DIST = 187;
  return CastleLuckyWheelJackpotDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleLuckyWheelJackpotDialog = p;
var h = require("./12.js");
var g = require("./4465.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");