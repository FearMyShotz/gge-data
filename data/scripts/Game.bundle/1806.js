Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./12.js");
var l = require("./31.js");
var c = require("./104.js");
var u = require("./19.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./24.js");
var g = require("./20.js");
var C = require("./95.js");
var _ = require("./47.js");
var m = require("./59.js");
var f = require("./8.js");
var O = require("./25.js");
var E = require("./11.js");
var y = createjs.Point;
var b = function (e) {
  function GachaOfferingRewardsDialog() {
    var t = e.call(this, GachaOfferingRewardsDialog.NAME) || this;
    t.currentLevel = 1;
    t.renderLists = [];
    return t;
  }
  n.__extends(GachaOfferingRewardsDialog, e);
  GachaOfferingRewardsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    f.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_left, this.dialogDisp.btn_right], g.ClickFeedbackButtonHover, 1);
    this._scrollComponent = new C.SimpleScrollComponent(new _.SimpleScrollVO().initByParent(this.dialogDisp.mc_list).addMouseWheelElements([this.dialogDisp]).addVisualElements([this.dialogDisp.mc_list]), new m.DynamicSizeScrollStrategyVertical(true));
  };
  GachaOfferingRewardsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_drawChances_header")));
    this.currentLevel = this.getEventVO().getCurrentLevel();
    this.updateLevel(0);
  };
  GachaOfferingRewardsDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    this._scrollComponent.hide();
  };
  GachaOfferingRewardsDialog.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_left:
          this.updateLevel(-1);
          break;
        case this.dialogDisp.btn_right:
          this.updateLevel(1);
      }
    }
  };
  GachaOfferingRewardsDialog.prototype.updateLevel = function (e) {
    if (e == -1 && this.currentLevel == 1) {
      this.currentLevel = this.getMaxOfferingLevel();
    } else if (e == 1 && this.currentLevel == this.getMaxOfferingLevel()) {
      this.currentLevel = 1;
    } else {
      this.currentLevel = this.currentLevel + e;
    }
    this.txtLevel ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new s.LocalizedTextVO("level_placeholder", 0));
    this.txtLevel.textContentVO.textReplacements = [this.currentLevel.toString()];
    this.updateRewards();
  };
  GachaOfferingRewardsDialog.prototype.updateRewards = function () {
    var e = this;
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this.renderLists.forEach(function (e) {
      return e.destroyCollectableRenderList();
    });
    this.renderLists = [];
    var t = this.getEventVO().getGachaVOByLevel(this.currentLevel).getLootBoxTombolas();
    var i = new Map();
    for (var n = 0, a = t; n < a.length; n++) {
      var r = a[n];
      var d = r.rewardCategory;
      if (!i.has(d)) {
        i.set(d, []);
      }
      i.get(d).push(r);
    }
    var g = ["Common", "Rare", "Epic", "Legendary"];
    var C = 0;
    (i = new Map(Array.from(i.entries()).sort(function (e, t) {
      return g.indexOf(e[0]) - g.indexOf(t[0]);
    }))).forEach(function (t, i) {
      var n = new h.CastleGoodgameExternalClip("GachaOfferingRewards_Header", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GachaOfferingRewardsDialog.NAME), null, 0, false);
      e.dialogDisp.mc_list.mc_items.addChild(n);
      n.y = C;
      C += n.height;
      n.currentshownDisplayObject.mc_legendary.visible = i == "Legendary";
      n.currentshownDisplayObject.mc_epic.visible = i == "Epic";
      n.currentshownDisplayObject.mc_rare.visible = i == "Rare";
      n.currentshownDisplayObject.mc_common.visible = i == "Common";
      e.textFieldManager.registerTextField(n.currentshownDisplayObject.txt_title, new s.LocalizedTextVO("dialog_mysteryBoxSystem_boxRarity_" + i.toLowerCase()));
      t.forEach(function (t) {
        t.rewardIDs.forEach(function (t) {
          var i = new h.CastleGoodgameExternalClip("GachaOfferingRewards_Body", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GachaOfferingRewardsDialog.NAME), null, 0, false);
          e.dialogDisp.mc_list.mc_items.addChild(i);
          i.y = C;
          C += i.height;
          var n = i.currentshownDisplayObject;
          var a = p.CastleModel.rewardData.getListByIdArray([t]).getItemByIndex(0);
          var r = new l.CollectableRenderClips(n.mc_item.mc_item).addIconMc(n.mc_item.mc_item.mc_icon).addInfoBtn(n.mc_item.btn_info).addTextfield(n.mc_item.mc_item.txt_text).addTextfieldBgMc(n.mc_item.mc_item.mc_textBackground).addBuildingLevelMc(n.mc_item.mc_item.mc_buildingLevel);
          var d = new c.CollectableRendererList();
          var g = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_ADVANCED, new y(60, 60));
          O.CollectableRenderHelper.displaySingleItemComplete(d, r, a, g, e.bindFunction(e.preRenderFunc));
          e.textFieldManager.registerTextField(i.currentshownDisplayObject.txt_copy, new s.LocalizedTextVO(a.getDescriptionTextId())).autoFitToBounds = true;
          e.renderLists.push(d);
        });
      });
    });
    var _ = this.dialogDisp.mc_list.mc_items.getBounds(null);
    this._scrollComponent.init(0, Math.max(_.height - this.dialogDisp.mc_list.mc_mask.height, 0), 10, 10);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.setVisibility(_.height > this.dialogDisp.mc_list.mc_mask.height);
  };
  GachaOfferingRewardsDialog.prototype.preRenderFunc = function (e) {
    if (e.itemVO.itemType == r.CollectableEnum.BUILDING) {
      e.getRenderer(u.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = -2;
    }
    if (e.itemVO.itemType == r.CollectableEnum.EQUIPMENT_UNIQUE) {
      e.getRenderer(u.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 0;
    }
  };
  GachaOfferingRewardsDialog.prototype.onScrollValueChanged = function () {
    this.dialogDisp.mc_list.mc_items.y = -this._scrollComponent.currentValue;
  };
  GachaOfferingRewardsDialog.prototype.getMaxOfferingLevel = function () {
    return this.getEventVO().getGachaVOs().length;
  };
  Object.defineProperty(GachaOfferingRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GachaOfferingRewardsDialog.prototype.getEventVO = function () {
    return p.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
  };
  GachaOfferingRewardsDialog.NAME = "GachaOfferingRewards";
  return GachaOfferingRewardsDialog;
}(E.CastleExternalDialog);
exports.GachaOfferingRewardsDialog = b;
a.classImplementsInterfaces(b, "ICollectableRendererList");