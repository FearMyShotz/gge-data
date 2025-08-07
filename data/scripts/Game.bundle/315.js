Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./18.js");
var c = require("./8.js");
var u = function (e) {
  function CastlePremiumMarketPlaceDialog() {
    return e.call(this, CastlePremiumMarketPlaceDialog.NAME) || this;
  }
  n.__extends(CastlePremiumMarketPlaceDialog, e);
  CastlePremiumMarketPlaceDialog.prototype.setBtnColors = function (e, t, i) {
    var n = new s.ColorTransform();
    n.color = e;
    this.marketDialog.btn_tab_flag.mc_flag_icon.colorChange["cc" + t].useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
  };
  CastlePremiumMarketPlaceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initTwoStateButtons([this.marketDialog.btn_tab_vip, this.marketDialog.btn_tab_inviteafriend, this.marketDialog.btn_tab_heroes, this.marketDialog.btn_tab_rest, this.marketDialog.btn_tab_flag]);
    this.initBasicButtons([this.marketDialog.btn_close]);
    this._subLayer = new Map();
    this._subLayer.set(d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO, new p.CastlePremiumMarketPlaceDialogBooster(this.marketDialog.cat_booster));
    this._subLayer.set(d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST, this._subLayer.get(d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO));
    this._subLayer.set(l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST, new h.CastlePremiumMarketPlaceDialogFlag(this.marketDialog.cat_flag));
    this._subLayer.set(l.ClientConstCastle.CATEGORY_MARKETPLACE_VIP, new C.CastlePremiumMarketPlaceDialogVIP(this.marketDialog.cat_vip));
    this._subLayer.set(l.ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND, new g.CastlePremiumMarketPlaceDialogInviteAFriend(this.marketDialog.cat_inviteafriend));
    this.textFieldManager.registerTextField(this.marketDialog.txt_title, new r.LocalizedTextVO("premiummarket_title"));
    this.marketDialog.btn_tab_vip.toolTipText = "dialog_VipScreen_tooltip_v2";
    this.marketDialog.btn_tab_heroes.toolTipText = "heroes";
    this.marketDialog.btn_tab_rest.toolTipText = "restTab";
    this.marketDialog.btn_tab_flag.toolTipText = "dialog_management_changeCrest";
    this.marketDialog.btn_tab_inviteafriend.toolTipText = "dialog_referFriend_inviteDialog_invite_tooltip";
  };
  CastlePremiumMarketPlaceDialog.prototype.showLoaded = function (t) {
    var i;
    if (t === undefined) {
      t = null;
    }
    this._currentCategory = null;
    i = this.marketProperties && this.marketProperties.shopCategory != "" && this.marketProperties.shopCategory != l.ClientConstCastle.CATEGORY_MARKETPLACE_VIP ? this.marketProperties && this.marketProperties.highlightVO && !this.marketProperties.highlightVO.isInShopCategory(this.marketProperties.shopCategory) ? this.marketProperties.highlightVO.shopTypes[0] : this.marketProperties.shopCategory : l.ClientConstCastle.CATEGORY_MARKETPLACE_VIP;
    this.changeCategory(i);
    CastlePremiumMarketPlaceDialog.CREST_BUTTON_COLORS.forEach(this.bindFunction(this.setBtnColors));
    e.prototype.showLoaded.call(this, t);
    this.marketDialog.btn_tab_inviteafriend.visible = !a.EnvGlobalsHandler.globals.loginIsKeyBased && !a.EnvGlobalsHandler.globals.isOnSpecialServer && this.env.urlVariables.nativeStore != a.BasicConstants.NATIVE_STORE_MICROSOFT;
    if (!this.marketDialog.btn_tab_inviteafriend.visible) {
      this.marketDialog.btn_tab_vip.x = this.marketDialog.btn_tab_inviteafriend.x;
    }
  };
  CastlePremiumMarketPlaceDialog.prototype.setActiveTabButtons = function (e) {
    this.marketDialog.btn_tab_vip.basicButton.selectButton = e == l.ClientConstCastle.CATEGORY_MARKETPLACE_VIP;
    this.marketDialog.btn_tab_heroes.basicButton.selectButton = e == d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO;
    this.marketDialog.btn_tab_rest.basicButton.selectButton = e == d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST;
    this.marketDialog.btn_tab_flag.basicButton.selectButton = e == l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST;
    this.marketDialog.btn_tab_inviteafriend.basicButton.selectButton = e == l.ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND;
  };
  CastlePremiumMarketPlaceDialog.prototype.changeCategory = function (t) {
    if (t != this._currentCategory) {
      e.prototype.changeCategory.call(this, t);
      if (this.marketProperties && this.marketProperties.highlightVO) {
        this.showSublayer(this._subLayer.get(t), [t, this.marketProperties.highlightVO]);
      } else {
        this.showSublayer(this._subLayer.get(t), [t]);
      }
      this.setActiveTabButtons(this._currentCategory);
      if (this._currentCategory == l.ClientConstCastle.CATEGORY_MARKETPLACE_VIP) {
        this.marketDialog.mc_background.gotoAndStop(1);
      } else {
        this.marketDialog.mc_background.gotoAndStop(2);
      }
    }
  };
  CastlePremiumMarketPlaceDialog.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      if (e.target != this.marketDialog.btn_tab_flag) {
        switch (e.target) {
          case this.marketDialog.btn_tab_vip:
            if (this._currentCategory == l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.changeCategory), l.ClientConstCastle.CATEGORY_MARKETPLACE_VIP];
              this._subLayer.get(l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.changeCategory(l.ClientConstCastle.CATEGORY_MARKETPLACE_VIP);
            }
            break;
          case this.marketDialog.btn_tab_inviteafriend:
            if (this._currentCategory == l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.changeCategory), l.ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND];
              this._subLayer.get(l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.changeCategory(l.ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND);
            }
            break;
          case this.marketDialog.btn_tab_heroes:
            if (this._currentCategory == l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.changeCategory), d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO];
              this._subLayer.get(l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.changeCategory(d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO);
            }
            break;
          case this.marketDialog.btn_tab_rest:
            if (this._currentCategory == l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.changeCategory), d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST];
              this._subLayer.get(l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.changeCategory(d.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST);
            }
            break;
          case this.marketDialog.btn_close:
            if (this._currentCategory == l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST) {
              this._functionHolder = [this.bindFunction(this.hide)];
              this._subLayer.get(l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST).doubleCheckSaveCrest(this.bindFunction(this.saveCrestCallback));
            } else {
              this.hide();
            }
        }
      } else {
        this.changeCategory(l.ClientConstCastle.CATEGORY_MARKETPLACE_CREST);
      }
    }
  };
  CastlePremiumMarketPlaceDialog.prototype.saveCrestCallback = function (e = null) {
    if (this._functionHolder) {
      this._functionHolder.shift().apply(null, this._functionHolder);
    }
  };
  Object.defineProperty(CastlePremiumMarketPlaceDialog.prototype, "marketDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketPlaceDialog.prototype, "marketProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketPlaceDialog.NAME = "CastlePremiumMarketplaceExternal";
  CastlePremiumMarketPlaceDialog.CREST_BUTTON_COLORS = [10358297, 15244861, 15244861, 10358297];
  return CastlePremiumMarketPlaceDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.CastlePremiumMarketPlaceDialog = u;
var d = require("./170.js");
var p = require("./2597.js");
var h = require("./2598.js");
var g = require("./1420.js");
var C = require("./2611.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");