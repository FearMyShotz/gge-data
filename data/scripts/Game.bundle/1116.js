Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./171.js");
var h = require("./3919.js");
var g = function (e) {
  function CastleWorldSelectionDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, new (l.getDefinitionByName("CastleWorldSelection"))()) || this;
  }
  n.__extends(CastleWorldSelectionDialog, e);
  CastleWorldSelectionDialog.prototype.init = function () {
    e.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.LocalizedTextVO("generic_select_world"));
    this.selectServerCombobox = new C.ComboboxComponent(this.dialogDisp.worldcombobox, "", 1, 40, 32, -1, 0, new h.ComboboxItemRendererWorldSelection());
    this.dialogDisp.worldcombobox.scaleX = this.dialogDisp.worldcombobox.scaleY = 0.75;
  };
  CastleWorldSelectionDialog.prototype.initSelectServerCombobox = function () {
    var e;
    this.selectServerCombobox.clearItems();
    for (var t = a.BasicModel.instanceProxy.getInstancesForActualCountry(), i = a.BasicModel.instanceProxy.selectedInstanceVO, n = 0, o = 0; o < t.length; o++) {
      var s = t[o];
      (e = new p.ComboboxItemRendererVO()).itemLabel = u.Localize.text(s.instanceLocaId);
      e.data = s;
      this.selectServerCombobox.addItem(e);
      if (i && i.instanceId == s.instanceId) {
        n = o;
      }
    }
    this.selectInstance(t[n].instanceId);
  };
  CastleWorldSelectionDialog.prototype.selectInstance = function (e) {
    for (var t = 0; t < this.selectServerCombobox.itemData.length; t++) {
      if (this.selectServerCombobox.itemData[t].data.instanceId == e) {
        this.selectServerCombobox.selectItemIndex(t);
        return;
      }
    }
    this.selectServerCombobox.selectItemIndex(1);
  };
  CastleWorldSelectionDialog.prototype.applyProperties = function () {
    this.initSelectServerCombobox();
  };
  CastleWorldSelectionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.selectWorld();
        this.hide();
    }
  };
  CastleWorldSelectionDialog.prototype.selectWorld = function () {
    var e = this.selectServerCombobox.selectedData;
    r.debug("---------------------ZoneID = " + e.zoneId);
    r.debug("---------------------Zone name = " + e.zone);
    if (a.BasicModel.branchesModel && a.BasicModel.branchesModel.branchByZoneId(e.zoneId.toString()) != a.BasicModel.branchesModel.currentBranch) {
      s.CommandController.instance.executeCommand(o.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, e);
    } else {
      s.CommandController.instance.executeCommand(o.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, e);
    }
  };
  CastleWorldSelectionDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width) {
        e = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * e) {
        e = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      this.disp.x = -this.dispBounds.left * e - this.dispBounds.width * e / 2 + this.disp.stage.stageWidth / 2;
      if (this.env.isTest || this.env.isLocal) {
        this.disp.y = -this.dispBounds.top * e - this.dispBounds.height * e / 2 + this.disp.stage.stageHeight / 4;
      } else {
        this.disp.y = -this.dispBounds.top * e - this.dispBounds.height * e / 2 + this.disp.stage.stageHeight / 2;
      }
      this.disp.scaleX = this.disp.scaleY = e;
    }
  };
  Object.defineProperty(CastleWorldSelectionDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldSelectionDialog.__initialize_static_members = function () {
    CastleWorldSelectionDialog.NAME = "CastleWorldSelectionDialog";
  };
  return CastleWorldSelectionDialog;
}(require("./230.js").CastleDialog);
exports.CastleWorldSelectionDialog = g;
var C = require("./178.js");
c.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();