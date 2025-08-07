Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./39.js");
var u = require("./2371.js");
var d = require("./169.js");
var p = require("./183.js");
var h = require("./4.js");
var g = require("./900.js");
var C = function (e) {
  function CastleTreasureBuyPieceDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleTreasureBuyPieceDialog.NAME) || this;
  }
  n.__extends(CastleTreasureBuyPieceDialog, e);
  CastleTreasureBuyPieceDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.pick_amount.btn_left, this.dialogDisp.pick_amount.btn_right]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_treasureMap_buyPieces_copy"));
    this.dialogDisp.info_cost.toolTipText = c.ClientConstTextIds.C2;
    this.dialogDisp.info_cost.mouseChildren = false;
    this.i_iCost_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_cost.txt_value, new s.LocalizedNumberVO(0));
  };
  CastleTreasureBuyPieceDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initAmountPicker();
    this.dialogDisp.addEventListener(d.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeAmount));
  };
  CastleTreasureBuyPieceDialog.prototype.initAmountPicker = function () {
    this._amountPicker = new g.UnitPicker(this.dialogDisp.pick_amount);
    this._amountPicker.setNumItems(h.CastleModel.treasureHuntData.treasureHuntMapVO.missigPieces);
    this._amountPicker.itxt_pick.restrict = "0-9";
    this._amountPicker.itxt_pick.maxChars = 2;
    this._amountPicker.selectedValue = 0;
    this._amountPicker.itxt_pick.focusIn.add(this.bindFunction(this.onPickerFocusIn));
    this._amountPicker.itxt_pick.focusOut.add(this.bindFunction(this.onPickerFocusOut));
    this._amountPicker.itxt_pick.click.add(this.bindFunction(this.onClickInPicker));
    this._amountPicker.itxt_pick.keyDown.add(this.bindFunction(this.onPickerKeyDown));
    this._amountPicker.itxt_pick.change.add(this.bindFunction(this.onPickerTextChanged));
    this.setAmount(this.piecesToBuy);
  };
  CastleTreasureBuyPieceDialog.prototype.onClickInPicker = function (e) {
    this.setPickText(this.getNumberFromPicker());
    if (this.isOutOfTutorial()) {
      this._amountPicker.itxt_pick.setSelection(0, this._amountPicker.itxt_pick.text.length);
    }
    this._amountPicker.itxt_pick.restrict = "0-9";
    this._amountPicker.itxt_pick.maxChars = 5;
  };
  CastleTreasureBuyPieceDialog.prototype.onPickerTextChanged = function (e) {
    this.validatePickCount();
  };
  CastleTreasureBuyPieceDialog.prototype.onPickerKeyDown = function (e) {
    e.stopPropagation();
    if (e.key == o.Keyboard.ENTER) {
      document.activeElement.blur();
      if (this.isOutOfTutorial() && this._onReturnKeyPressed != null) {
        this._onReturnKeyPressed();
      }
    }
  };
  CastleTreasureBuyPieceDialog.prototype.getNumberFromPicker = function () {
    return parseInt(this._amountPicker.itxt_pick.text);
  };
  CastleTreasureBuyPieceDialog.prototype.setPickText = function (e) {
    this._amountPicker.setValue(e);
  };
  CastleTreasureBuyPieceDialog.prototype.onPickerFocusIn = function (e) {
    this.setPickText(this.getNumberFromPicker());
    this._amountPicker.itxt_pick.restrict = "0-9";
    this._amountPicker.itxt_pick.maxChars = 5;
    if (this.isOutOfTutorial()) {
      this._amountPicker.itxt_pick.setSelection(0, this._amountPicker.itxt_pick.text.length);
    }
  };
  CastleTreasureBuyPieceDialog.prototype.onPickerFocusOut = function (e) {
    if (e) {
      this.validatePickCount();
      this._amountPicker.selectedValue = this.getNumberFromPicker() - 1;
      this.setPickText(this.getNumberFromPicker());
    }
  };
  CastleTreasureBuyPieceDialog.prototype.registerOnReturnKeyPressed = function (e) {
    this._onReturnKeyPressed = e;
  };
  CastleTreasureBuyPieceDialog.prototype.validatePickCount = function () {
    var e = this.getNumberFromPicker();
    if (e > this._amountPicker.numItems) {
      this.setPickText(this._amountPicker.numItems);
    } else if (e <= 0) {
      this.setPickText(1);
    }
  };
  CastleTreasureBuyPieceDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    h.CastleModel.treasureMapData.addEventListener(p.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this._onTreasureMapDataUpdated));
  };
  CastleTreasureBuyPieceDialog.prototype._onTreasureMapDataUpdated = function (e) {
    if (h.CastleModel.treasureHuntData.treasureHuntMapVO.missigPieces != 0) {
      this._amountPicker.dispose();
      this.initAmountPicker();
    } else {
      this.hide();
    }
  };
  CastleTreasureBuyPieceDialog.prototype.onChangeAmount = function (e) {
    this.setAmount(this.piecesToBuy);
  };
  CastleTreasureBuyPieceDialog.prototype.setAmount = function (e) {
    var t = l.int(h.CastleModel.costsData.getFinalCostsC2(this.dialogProperties.treasureMapVO.costPiece * e));
    this.i_iCost_txt_value.textContentVO.numberValue = t;
  };
  Object.defineProperty(CastleTreasureBuyPieceDialog.prototype, "piecesToBuy", {
    get: function () {
      return this._amountPicker.selectedValue + 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureBuyPieceDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        h.CastleModel.smartfoxClient.sendCommandVO(new u.C2SBuyTreasureMapPieceVO(this.piecesToBuy, this.dialogProperties.treasureMapVO.mapID));
        this.hide();
    }
  };
  CastleTreasureBuyPieceDialog.prototype.hideLoaded = function (t = null) {
    this.dialogDisp.removeEventListener(d.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeAmount));
    h.CastleModel.treasureMapData.removeEventListener(p.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this._onTreasureMapDataUpdated));
    this._amountPicker.dispose();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleTreasureBuyPieceDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureBuyPieceDialog.__initialize_static_members = function () {
    CastleTreasureBuyPieceDialog.NAME = "CastleTreasureBuyPiece";
  };
  return CastleTreasureBuyPieceDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTreasureBuyPieceDialog = C;
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();