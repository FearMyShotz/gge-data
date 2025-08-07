Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./85.js");
var r = require("./4.js");
var l = require("./587.js");
var c = require("./181.js");
var u = require("./9.js");
var d = require("./20.js");
var p = require("./378.js");
var h = require("./8.js");
var g = require("./63.js");
var C = require("./113.js");
var _ = require("./120.js");
var m = require("./115.js");
var f = require("./471.js");
var O = require("./361.js");
var E = createjs.MouseEvent;
var y = function () {
  function AttackDialogSpyInfo() {
    this.AMOUNT_ITEMS = 9;
  }
  AttackDialogSpyInfo.prototype.init = function (e) {
    this.panelDisp = e;
    h.ButtonHelper.initButtons([this.panelDisp.btn_left, this.panelDisp.btn_right, this.panelDisp.btn_tab0, this.panelDisp.btn_tab1, this.panelDisp.btn_tab2, this.panelDisp.btn_tab3, this.panelDisp.item0, this.panelDisp.item1, this.panelDisp.item2, this.panelDisp.item3, this.panelDisp.item4, this.panelDisp.item5, this.panelDisp.item6, this.panelDisp.item7, this.panelDisp.item8, this.panelDisp.item9], d.ClickFeedbackButtonHover, 1);
    this.panelDisp.btn_tab0.toolTipText = "dialog_spyLog_flankSpy_left";
    this.panelDisp.btn_tab1.toolTipText = "dialog_spyLog_frontSpy";
    this.panelDisp.btn_tab2.toolTipText = "dialog_spyLog_flankSpy_right";
    this.panelDisp.btn_tab3.toolTipText = "dialog_spyLog_keepSpy";
    this.controller.spyInfoMC = this.panelDisp;
    this.controller.onShowSpyInfo.add(this.bindFunction(this.showSpyInfo));
    this.controller.onHideSpyInfo.add(this.bindFunction(this.hideSpyInfo));
    this.controller.onLordChanged.add(this.bindFunction(this.updateSpyInfo));
    this.controller.onOpenUnitPicker.add(this.bindFunction(this.openUnitPickerList));
    this.panelDisp.addEventListener(E.CLICK, this.bindFunction(this.onClick));
    this.controller.onShowSpyInfo.dispatch(m.AttackDialogController.getInstance().attackVO.spyInfo.itemsKeep, a.Localize.text("dialog_spyLog_keepSpy"), false, false, false, true, "keep");
  };
  AttackDialogSpyInfo.prototype.openUnitPickerList = function () {
    if (!this.panelDisp.visible) {
      this.controller.onShowSpyInfo.dispatch(this.controller.attackVO.spyInfo.itemsMiddle, a.Localize.text("dialog_spyLog_frontSpy"), true, true, false, true, "middle");
    }
  };
  AttackDialogSpyInfo.prototype.updateTabButtons = function () {
    var e = this.controller.detailViewCachedData.flank == "left";
    var t = this.controller.detailViewCachedData.flank == "right";
    var i = this.controller.detailViewCachedData.flank == "middle";
    var n = this.controller.detailViewCachedData.flank == "keep";
    if (e) {
      this.panelDisp.btn_tab0.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab0.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab0.gotoAndStop(e ? 4 : 1);
    if (t) {
      this.panelDisp.btn_tab2.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab2.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab2.gotoAndStop(t ? 4 : 1);
    if (i) {
      this.panelDisp.btn_tab1.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab1.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab1.gotoAndStop(i ? 4 : 1);
    if (n) {
      this.panelDisp.btn_tab3.basicButton.removeMouseEventListener();
    } else {
      this.panelDisp.btn_tab3.basicButton.addMouseEventListener();
    }
    this.panelDisp.btn_tab3.gotoAndStop(n ? 4 : 1);
  };
  AttackDialogSpyInfo.prototype.updateSpyInfo = function () {
    if (this.panelDisp.visible) {
      this.showSpyInfo(this.controller.detailViewCachedData.unitInv, this.controller.detailViewCachedData.title, this.controller.detailViewCachedData.swamb, this.controller.detailViewCachedData.sgb, false, true, this.controller.detailViewCachedData.flank);
    }
  };
  AttackDialogSpyInfo.prototype.hideSpyInfo = function () {};
  AttackDialogSpyInfo.prototype.showSpyInfo = function (e, t, i = true, s = false, r = false, c = true, u = "", d = false) {
    this.pageIndex = 0;
    if (c && this.controller.attackVO.spyInfo.itemsSupport) {
      var p = new l.UnitInventoryList();
      p.addAll(e.getUnits(null));
      p.addAll(this.controller.attackVO.spyInfo.itemsSupport.getUnits(null));
      e = p;
    }
    this.controller.detailViewCachedData = {
      unitInv: e,
      title: t,
      swamb: i,
      sgb: s,
      flank: u
    };
    if (this.controller.attackVO.spyInfo.remainingSpyInfoTime <= 0) {
      this.displayedUnits = [];
      this.pageIndex = 0;
      this.fillItems();
      n.GoodgameTextFieldManager.getInstance().registerTextField(this.panelDisp.txt_title, new a.LocalizedTextVO("dialog_attack_noSpyinfos"));
      this.panelDisp.visible = true;
      this.panelDisp.btn_left.visible = false;
      this.panelDisp.btn_right.visible = false;
    } else {
      var h = n.TimeStringHelper.getTimeToString(this.controller.attackVO.spyInfo.spyInfoAgeInSeconds, n.TimeStringHelper.ONE_TIME_FORMAT, a.Localize.text);
      var g = o.instanceOfClass(this.controller.attackVO.detailViewObject, "TMapNodeVO") || this.controller.attackVO.spyInfo.spyInfoAgeInSeconds < 1 ? "" : " (" + a.Localize.text("ago", [h]) + ")";
      if (e) {
        this.showInventoryInfo(e.getUnits(null), this.controller.attackVO.targetArea, this.controller.attackVO.targetOwner, t + g, i, s, r, u == "keep");
      }
    }
    this.updateTabButtons();
  };
  AttackDialogSpyInfo.prototype.showInventoryInfo = function (e, t, i, s, r = true, l = false, c = false, u = false) {
    if (this.panelDisp.property && o.instanceOfClass(this.panelDisp.property, "CastleInventoryComponent")) {
      this.panelDisp.property.destroy();
    }
    if (e) {
      n.GoodgameTextFieldManager.getInstance().registerTextField(this.panelDisp.txt_title, new a.TextVO(s));
      var d = [];
      var p = [];
      for (var h = 0; h < e.length; ++h) {
        if (o.instanceOfClass(e[h], "ToolUnitVO") && e[h].numberofDolls <= 0) {
          d.push(e[h]);
          if (e[h].isSupportTool && u) {
            p.push(e[h]);
          }
        } else {
          p.push(e[h]);
        }
      }
      var g = f.AttackDialogHelper.calculateToolsInfo(d, t.baseGateBonus, t.baseMoatBonus, t.baseWallBonus, r, l, c, u);
      this.displayedUnits = g.concat(p);
      this.fillItems();
      this.panelDisp.visible = true;
    }
  };
  AttackDialogSpyInfo.prototype.fillItems = function () {
    this.panelDisp.btn_left.visible = this.pageIndex > 0;
    this.panelDisp.btn_right.visible = (this.pageIndex + 1) * this.AMOUNT_ITEMS < this.displayedUnits.length;
    for (var e = 0; e < this.AMOUNT_ITEMS; e++) {
      var t = this.panelDisp["item" + e];
      var i = this.pageIndex * this.AMOUNT_ITEMS + e;
      if (i < this.displayedUnits.length) {
        var n = this.displayedUnits[i];
        t.visible = true;
        this.addInventoryPic(n, t);
        this.setToolType(n, t);
        this.setItemText(t.txt_text, n);
        t.toolTipText = n.getNameString();
      } else {
        t.visible = false;
      }
    }
    this.updateEmptyText();
  };
  AttackDialogSpyInfo.prototype.updateEmptyText = function () {
    var e = this.displayedUnits.length <= 0;
    var t = n.GoodgameTextFieldManager.getInstance().registerTextField(this.panelDisp.txt_empty, new a.LocalizedTextVO(""));
    t.visible = e;
    if (r.CastleModel.spyData.getNumAllSpies(r.CastleModel.userData.isLegend) <= 0) {
      t.textContentVO.textId = "dialog_attackScreen_espionage_hintNoTavern";
    } else {
      t.textContentVO.textId = "dialog_attackScreen_espionage_hintNoEspionage";
    }
  };
  AttackDialogSpyInfo.prototype.setItemText = function (e, t) {
    if (o.instanceOfClass(t, "EffectIconUnitVO")) {
      var i = t.inventoryAmount >= 0 ? n.GenericTextIds.VALUE_PERCENTAGE_ADD : n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT;
      var r = t.inventoryAmount >= 0 ? n.GenericTextIds.VALUE_NOMINAL_ADD : n.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
      if (t.valueIsPercentage) {
        n.GoodgameTextFieldManager.getInstance().registerTextField(e, new a.LocalizedTextVO(i, [String(Math.abs(t.inventoryAmount))]), new n.InternalGGSTextFieldConfigVO(true));
      } else {
        n.GoodgameTextFieldManager.getInstance().registerTextField(e, new a.LocalizedTextVO(r, [Math.abs(t.inventoryAmount)], true), new n.InternalGGSTextFieldConfigVO(true));
      }
    } else if (t.name != p.CastleInventoryComponent.UNKNOWN_TOOL_NAME || t.type != p.CastleInventoryComponent.UNKNOWN_TOOL_TYPE) {
      n.GoodgameTextFieldManager.getInstance().registerTextField(e, new s.CastleLocalizedNumberVO(t.inventoryAmount, {
        compactThreshold: 1000000
      }), new n.InternalGGSTextFieldConfigVO(true));
    } else {
      n.GoodgameTextFieldManager.getInstance().registerTextField(e, new a.LocalizedTextVO("???", [Math.abs(t.inventoryAmount)], true), new n.InternalGGSTextFieldConfigVO(true));
    }
  };
  AttackDialogSpyInfo.prototype.addInventoryPic = function (e, t) {
    var i = this.displayedUnitsCrest;
    var n = 0;
    var o = 0;
    if (i) {
      n = i.backgroundColor1;
      o = i.backgroundColor2;
    }
    g.WodPicHelper.addUnitPicToContainer(e, t.mc_icon, 60, 60, 60, 60, n, o, 20, null, true, null, t.mc_unitLevel);
  };
  AttackDialogSpyInfo.prototype.setToolType = function (e, t) {
    if (e instanceof c.ToolUnitVO) {
      t.icon_type.visible = true;
      t.icon_type.gotoAndStop(O.AttackDialogWaveInfoHelper.getToolIconFrame(e.toolCategory));
    } else {
      t.icon_type.visible = false;
    }
  };
  AttackDialogSpyInfo.prototype.onClickUnitItem = function (e) {
    if (e.wodId > 0) {
      u.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleRecruitInfoDialog, new _.CastleRecruitInfoDialogProperties(e, this.displayedUnitsCrest));
    }
  };
  AttackDialogSpyInfo.prototype.onClick = function (e) {
    switch (e.target) {
      case this.panelDisp.item0:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex]);
        break;
      case this.panelDisp.item1:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 1]);
        break;
      case this.panelDisp.item2:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 2]);
        break;
      case this.panelDisp.item3:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 3]);
        break;
      case this.panelDisp.item4:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 4]);
        break;
      case this.panelDisp.item5:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 5]);
        break;
      case this.panelDisp.item6:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 6]);
        break;
      case this.panelDisp.item7:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 7]);
        break;
      case this.panelDisp.item8:
        this.onClickUnitItem(this.displayedUnits[this.AMOUNT_ITEMS * this.pageIndex + 8]);
        break;
      case this.panelDisp.btn_left:
        this.pageIndex--;
        this.fillItems();
        break;
      case this.panelDisp.btn_right:
        this.pageIndex++;
        this.fillItems();
        break;
      case this.panelDisp.btn_tab0:
        this.controller.openSpyInfoFlank("left");
        break;
      case this.panelDisp.btn_tab1:
        this.controller.openSpyInfoFlank("middle");
        break;
      case this.panelDisp.btn_tab2:
        this.controller.openSpyInfoFlank("right");
        break;
      case this.panelDisp.btn_tab3:
        this.controller.openSpyInfoFlank("keep");
    }
  };
  Object.defineProperty(AttackDialogSpyInfo.prototype, "displayedUnitsCrest", {
    get: function () {
      if (this.controller.attackVO.targetOwner.crest) {
        return this.controller.attackVO.targetOwner.crest;
      } else {
        return r.CastleModel.userData.playerCrest;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialogSpyInfo.prototype, "controller", {
    get: function () {
      return m.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogSpyInfo.prototype.destroy = function () {
    this.controller.onShowSpyInfo.remove(this.bindFunction(this.showSpyInfo));
    this.controller.onHideSpyInfo.remove(this.bindFunction(this.hideSpyInfo));
    this.controller.onLordChanged.remove(this.bindFunction(this.updateSpyInfo));
    this.controller.onOpenUnitPicker.remove(this.bindFunction(this.openUnitPickerList));
    if (this.panelDisp) {
      this.panelDisp.removeEventListener(E.CLICK, this.bindFunction(this.onClick));
    }
  };
  AttackDialogSpyInfo.prototype.isOutOfTutorial = function () {
    return !r.CastleModel.tutorialData.isTutorialActive;
  };
  Object.defineProperty(AttackDialogSpyInfo.prototype, "spyInfo", {
    get: function () {
      return m.AttackDialogController.getInstance().attackVO.spyInfo;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogSpyInfo.__initialize_static_members = function () {};
  return AttackDialogSpyInfo;
}();
exports.AttackDialogSpyInfo = y;
o.classImplementsInterfaces(y, "ICollectableRendererList");
y.__initialize_static_members();