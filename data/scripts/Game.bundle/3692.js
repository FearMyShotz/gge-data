Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./8.js");
var l = function (e) {
  function CastleKingdomSelectCastle(t, i) {
    var n = e.call(this, t) || this;
    n.buttonBackgroundDisp = n.buttonBackgroundDisp;
    n.onCastleSelected = i;
    n.textFieldManager.registerTextField(n.subLayerDisp.txt_selectCastle, new s.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_header"));
    n.textFieldManager.registerTextField(n.subLayerDisp.btn_select.txt_name, new s.LocalizedTextVO("dialog_kingdomStart_prebuiltCastle_chooseCastle_selectButton")).autoFitToBounds = true;
    r.ButtonHelper.initBasicButton(n.subLayerDisp.btn_select);
    n.castleSelection = new u.PrebuiltCastleSelector(t.mc_castles, "mc_castle", 3);
    return n;
  }
  n.__extends(CastleKingdomSelectCastle, e);
  CastleKingdomSelectCastle.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.props = t;
    this.castleSelection.show(this.props.spaceId);
    this.castleSelection.selectionIndex = this.props.castleSelectionIndex;
  };
  CastleKingdomSelectCastle.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.castleSelection.hide();
  };
  CastleKingdomSelectCastle.prototype.showHelp = function () {
    c.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_prebuiltCastle_chooseCastle_" + this.props.name));
  };
  CastleKingdomSelectCastle.prototype.onClick = function (e) {
    if (r.ButtonHelper.isButtonEnabled(e.target) && e.target == this.subLayerDisp.btn_select) {
      this.onCastleSelected(this.castleSelection.selectionIndex);
    }
  };
  return CastleKingdomSelectCastle;
}(require("./34.js").CastleDialogSubLayer);
exports.CastleKingdomSelectCastle = l;
var c = require("./9.js");
var u = require("./1712.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");