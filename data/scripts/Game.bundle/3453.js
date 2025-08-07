Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./81.js");
var h = require("./25.js");
var g = createjs.Point;
var C = function (e) {
  function DonationEventEndDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DonationEventEndDialogItem, e);
  DonationEventEndDialogItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().mc_empty.txt_empty, new r.LocalizedTextVO("noRewards"));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_reached, new r.LocalizedTextVO("dialog_eventEndDonationEvent_Reached"));
    this._itxt_type = o.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_type, new s.TextVO(""));
    this._itxt_level = o.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_level, new r.LocalizedTextVO("levelX_colon"));
    this.getItemMc().icon_type.gotoAndStop(1);
  };
  DonationEventEndDialogItem.prototype.fill = function () {
    e.prototype.fill.call(this);
    this.getItemMc().icon_type.gotoAndStop(this.donationTypeID);
    this._itxt_type.textContentVO.stringValue = u.TextHelper.toUpperCaseLocaSafeTextId("dialog_eventEndDonationEvent_EventType" + this.donationTypeID);
    if (this.donationRewardID == -1) {
      this.getItemMc().mc_empty.visible = true;
    } else {
      this.getItemMc().mc_empty.visible = false;
      this._itxt_level.textContentVO.textReplacements = [d.CastleModel.donationEventData.getRewardLevelByDonationRewardID(this.donationRewardID)];
      var t = new l.CollectableRenderClips(this.getItemMc().mc_reward.mc_item).addInfoBtn(this.getItemMc().mc_reward.btn_info);
      var i = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_BASIC, new g(136, 132));
      h.CollectableRenderHelper.displaySingleItemComplete(this, t, this.reward, i);
    }
  };
  Object.defineProperty(DonationEventEndDialogItem.prototype, "reward", {
    get: function () {
      var e = d.CastleModel.donationEventData.getRewardVOByID(this.donationRewardID);
      var t = d.CastleModel.rewardData.getListById(e.rewardID);
      if (t) {
        return t.getItemByIndex(0);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEndDialogItem.prototype, "donationTypeVO", {
    get: function () {
      return d.CastleModel.donationEventData.getPointTypeVOByID(this.donationTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEndDialogItem.prototype, "donationTypeID", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationEventEndDialogItem.prototype, "donationRewardID", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  return DonationEventEndDialogItem;
}(p.AInfiniteScrollListItem);
exports.DonationEventEndDialogItem = C;
a.classImplementsInterfaces(p.AInfiniteScrollListItem, "ICollectableRendererList");