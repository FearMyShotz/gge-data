Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleHeaderMessageItem() {
    this.headerMC = new Library.CastleInterfaceElements.CastleMessagesItem();
    this.headerMC.mc_iconholder.mouseEnabled = false;
    this.headerMC.mc_iconholder.mouseChildren = false;
    this.headerMC.changeTextFieldCacheScale(2);
  }
  CastleHeaderMessageItem.prototype.remove = function () {
    this.removeListeners();
    this._messageVO = null;
  };
  CastleHeaderMessageItem.prototype.destroy = function () {
    this.remove();
    this.headerMC = null;
  };
  CastleHeaderMessageItem.prototype.setItem = function (e, t) {
    this._messageVO = e;
    var i = y.int(e.getCumulativeSecondsSinceSent());
    if (i <= 0) {
      i++;
    }
    var n;
    var o = g.TimeStringHelper.getTimeToString(i, g.TimeStringHelper.ONE_TIME_FORMAT, f.Localize.text);
    if (this.headerMC.scaleX == 1) {
      this.headerMC.btn_delete.visible = false;
      this.headerMC.btn_archive.visible = false;
    }
    this.headerMC.bg.mouseEnabled = true;
    this.headerMC.bg.mouseChildren = false;
    (n = this.textFieldManager.registerTextField(this.headerMC.txt_date, new O.LocalizedTextVO("dialog_inbox_timeAgo", [o]), new p.InternalGGSTextFieldConfigVO(true))).size = CastleHeaderMessageItem.TEXTSIZE_MESSAGE;
    n.mouseEnabled = false;
    n.autoFitToBounds = true;
    this.headerMC.btn_delete.toolTipText = "dialog_inbox_deleteMessage";
    (n = this.textFieldManager.registerTextField(this.headerMC.txt_header, new E.TextVO(e.subject), new p.InternalGGSTextFieldConfigVO(true))).size = CastleHeaderMessageItem.TEXTSIZE_MESSAGE_TITLE;
    n.mouseEnabled = false;
    n.autoFitToBounds = true;
    (n = this.textFieldManager.registerTextField(this.headerMC.txt_sender, new E.TextVO(e.senderName), new p.InternalGGSTextFieldConfigVO(true))).size = CastleHeaderMessageItem.TEXTSIZE_MESSAGE;
    n.mouseEnabled = false;
    n.autoFitToBounds = true;
    if (e.read) {
      this.headerMC.bg.gotoAndStop(1);
    } else {
      this.headerMC.bg.gotoAndStop(2);
    }
    if (this._messageVO.messageType == m.MessageConst.MESSAGE_TYPE_PRIVATE_OFFER) {
      b.CastleModel.privateOfferData.addEventListener(D.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
      b.CastleModel.privateOfferData.addEventListener(D.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
    }
    this.headerMC.x = CastleHeaderMessageItem.HEADER_X;
    this.headerMC.y = t * 35 + 83;
    this.addListeners();
    this.loadMessageIcons();
    if (C.currentBrowserInfo.isMobile) {
      this.showArchiveBtn();
      this.showDeleteBtn();
    }
  };
  CastleHeaderMessageItem.prototype.loadMessageIcons = function () {
    h.MovieClipHelper.clearMovieClip(this.headerMC.mc_iconholder);
    if (this.displayName && this.displayName != "") {
      if (this.messageIconClip) {
        this.messageIconClip.clipLoaded.removeAll();
      }
      this.messageIconClip = new I.CastleGoodgameExternalClip(this.displayName, this.filePath, null, 0, false);
      if (this.messageIconClip.isLoaded) {
        this.onLoaded(this.messageIconClip);
      } else {
        this.messageIconClip.clipLoaded.addOnce(this.bindFunction(this.onLoaded));
      }
    }
  };
  CastleHeaderMessageItem.prototype.onLoaded = function (e = null) {
    if (e) {
      var t = C.castAs(e.currentshownDisplayObject, "MovieClip");
      if (t) {
        this.headerMC.mc_iconholder.addChild(t);
      }
    }
  };
  Object.defineProperty(CastleHeaderMessageItem.prototype, "displayName", {
    get: function () {
      return this._messageVO.additionalIconName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeaderMessageItem.prototype, "filePath", {
    get: function () {
      return c.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.displayName);
    },
    enumerable: true,
    configurable: true
  });
  CastleHeaderMessageItem.prototype.addListeners = function () {
    this.headerMC.addEventListener(n.ROLL_OVER, this.bindFunction(this.onRollOverHeader));
    this.headerMC.addEventListener(n.ROLL_OUT, this.bindFunction(this.onRollOutHeader));
    this.headerMC.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    this.headerMC.addEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  CastleHeaderMessageItem.prototype.removeListeners = function () {
    this.headerMC.removeEventListener(n.ROLL_OVER, this.bindFunction(this.onRollOverHeader));
    this.headerMC.removeEventListener(n.ROLL_OUT, this.bindFunction(this.onRollOutHeader));
    this.headerMC.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
    this.headerMC.removeEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    b.CastleModel.privateOfferData.removeEventListener(D.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
    b.CastleModel.privateOfferData.removeEventListener(D.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
  };
  CastleHeaderMessageItem.prototype.onOfferChanged = function (e) {
    if (e.offerVO.id == this._messageVO.offerID) {
      this.loadMessageIcons();
      b.CastleModel.privateOfferData.removeEventListener(D.PrivateOfferDataEvent.PRIVATE_OFFER_CREATED, this.bindFunction(this.onOfferChanged));
      if (!b.CastleModel.privateOfferData.getOfferById(this._messageVO.offerID)) {
        b.CastleModel.privateOfferData.removeEventListener(D.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferChanged));
      }
    }
  };
  CastleHeaderMessageItem.prototype.onClick = function (e) {
    if (T.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.headerMC.btn_delete:
          b.CastleModel.messageData.deleteMessage(this._messageVO);
          if (this.disp.stage && this._messageVO) {
            this.showDeleteBtn();
          }
          break;
        case this.headerMC.btn_archive:
          b.CastleModel.messageData.archiveMessage(this._messageVO);
          break;
        case this.headerMC.bg:
          this.handleHeaderClick();
      }
    }
  };
  CastleHeaderMessageItem.prototype.onMouseOver = function (e) {
    this.showArchiveBtn();
    this.showDeleteBtn();
    this.layoutManager.customCursor.setCursorType(l.BasicCustomCursor.CURSOR_CLICK);
  };
  Object.defineProperty(CastleHeaderMessageItem.prototype, "textFieldManager", {
    get: function () {
      return d.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleHeaderMessageItem.prototype.onRollOverHeader = function (e) {
    this.showDeleteBtn();
    this.showArchiveBtn();
    this.headerMC.scaleX = this.headerMC.scaleY = 1.03;
    this.headerMC.x = CastleHeaderMessageItem.HEADER_X - 1;
    this.headerMC.width = CastleHeaderMessageItem.HEADER_WIDTH_OVER;
  };
  CastleHeaderMessageItem.prototype.showDeleteBtn = function () {
    T.ButtonHelper.enableButton(this.headerMC.btn_delete, b.CastleModel.tutorialData.isTutorialFinished());
    if (this.headerMC.btn_delete.enabled) {
      this.headerMC.btn_delete.toolTipText = "dialog_inbox_deleteMessage";
    } else {
      this.headerMC.btn_delete.toolTipText = r.ClientConstTextIds.NOT_AVAILABLE;
    }
    this.headerMC.btn_delete.visible = this._messageVO.canBeDeleted();
  };
  CastleHeaderMessageItem.prototype.showArchiveBtn = function () {
    this.headerMC.btn_archive.visible = this._messageVO.canBeArchived();
    if (b.CastleModel.tutorialData.isInTutorial()) {
      this.headerMC.btn_archive.toolTipText = r.ClientConstTextIds.NOT_AVAILABLE;
      T.ButtonHelper.enableButton(this.headerMC.btn_archive, false);
    } else if (b.CastleModel.messageData.isArchiveFull()) {
      this.headerMC.btn_archive.toolTipText = "dialog_inbox_archiveFull";
      T.ButtonHelper.enableButton(this.headerMC.btn_archive, false);
    } else if (_.instanceOfClass(this._messageVO, "MessageSpecialEventVO") && this._messageVO.messageType == m.MessageConst.MESSAGE_TYPE_USER_SURVEY) {
      this.headerMC.btn_archive.toolTipText = r.ClientConstTextIds.NOT_AVAILABLE;
      T.ButtonHelper.enableButton(this.headerMC.btn_archive, false);
    } else {
      this.headerMC.btn_archive.toolTipText = "dialog_inbox_archiveMessage";
      T.ButtonHelper.enableButton(this.headerMC.btn_archive, true);
    }
  };
  CastleHeaderMessageItem.prototype.onRollOutHeader = function (e) {
    this.headerMC.btn_delete.visible = C.currentBrowserInfo.isMobile && this._messageVO.canBeDeleted();
    this.headerMC.btn_archive.visible = C.currentBrowserInfo.isMobile && this._messageVO.canBeArchived();
    this.headerMC.scaleX = e.target.scaleY = 1;
    this.headerMC.x = CastleHeaderMessageItem.HEADER_X;
    this.headerMC.width = CastleHeaderMessageItem.HEADER_WIDTH_OUT;
  };
  CastleHeaderMessageItem.prototype.handleHeaderClick = function () {
    if (this._messageVO) {
      u.CommandController.instance.executeCommand(a.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, this._messageVO);
    }
  };
  Object.defineProperty(CastleHeaderMessageItem.prototype, "disp", {
    get: function () {
      return this.headerMC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeaderMessageItem.prototype, "layoutManager", {
    get: function () {
      return s.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleHeaderMessageItem.prototype.isBattleLog = function () {
    return _.instanceOfClass(this._messageVO, "MessageBattleLogVO");
  };
  CastleHeaderMessageItem.__initialize_static_members = function () {
    CastleHeaderMessageItem.SPECIAL_ID_USER_SURVEY = 128;
    CastleHeaderMessageItem.TEXTSIZE_MESSAGE = 10;
    CastleHeaderMessageItem.TEXTSIZE_MESSAGE_TITLE = 12;
    CastleHeaderMessageItem.HEADER_X = 232;
    CastleHeaderMessageItem.HEADER_WIDTH_OVER = 521.1;
    CastleHeaderMessageItem.HEADER_WIDTH_OUT = 507.9;
  };
  return CastleHeaderMessageItem;
}();
exports.CastleHeaderMessageItem = o;
var a = require("./29.js");
var s = require("./17.js");
var r = require("./39.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./1.js");
var _ = require("./1.js");
var m = require("./5.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./6.js");
var b = require("./4.js");
var D = require("./130.js");
var I = require("./24.js");
var T = require("./8.js");
o.__initialize_static_members();