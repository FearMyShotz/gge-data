Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./4088.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./81.js");
var g = require("./8.js");
var C = require("./996.js");
var _ = require("./764.js");
var m = require("./350.js");
var f = require("./724.js");
var O = createjs.Point;
var E = function (e) {
  function LostAndFoundListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LostAndFoundListItem, e);
  LostAndFoundListItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    g.ButtonHelper.initButtons([this.itemMc.btn_option1, this.itemMc.btn_option2, this.itemMc.btn_collect], w.ClickFeedbackButton);
    this.itemMc.btn_option1.mouseChildren = this.itemMc.btn_option2.mouseChildren = this.itemMc.btn_collect.mouseChildren = false;
    I.CastleComponent.textFieldManager.registerTextField(this.itemMc.btn_collect.txt_value, new s.LocalizedTextVO("collect")).autoFitToBounds = true;
  };
  LostAndFoundListItem.prototype.fill = function () {
    this.itemMc.mc_number.gotoAndStop(this.vo.rank == 1 ? 2 : 1);
    I.CastleComponent.textFieldManager.registerTextField(this.itemMc.mc_number.txt_value, new r.LocalizedNumberVO(this.vo.rank));
    I.CastleComponent.textFieldManager.registerTextField(this.itemMc.txt_received, this.vo.receivedTimeTextVO);
    var e = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_BASIC, new O(60, 60));
    e.tooltip.useAmount = false;
    var t = new c.CollectableRenderClips();
    t.addIconMc(this.itemMc.mc_icon);
    t.addInfoBtn(this.itemMc.btn_info);
    T.CollectableRenderHelper.displaySingleItemComplete(this, t, this.vo.collectableVO, e);
    var i = this.voIsConstructionItemVO && d.CastleModel.constructionItemData.isInventoryFull || this.voIsGemVO && d.CastleModel.gemData.isInventoryFull || this.voIsEquipmentVO && d.CastleModel.equipData.isInventoryFull || this.voIsBuildingVO && d.CastleModel.decoStorage.getMainStorage().isCapacityFull();
    g.ButtonHelper.enableButton(this.itemMc.btn_collect, !i);
    this.itemMc.btn_collect.toolTipText = i ? "fullInventory_tt" : null;
    this.updateTimer();
    this.updateOptionButtons();
  };
  LostAndFoundListItem.prototype.updateOptionButtons = function () {
    g.ButtonHelper.enableButton(this.itemMc.btn_option2, true);
    g.ButtonHelper.enableButton(this.itemMc.btn_option1, true);
    if (this.voIsConstructionItemVO) {
      this.itemMc.btn_option1.mc_constuction.visible = true;
      this.itemMc.btn_option1.mc_sell.visible = false;
      this.itemMc.btn_option1.toolTipText = "disassemble_tooltip";
      this.itemMc.btn_option2.mc_construct.visible = true;
      this.itemMc.btn_option2.mc_gem.visible = false;
      this.itemMc.btn_option2.mc_deco.visible = false;
      this.itemMc.btn_option2.mc_lords.visible = false;
      g.ButtonHelper.enableButton(this.itemMc.btn_option2, L.ConstructionItemsHelper.hasConstructorBuilding);
      g.ButtonHelper.enableButton(this.itemMc.btn_option1, L.ConstructionItemsHelper.hasConstructorBuilding);
      this.itemMc.btn_option2.toolTipText = "dialog_ci_assign_list_items_tooltip";
    } else if (this.voIsGemVO) {
      this.itemMc.btn_option1.mc_constuction.visible = false;
      this.itemMc.btn_option1.mc_sell.visible = true;
      this.itemMc.btn_option1.toolTipText = "sell_tooltip";
      this.itemMc.btn_option2.mc_construct.visible = false;
      this.itemMc.btn_option2.mc_gem.visible = true;
      this.itemMc.btn_option2.mc_deco.visible = false;
      this.itemMc.btn_option2.mc_lords.visible = false;
      this.itemMc.btn_option2.toolTipText = "dialog_gems_tooltip";
    } else if (this.voIsEquipmentVO) {
      this.itemMc.btn_option1.mc_constuction.visible = false;
      this.itemMc.btn_option1.mc_sell.visible = true;
      this.itemMc.btn_option1.toolTipText = "sell_tooltip";
      this.itemMc.btn_option2.mc_construct.visible = false;
      this.itemMc.btn_option2.mc_gem.visible = false;
      this.itemMc.btn_option2.mc_deco.visible = false;
      this.itemMc.btn_option2.mc_lords.visible = true;
      this.itemMc.btn_option2.toolTipText = "dialog_equipment_title";
    } else if (this.voIsBuildingVO) {
      this.itemMc.btn_option1.mc_constuction.visible = false;
      this.itemMc.btn_option1.mc_sell.visible = true;
      this.itemMc.btn_option1.toolTipText = "sell_tooltip";
      this.itemMc.btn_option2.mc_construct.visible = false;
      this.itemMc.btn_option2.mc_gem.visible = false;
      this.itemMc.btn_option2.mc_deco.visible = true;
      this.itemMc.btn_option2.mc_lords.visible = false;
      this.itemMc.btn_option2.toolTipText = "dialog_buildingsStorehouse_title";
    } else {
      this.itemMc.btn_option1.mc_constuction.visible = false;
      this.itemMc.btn_option1.mc_sell.visible = false;
      this.itemMc.btn_option1.toolTipText = "unknown";
      this.itemMc.btn_option2.mc_construct.visible = false;
      this.itemMc.btn_option2.mc_gem.visible = false;
      this.itemMc.btn_option2.mc_deco.visible = false;
      this.itemMc.btn_option2.mc_lords.visible = false;
      this.itemMc.btn_option2.toolTipText = "unknown";
    }
  };
  LostAndFoundListItem.prototype.updateTimer = function () {
    if (this.vo) {
      p.CastleTimeStringHelper.setEventTime(this.itemMc.txt_timeLeft, this.vo.remainingTimeInSeconds);
    }
  };
  Object.defineProperty(LostAndFoundListItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  LostAndFoundListItem.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.itemMc.btn_option1:
          this.onOption1();
          break;
        case this.itemMc.btn_option2:
          this.onOption2();
          break;
        case this.itemMc.btn_collect:
          this.onCollect();
      }
    }
  };
  LostAndFoundListItem.prototype.onCollect = function () {
    a.BasicModel.smartfoxClient.sendCommandVO(new l.C2SCollectLostAndFoundItemVO(this.vo.id));
  };
  LostAndFoundListItem.prototype.onOption1 = function () {
    if (this.voIsConstructionItemVO) {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleConstructionItemsDisassembleDialog, new C.ConstructionItemsActionProperties(this.vo.collectableVO.constructionItemVO, null, null, null, this.vo.id));
    } else if (this.voIsGemVO) {
      if (this.voIsRelicGem) {
        D.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleEquipmentSellDialog, new f.CastleEquipmentSellDialogProperties(this.vo.collectableVO.vo, this.bindFunction(this.onSellGem), null, this.vo.id));
      } else {
        D.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleEquipmentSellDialog, new f.CastleEquipmentSellDialogProperties(this.vo.collectableVO.gemVO, this.bindFunction(this.onSellGem), null, this.vo.id));
      }
    } else if (this.voIsEquipmentVO) {
      if (this.voIsRelicEquipment) {
        D.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleEquipmentSellDialog, new f.CastleEquipmentSellDialogProperties(this.vo.collectableVO.vo, this.bindFunction(this.onSellEquipment), null, this.vo.id));
      } else {
        D.CastleDialogHandler.getInstance().registerDefaultDialogs(V.CastleEquipmentSellDialog, new f.CastleEquipmentSellDialogProperties(this.vo.collectableVO.equipmentVO, this.bindFunction(this.onSellEquipment), null, this.vo.id));
      }
    } else if (this.voIsBuildingVO) {
      I.CastleComponent.dialogHandler.registerDefaultDialogs(P.CastleConstructionSellDialog, new _.CastleConstructionSellDialogProperties(this.vo.collectableVO.buildingVO));
    }
  };
  LostAndFoundListItem.prototype.onSellGem = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    if (x.instanceOfClass(this.vo.collectableVO, "ACollectableItemGemVO")) {
      d.CastleModel.gemData.sell(this.vo.collectableVO.gemVO, this.vo.id);
    }
    if (this.vo.collectableVO instanceof b.CollectableItemGemRandomVO) {
      d.CastleModel.gemData.sell(this.vo.collectableVO.gemVO, this.vo.id);
    }
    if (this.voIsRelicGem) {
      d.CastleModel.gemData.sell(this.vo.collectableVO.vo, this.vo.id);
    }
  };
  LostAndFoundListItem.prototype.onSellEquipment = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    if (x.instanceOfClass(this.vo.collectableVO, "ACollectableItemEquipmentVO")) {
      d.CastleModel.equipData.sell(this.vo.collectableVO.equipmentVO, -1, this.vo.id);
    }
    if (this.voIsRelicEquipment) {
      d.CastleModel.equipData.sell(this.vo.collectableVO.vo, -1, this.vo.id);
    }
  };
  LostAndFoundListItem.prototype.onOption2 = function () {
    if (this.voIsConstructionItemVO) {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleConstructionItemsMainDialog, new A.CastleConstructionItemsMainDialogProperties());
    } else if (this.voIsGemVO) {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleEquipmentDialog, new m.CastleEquipmentDialogProperties(null, -1, false, B.CastleEquipmentSublayer.FILTER_GEM));
    } else if (this.voIsEquipmentVO) {
      D.CastleDialogHandler.getInstance().registerDefaultDialogs(R.CastleEquipmentDialog);
    } else if (this.voIsBuildingVO) {
      D.CastleDialogHandler.getInstance().registerDialogs(M.DecorationStorageDialog);
    }
  };
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsGemVO", {
    get: function () {
      return x.instanceOfClass(this.vo.collectableVO, "CollectableItemGemVO") || x.instanceOfClass(this.vo.collectableVO, "CollectableItemGemRandomVO") || this.voIsRelicGem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsEquipmentVO", {
    get: function () {
      return x.instanceOfClass(this.vo.collectableVO, "ACollectableItemEquipmentVO") || x.instanceOfClass(this.vo.collectableVO, "CollectableItemEquipmentRarenessVO") || this.voIsRelicEquipment;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsRelicEquipment", {
    get: function () {
      return x.instanceOfClass(this.vo.collectableVO, "CollectableItemRelicVO") && this.vo.collectableVO.type == y.CollectableItemRelicVO.TYPE_EQUIPMENT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsRelicGem", {
    get: function () {
      return x.instanceOfClass(this.vo.collectableVO, "CollectableItemRelicVO") && this.vo.collectableVO.type == y.CollectableItemRelicVO.TYPE_GEM;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsConstructionItemVO", {
    get: function () {
      return x.instanceOfClass(this.vo.collectableVO, "CollectableItemConstructionItemVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "voIsBuildingVO", {
    get: function () {
      return x.instanceOfClass(this.vo.collectableVO, "CollectableItemBuildingVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LostAndFoundListItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return LostAndFoundListItem;
}(h.AInfiniteScrollListItem);
exports.LostAndFoundListItem = E;
var y = require("./289.js");
var b = require("./860.js");
var D = require("./9.js");
var I = require("./14.js");
var T = require("./25.js");
var v = require("./997.js");
var S = require("./323.js");
var A = require("./357.js");
var L = require("./239.js");
var P = require("./765.js");
var M = require("./1440.js");
var R = require("./246.js");
var V = require("./595.js");
o.classImplementsInterfaces(E, "ICollectableRendererList");
var x = require("./1.js");
var w = require("./36.js");
var B = require("./716.js");