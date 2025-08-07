Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./429.js");
var l = require("./512.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./8.js");
var p = require("./41.js");
var h = createjs.Event;
var g = createjs.EventDispatcher;
var C = createjs.MouseEvent;
var _ = function (e) {
  function PaginatedCollectableRenderListWrapper(t, i, n, o = 6, a = null, c = null, d = "mc_item", p = "mc_itemHolder", h = "parent.btn_info", g = "mc_icon", _ = "txt_text", m = "mc_textBackground", f = s.int(u.CollectableRenderOptions.SET_DEFAULT), O = null) {
    var E = this;
    E.collectableRenderOption = 0;
    E.itemsInLayout = 0;
    E.leftBasicBtn = null;
    E.rightBasicBtn = null;
    E._currentPage = 0;
    CONSTRUCTOR_HACK;
    (E = e.call(this) || this).disp = t;
    E._collectableRenderList = n;
    E.itemName = d;
    E.itemHolderName = p;
    E.iconHolder = g;
    E.itemTxt = _;
    E.itemInfoBtn = h;
    E.itemTxtBkgr = m;
    E.collectableList = i;
    E.collectableRenderOption = f;
    E.iconSize = O;
    E.btn_right = c;
    E.btn_left = a;
    E.itemsInLayout = o;
    if (E.btn_right && E.btn_left && E.itemsInLayout < E.collectableList.length) {
      E.btn_right.visible = true;
      E.btn_left.visible = true;
      E.paginationMember = new r.Pagination(E, Math.ceil(E.collectableList.length / E.itemsInLayout));
      E.paginationMember.addControl(new l.PaginationArrows(E, E.paginationMember));
      E.btn_right.addEventListener(C.CLICK, E.bindFunction(E.onClick));
      E.btn_left.addEventListener(C.CLICK, E.bindFunction(E.onClick));
      E.paginationMember.reset();
    } else {
      if (E.btn_right) {
        E.btn_right.visible = false;
      }
      if (E.btn_left) {
        E.btn_left.visible = false;
      }
      E.fillInfo();
    }
    return E;
  }
  n.__extends(PaginatedCollectableRenderListWrapper, e);
  PaginatedCollectableRenderListWrapper.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target) && this.paginationMember.handleClick(e)) {
      this.dispatchEvent(new h(o.ScrollItemEvent.ON_SCROLL, false, false));
    }
  };
  PaginatedCollectableRenderListWrapper.prototype.fillInfo = function () {
    var e;
    var t;
    var i = 0;
    this.cleanRenderList(this._collectableRenderList);
    for (var n = this._currentPage * this.itemsInLayout; n < this._currentPage * this.itemsInLayout + this.itemsInLayout; n++) {
      t = this.disp.getChildByName(this.itemName + i);
      i++;
      if (t) {
        if (n >= this.collectableList.length) {
          t.visible = false;
        } else {
          t.visible = true;
          (e = new c.CollectableRenderClips(t)).addItemMc(t.getChildByName(this.itemHolderName));
          e.addIconMc(p.CastleMovieClipHelper.iterateThroughMc(e.itemMc, this.iconHolder));
          e.addInfoBtn(p.CastleMovieClipHelper.iterateThroughMc(e.itemMc, this.itemInfoBtn));
          if (this.itemTxt) {
            e.addTextfield(p.CastleMovieClipHelper.iterateThroughMc(e.itemMc, this.itemTxt));
          }
          if (this.itemTxtBkgr) {
            e.addTextfieldBgMc(p.CastleMovieClipHelper.iterateThroughMc(e.itemMc, this.itemTxtBkgr));
          }
          this._collectableRenderList.push(m.CollectableRenderHelper.displaySingleItem(e, this.collectableList.getItemByIndex(n), new u.CollectableRenderOptions(this.collectableRenderOption, this.iconSize)));
        }
      }
    }
  };
  PaginatedCollectableRenderListWrapper.prototype.destroy = function () {
    if (this.rightBasicBtn && this.leftBasicBtn) {
      this.rightBasicBtn.disp.removeEventListener(C.CLICK, this.bindFunction(this.onClick));
      this.leftBasicBtn.disp.removeEventListener(C.CLICK, this.bindFunction(this.onClick));
    }
  };
  PaginatedCollectableRenderListWrapper.prototype.cleanRenderList = function (e) {
    if (e) {
      while (e.length > 0) {
        e.pop().destroy();
      }
    }
  };
  PaginatedCollectableRenderListWrapper.prototype.updatePages = function (e, t) {
    this._currentPage = t;
    this.fillInfo();
  };
  PaginatedCollectableRenderListWrapper.prototype.getLeftArrow = function () {
    return this.btn_left;
  };
  PaginatedCollectableRenderListWrapper.prototype.getRightArrow = function () {
    return this.btn_right;
  };
  PaginatedCollectableRenderListWrapper.prototype.changeArrow = function (e, t) {
    e.visible = t;
    return true;
  };
  Object.defineProperty(PaginatedCollectableRenderListWrapper.prototype, "currentPage", {
    get: function () {
      return this._currentPage;
    },
    enumerable: true,
    configurable: true
  });
  return PaginatedCollectableRenderListWrapper;
}(g);
exports.PaginatedCollectableRenderListWrapper = _;
var m = require("./25.js");
a.classImplementsInterfaces(_, "IPaginationContainer", "IPaginationArrowsContainer");