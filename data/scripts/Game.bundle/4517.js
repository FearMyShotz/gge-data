Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./13.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./36.js");
var h = function (e) {
  function CastleNotEnoughLuckyWheelSalesDaysTicketsDialog() {
    return e.call(this, CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.NAME) || this;
  }
  n.__extends(CastleNotEnoughLuckyWheelSalesDaysTicketsDialog, e);
  CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], p.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(c.TextHelper.toUpperCaseLocaSafe(s.Localize.text("dialog_luckyWheel_SaleDay_noTicketsTitle"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO("dialog_luckyWheel_SaleDay_noTickets", [a.LuckyWheelConst.SPIN_TICKET_COST_SALE_DAYS]));
    this.dialogDisp.icon_tickets.toolTipText = "tooltip_tickets_saleDays";
  };
  CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleNotEnoughLuckyWheelSalesDaysTicketsDialog.NAME = "CastleNotEnoughLuckyWheelSalesDaysTickets";
  return CastleNotEnoughLuckyWheelSalesDaysTicketsDialog;
}(d.CastleExternalDialog);
exports.CastleNotEnoughLuckyWheelSalesDaysTicketsDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");