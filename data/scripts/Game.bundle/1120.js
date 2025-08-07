Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./6.js");
var m = require("./51.js");
var f = require("./4.js");
var O = require("./371.js");
var E = require("./372.js");
var y = function (e) {
  function CastlePrimeSaleBoosterDialog() {
    var t = this;
    t.initialBonusXPosition = 0;
    t.initialBonusBackgroundWidth = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastlePrimeSaleBoosterDialog, e);
  CastlePrimeSaleBoosterDialog.prototype.initLoaded = function (t = null) {
    this.initialBonusXPosition = this.dialogDisp.mc_booster_container.mc_bottom_rewards.mc_bonus.x;
    this.initialBonusBackgroundWidth = this.dialogDisp.mc_booster_container.mc_bottom_rewards.bonusAttributeBackground.width;
    e.prototype.initLoaded.call(this, t);
  };
  CastlePrimeSaleBoosterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.rewardRenderer) {
      this.rewardRenderer.destroy();
    }
    var i = l.castAs(f.CastleModel.specialEventData.getActiveEventByEventId(d.EventConst.EVENTTYPE_EVENT_BOOSTER_PRIME_SALE), "EventBoosterPrimeSaleEventVO");
    if (i) {
      var n = i.activeBoosterSale;
      if (!(n < 0)) {
        var c = _.int(f.CastleModel.boosterSaleData.getDiscount(n));
        if (!(c < 1)) {
          var m = f.CastleModel.boostData.getOverseerVOByID(n);
          if (m) {
            this.dialogDisp.mc_booster_container.visible = true;
            var O = this.dialogDisp.mc_booster_container.mc_booster;
            s.MovieClipHelper.clearMovieClip(O);
            var y = m.visualMovieClip;
            O.addChild(y);
            var b = m.bonusText;
            var D = this.dialogDisp.mc_booster_container.mc_bottom_rewards;
            D.mc_bonus.txt_bonus.textColor = "#443326";
            D.mc_time_container.txt_time.textColor = "#443326";
            this.textFieldManager.registerTextField(D.mc_bonus.txt_bonus, new g.LocalizedTextVO(b[0], [b[1]]), new a.InternalGGSTextFieldConfigVO(true));
            D.mc_bonus.icon_bonus.gotoAndStop(m.bonusIconFrame);
            this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new g.LocalizedTextVO("dialog_primeday_primesale_specialists_description"));
            this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new g.LocalizedTextVO("dialog_specialOfferDeco_title"));
            this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new g.LocalizedTextVO("dialog_questInfo_showMe"));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new g.LocalizedTextVO("dialog_primeday_primesale_saveCosts", [c]));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_percentOff.txt_percentOff, new g.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [c]));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_booster_container.txt_title, new g.LocalizedTextVO(this.getTitle(n)), new a.InternalGGSTextFieldConfigVO(true));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_old_costs.txt_value, new h.LocalizedNumberVO(m.baseCosts));
            this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new h.LocalizedNumberVO(m.finalCostsC2));
            D.mc_bonus.mouseChildren = false;
            D.mc_bonus.toolTipText = m.bonusToolTip;
            if (n == u.BoosterConst.CARAVAN_OVERLOADER || n == u.BoosterConst.RETURNING_SPEED) {
              D.mc_time_container.visible = false;
              D.timeAttributeBackground.visible = false;
              D.mc_bonus.x = 0;
              D.bonusAttributeBackground.x = 0;
              D.bonusAttributeBackground.width = this.initialBonusBackgroundWidth * 2;
            } else {
              D.mc_time_container.visible = true;
              D.timeAttributeBackground.visible = true;
              D.mc_bonus.x = this.initialBonusXPosition;
              D.bonusAttributeBackground.x = this.initialBonusXPosition;
              D.bonusAttributeBackground.width = this.initialBonusBackgroundWidth;
              this.textFieldManager.registerTextField(D.mc_time_container.txt_time, new C.TextVO(r.TimeStringHelper.getTimeToString(CastlePrimeSaleBoosterDialog.EVENT_OVERSEER_DURATION, r.TimeStringHelper.ONE_TIME_FORMAT, p.Localize.text)));
              D.mc_time_container.mouseChildren = false;
              D.mc_time_container.toolTipText = m.timeStringTooltip;
            }
            this.dialogDisp.mc_costs.mouseChildren = false;
            this.dialogDisp.mc_costs.toolTipText = E.CastleAbstractPrimeSaleDialog.SPECIAL_PRICE;
            this.dialogDisp.mc_old_costs.mouseChildren = false;
            this.dialogDisp.mc_old_costs.toolTipText = p.Localize.text(E.CastleAbstractPrimeSaleDialog.SAVE_COSTS, [c]);
          }
        }
      }
    }
  };
  CastlePrimeSaleBoosterDialog.prototype.getTitle = function (e) {
    switch (e) {
      case u.BoosterConst.MARAUDER:
        return "marauder";
      case u.BoosterConst.CARAVAN_OVERLOADER:
        return "caravanCapacity";
      case u.BoosterConst.INSTRUCTOR:
        return "instructor";
      case u.BoosterConst.RETURNING_SPEED:
        return "maps";
      case u.BoosterConst.TAX:
        return "taxcollector";
    }
    return "overseer";
  };
  CastlePrimeSaleBoosterDialog.prototype.getCharacterName = function () {
    return m.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MERCHANT;
  };
  CastlePrimeSaleBoosterDialog.prototype.onOkButton = function () {
    this.hide();
    D.CastleExternalDialog.dialogHandler.registerDefaultDialogs(I.CastlePremiumMarketPlaceDialog, new O.CastlePremiumMarketPlaceDialogProperties(b.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO));
  };
  CastlePrimeSaleBoosterDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == d.EventConst.EVENTTYPE_EVENT_BOOSTER_PRIME_SALE) {
      this.hide();
    }
  };
  CastlePrimeSaleBoosterDialog.prototype.getRemainingTime = function () {
    return _.int(f.CastleModel.boosterSaleData.anyTimeLeft());
  };
  CastlePrimeSaleBoosterDialog.prototype.isOffer = function () {
    return true;
  };
  CastlePrimeSaleBoosterDialog.prototype.isEvent = function () {
    return true;
  };
  CastlePrimeSaleBoosterDialog.__initialize_static_members = function () {
    CastlePrimeSaleBoosterDialog.NAME = "CastlePrimeSaleBoosterDialog";
    CastlePrimeSaleBoosterDialog.EVENT_OVERSEER_DURATION = 604800;
  };
  return CastlePrimeSaleBoosterDialog;
}(E.CastleAbstractPrimeSaleDialog);
exports.CastlePrimeSaleBoosterDialog = y;
var b = require("./170.js");
var D = require("./11.js");
var I = require("./315.js");
c.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();