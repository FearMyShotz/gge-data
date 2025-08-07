Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./18.js");
var r = function (e) {
  function CastleRecruitInfoDialogUnknown(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleRecruitInfoDialogUnknown, e);
  CastleRecruitInfoDialogUnknown.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (t[0].wodId == s.ClientConstCastle.UNIT_UNKNOWNSOLDIER_WOD) {
      this.textFieldManager.registerTextField(this.sublayerDisp.txt_unknown_copy, new a.LocalizedTextVO("Unknown_short_info_soldier"));
    } else if (t[0].wodId == s.ClientConstCastle.UNIT_UNKNOWNTOOLS_WOD) {
      this.textFieldManager.registerTextField(this.sublayerDisp.txt_unknown_copy, new a.LocalizedTextVO("Unknown_short_info_tool"));
    } else {
      this.textFieldManager.registerTextField(this.sublayerDisp.txt_unknown_copy, new a.LocalizedTextVO(""));
    }
  };
  Object.defineProperty(CastleRecruitInfoDialogUnknown.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRecruitInfoDialogUnknown;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleRecruitInfoDialogUnknown = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "ISublayer");