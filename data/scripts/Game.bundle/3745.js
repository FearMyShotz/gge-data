Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./57.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./375.js");
var d = require("./24.js");
var p = require("./157.js");
var h = require("./8.js");
var g = require("./41.js");
var C = function (e) {
  function SamuraiDaimyoEventDialogContractsCategory(t, i) {
    var n;
    var o = this;
    o._contractItems = [];
    o._currentSelectedIndex = -1;
    o._onContractSelected = new r.Signal();
    CONSTRUCTOR_HACK;
    (o = e.call(this, (n = new d.CastleGoodgameExternalClip(SamuraiDaimyoEventDialogContractsCategory.ASSET_CLIP_NAME, _.IsoHelper.view.getAssetFileURL(f.SamuraiDaimyoEventDialog.NAME))).currentshownDisplayObject, i) || this)._clip = n;
    o._contractType = t;
    h.ButtonHelper.initBasicButton(o._headerMC, 1);
    m.CastleComponent.textFieldManager.registerTextField(o._headerMC.txt_name, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(t == u.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? "contracts_daimyoCastle" : "contracts_township"))).autoFitToBounds = true;
    o._headerMC.mc_icon.gotoAndStop(t == u.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? 1 : 2);
    return o;
  }
  n.__extends(SamuraiDaimyoEventDialogContractsCategory, e);
  SamuraiDaimyoEventDialogContractsCategory.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._clip = null;
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._contractItems != null) {
      for (var t = 0, i = this._contractItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this.updateItems();
    this.expand(true, false);
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.onHide = function () {
    if (this._contractItems != null) {
      for (var t = 0, i = this._contractItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.onHide.call(this);
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.updateItems = function () {
    this._contractItems = [];
    if (this._contractItems != null) {
      for (var e = 0, t = this._contractItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    var n = this.contractType == u.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? c.CastleModel.samuraiDaimyoData.server.contractsCastles : c.CastleModel.samuraiDaimyoData.server.contractsTownships;
    var o = 0;
    if (n != null) {
      for (var a = 0, s = n; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          (i = new O.SamuraiDaimyoEventDialogContractsItem(this.contractType, r, this.bindFunction(this.onItemClicked))).onShow();
          this.disp.contentMC.addChild(i.disp);
          this._contractItems.push(i);
          i.disp.x = 0;
          i.disp.y = o;
          o += i.disp.height + SamuraiDaimyoEventDialogContractsCategory.ITEM_PADDING_Y;
        }
      }
    }
    g.CastleMovieClipHelper.applyMaskFromMovieClip(this._contentMC, this._contentMC);
    this._contentMC.visible = true;
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.applyStateChange = function () {
    e.prototype.applyStateChange.call(this);
    this._headerMC.mc_arrow.gotoAndStop(this.isExpanded ? 2 : 1);
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.resetSelection = function () {
    this._currentSelectedIndex = -1;
    if (this._contractItems != null) {
      for (var e = 0, t = this._contractItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.setSelection(false);
        }
      }
    }
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.getSelectedItem = function () {
    if (this._currentSelectedIndex >= 0) {
      return this._contractItems[this._currentSelectedIndex];
    } else {
      return null;
    }
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this._headerMC) {
      this.expand(!this.isExpanded, false);
    }
  };
  SamuraiDaimyoEventDialogContractsCategory.prototype.onItemClicked = function (e) {
    this._currentSelectedIndex = s.int(this._contractItems.indexOf(e));
    if (this._contractItems != null) {
      for (var t = 0, i = this._contractItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.setSelection(false);
        }
      }
    }
    e.setSelection(true);
    this._onContractSelected.dispatch(this);
  };
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "clip", {
    get: function () {
      return this._clip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "contractType", {
    get: function () {
      return this._contractType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "onContractSelected", {
    get: function () {
      return this._onContractSelected;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "currentSelectedIndex", {
    get: function () {
      return this._currentSelectedIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsCategory.prototype, "contractItems", {
    get: function () {
      return this._contractItems;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoEventDialogContractsCategory.ASSET_CLIP_NAME = "SamuraiDaimyoEvent_QuestItem";
  SamuraiDaimyoEventDialogContractsCategory.ITEM_PADDING_Y = 4;
  return SamuraiDaimyoEventDialogContractsCategory;
}(p.ACollapsibleItem);
exports.SamuraiDaimyoEventDialogContractsCategory = C;
o.classImplementsInterfaces(C, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");
var _ = require("./46.js");
var m = require("./14.js");
var f = require("./825.js");
var O = require("./3746.js");