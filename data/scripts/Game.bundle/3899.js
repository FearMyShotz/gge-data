Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CheatUnitNameList() {}
  CheatUnitNameList.getUnitNameList = function () {
    var e = r.CastleModel.wodData.voSubList(o.CastleWodData.TYPE_UNIT);
    var t = "";
    if (e != null) {
      for (var i = 0, n = Array.from(e.values()); i < n.length; i++) {
        var d = n[i];
        if (d !== undefined) {
          t += u.Localize.text(d.getNameString()) + " (wodID: " + d.wodId + ")\n";
        }
      }
    }
    c.System.setClipboard(t);
    a.CastleDialogHandler.getInstance().registerDefaultDialogs(s.CastleStandardOkDialog, new l.BasicStandardOkDialogProperties("", "The result is copied into your clipboard. Have a nice Day\n=°.°="));
  };
  return CheatUnitNameList;
}();
exports.CheatUnitNameList = n;
var o = require("./56.js");
var a = require("./9.js");
var s = require("./38.js");
var r = require("./4.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./3.js");