Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./337.js");
var u = require("./31.js");
var d = require("./104.js");
var p = require("./19.js");
var h = require("./46.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./24.js");
var m = require("./20.js");
var f = require("./95.js");
var O = require("./47.js");
var E = require("./59.js");
var y = require("./8.js");
var b = require("./25.js");
var D = require("./61.js");
var I = require("./70.js");
var T = require("./11.js");
var v = createjs.MovieClip;
var S = createjs.Point;
var A = function (e) {
  function WmoCapturedLostDialog() {
    return e.call(this, WmoCapturedLostDialog.NAME) || this;
  }
  n.__extends(WmoCapturedLostDialog, e);
  WmoCapturedLostDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    y.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.mc_list.mc_slider.btn_slider], m.ClickFeedbackButtonHover, 1);
    this._scrollComponent = new f.SimpleScrollComponent(new O.SimpleScrollVO().initByParent(this.dialogDisp.mc_list).addMouseWheelElements([this.dialogDisp]).addSliderButton(this.dialogDisp.mc_list.mc_slider.btn_slider).addSliderLine(this.dialogDisp.mc_list.mc_slider.sliderLine).addVisualElements([this.dialogDisp.mc_list.mc_slider]), new E.DynamicSizeScrollStrategyVertical(true));
  };
  WmoCapturedLostDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.title)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO(this.dialogProperties.copy));
    D.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest, this.dialogProperties.ownerInfo.crest, null, true);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder);
    this.dialogDisp.mc_holder.addChild(I.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.wmoVO, new S(70, 70), true, false, this.isOutOfTutorial(), "panel_action_jumpTo"));
    if (this.dialogProperties.wmoVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_name.txt_copy, new l.TextVO(this.dialogProperties.wmoVO.areaNameString)).autoFitToBounds = true;
      this.dialogDisp.mc_name.visible = true;
    } else {
      this.dialogDisp.mc_name.visible = false;
    }
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    if (this.dialogProperties.isCapturedDialog && !this.dialogProperties.isInventoryEmpty) {
      this.buildCapturedBuildingList();
    } else {
      this.buildLostDialogList();
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_empty, new l.LocalizedTextVO(this.dialogProperties.isCapturedDialog ? "siegeMessage_outpostcaptured_buildingstatus" : "siegeMessage_outpostlost_buildingstatus")).visible = this.dialogProperties.isInventoryEmpty;
    var i = this.dialogDisp.mc_list.mc_items.getBounds(null);
    this._scrollComponent.init(0, Math.max(i.height - this.dialogDisp.mc_list.mc_mask.height, 0), 10, 10);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.setVisibility(i.height > this.dialogDisp.mc_list.mc_mask.height);
    this._scrollComponent.enableComponent(true);
  };
  WmoCapturedLostDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
      this._scrollComponent.hide();
    }
  };
  WmoCapturedLostDialog.prototype.buildCapturedBuildingList = function () {
    var e = 0;
    var t = new _.CastleGoodgameExternalClip("WmoCapturedLost_ItemHeader", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(WmoCapturedLostDialog.NAME), null, 0, false);
    this.dialogDisp.mc_list.mc_items.addChild(t);
    t.y = e;
    e += t.height;
    this.textFieldManager.registerTextField(t.currentshownDisplayObject.txt_copy, new l.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_ci_assign_list_buildings_tooltip")));
    this.createBuildingList(this.dialogProperties.buildingList, e);
  };
  WmoCapturedLostDialog.prototype.buildLostDialogList = function () {
    var e = [];
    var t = [];
    var i = [];
    var n = this.dialogProperties.ciList;
    for (var o = 0, a = this.dialogProperties.buildingList; o < a.length; o++) {
      var r = a[o];
      var l = C.CastleModel.wodData.getBuildingVOById(r[0]);
      if (s.instanceOfClass(l, "DecoBuildingVO")) {
        i.push(r);
      } else if (l.isDistrict) {
        t.push(r);
      } else {
        e.push(r);
      }
    }
    var c = 0;
    if (e.length > 0) {
      c = this.createHeader("dialog_ci_assign_list_buildings_tooltip", c);
      c = this.createBuildingList(e, c);
    }
    if (t.length > 0) {
      c = this.createHeader("panel_deco_districts", c);
      c = this.createBuildingList(t, c);
    }
    if (i.length > 0) {
      c = this.createHeader("dialog_welcomeBack_category_decorations_desc", c);
      c = this.createBuildingList(i, c);
    }
    if (n.length > 0) {
      c = this.createHeader("dialog_ci_assign_list_items_tooltip", c);
      c = this.createConstructionItemList(n, c);
    }
  };
  WmoCapturedLostDialog.prototype.createHeader = function (e, t) {
    var i = new _.CastleGoodgameExternalClip("WmoCapturedLost_ItemHeader", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(WmoCapturedLostDialog.NAME), null, 0, false);
    this.dialogDisp.mc_list.mc_items.addChild(i);
    i.y = t;
    this.textFieldManager.registerTextField(i.currentshownDisplayObject.txt_copy, new l.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId(e)));
    return t + i.height;
  };
  WmoCapturedLostDialog.prototype.createBuildingList = function (e, t) {
    var i = t;
    for (var n = 0, s = e; n < s.length; n++) {
      var c = s[n];
      var u = new _.CastleGoodgameExternalClip("WmoCapturedLost_ItemBuilding", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(WmoCapturedLostDialog.NAME), null, 0, false);
      this.dialogDisp.mc_list.mc_items.addChild(u);
      u.y = i;
      i += u.height;
      var d = C.CastleModel.wodData.getBuildingVOById(c[0]);
      var p = r.Localize.text("generic_amount_reward", [c[1], d.getNameString()]);
      var h = r.Localize.text("building_level", [d.level]);
      var g = r.Localize.text(o.GenericTextIds.VALUE_DASH_SPLIT, [p, h]);
      this.textFieldManager.registerTextField(u.currentshownDisplayObject.txt_copy, new l.TextVO(g));
      u.currentshownDisplayObject.mc_icon.addChild(this.getBuildingIcon(d));
    }
    return i;
  };
  WmoCapturedLostDialog.prototype.createConstructionItemList = function (e, t) {
    var i = t;
    for (var n = 0, s = e; n < s.length; n++) {
      var h = s[n];
      var g = new _.CastleGoodgameExternalClip("WmoCapturedLost_ItemCI", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(WmoCapturedLostDialog.NAME), null, 0, false);
      this.dialogDisp.mc_list.mc_items.addChild(g);
      g.y = i;
      i += g.height;
      var m = C.CastleModel.constructionItemData.getConstructionItemVO(h[0]);
      var f = r.Localize.text("generic_amount_reward", [h[1], m.nameTextId]);
      var O = r.Localize.text("ci_level", [m.level]);
      var E = r.Localize.text(o.GenericTextIds.VALUE_DASH_SPLIT, [f, O]);
      this.textFieldManager.registerTextField(g.currentshownDisplayObject.txt_copy, new l.TextVO(E));
      b.CollectableRenderHelper.displaySingleItemComplete(new d.CollectableRendererList(), new u.CollectableRenderClips(g.currentshownDisplayObject.mc_icon).addIconMc(g.currentshownDisplayObject.mc_icon), new c.CollectableItemConstructionItemVO(h[0]), new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ICON, new S(44, 44)));
    }
    return i;
  };
  WmoCapturedLostDialog.prototype.getBuildingIcon = function (e) {
    var t = new v();
    var i = new Library.CastleInterfaceElements.BuildingGroundBg();
    a.MovieClipHelper.scaleToFit(i, 22, 22);
    t.addChild(i);
    var n = new (h.IsoHelper.view.createIsoObjectVEFromVO(e).buildingGroundIconClass)();
    a.MovieClipHelper.scaleToFit(n, 15.399999999999999, 15.399999999999999);
    n.gotoAndStop(1);
    t.addChild(n);
    t.mouseChildren = false;
    return t;
  };
  WmoCapturedLostDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (y.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  WmoCapturedLostDialog.prototype.onScrollValueChanged = function () {
    this.dialogDisp.mc_list.mc_items.y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(WmoCapturedLostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  WmoCapturedLostDialog.NAME = "WmoCapturedLost";
  return WmoCapturedLostDialog;
}(T.CastleExternalDialog);
exports.WmoCapturedLostDialog = A;
s.classImplementsInterfaces(A, "ICollectableRendererList");