Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function PrebuiltCastleItem(e) {
    this._selected = false;
    this.backgroundFrame = 0;
    this._collectableRenderList = [];
    this._selected = false;
    this._disp = e;
    E.ButtonHelper.initBasicButton(e);
    e.mouseChildren = false;
    PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.txt_costsFree, new h.LocalizedTextVO("free"));
    PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.mc_costs2.txt_costs, new h.LocalizedTextVO("cost"));
    PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.mc_costs4.txt_costs, new h.LocalizedTextVO("cost"));
    this._txt_discount = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.mc_discount.txt_value, new h.LocalizedTextVO(l.GenericTextIds.VALUE_PERCENTAGE));
    this._txt_ribbon = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.txt_ribbon, new h.LocalizedTextVO(""));
    this._txt_title = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.txt_title, new h.LocalizedTextVO(""));
    this._txt_info = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.txt_contentsBig, new h.LocalizedTextVO(""));
    this._txt_lock = PrebuiltCastleItem.textFieldManager.registerTextField(this._disp.mc_lock.txt_value, new p.LocalizedNumberVO(0));
  }
  Object.defineProperty(PrebuiltCastleItem, "textFieldManager", {
    get: function () {
      return c.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrebuiltCastleItem.prototype, "castleItemVO", {
    get: function () {
      return this._castleItemVO;
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItem.prototype.show = function (e) {
    this._castleItemVO = e;
    this.updatePicture();
    this.updateBackground();
    this.updateRibbon();
    this.updateCampDescription();
    this.updateCosts();
    this.updateDiscount();
    this.updateLock();
    this.updateTooltip();
    m.CastleBasicController.getInstance().addEventListener(s.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  PrebuiltCastleItem.prototype.hide = function () {
    m.CastleBasicController.getInstance().removeEventListener(s.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    this.destroyCollectableRenderList();
  };
  PrebuiltCastleItem.prototype.onLevelUp = function (e) {
    this.updateLock();
    this.updateTooltip();
  };
  PrebuiltCastleItem.prototype.updateDiscount = function () {
    this._disp.mc_discount.visible = this._castleItemVO.shownDiscount > 0 && this._castleItemVO.isPremium();
    this._txt_discount.textContentVO.textReplacements = [this._castleItemVO.shownDiscount];
  };
  PrebuiltCastleItem.prototype.updateLock = function () {
    y.CastleMovieClipHelper.uncacheSafe(this._disp);
    E.ButtonHelper.enableButton(this._disp, !this.isLocked());
    this._disp.mc_lock.visible = this.isLocked();
    if (this._txt_lock.textContentVO) {
      this._txt_lock.textContentVO.numberValue = this._castleItemVO.minLevel;
    }
    this._disp.doCache();
  };
  PrebuiltCastleItem.prototype.updateTooltip = function () {
    if (this.isLocked()) {
      this._disp.toolTipText = {
        t: "dialog_kingdomteaser_copy4_v2",
        p: [this._castleItemVO.minLevel]
      };
    } else if (this._selected) {
      this._disp.toolTipText = "dialog_kingdomStart_prebuiltCastle_chooseCastle_selected_tooltip";
    } else {
      this._disp.toolTipText = "dialog_kingdomStart_prebuiltCastle_chooseCastle_unselected_tooltip";
    }
  };
  PrebuiltCastleItem.prototype.isLocked = function () {
    return f.CastleModel.userData.level < this._castleItemVO.minLevel;
  };
  PrebuiltCastleItem.prototype.updatePicture = function () {
    u.MovieClipHelper.clearMovieClip(this._disp.mc_picture);
    var e = "PrebuiltCastlePicture_" + this._castleItemVO.id;
    var t = new O.CastleGoodgameExternalClip(e, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e));
    t.recycleAsset = false;
    t.doWhenLoaded(this.bindFunction(this.onLoaded));
    this._disp.mc_picture.addChild(t.asDisplayObject());
  };
  PrebuiltCastleItem.prototype.onLoaded = function (e = null) {
    y.CastleMovieClipHelper.uncacheSafe(this._disp);
    this._disp.doCache();
  };
  PrebuiltCastleItem.prototype.updateBackground = function () {
    this.backgroundFrame = g.int(PrebuiltCastleItem.setBit(this.backgroundFrame, PrebuiltCastleItem.BACKGROUND_FRAME_GOLDEN_BIT, this._castleItemVO.isPremium()));
    this._disp.mc_bg.gotoAndStop(this.backgroundFrame + 1);
  };
  PrebuiltCastleItem.prototype.updateRibbon = function () {
    var e;
    if (this._castleItemVO.isFree()) {
      e = "dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree";
      this._disp.mc_ribbon.gotoAndStop(PrebuiltCastleItem.RIBBON_FRAME_DEFAULT);
    } else if (this._castleItemVO.isPremium()) {
      e = "dialog_kingdomStart_prebuiltCastle_chooseCastle_premiumHeader";
      this._disp.mc_ribbon.gotoAndStop(PrebuiltCastleItem.RIBBON_FRAME_GOLDEN);
    } else {
      e = "";
      this._disp.mc_ribbon.gotoAndStop(PrebuiltCastleItem.RIBBON_FRAME_NONE);
    }
    if (this._txt_ribbon.textContentVO) {
      this._txt_ribbon.textContentVO.textId = e;
    }
  };
  PrebuiltCastleItem.prototype.updateCosts = function () {
    var e = g.int(this._castleItemVO.primaryCosts.length);
    if (e > 4) {
      throw new Error("The asset can only display up to four resources. The PrebuiltCastle " + this._castleItemVO.id + " has more.");
    }
    this.destroyCollectableRenderList();
    this._disp.txt_costsFree.visible = !e;
    this._disp.mc_costs2.visible = e < 3;
    this._disp.mc_costs4.visible = e > 2;
    if (e) {
      var t = e > 2;
      this.backgroundFrame = g.int(PrebuiltCastleItem.setBit(this.backgroundFrame, PrebuiltCastleItem.BACKGROUND_FRAME_4PRICE_BIT, t));
      this._disp.mc_bg.gotoAndStop(this.backgroundFrame + 1);
      var i = t ? this._disp.mc_costs4 : this._disp.mc_costs2;
      for (var n = g.int(t ? 4 : 2), o = 0; o < n; ++o) {
        var a = i["mc_res" + o];
        var s = this._castleItemVO.primaryCosts.getItemByIndexSave(o);
        a.visible = s != null;
        if (s) {
          this.renderCost(s, a);
        }
      }
    }
  };
  PrebuiltCastleItem.setBit = function (e, t, i) {
    return (e | 1 << t) ^ (i ? 0 : 1) << t;
  };
  PrebuiltCastleItem.prototype.renderCost = function (e, t) {
    var i = new C.CollectableRenderClips();
    i.addItemMc(t);
    i.addIconMc(t.mc_icon);
    i.addTextfield(t.txt_value);
    var n = f.CastleModel.userCastleListDetailed.getMainCastleByKingdomID(d.WorldClassic.KINGDOM_ID);
    var o = new _.CollectableRenderOptions(_.CollectableRenderOptions.SET_COST_LIST, PrebuiltCastleItem.RESOURCE_COST_SIZE);
    o.costTextfield.useOtherResourceStorage = n.getResourcesAsCollectableList();
    var s = new a.CollectableRenderer(i, o);
    s.updateWithNewVO(e);
    this._collectableRenderList.push(s);
  };
  PrebuiltCastleItem.prototype.updateCampDescription = function () {
    var e = "dialog_prebuiltCastle" + this._castleItemVO.id + "_info";
    var t = "dialog_prebuiltCastle" + this._castleItemVO.id + "_name";
    if (this._txt_title.textContentVO) {
      this._txt_title.textContentVO.textId = t;
    }
    if (this._txt_info.textContentVO) {
      this._txt_info.textContentVO.textId = e;
    }
  };
  Object.defineProperty(PrebuiltCastleItem.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    set: function (e) {
      this._selected = e;
      this._disp.mc_selectionMark.visible = this._selected;
      if (this.castleItemVO) {
        this.updateTooltip();
      }
      this.onLoaded();
    },
    enumerable: true,
    configurable: true
  });
  PrebuiltCastleItem.prototype.destroyCollectableRenderList = function () {
    if (this._collectableRenderList != null) {
      for (var e = 0, t = this._collectableRenderList; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._collectableRenderList = [];
  };
  PrebuiltCastleItem.__initialize_static_members = function () {
    PrebuiltCastleItem.RIBBON_FRAME_NONE = 1;
    PrebuiltCastleItem.RIBBON_FRAME_DEFAULT = 2;
    PrebuiltCastleItem.RIBBON_FRAME_GOLDEN = 3;
    PrebuiltCastleItem.BACKGROUND_FRAME_GOLDEN_BIT = 0;
    PrebuiltCastleItem.BACKGROUND_FRAME_4PRICE_BIT = 1;
    PrebuiltCastleItem.RESOURCE_COST_SIZE = new n(18, 18);
  };
  return PrebuiltCastleItem;
}();
exports.PrebuiltCastleItem = o;
var a = require("./186.js");
var s = require("./32.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./31.js");
var _ = require("./19.js");
var m = require("./15.js");
var f = require("./4.js");
var O = require("./24.js");
var E = require("./8.js");
var y = require("./41.js");
o.__initialize_static_members();