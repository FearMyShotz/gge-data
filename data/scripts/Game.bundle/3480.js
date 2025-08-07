Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./1637.js");
var c = require("./24.js");
var u = function (e) {
  function CastleMainQuestFinishedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleMainQuestFinishedDialog.NAME) || this;
  }
  n.__extends(CastleMainQuestFinishedDialog, e);
  CastleMainQuestFinishedDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    var t = l.CastleQuestBookMainQuestListVO.STATUS_FINISH;
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_picHolder);
    if (this.dialogProperties.mainQuestID == 5) {
      t = l.CastleQuestBookMainQuestListVO.STATUS_RUNNING;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("mainquest_" + this.dialogProperties.mainQuestID + "_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("mainquest_" + this.dialogProperties.mainQuestID + "_copy" + t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_done, new r.LocalizedTextVO("quest_finished"));
    this.dialogDisp.mc_capter.gotoAndStop(this.dialogProperties.mainQuestID);
    this.dialogDisp.mc_picHolder.addChild(this.getDisplayObject());
  };
  CastleMainQuestFinishedDialog.prototype.getDisplayObject = function () {
    var e = l.CastleQuestBookMainQuestListVO.STATUS_FINISH;
    if (this.dialogProperties.mainQuestID == 5) {
      e = l.CastleQuestBookMainQuestListVO.STATUS_RUNNING;
    }
    var t = "Quest_" + this.dialogProperties.mainQuestID + e;
    return new c.CastleGoodgameExternalClip(t, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t), null, 0, false).asDisplayObject();
  };
  CastleMainQuestFinishedDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  Object.defineProperty(CastleMainQuestFinishedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMainQuestFinishedDialog.__initialize_static_members = function () {
    CastleMainQuestFinishedDialog.NAME = "CastleMainQuestFinishedEx";
  };
  return CastleMainQuestFinishedDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleMainQuestFinishedDialog = u;
s.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();