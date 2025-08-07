Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./100.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./157.js");
var c = require("./14.js");
var u = require("./20.js");
var d = require("./8.js");
var p = function (e) {
  function CastleLegendSkillSceatListItem(t, i, n) {
    var o = e.call(this, t, n) || this;
    o._markAsNew = false;
    o._treeComponent = i;
    d.ButtonHelper.initButtons([o._headerMC], u.ClickFeedbackButtonHover, 1);
    o._headerMC.mc_open.visible = false;
    if (n.isExpanded) {
      o._isExpanded = true;
      o._contentMC.alpha = 1;
      o._contentMC.visible = true;
      o._contentMC.mask.height = o._contentMC.height;
      o._headerMC.mc_open.visible = true;
    }
    o.update();
    return o;
  }
  n.__extends(CastleLegendSkillSceatListItem, e);
  CastleLegendSkillSceatListItem.prototype.update = function () {
    var e = this;
    this._treeComponent.updateTree();
    if (this._treeComponent.treeNode.isUnlocked()) {
      if (r.CastleModel.legendSkillData.isTreeMaxedOut(this._treeComponent.treeNode.id)) {
        this._headerMC.mc_stateIcon.gotoAndStop(3);
        c.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_label, new s.LocalizedTextVO("dialog_legendTemple_title_keepSkill_" + this._treeComponent.treeNode.id, [a.Localize.text("done")]), new o.InternalGGSTextFieldConfigVO(true));
      } else {
        this._headerMC.mc_stateIcon.gotoAndStop(2);
        var t = this._markAsNew ? [a.Localize.text("new")] : [""];
        c.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_label, new s.LocalizedTextVO("dialog_legendTemple_title_keepSkill_" + this._treeComponent.treeNode.id, t), new o.InternalGGSTextFieldConfigVO(true));
      }
    } else {
      this._headerMC.mc_stateIcon.gotoAndStop(1);
      c.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_label, new s.LocalizedTextVO("dialog_legendTemple_title_keepSkill_" + this._treeComponent.treeNode.id, [a.Localize.text("locked")]), new o.InternalGGSTextFieldConfigVO(true));
    }
    if (this._isExpanded) {
      setTimeout(function () {
        e._contentMC.mask.height = e._contentMC.height;
      }, 1);
    }
  };
  CastleLegendSkillSceatListItem.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target) && this.isEnabled) {
      switch (e.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  CastleLegendSkillSceatListItem.prototype.onRollOver = function (e) {
    this.disp.uncache();
  };
  CastleLegendSkillSceatListItem.prototype.onRollOut = function (e) {
    this.disp.uncache();
  };
  CastleLegendSkillSceatListItem.prototype.expand = function (t, i, n = false) {
    e.prototype.expand.call(this, t, i, n);
    this._headerMC.mc_open.visible = t;
  };
  Object.defineProperty(CastleLegendSkillSceatListItem.prototype, "treeComponent", {
    get: function () {
      return this._treeComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillSceatListItem.prototype, "markAsNew", {
    get: function () {
      return this._markAsNew;
    },
    set: function (e) {
      this._markAsNew = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillSceatListItem;
}(l.ACollapsibleItem);
exports.CastleLegendSkillSceatListItem = p;