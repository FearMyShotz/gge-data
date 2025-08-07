Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./2204.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./20.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./164.js");
var h = function (e) {
  function GeneralsAbilityDialog() {
    var t = e.call(this, GeneralsAbilityDialog.NAME) || this;
    t.NUM_SLOTS = 5;
    t.NUM_ITEMS_FOR_SLOT = 3;
    return t;
  }
  n.__extends(GeneralsAbilityDialog, e);
  GeneralsAbilityDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_reset.txt_copy, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("reset")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_save.txt_copy, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("save")));
    u.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_reset, this.dialogDisp.btn_save, this.dialogDisp.mc_slot0, this.dialogDisp.mc_slot1, this.dialogDisp.mc_slot2, this.dialogDisp.mc_slot3, this.dialogDisp.mc_slot4, this.dialogDisp.mc_item0, this.dialogDisp.mc_item1, this.dialogDisp.mc_item2], c.ClickFeedbackButtonHover, 1);
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
  };
  GeneralsAbilityDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.selectedAbilities = new Map();
    this.onReset();
    for (var i = 0; i < this.dialogProperties.generalVO.selectedAbilities.length; i++) {
      this.selectedAbilities.set(this.dialogProperties.generalVO.selectedAbilities[i][0], l.CastleModel.generalsData.getAbilityByID(this.dialogProperties.generalVO.selectedAbilities[i][1]).abilityGroupID);
    }
    this.updateSlots();
    this.selectSlot(this.dialogDisp.mc_slot0);
    if (this.dialogProperties.isAttack) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_overview_generalAbilities_attack_header")));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_overview_generalAbilities_defense_header")));
    }
    u.ButtonHelper.enableButton(this.dialogDisp.btn_save, false);
  };
  GeneralsAbilityDialog.prototype.updateSlots = function () {
    for (var e = 0; e < this.NUM_SLOTS; e++) {
      var t = this.getGeneralSlot(e);
      var i = t ? this.selectedAbilities.get(t.slotID) : -1;
      var n = this.isSlotLocked(e);
      this.fillSlot(this.dialogDisp["mc_slot" + e], t, e);
      this.dialogDisp["mc_slot" + e].mc_locked.visible = n;
      this.dialogDisp["mc_slot" + e].toolTipText = n ? "dialog_generals_abilityDialog_slotLocked" : i <= 0 ? "dialog_generals_abilityDialog_noAbilityselected" : p.GeneralsHelper.getLocalizedTitleForAbility(i) + "\n" + p.GeneralsHelper.getLocalizedCopyForAbility(this.getHighestAvailableAbilityForGroup(i).abilityID, this.dialogProperties.isAttack);
    }
  };
  GeneralsAbilityDialog.prototype.fillSlot = function (e, t, i) {
    if (t) {
      e.visible = true;
      e.slotVO = t;
      e.slotIndex = i;
      var n = this.getHighestAvailableAbilityForGroup(this.selectedAbilities.get(t.slotID));
      this.fillItemInfo(e, n ? n.abilityGroupID : -1, n ? n.level : -1, !this.isSlotLocked(i));
    } else {
      e.visible = false;
    }
  };
  GeneralsAbilityDialog.prototype.fillItemInfo = function (e, t, i, n) {
    e.mc_number.visible = t > 0 && this.getHighestAvailableAbilityForGroup(t) || !n;
    e.mc_locked.visible = !n;
    e.mc_number.mc_locked.visible = !n || !this.getHighestAvailableAbilityForGroup(t);
    this.textFieldManager.registerTextField(e.mc_number.txt_copy, new a.LocalizedNumberVO(i)).visible = !e.mc_number.mc_locked.visible;
    o.MovieClipHelper.clearMovieClip(e.mc_icon);
    if (t > 0) {
      var s = this.getHighestAvailableAbilityForGroup(t) ? this.getHighestAvailableAbilityForGroup(t).abilityID : -1;
      e.mc_icon.addChild(p.GeneralsHelper.getGeneralAbilityClip(t, 64, s, this.dialogProperties.isAttack));
    }
  };
  GeneralsAbilityDialog.prototype.fillAbilitiesForSlot = function (e, t) {
    var i = this.isSlotLocked(t);
    for (var n = 0; n < this.NUM_ITEMS_FOR_SLOT; n++) {
      this.fillAbilityItem(this.dialogDisp["mc_item" + n], e.abilityGroupIDs[n], e.slotID, n, i);
    }
    this.dialogDisp.mc_locked_all.visible = i;
    this.dialogDisp.mc_locked_all.mouseEnabled = false;
  };
  GeneralsAbilityDialog.prototype.fillAbilityItem = function (e, t, i, n, o) {
    if (!t || t <= 0) {
      e.visible = false;
    } else {
      e.visible = true;
      e.mouseChildren = false;
      e.groupID = t;
      e.slotID = i;
      var s = this.getHighestAvailableAbilityForGroup(t);
      s ||= l.CastleModel.generalsData.getAbilityGroupByID(t)[0];
      var r = !l.CastleModel.generalsData.isGeneralAbilityUnlocked(s.abilityID, this.dialogProperties.generalVO.generalID);
      e.mc_locked.visible = r && !o;
      e.lockedToolTip = r;
      e.mc_selected.visible = this.selectedAbilities.get(i) == t;
      this.updateAbilityItemToolTip(e);
      var c = s ? s.level : 1;
      this.textFieldManager.registerTextField(e.txt_title, new a.TextVO(a.Localize.text("dialog_generals_abilityDialog_AbilityName", [n + 1, p.GeneralsHelper.getLocalizedTitleForAbility(s.abilityGroupID)])));
      this.textFieldManager.registerTextField(e.txt_copy, new a.TextVO(p.GeneralsHelper.getLocalizedCopyForAbility(s.abilityID, this.dialogProperties.isAttack))).autoFitToBounds = true;
      this.fillItemInfo(e.mc_item, t, c, !e.mc_locked.visible && !o);
      e.mc_item.mc_selected.visible = false;
      e.mc_baron.visible = !this.dialogProperties.isAttack;
      e.mc_commander.visible = this.dialogProperties.isAttack;
      if (e.mc_locked.visible || o) {
        e.basicButton.removeMouseEventListener();
      } else {
        e.basicButton.addMouseEventListener();
      }
    }
  };
  GeneralsAbilityDialog.prototype.updateAbilityItemToolTip = function (e) {
    var t = "dialog_generals_overview_generalAbilities_selectAbility_tooltip";
    if (e.lockedToolTip) {
      t = "dialog_generals_overview_generalAbilities_lockedAbility_tooltip";
    }
    if (e.mc_selected.visible) {
      t = "dialog_generals_overview_generalAbilities_selectedAbility_tooltip";
    }
    e.toolTipText = {
      t: t,
      ox: -198
    };
  };
  GeneralsAbilityDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
  };
  GeneralsAbilityDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          d.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_generals_abilityDialog"));
          break;
        case this.dialogDisp.btn_reset:
          this.onReset();
          break;
        case this.dialogDisp.btn_save:
          u.ButtonHelper.enableButton(this.dialogDisp.btn_save, false);
          this.onSave();
      }
      if (t.target.slotVO) {
        this.selectSlot(t.target);
      }
      if (t.target.groupID && t.target.groupID > 0) {
        this.selectAbilityMC(t.target);
      }
    }
  };
  GeneralsAbilityDialog.prototype.selectSlot = function (e) {
    this.selectedSlot = e;
    for (var t = 0; t < this.NUM_SLOTS; t++) {
      this.dialogDisp["mc_slot" + t].mc_selected.visible = this.dialogDisp["mc_slot" + t] == e;
    }
    this.fillAbilitiesForSlot(e.slotVO, e.slotIndex);
  };
  GeneralsAbilityDialog.prototype.selectAbilityMC = function (e) {
    var t = e.groupID;
    if (this.getHighestAvailableAbilityForGroup(t)) {
      u.ButtonHelper.enableButton(this.dialogDisp.btn_save, true);
      this.selectedAbilities.set(e.slotID, t);
      for (var i = 0; i < this.NUM_ITEMS_FOR_SLOT; i++) {
        this.dialogDisp["mc_item" + i].mc_selected.visible = this.dialogDisp["mc_item" + i].groupID == e.groupID;
        this.updateAbilityItemToolTip(this.dialogDisp["mc_item" + i]);
      }
      this.updateSlots();
    }
  };
  GeneralsAbilityDialog.prototype.onSave = function () {
    var e = [];
    for (var t = 0, i = Array.from(this.selectedAbilities.keys()); t < i.length; t++) {
      var n = i[t];
      e.push([n, this.selectedAbilities.get(n) > 0 ? this.getHighestAvailableAbilityForGroup(this.selectedAbilities.get(n)).abilityID : -1]);
    }
    o.BasicModel.smartfoxClient.sendCommandVO(new s.C2SGeneralSelectAbilities(e, this.dialogProperties.generalVO.generalID));
  };
  GeneralsAbilityDialog.prototype.onReset = function () {
    for (var e = 0; e < this.NUM_SLOTS; e++) {
      if (this.getGeneralSlot(e)) {
        this.selectedAbilities.set(this.getGeneralSlot(e).slotID, -1);
      }
    }
    this.updateSlots();
    if (this.selectedSlot) {
      this.fillAbilitiesForSlot(this.selectedSlot.slotVO, this.selectedSlot.slotIndex);
    }
    u.ButtonHelper.enableButton(this.dialogDisp.btn_save, true);
  };
  GeneralsAbilityDialog.prototype.getHighestAvailableAbilityForGroup = function (e) {
    if (e <= 0) {
      return null;
    }
    var t = l.CastleModel.generalsData.getAbilityGroupByID(e);
    var i = null;
    if (!t) {
      return null;
    }
    for (var n = 0; n < t.length; n++) {
      if (l.CastleModel.generalsData.isGeneralAbilityUnlocked(t[n].abilityID, this.dialogProperties.generalVO.generalID) && (!i || i && t[n].level > i.level)) {
        i = t[n];
      }
    }
    return i;
  };
  GeneralsAbilityDialog.prototype.getGeneralSlot = function (e) {
    var t;
    if (e >= (t = this.dialogProperties.isAttack ? this.dialogProperties.generalVO.generalXmlVO.attackSlotXMLVOs : this.dialogProperties.generalVO.generalXmlVO.defenceSlotXMLVOs).length) {
      return null;
    } else {
      return t[e];
    }
  };
  GeneralsAbilityDialog.prototype.isSlotLocked = function (e) {
    var t = false;
    for (var i = 0; i < this.NUM_ITEMS_FOR_SLOT; i++) {
      var n = this.getGeneralSlot(e);
      var o = n ? this.getGeneralSlot(e).abilityGroupIDs[i] : null;
      var a = o && n ? this.getHighestAvailableAbilityForGroup(o) : null;
      t = t || o > 0 && !!a;
    }
    return !t;
  };
  Object.defineProperty(GeneralsAbilityDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsAbilityDialog.NAME = "GeneralsAbilities2";
  return GeneralsAbilityDialog;
}(d.CastleExternalDialog);
exports.GeneralsAbilityDialog = h;