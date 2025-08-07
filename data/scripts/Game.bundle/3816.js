Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./277.js");
var u = require("./52.js");
var d = require("./3817.js");
var p = require("./1432.js");
var h = function (e) {
  function DonateForQuestCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DonateForQuestCommand, e);
  DonateForQuestCommand.prototype.execute = function (e = null) {
    this.questVO = e[0];
    this.conditionVO = e[1];
    this.onYesFunc = e.length > 1 ? e[2] : null;
    this.onNoFunc = e.length > 2 ? e[3] : null;
    if (this.questVO && this.conditionVO) {
      var t = this.conditionVO.conditionMaxCounter;
      var i = l.Localize.text("dialog_questbook_donateCheck_copy", [t, this.getCollectableVO().getNameTextId()]);
      _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.ModernYesNoDialog, new a.BasicStandardYesNoDialogProperties("dialog_questbook_donateCheck_title", i, this.bindFunction(this.performAction), this.bindFunction(this.onNoFunc)));
    }
  };
  DonateForQuestCommand.prototype.getCollectableVO = function () {
    switch (this.conditionVO.conditionType) {
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        return C.CollectableHelper.createVO(g.CollectableEnum.FOOD);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        return C.CollectableHelper.createVO(g.CollectableEnum.WOOD);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        return C.CollectableHelper.createVO(g.CollectableEnum.STONE);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        return C.CollectableHelper.createVO(g.CollectableEnum.C1);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        return C.CollectableHelper.createVO(g.CollectableEnum.COAL);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        return C.CollectableHelper.createVO(g.CollectableEnum.OIL);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        return C.CollectableHelper.createVO(g.CollectableEnum.GLASS);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        return C.CollectableHelper.createVO(g.CollectableEnum.IRON);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS:
        return C.CollectableHelper.createVO(g.CollectableEnum.GENERIC_CURRENCY, 0, u.ClientConstCurrency.ID_KHAN_MEDAL);
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS:
        return C.CollectableHelper.createVO(g.CollectableEnum.GENERIC_CURRENCY, 0, u.ClientConstCurrency.ID_SAMURAI_TOKEN);
    }
    return null;
  };
  DonateForQuestCommand.prototype.performAction = function (e = null) {
    var t = this.conditionVO.conditionMaxCounter;
    switch (this.conditionVO.conditionType) {
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        this.controller.sendCommandVOAndWait(new p.C2SQuestDonateRessourcesVO(this.questVO.questID, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        this.controller.sendCommandVOAndWait(new p.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        this.controller.sendCommandVOAndWait(new p.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        this.controller.sendCommandVOAndWait(new p.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        this.controller.sendCommandVOAndWait(new p.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        this.controller.sendCommandVOAndWait(new p.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        this.controller.sendCommandVOAndWait(new p.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, 0, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        this.controller.sendCommandVOAndWait(new p.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, 0, 0, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS:
        this.controller.sendCommandVOAndWait(new d.C2SQuestDonateCurrencyVO(this.questVO.questID, u.ClientConstCurrency.ID_KHAN_MEDAL, t));
        break;
      case c.ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS:
        this.controller.sendCommandVOAndWait(new d.C2SQuestDonateCurrencyVO(this.questVO.questID, u.ClientConstCurrency.ID_SAMURAI_TOKEN, t));
    }
    if (this.onYesFunc) {
      this.onYesFunc(e);
    }
  };
  Object.defineProperty(DonateForQuestCommand.prototype, "controller", {
    get: function () {
      return s.BasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return DonateForQuestCommand;
}(o.SimpleCommand);
exports.DonateForQuestCommand = h;
var g = require("./12.js");
var C = require("./45.js");
var _ = require("./9.js");
var m = require("./282.js");
r.classImplementsInterfaces(h, "ISimpleCommand");