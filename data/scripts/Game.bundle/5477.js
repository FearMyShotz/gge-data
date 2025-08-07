Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./51.js");
var g = require("./16.js");
var C = require("./39.js");
var _ = require("./4.js");
var m = require("./107.js");
var f = function (e) {
  function CastleRebuyBoosterDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new Library.CastleInterfaceElements.CastleRebuyBooster()) || this;
  }
  n.__extends(CastleRebuyBoosterDialog, e);
  CastleRebuyBoosterDialog.prototype.init = function () {
    this.showBackground = true;
    e.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("dialog_rebuyBoost_title"));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new d.LocalizedTextVO("dialog_rebuyBoost_desc"));
    this.itxt_percent = this.textFieldManager.registerTextField(this.dialogDisp.mc_percent.txt_percent, new d.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new u.LocalizedNumberVO(0));
  };
  CastleRebuyBoosterDialog.prototype.applyProperties = function () {
    this.itxt_desc.textContentVO.textReplacements = this.getTextReplacements();
    this.itxt_percent.textContentVO.textReplacements = [String(l.BoosterConst.DISCOUNT_FACTOR * 100)];
    this.itxt_cost.textContentVO.numberValue = Number(this.dialogProperties.heroBoosterShopVO.costString);
    this.itxt_cost.color = _.CastleModel.currencyData.c2Amount >= this.dialogProperties.heroBoosterShopVO.finalCostsC2 ? g.ClientConstColor.FONT_DEFAULT_COLOR : g.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    this.dialogDisp.mc_costs.toolTipText = C.ClientConstTextIds.C2;
    this.dialogDisp.mc_percent.toolTipText = "dialog_rebuyBoost_percentTooltip";
    var e = p.int(h.ClientConstCharacter.CHAR_ID_GENERAL);
    switch (this.dialogProperties.heroBoosterShopVO.id) {
      case l.BoosterConst.OVERSEER_FOOD:
      case l.BoosterConst.OVERSEER_STONE:
      case l.BoosterConst.OVERSEER_WOOD:
      case l.BoosterConst.OVERSEER_MEAD:
      case l.BoosterConst.OVERSEER_HONEY:
      case l.BoosterConst.OVERSEER_BEEF:
        e = p.int(h.ClientConstCharacter.CHAR_ID_OVERSEER);
        break;
      case l.BoosterConst.MARAUDER:
        e = p.int(h.ClientConstCharacter.CHAR_ID_MARAUDER);
        break;
      case l.BoosterConst.TAX:
        e = p.int(h.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR);
        break;
      case l.BoosterConst.INSTRUCTOR:
        e = p.int(h.ClientConstCharacter.CHAR_ID_INSTRUCTOR);
        break;
      case l.BoosterConst.CARAVAN_OVERLOADER:
        e = p.int(h.ClientConstCharacter.CHAR_ID_MERCHANT);
    }
    m.CharacterHelper.createCharacterBig(e, this.dialogDisp.mc_charPlaceHolder, 369.6, 312.65, true);
  };
  CastleRebuyBoosterDialog.prototype.getTextReplacements = function () {
    var e = [];
    if (!this.dialogProperties.heroBoosterShopVO) {
      return null;
    }
    switch (this.dialogProperties.heroBoosterShopVO.id) {
      case l.BoosterConst.OVERSEER_FOOD:
        e.push(this.heroNameWithProfession(C.ClientConstTextIds.FOOD));
        break;
      case l.BoosterConst.OVERSEER_STONE:
        e.push(this.heroNameWithProfession(C.ClientConstTextIds.STONE));
        break;
      case l.BoosterConst.OVERSEER_WOOD:
        e.push(this.heroNameWithProfession(C.ClientConstTextIds.WOOD));
        break;
      case l.BoosterConst.OVERSEER_MEAD:
        e.push(this.heroNameWithProfession("mead"));
        break;
      case l.BoosterConst.OVERSEER_HONEY:
        e.push(this.heroNameWithProfession("honey"));
        break;
      case l.BoosterConst.OVERSEER_BEEF:
        e.push(this.heroNameWithProfession("beef"));
        break;
      default:
        e.push(this.dialogProperties.heroBoosterShopVO.heroName);
    }
    return e;
  };
  CastleRebuyBoosterDialog.prototype.heroNameWithProfession = function (e) {
    var t = this.dialogProperties.heroBoosterShopVO.heroName;
    var i = c.Localize.text(e);
    return c.Localize.text(s.GenericTextIds.VALUE_WITH_BRACES, [t, i]);
  };
  CastleRebuyBoosterDialog.prototype.show = function () {
    e.prototype.show.call(this);
    if (!this.dialogProperties.heroBoosterShopVO.hasRebuyDiscount) {
      this.hide();
      E.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties("", c.Localize.text("alert_message_is_not_available")));
    }
  };
  CastleRebuyBoosterDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_yes:
        a.CommandController.instance.executeCommand(O.IngameClientCommands.OPEN_BUY_BOOSTER_COMMAND, this.dialogProperties.heroBoosterShopVO);
        this.hide();
        break;
      case this.dialogDisp.btn_no:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleRebuyBoosterDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRebuyBoosterDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRebuyBoosterDialog.__initialize_static_members = function () {
    CastleRebuyBoosterDialog.NAME = "CastleRebuyBoosterDialog";
  };
  return CastleRebuyBoosterDialog;
}(require("./229.js").CastleDialog);
exports.CastleRebuyBoosterDialog = f;
var O = require("./29.js");
var E = require("./9.js");
var y = require("./38.js");
r.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();