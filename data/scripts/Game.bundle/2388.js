Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./123.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./2389.js");
var C = createjs.Point;
var _ = function (e) {
  function CastlePlayerGiftSelectionScrollItem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    h.ButtonHelper.initBasicButton(t.btn_sendGift);
    i._itxt_name = o.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_name, new r.LocalizedTextVO("generic_amount_times"));
    i._itxt_name.size = CastlePlayerGiftSelectionScrollItem.TXT_AMOUNT_SIZE;
    return i;
  }
  n.__extends(CastlePlayerGiftSelectionScrollItem, e);
  CastlePlayerGiftSelectionScrollItem.prototype.customFillItem = function () {
    this._itxt_name.textContentVO.textReplacements = [this.playerInventoryScrollItemVO.amount];
    var e = "giftTrader_giftCount_category_tooltip";
    if (this.playerInventoryScrollItemVO.amount == 1) {
      e += "_singular";
    }
    var t = this.playerInventoryScrollItemVO.eventPackageVO;
    this._disp.mc_packageHit.toolTipText = {
      t: t.descriptionTextID,
      p: t.descriptionParams
    };
    this._disp.mc_amountHit.toolTipText = {
      t: e,
      p: [new r.LocalizedTextVO(t.nameTextID), this.playerInventoryScrollItemVO.amount]
    };
    this._disp.btn_sendGift.toolTipText = "dialog_sendGift_tooltip";
    this.giftRenderer = new m.CollectableRenderer(new u.CollectableRenderClips(this._disp.mc_reward), new d.CollectableRenderOptions(d.CollectableRenderOptions.ICON | d.CollectableRenderOptions.TEXTFIELD, CastlePlayerGiftSelectionScrollItem.ICON_SIZE_GIFT_REWARD));
    this.giftRenderer.options.textfield.forceRender = true;
    this.giftRenderer.updateWithNewVO(t.reward);
    var i = t.packageType == c.ClientConstPackages.PACKAGE_TYPE_ITEM || t.packageType == c.ClientConstPackages.PACKAGE_TYPE_GEM || t.packageType == c.ClientConstPackages.PACKAGE_TYPE_HERO;
    this.disp.mc_ring.visible = !i;
  };
  Object.defineProperty(CastlePlayerGiftSelectionScrollItem.prototype, "playerInventoryScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSelectionScrollItem.prototype.onMouseClick = function (e) {
    if (this.disp.btn_sendGift == e.target) {
      var t = new g.CastlePlayerGiftSliderGiveProperties();
      t.parseDataFromScrollItem(this.playerInventoryScrollItemVO);
      t.packageID = l.int(this.playerInventoryScrollItemVO.eventPackageVO.packageID);
      t.receivingPlayerID = l.int(p.CastleModel.playerGiftData.receivingPlayerID);
      CastlePlayerGiftSelectionScrollItem.dialogHandler.registerDefaultDialogs(O.CastlePlayerGiftSliderGiveDialog, t);
    }
  };
  CastlePlayerGiftSelectionScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.giftRenderer) {
      this.giftRenderer.destroy();
    }
  };
  Object.defineProperty(CastlePlayerGiftSelectionScrollItem, "dialogHandler", {
    get: function () {
      return f.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerGiftSelectionScrollItem.__initialize_static_members = function () {
    CastlePlayerGiftSelectionScrollItem.TXT_AMOUNT_SIZE = 21;
    CastlePlayerGiftSelectionScrollItem.ICON_SIZE_GIFT_REWARD = new C(46, 46);
  };
  return CastlePlayerGiftSelectionScrollItem;
}(a.ScrollItem);
exports.CastlePlayerGiftSelectionScrollItem = _;
var m = require("./186.js");
var f = require("./9.js");
var O = require("./2390.js");
s.classImplementsInterfaces(_, "MovieClip");
_.__initialize_static_members();