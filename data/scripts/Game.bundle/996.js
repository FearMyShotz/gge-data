Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./2694.js");
var u = require("./761.js");
var d = require("./37.js");
var p = require("./15.js");
var h = require("./4.js");
var g = require("./20.js");
var C = require("./8.js");
var _ = require("./593.js");
var m = require("./1465.js");
var f = function (e) {
  function CastleConstructionItemsDisassembleDialog() {
    return e.call(this, CastleConstructionItemsDisassembleDialog.NAME) || this;
  }
  n.__extends(CastleConstructionItemsDisassembleDialog, e);
  Object.defineProperty(CastleConstructionItemsDisassembleDialog.prototype, "buttons", {
    get: function () {
      return [];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.CastleConstructionItemsDisassembledDialog.prototype, "buttons").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsDisassembleDialog.prototype.additionalInit = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.text_header, new r.LocalizedTextVO("dialog_ci_disassemble_header")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.activateButtons(true);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_plus1, this.dialogDisp.btn_minus1, this.dialogDisp.btn_max1], g.ClickFeedbackButtonHover, 1);
  };
  CastleConstructionItemsDisassembleDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.renderConstructionItem(this.dialogProperties.constructionItemVO, this.dialogDisp.mc_item, false, this.dialogDisp.mc_timer);
    this.inputTextField = new _.SelectInputFieldComponent(this.dialogDisp.mc_amount, this.bindFunction(this.onInput), "1");
    this.inputTextField.searchField.restrict = "0-9";
    this.setSelectedAmount(1);
  };
  CastleConstructionItemsDisassembleDialog.prototype.onInput = function () {
    var e = o.MathBase.clamp(parseInt(this.dialogDisp.mc_amount.txt_value.text), 1, this.maxAmount);
    this.setSelectedAmount(e);
  };
  CastleConstructionItemsDisassembleDialog.prototype.setSelectedAmount = function (e) {
    this.inputTextField.updateText(o.MathBase.clamp(e, 1, this.maxAmount).toString());
  };
  Object.defineProperty(CastleConstructionItemsDisassembleDialog.prototype, "selectedAmount", {
    get: function () {
      return parseInt(this.dialogDisp.mc_amount.txt_value.text);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsDisassembleDialog.prototype, "maxAmount", {
    get: function () {
      return h.CastleModel.constructionItemData.getConstructionItemVOById(this.dialogProperties.constructionItemVO.id).amount;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsDisassembleDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_minus1:
        this.setSelectedAmount(this.selectedAmount - 1);
        break;
      case this.dialogDisp.btn_plus1:
        this.setSelectedAmount(this.selectedAmount + 1);
        break;
      case this.dialogDisp.btn_max1:
        this.setSelectedAmount(this.maxAmount);
    }
  };
  CastleConstructionItemsDisassembleDialog.prototype.getDescriptionTextID = function () {
    if (this.dialogProperties.constructionItemVO.isTemporary) {
      if (this.isBoosterDisassemble()) {
        return "dialog_ci_disassemble_tempCI_booster_desc";
      } else {
        return "dialog_ci_disassemble_tempCI_currency_desc";
      }
    } else {
      return "dialog_ci_disassemble_multiple_desc";
    }
  };
  CastleConstructionItemsDisassembleDialog.prototype.onClickAccept = function () {
    this.activateButtons(false);
    p.CastleBasicController.getInstance().addEventListener(d.CastleServerMessageArrivedEvent.DCI_ARRIVED, this.bindFunction(this.onDCIArrived));
    h.CastleModel.smartfoxClient.sendCommandVO(new c.C2SDisassembleConstructionItemVO(this.dialogProperties.constructionItemVO.id, this.dialogProperties.lostAndFoundID, this.selectedAmount));
    h.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetContructionItemsInventoryVO());
  };
  CastleConstructionItemsDisassembleDialog.prototype.activateButtons = function (e) {
    C.ButtonHelper.enableButton(this.dialogDisp.btn_accept, e);
    C.ButtonHelper.enableButton(this.dialogDisp.btn_cancel, e);
    C.ButtonHelper.enableButton(this.dialogDisp.btn_close, e);
  };
  CastleConstructionItemsDisassembleDialog.prototype.onDCIArrived = function (e) {
    p.CastleBasicController.getInstance().removeEventListener(d.CastleServerMessageArrivedEvent.DCI_ARRIVED, this.bindFunction(this.onDCIArrived));
    var t = l.int(e.params[0]);
    this.activateButtons(true);
    this.hide();
    if (t == s.ERROR.ALL_OK) {
      this.dialogProperties.additionalParams = JSON.parse(e.params[1][1]);
      O.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleConstructionItemsDisassembledDialog, this.dialogProperties);
    }
  };
  CastleConstructionItemsDisassembleDialog.NAME = "CastleConstructionItemsDisassemble_Apr25";
  return CastleConstructionItemsDisassembleDialog;
}(m.CastleConstructionItemsDisassembledDialog);
exports.CastleConstructionItemsDisassembleDialog = f;
var O = require("./9.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");