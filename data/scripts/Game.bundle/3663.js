Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./60.js");
var u = require("./67.js");
var d = require("./19.js");
var p = require("./227.js");
var h = require("./73.js");
var g = require("./11.js");
var C = createjs.Point;
var _ = function (e) {
  function CastleWhaleChestFinishDialog() {
    var t = this;
    t.rewardIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleWhaleChestFinishDialog.NAME) || this;
  }
  n.__extends(CastleWhaleChestFinishDialog, e);
  CastleWhaleChestFinishDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.rewardIndex -= CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE;
        this.setReward();
        break;
      case this.dialogDisp.btn_right:
        this.rewardIndex += CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE;
        this.setReward();
    }
  };
  CastleWhaleChestFinishDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.getCustomProps();
    this.parseCustomDialogProps();
  };
  CastleWhaleChestFinishDialog.prototype.getCustomProps = function () {
    var e;
    switch (this.offerVO.offerState) {
      case p.PrivateOfferStateEnum.OFFER_ACCEPTED:
      case p.PrivateOfferStateEnum.OFFER_SUCCEEDED:
      case p.PrivateOfferStateEnum.ITERATION_SUCCEEDED:
        e = this.offerVO.getVisualComponentByName(c.ClientConstOffer.OFFER_VISUAL_FINISH_DIALOG);
        this._customDialogProps = e.dialogCustomization;
        break;
      case p.PrivateOfferStateEnum.OFFER_EXPIRED:
        e = this.dialogProperties.offerVO.getVisualComponentByName(c.ClientConstOffer.OFFER_VISUAL_FAILED_DIALOG);
        this._customDialogProps = e.dialogCustomization;
    }
  };
  CastleWhaleChestFinishDialog.prototype.parseCustomDialogProps = function () {
    if (this._customDialogProps) {
      this._customCopySuccess = this._customDialogProps.CID ? this._customDialogProps.CID : "";
      this._customTitleSuccess = this._customDialogProps.TID ? this._customDialogProps.TID : "";
      this._customCopyExpire = this._customDialogProps.EXC ? this._customDialogProps.EXC : "";
      this._customTitleExpire = this._customDialogProps.EXT ? this._customDialogProps.EXT : "";
      this._customTitleAlreadyRec = this._customDialogProps.ART ? this._customDialogProps.ART : "";
      this._customCopyAlreadyRec = this._customDialogProps.ARC ? this._customDialogProps.ARC : "";
    }
  };
  CastleWhaleChestFinishDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_right, this.dialogDisp.btn_left]);
    this.dialogDisp.btn_ok.toolTipText = o.GenericTextIds.BUTTON_OKAY;
    this.setDialogTexts();
    this.setReward();
  };
  CastleWhaleChestFinishDialog.prototype.setDialogTexts = function () {
    var e = "dialog_specialOfferDungeonTreasureOpen_title";
    var t = "dialog_specialOfferDungeonTreasureOpen_copy";
    switch (this.offerVO.offerState) {
      case p.PrivateOfferStateEnum.OFFER_SUCCEEDED:
      case p.PrivateOfferStateEnum.ITERATION_SUCCEEDED:
      case p.PrivateOfferStateEnum.OFFER_ACCEPTED:
        e = this._customTitleSuccess ? this._customTitleSuccess : CastleWhaleChestFinishDialog.OFFER_ACCEPTED_TITLE;
        t = this._customCopySuccess ? this._customCopyExpire : CastleWhaleChestFinishDialog.OFFER_ACCEPTED_COPY;
        break;
      case p.PrivateOfferStateEnum.OFFER_EXPIRED:
        e = this._customTitleExpire ? this._customTitleExpire : CastleWhaleChestFinishDialog.OFFER_ENDED_TITLE;
        t = this._customCopyExpire ? this._customCopyExpire : CastleWhaleChestFinishDialog.OFFER_ENDED_COPY;
        break;
      default:
        e = CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_TITLE;
        t = CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_COPY;
        e = this._customTitleAlreadyRec ? this._customTitleAlreadyRec : CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_TITLE;
        t = this._customCopyAlreadyRec ? this._customCopyAlreadyRec : CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_COPY;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO(e));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO(t));
  };
  CastleWhaleChestFinishDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (s.instanceOfClass(t.target, "MovieClip") && t.target.equipmentVO) {
      h.EquipmentIconHelper.showToolTip(t.target.mc_icon, t.target.equipmentVO, null, !t.target.equipmentVO.isPermanent);
    }
  };
  CastleWhaleChestFinishDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    f.TooltipManagerFacade.hideAllTooltips();
  };
  CastleWhaleChestFinishDialog.prototype.setReward = function () {
    this.destroyCollectableRenderList();
    if (p.PrivateOfferStateEnum.isFailedState(this.offerVO.offerState)) {
      this.setRewards(null);
    } else {
      var e = l.int(this.dialogProperties.offerSelectionIndex);
      var t = this.offerVO.getTotalRewardListFromOfferVO(e);
      this.setRewards(t);
    }
  };
  CastleWhaleChestFinishDialog.prototype.setRewards = function (e) {
    var t;
    this.hideAllRewardHolders();
    this.dialogDisp.btn_right.visible = this.rewardIndex + CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE < e.length;
    this.dialogDisp.btn_left.visible = this.rewardIndex - CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE >= 0;
    var i = new m.CollectableList();
    for (var n = this.rewardIndex; n < this.rewardIndex + CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE; n++) {
      if (e.getItemByIndex(n) != null) {
        i.addItem(e.getItemByIndex(n));
      }
    }
    t = this.dialogDisp[CastleWhaleChestFinishDialog.REWARDHOLDERS[i.length - 1]];
    var o = new u.CollectableRenderClipsList(t, "mc_reward");
    o.addInfoBtns("parent.mc_info_btn", null, true);
    o.addIconMcs("mc_icon");
    if (t) {
      t.visible = true;
    }
    O.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, o, i, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_DEFAULT, CastleWhaleChestFinishDialog.REWARD_ITEM_EQUIPMENT_DIMENSION));
  };
  CastleWhaleChestFinishDialog.prototype.hideAllRewardHolders = function () {
    for (var e = 0; e < CastleWhaleChestFinishDialog.REWARDHOLDERS.length; e++) {
      this.dialogDisp[CastleWhaleChestFinishDialog.REWARDHOLDERS[e]].visible = false;
    }
  };
  Object.defineProperty(CastleWhaleChestFinishDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWhaleChestFinishDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWhaleChestFinishDialog.__initialize_static_members = function () {
    CastleWhaleChestFinishDialog.REWARD_ITEM_EQUIPMENT_DIMENSION = new C(58, 58);
  };
  CastleWhaleChestFinishDialog.NAME = "CastlePOWhaleChestFinishExternal";
  CastleWhaleChestFinishDialog.PO_NAME = "CastlePOStandardOKExternal";
  CastleWhaleChestFinishDialog.REWARDHOLDERS = ["mc_one_item_offer", "mc_two_item_offer", "mc_three_item_offer", "mc_four_item_offer"];
  CastleWhaleChestFinishDialog.OFFER_ACCEPTED_TITLE = "dialog_primeday_specialoffer_rewardtitle";
  CastleWhaleChestFinishDialog.OFFER_ACCEPTED_COPY = "dialog_privateOffer_whaleChest_rewardGet_description";
  CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_TITLE = "dialog_privateOffer_whaleChest_rewardAlreadyGet";
  CastleWhaleChestFinishDialog.OFFER_ALREADY_RECEIVED_COPY = "dialog_privateOffer_whaleChest_rewardAlreadyGet_description";
  CastleWhaleChestFinishDialog.OFFER_ENDED_TITLE = "dialog_privateOffer_whaleChest_offerend";
  CastleWhaleChestFinishDialog.OFFER_ENDED_COPY = "dialog_privateOffer_whaleChest_offerend_description";
  CastleWhaleChestFinishDialog.MAX_ITEMS_AT_ONCE = 4;
  return CastleWhaleChestFinishDialog;
}(g.CastleExternalDialog);
exports.CastleWhaleChestFinishDialog = _;
var m = require("./48.js");
var f = require("./200.js");
var O = require("./25.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");
_.__initialize_static_members();