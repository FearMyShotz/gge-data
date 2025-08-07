Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./3924.js");
var p = require("./1812.js");
var h = require("./4.js");
var g = require("./131.js");
var C = createjs.Event;
var _ = createjs.MouseEvent;
var m = function (e) {
  function CastleBuddylistPanel() {
    var t = this;
    t.itemsPerPage = 0;
    t.maxPage = 0;
    t.currentPage = 0;
    t.buddyholderPosX = 50;
    t.listenerArray = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, new Library.CastleInterfaceElements.BuddylistPanel()) || this;
  }
  n.__extends(CastleBuddylistPanel, e);
  CastleBuddylistPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.itemsPerPage = 0;
    this.maxPage = 0;
    this.currentPage = 0;
    this.arrow_left = this.buddylistPanel.btn_arrow_left;
    this.arrow_right = this.buddylistPanel.btn_arrow_right;
    this.arrow_first = this.buddylistPanel.btn_arrow_first;
    this.arrow_last = this.buddylistPanel.btn_arrow_last;
    this.textFieldManager.registerTextField(this.buddylistPanel.btn_addbuddy.txt_title, new l.LocalizedTextVO("btn_morefriends_social"));
    this.buddylistPanel.btn_addbuddy.visible = this.env.invitefriends;
    this.controller.addEventListener(p.CastleBuddyListDataEvent.CHANGE_BUDDYDATA, this.bindFunction(this.onChangeBuddyData));
  };
  CastleBuddylistPanel.prototype.destroy = function () {
    this.removeChildListener();
    e.prototype.destroy.call(this);
    this.controller.removeEventListener(p.CastleBuddyListDataEvent.CHANGE_BUDDYDATA, this.bindFunction(this.onChangeBuddyData));
  };
  CastleBuddylistPanel.prototype.onChangeBuddyData = function (e) {
    this.fillItems();
  };
  CastleBuddylistPanel.prototype.onClick = function (t) {
    if (!this.isLocked) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.buddylistPanel.btn_addbuddy:
          h.CastleModel.socialData.inviteFriends();
          break;
        case this.arrow_left:
          this.currentPage--;
          this.fillItems();
          break;
        case this.arrow_right:
          this.currentPage++;
          this.fillItems();
          break;
        case this.arrow_first:
          this.currentPage = 0;
          this.fillItems();
          break;
        case this.arrow_last:
          this.currentPage = this.maxPage;
          this.fillItems();
      }
    }
  };
  CastleBuddylistPanel.prototype.onClickBuddyItem = function (e) {
    if (!this.isLocked) {
      var t = e.target.buddyData;
      h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SGetSocialPIDVO(t.pln));
    }
  };
  CastleBuddylistPanel.prototype.fillItems = function () {
    this.initArrows(h.CastleModel.buddyListData.amountAllFriends);
    for (var e = this.currentPage * this.itemsPerPage, t = e; t < e + this.itemsPerPage; t++) {
      var i = t - e;
      var n = this.buddylistPanel.mc_buddyitemholder.getChildByName("i" + i);
      n.mouseChildren = false;
      n.visible = true;
      n.gotoAndStop(1);
      if (t < h.CastleModel.buddyListData.socialBuddyList.length) {
        var l = h.CastleModel.buddyListData.socialBuddyList[t];
        if (n.itxt_name) {
          n.itxt_name.textContentVO.stringValue = l.playerName ?? "";
        } else {
          n.itxt_name = this.textFieldManager.registerTextField(n.txt_name, l.playerName != null ? new c.TextVO(l.playerName) : new c.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
        }
        n.buddyData = l;
        a.MovieClipHelper.clearMovieClip(n.mc_holder);
        if (l.thumbUrl && l.thumbUrl != "" && l.thumbUrl.search(CastleBuddylistPanel.NOPIC_PATTERN) == -1) {
          var u = new s.Loader();
          var d = new r.URLRequest(l.thumbUrl);
          u.load(d);
          u.contentLoaderInfo.addEventListener(C.COMPLETE, this.bindFunction(this.onPicLoadComplete));
          n.mc_holder.addChild(u);
        }
        n.gotoAndStop(2);
      } else {
        n.visible = false;
      }
    }
  };
  CastleBuddylistPanel.prototype.onPicLoadComplete = function (e) {
    var t = e.target.loader;
    var i = t.getBounds(null);
    var n = CastleBuddylistPanel.CITEM_HEIGHT / i.height;
    t.scaleX = t.scaleY = n * CastleBuddylistPanel.AVATAR_SCALE_FACTOR;
    t.y = -CastleBuddylistPanel.CITEM_HEIGHT * CastleBuddylistPanel.AVATAR_SCALE_FACTOR / 2;
    t.x = -i.width * (n * CastleBuddylistPanel.AVATAR_SCALE_FACTOR) / 2;
    t.contentLoaderInfo.removeEventListener(C.COMPLETE, this.bindFunction(this.onPicLoadComplete));
  };
  CastleBuddylistPanel.prototype.initArrows = function (e) {
    if (e < 1) {
      this.arrow_right.visible = this.arrow_left.visible = this.arrow_first.visible = this.arrow_last.visible = false;
    }
    this.maxPage = u.int((e - 1) / this.itemsPerPage);
    this.arrow_right.visible = this.maxPage > 0 && this.currentPage < this.maxPage;
    this.arrow_left.visible = this.maxPage > 0 && this.currentPage > 0;
    this.arrow_first.visible = this.currentPage > 0;
    this.arrow_last.visible = this.currentPage < this.maxPage;
  };
  CastleBuddylistPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.updatePosition();
  };
  CastleBuddylistPanel.prototype.removeChildListener = function () {
    while (this.listenerArray.length > 0) {
      this.listenerArray[0].removeEventListener(_.CLICK, this.bindFunction(this.onClickBuddyItem));
      this.listenerArray.shift();
    }
  };
  CastleBuddylistPanel.prototype.changeItemsPerPage = function (e) {
    this.removeChildListener();
    if (this.buddylistPanel.visible && e != this.itemsPerPage) {
      this.currentPage = 0;
      this.itemsPerPage = e;
      while (this.buddylistPanel.mc_buddyitemholder.numChildren > this.itemsPerPage) {
        var t = u.int(this.buddylistPanel.mc_buddyitemholder.numChildren - 1);
        if (t <= this.buddylistPanel.mc_buddyitemholder.numChildren && t >= 0) {
          this.buddylistPanel.mc_buddyitemholder.removeChildAt(t);
        }
      }
      while (this.buddylistPanel.mc_buddyitemholder.numChildren < this.itemsPerPage) {
        var i = new Library.CastleInterfaceElements.BuddylistItem();
        i.name = "i" + this.buddylistPanel.mc_buddyitemholder.numChildren;
        i.x = this.buddylistPanel.mc_buddyitemholder.numChildren * CastleBuddylistPanel.BUDDY_ITEM_WIDTH;
        i.addEventListener(_.CLICK, this.bindFunction(this.onClickBuddyItem));
        this.buddylistPanel.mc_buddyitemholder.addChild(i);
      }
      this.buddylistPanel.mc_buddyitemholder.x = this.buddyholderPosX;
      this.arrow_right.x = this.arrow_last.x = this.buddylistPanel.mc_buddyitemholder.x - CastleBuddylistPanel.BUDDY_ITEM_WIDTH / 2 + this.itemsPerPage * CastleBuddylistPanel.BUDDY_ITEM_WIDTH + 20;
      this.fillItems();
    }
  };
  CastleBuddylistPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = this.disp.stage.stageHeight;
      this.buddylistPanel.background.width = this.disp.stage.stageWidth;
      this.buddyholderPosX = CastleBuddylistPanel.BUDDYHOLDER_STD_POSX;
      this.changeItemsPerPage(this.numBuddys);
      this.buddylistPanel.btn_addbuddy.x = this.disp.stage.stageWidth - this.buddylistPanel.btn_addbuddy.width / 2 - 70;
    }
  };
  Object.defineProperty(CastleBuddylistPanel.prototype, "numBuddys", {
    get: function () {
      var e = 0;
      if ((e = this.env.invitefriends ? u.int((this.buddylistPanel.background.width - this.buddyholderPosX) / CastleBuddylistPanel.BUDDY_ITEM_WIDTH - 1) : u.int((this.buddylistPanel.background.width - this.buddyholderPosX) / CastleBuddylistPanel.BUDDY_ITEM_WIDTH)) < 0) {
        e = 0;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuddylistPanel.prototype, "buddylistPanel", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuddylistPanel.__initialize_static_members = function () {
    CastleBuddylistPanel.NAME = "BuddylistPanel";
    CastleBuddylistPanel.BUDDY_PANEL_HEIGHT = 160;
    CastleBuddylistPanel.NOPIC_PATTERN = new RegExp("nopic", "i");
    CastleBuddylistPanel.BUDDYHOLDER_STD_POSX = 149;
    CastleBuddylistPanel.AVATAR_SCALE_FACTOR = 1;
    CastleBuddylistPanel.BUDDY_ITEM_WIDTH = 120;
    CastleBuddylistPanel.CITEM_WIDTH = 90;
    CastleBuddylistPanel.CITEM_HEIGHT = 90;
  };
  return CastleBuddylistPanel;
}(g.CastlePanel);
exports.CastleBuddylistPanel = m;
m.__initialize_static_members();