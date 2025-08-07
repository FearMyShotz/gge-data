Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./2629.js");
var l = require("./2630.js");
var c = require("./13.js");
var u = require("./85.js");
var d = require("./4.js");
var p = require("./17.js");
var h = require("./20.js");
var g = require("./82.js");
var C = require("./47.js");
var _ = require("./189.js");
var m = require("./307.js");
var f = require("./8.js");
var O = require("./445.js");
var E = require("./444.js");
var y = require("./11.js");
var b = createjs.Point;
var D = function (e) {
  function CastleConstructionSellDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleConstructionSellDialog.NAME) || this;
  }
  n.__extends(CastleConstructionSellDialog, e);
  CastleConstructionSellDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.mc_item.btn_info]);
    f.ButtonHelper.initButtons([this.dialogDisp.btnCancel, this.dialogDisp.btnConfirm, this.dialogDisp.btnClose], h.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new a.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoSale_title")));
    this._scrollComponent = new g.ModernSliderScrollComponent(new C.SimpleScrollVO().initByParent(this.dialogDisp).addSliderButton(this.dialogDisp.mc_slider.btn_slider).addSliderLine(this.dialogDisp.mc_slider.sliderBar).addMaxButton(this.dialogDisp.btn_max).addMinusButton(this.dialogDisp.amountPicker.btn_left).addPlusButton(this.dialogDisp.amountPicker.btn_right).addMouseWheelElements([this.dialogDisp]).addVisualElements([this.dialogDisp.amountPicker]), new _.SimpleScrollStrategyHorizontal(true));
    e.prototype.initLoaded.call(this);
  };
  CastleConstructionSellDialog.prototype.onValueChange = function (e = null) {
    this.updateCostText();
    this.dialogDisp.mc_slider.mc_sliderLineFill.width = this.dialogDisp.mc_slider.btn_slider.x;
    this.textFieldManager.registerTextField(this.dialogDisp.amountPicker.txt_pick, new u.CastleLocalizedNumberVO(this._scrollComponent.currentValue));
  };
  CastleConstructionSellDialog.prototype.fillCurrencyContainer = function () {
    if (this.buildingVO.sellBuildingVO.hasCosts) {
      if (this.buildingVO.sellBuildingVO.list.length == 1) {
        this.dialogDisp.mc_reward.item1_0.visible = true;
        this.dialogDisp.mc_reward.item2_0.visible = false;
        this.dialogDisp.mc_reward.item2_1.visible = false;
        this.dialogDisp.mc_reward.item3_0.visible = false;
        this.dialogDisp.mc_reward.item3_1.visible = false;
        this.dialogDisp.mc_reward.item3_2.visible = false;
        this.fillCostContainer(this.dialogDisp.mc_reward.item1_0, this.buildingVO.sellBuildingVO.list[0]);
      } else if (this.buildingVO.sellBuildingVO.list.length == 2) {
        this.dialogDisp.mc_reward.item1_0.visible = false;
        this.dialogDisp.mc_reward.item2_0.visible = true;
        this.dialogDisp.mc_reward.item2_1.visible = true;
        this.dialogDisp.mc_reward.item3_0.visible = false;
        this.dialogDisp.mc_reward.item3_1.visible = false;
        this.dialogDisp.mc_reward.item3_2.visible = false;
        this.fillCostContainer(this.dialogDisp.mc_reward.item2_0, this.buildingVO.sellBuildingVO.list[0]);
        this.fillCostContainer(this.dialogDisp.mc_reward.item2_1, this.buildingVO.sellBuildingVO.list[1]);
      } else {
        this.dialogDisp.mc_reward.item1_0.visible = false;
        this.dialogDisp.mc_reward.item2_0.visible = false;
        this.dialogDisp.mc_reward.item2_1.visible = false;
        this.dialogDisp.mc_reward.item3_0.visible = true;
        this.dialogDisp.mc_reward.item3_1.visible = true;
        this.dialogDisp.mc_reward.item3_2.visible = true;
        this.fillCostContainer(this.dialogDisp.mc_reward.item3_0, this.buildingVO.sellBuildingVO.list[0]);
        this.fillCostContainer(this.dialogDisp.mc_reward.item3_1, this.buildingVO.sellBuildingVO.list[1]);
        this.fillCostContainer(this.dialogDisp.mc_reward.item3_2, this.buildingVO.sellBuildingVO.list[2]);
      }
    }
  };
  CastleConstructionSellDialog.prototype.updateCostText = function () {
    if (this.buildingVO.sellBuildingVO.list.length == 1) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item1_0.txt_copy, new u.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[0].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
    } else if (this.buildingVO.sellBuildingVO.list.length == 2) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item2_0.txt_copy, new u.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[0].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item2_1.txt_copy, new u.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[1].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item3_0.txt_copy, new u.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[0].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item3_1.txt_copy, new u.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[1].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item3_2.txt_copy, new u.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[2].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
    }
  };
  CastleConstructionSellDialog.prototype.fillCostContainer = function (e, t) {
    T.CollectableRenderHelper.displaySingleItem(new v.CollectableRenderClips().addIconMc(e.mc_icon), t, new S.CollectableRenderOptions(S.CollectableRenderOptions.SET_ICON, new b(26, 26)));
    e.toolTipText = t.getTooltipTextId();
  };
  CastleConstructionSellDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.fillSlotContainer(this.buildingVO);
    this.textFieldManager.registerTextField(this.dialogDisp.tfName, new a.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId(this.buildingVO.getNameString()))).autoFitToBounds = true;
    this.fillCurrencyContainer();
    this.updateCostText();
    var t = s.int(this.dialogProperties.basicBuilding ? 1 : d.CastleModel.decoStorage.getCurrentStorage().getAmount(this.buildingVO.wodId));
    this._scrollComponent.init(1, t, 1, 1);
    this._scrollComponent.scrollToValue(1);
  };
  CastleConstructionSellDialog.prototype.fillSlotContainer = function (e) {
    if (e) {
      I.WodPicHelper.addWodPic(e, this.dialogDisp.mc_item.mc_icon, 130, 130, "", true);
      this.dialogDisp.mc_item.mc_buildingLevel.visible = e.level > 1;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_item.mc_buildingLevel.txt_value, new u.CastleLocalizedNumberVO(e.level));
    }
  };
  CastleConstructionSellDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onValueChange));
    this._scrollComponent.show();
    this._scrollComponent.scrollToValue(1);
  };
  CastleConstructionSellDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onValueChange));
    }
  };
  CastleConstructionSellDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.mc_building) {
      m.DecoBuildingToolTipManager.showToolTip(t.target, this.buildingVO);
    }
  };
  CastleConstructionSellDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.dialogDisp.mc_building) {
      this.dialogDisp.mc_buildingTooltip.visible = false;
    }
  };
  CastleConstructionSellDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btnCancel:
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.mc_item.btn_info:
        p.CastleLayoutManager.getInstance().showDialog(O.CastleBuildingInfoDialog, new E.CastleBuildingInfoDialogProperties(this.buildingVO));
        break;
      case this.dialogDisp.btnConfirm:
        if (this.dialogProperties.basicBuilding) {
          d.CastleModel.smartfoxClient.sendCommandVO(new r.C2SellBuildingDeco(this.dialogProperties.basicBuilding.vo.objectId));
        } else {
          d.CastleModel.smartfoxClient.sendCommandVO(new l.C2SellStoredDeco(this.buildingVO.wodId, this._scrollComponent.currentValue, this.getUniqueId()));
        }
        this.hide();
    }
  };
  CastleConstructionSellDialog.prototype.getUniqueId = function () {
    var e = this.buildingVO;
    if (e) {
      return e.uniqueBuildingId;
    } else {
      return -1;
    }
  };
  Object.defineProperty(CastleConstructionSellDialog.prototype, "buildingVO", {
    get: function () {
      return this.dialogProperties.buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionSellDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionSellDialog.__initialize_static_members = function () {
    CastleConstructionSellDialog.NAME = "CastleConstructionSell3";
  };
  return CastleConstructionSellDialog;
}(y.CastleExternalDialog);
exports.CastleConstructionSellDialog = D;
var I = require("./63.js");
var T = require("./25.js");
var v = require("./31.js");
var S = require("./19.js");
o.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();