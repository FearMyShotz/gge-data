Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./140.js");
var d = require("./4.js");
var p = require("./43.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./201.js");
var _ = createjs.Point;
var m = function (e) {
  function CastleAttackOrderCanceledDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAttackOrderCanceledDialog.NAME) || this;
  }
  n.__extends(CastleAttackOrderCanceledDialog, e);
  CastleAttackOrderCanceledDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_jumpTo]);
    this.dialogDisp.mc_coords.toolTipText = "coordinates";
    this.dialogDisp.mc_coords.mouseChildren = false;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.crestComponent = new y.CastleCastleCrestComponent(this.dialogDisp.mc_sourceCastle);
    this.jumpToButton = new E.ButtonJumpToAllianceBookmark(this.dialogDisp.btn_jumpTo);
    this.itxt_coords = this.textFieldManager.registerTextField(this.dialogDisp.mc_coords.txt_coords, new c.LocalizedTextVO(a.GenericTextIds.VALUE_COORDS, [0, 0]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO(this.titleTextId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO(this.copyTextId));
  };
  CastleAttackOrderCanceledDialog.prototype.applyPropertiesLoaded = function (e = null) {
    f.CastleDialogHandler.getInstance().registerDialogsWithType(I.CastleExternalPreloaderDialog, new C.CastleExternalPreloaderDialogProperties(null), false, p.CastleDialogConsts.PRIORITY_TOP, 0, p.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    if (this.dialogProperties.bookmarkVO) {
      this.initComponents();
    } else {
      this.controller.addEventListener(u.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
      d.CastleModel.messageData.getBodyForTextMessage(this.dialogProperties.messageID);
    }
  };
  CastleAttackOrderCanceledDialog.prototype.onMessageBodyAvailable = function (e) {
    this.controller.removeEventListener(u.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    this.dialogProperties.bookmarkVO = d.CastleModel.bookmarkData.parseBookmarkObject(e.params[1]);
    this.initComponents();
  };
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "isMessageObsolete", {
    get: function () {
      return !this.dialogProperties.bookmarkVO || !this.dialogProperties.bookmarkVO.worldmapObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackOrderCanceledDialog.prototype.initComponents = function () {
    O.CastleLayoutManager.getInstance().hideDialog(I.CastleExternalPreloaderDialog);
    if (this.isMessageObsolete) {
      f.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("dialog_alliance_quitTournament"), l.Localize.text("errorCode_66")));
      this.hide();
      return;
    }
    var e;
    var t = this.dialogProperties.bookmarkVO;
    e = t.kingdomId == r.FactionConst.KINGDOM_ID ? b.CrestHelper.getPlayerOrFactionCrest(t.worldmapObjectVO.ownerInfo) : t.worldmapObjectVO.ownerInfo.crest;
    this.crestComponent.initComponent(e, t.worldmapObjectVO);
    var i = this.getPosition();
    this.itxt_coords.textContentVO.textReplacements = [i.x, i.y];
    this.jumpToButton.init(t.worldmapObjectVO);
    this.initAttackOrderDetails();
  };
  CastleAttackOrderCanceledDialog.prototype.getPosition = function () {
    return new _(this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPosX, this.dialogProperties.bookmarkVO.worldmapObjectVO.absAreaPosY);
  };
  CastleAttackOrderCanceledDialog.prototype.initAttackOrderDetails = function () {
    this.dialogDisp.mc_details.visible = false;
  };
  CastleAttackOrderCanceledDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(u.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    this.jumpToButton.destroy();
  };
  CastleAttackOrderCanceledDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          f.CastleDialogHandler.getInstance().showHelper("", l.Localize.text(this.helperTextId));
          break;
        case this.dialogDisp.btn_jumpTo:
          this.jumpToButton.onClick();
      }
    }
  };
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "helperTextId", {
    get: function () {
      return "help_alliance_bookmarks_attackMessage";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "copyTextId", {
    get: function () {
      return "dialog_alliance_bookmarks_attackCanceled_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "titleTextId", {
    get: function () {
      return "dialog_alliance_bookmarks_attackCanceled_header";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAttackOrderCanceledDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackOrderCanceledDialog.__initialize_static_members = function () {
    CastleAttackOrderCanceledDialog.NAME = "CastleBookmarkAttackOrderMessage";
  };
  return CastleAttackOrderCanceledDialog;
}(g.CastleExternalDialog);
exports.CastleAttackOrderCanceledDialog = m;
var f = require("./9.js");
var O = require("./17.js");
var E = require("./1361.js");
var y = require("./739.js");
var b = require("./61.js");
var D = require("./38.js");
var I = require("./154.js");
s.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();