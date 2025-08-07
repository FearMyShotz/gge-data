Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./153.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./4.js");
var C = require("./40.js");
var _ = require("./322.js");
var m = createjs.MovieClip;
var f = createjs.MouseEvent;
var O = createjs.Point;
var E = function (e) {
  function DecorationForgeSelectTargetDialogListItemVE() {
    var t = this;
    t._isMouseDown = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new m()) || this).init();
    return t;
  }
  n.__extends(DecorationForgeSelectTargetDialogListItemVE, e);
  DecorationForgeSelectTargetDialogListItemVE.prototype.init = function () {
    this.disp.addChild(this._clip = new a.GoodgameDisplayObjectClipExternal(DecorationForgeSelectTargetDialogListItemVE.ASSET_CLIP_NAME, y.IsoHelper.view.getAssetFileURL(I.DecorationForgeSelectTargetDialog.NAME)));
    var e = this.getItemMc();
    e.mc_location.mouseChildren = false;
    e.mc_xp.mouseChildren = false;
    e.mc_value0.mouseChildren = false;
    e.mc_value1.mouseChildren = false;
    e.mc_value0.mc_icon.gotoAndStop(1);
    e.mc_value1.mc_icon.gotoAndStop(2);
    this._xpProgress = new _.SimpleProgressBarComponent(e.mc_xp.mc_progress, 238);
    e.mc_unique.toolTipText = "uniqueDeco";
    e.mc_value0.toolTipText = "fusionLevel";
    e.mc_value1.toolTipText = "publicOrder";
    e.mc_xp.toolTipText = "fusionXP";
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(f.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(f.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.removeEventListener = function () {
    this.disp.removeEventListener(f.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(f.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.updateWithNewVO = function (e) {
    this._vo = e;
    this.update();
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.update = function () {
    var e = this.getItemMc();
    this.disp.visible = this._vo != null;
    if (this._vo) {
      this.setDownState(false);
      D.CollectableRenderHelper.displaySingleItemComplete(this, new p.CollectableRenderClips(e.mc_item), this._vo.buildingVO, new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_ICON, new O(84, 68)));
      e.mc_location.gotoAndStop(this.getLocationIconFrame());
      e.mc_location.toolTipText = this.getLocationIconToolTipText();
      var t = this._vo.buildingVO.buildingVO;
      e.mc_unique.visible = t.isUnique();
      b.CastleComponent.textFieldManager.registerTextField(e.txt_name, new c.LocalizedTextVO(this._vo.buildingVO.getNameTextId())).autoFitToBounds = true;
      b.CastleComponent.textFieldManager.registerTextField(e.mc_value0.txt_value, new l.LocalizedNumberVO(t.fusionInfoVO.getCurrentLevel())).autoFitToBounds = true;
      b.CastleComponent.textFieldManager.registerTextField(e.mc_value1.txt_value, new l.LocalizedNumberVO(t.decoPoints)).autoFitToBounds = true;
      b.CastleComponent.textFieldManager.registerTextField(e.mc_blocked.txt_text, new c.LocalizedTextVO("dialog_decoForge_quickGuide_noValidCatalyst_desc"));
      b.CastleComponent.textFieldManager.registerTextField(e.mc_xp.txt_value, new c.LocalizedTextVO("value_proportional_value", [t.fusionInfoVO.getDeltaXpBetweenCurrentLevels(), t.fusionInfoVO.getDeltaXpForNextLevel()])).autoFitToBounds = true;
      this._xpProgress.setProgressByPercent(t.fusionInfoVO.getDeltaXpPercentFactor());
      e.mc_item.mc_amount.visible = this._vo.buildingVO.amount > 0 && !e.mc_unique.visible;
      if (e.mc_item.mc_amount.visible) {
        b.CastleComponent.textFieldManager.registerTextField(e.mc_item.mc_amount.txt_value, new l.LocalizedNumberVO(this._vo.buildingVO.amount)).autoFitToBounds = true;
      }
      this.updateSelection();
      this.setBlockedState();
    }
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.setBlockedState = function () {
    this.getItemMc().mc_blocked.visible = !this.xmlAllowsMinTierCatalyst();
    this.getItemMc().mc_xp.visible = this.xmlAllowsMinTierCatalyst();
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.xmlAllowsMinTierCatalyst = function () {
    var e = u.int(this.vo.buildingVO.buildingVO.fusionInfoVO.getCurrentLevel());
    return u.int(g.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(r.FusionConst.DECORATION_FORGE_ID, e)) > -1;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.setDownState = function (e) {
    this.getItemMc().mc_downState.visible = e;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.updateSelection = function () {
    this.getItemMc().mc_selected.visible = !!this._vo && this._vo.isSelected;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.getItemMc = function () {
    return this._clip.currentshownDisplayObject;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.getLocationIconFrame = function () {
    switch (this._vo.selectVO.kingdomId) {
      case d.KingdomEnum.CLASSIC.id:
        return 2;
      case d.KingdomEnum.ICE.id:
        return 3;
      case d.KingdomEnum.DESSERT.id:
        return 4;
      case d.KingdomEnum.VOLCANO.id:
        return 5;
      case d.KingdomEnum.ISLAND.id:
        return 6;
      default:
        return 1;
    }
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.getLocationIconToolTipText = function () {
    switch (this._vo.selectVO.kingdomId) {
      case d.KingdomEnum.CLASSIC.id:
        return "location_build_green_tt";
      case d.KingdomEnum.ICE.id:
        return "location_build_ice_tt";
      case d.KingdomEnum.DESSERT.id:
        return "location_build_desert_tt";
      case d.KingdomEnum.VOLCANO.id:
        return "location_build_fire_tt";
      case d.KingdomEnum.ISLAND.id:
        return "location_build_storm_tt";
      default:
        return "location_stored_tt";
    }
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.isMouseOverItem = function (e) {
    var t = y.IsoHelper.view.calcPosToCoordinateSystem(new O(e.target.mouseX, e.target.mouseY), e.target, this.disp);
    var i = this.disp.getBounds(null);
    return t.x >= i.left && t.x <= i.right && t.y >= i.top && t.y <= i.bottom;
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.onMouseDown = function (e) {
    this._isMouseDown = true;
    this.setDownState(true);
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.onMouseUp = function (e) {
    if (this._isMouseDown && this.isShown && this._onClickFunc && this.xmlAllowsMinTierCatalyst()) {
      this._onClickFunc(this);
    }
    this._isMouseDown = false;
    this.setDownState(false);
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this.isMouseOverItem(t)) {
      b.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  DecorationForgeSelectTargetDialogListItemVE.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (!this.isMouseOverItem(t)) {
      b.CastleComponent.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
      this.setDownState(false);
    }
  };
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVE.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogListItemVE.prototype, "onClickFunc", {
    get: function () {
      return this._onClickFunc;
    },
    set: function (e) {
      this._onClickFunc = e;
    },
    enumerable: true,
    configurable: true
  });
  DecorationForgeSelectTargetDialogListItemVE.__initialize_static_members = function () {
    DecorationForgeSelectTargetDialogListItemVE.ASSET_CLIP_NAME = "DecorationForgeSelectTarget_ListItem";
  };
  return DecorationForgeSelectTargetDialogListItemVE;
}(C.CastleItemRenderer);
exports.DecorationForgeSelectTargetDialogListItemVE = E;
var y = require("./46.js");
var b = require("./14.js");
var D = require("./25.js");
var I = require("./1450.js");
s.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();