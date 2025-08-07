Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./180.js");
var u = require("./24.js");
var d = function (e) {
  function CastleMessageTipDialog() {
    var t = this;
    t._textId = 0;
    t._imageId = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleMessageTipDialog.NAME) || this;
  }
  n.__extends(CastleMessageTipDialog, e);
  CastleMessageTipDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this._scrollComponent = new h.CastleTextScrollComponent(new c.CastleTextScrollVO(this.dialogDisp.txt_description, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
  };
  CastleMessageTipDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this);
    if (this.msgTipProperties) {
      this._textId = l.int(this.msgTipProperties.offerID);
      this._imageId = l.int(this.msgTipProperties.privateOfferType);
    }
    this.setupText();
    this.dialogDisp.btnMessageTipHelp.mouseChildren = false;
    this.dialogDisp.btnMessageTipHelp.actLikeButton = true;
    this._scrollComponent.scrollToStart();
  };
  CastleMessageTipDialog.prototype.setupImage = function () {
    if (this.msgTipProperties) {
      this._imageId = l.int(this.msgTipProperties.privateOfferType);
    }
    this.tipGraphic = new u.CastleGoodgameExternalClip("MessageTip_" + this._imageId, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.messageImageId), null, 0, false);
  };
  Object.defineProperty(CastleMessageTipDialog.prototype, "messageImageId", {
    get: function () {
      return "MessageTip_" + this._imageId;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageTipDialog.prototype.setupText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.tf_title, new r.LocalizedTextVO(this.messageTitleId));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(this.messageDescriptionId));
    this.textFieldManager.registerTextField(this.dialogDisp.btnMessageTipHelp.tf_help, new r.LocalizedTextVO(this.messageHelpId));
  };
  Object.defineProperty(CastleMessageTipDialog.prototype, "messageHelpId", {
    get: function () {
      return "dialog_helper_ingameHelpLink";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageTipDialog.prototype, "messageDescriptionId", {
    get: function () {
      return "dialog_messageTip_body_" + this._textId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageTipDialog.prototype, "messageTitleId", {
    get: function () {
      return "dialog_messageTip_title_" + this._textId;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageTipDialog.prototype.showLoaded = function (t = null) {
    if (this._scrollComponent) {
      this._scrollComponent.onShow();
    }
    this.setupImage();
    e.prototype.showLoaded.call(this);
    if (this.tipGraphic != null) {
      this.dialogDisp.picHolder.addChild(this.tipGraphic);
    }
  };
  CastleMessageTipDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    if (this._scrollComponent) {
      this._scrollComponent.onHide();
    }
    while (this.dialogDisp.picHolder.numChildren > 0) {
      this.dialogDisp.picHolder.removeChildAt(0);
    }
  };
  CastleMessageTipDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btnMessageTipHelp:
      case this.dialogDisp.btn_help:
        this.hide();
        a.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_INGAMEHELP_COMMAND);
    }
  };
  Object.defineProperty(CastleMessageTipDialog.prototype, "msgTipProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageTipDialog.__initialize_static_members = function () {
    CastleMessageTipDialog.NAME = "CastleMessageTipDialog";
  };
  return CastleMessageTipDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleMessageTipDialog = d;
var p = require("./29.js");
var h = require("./182.js");
s.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();