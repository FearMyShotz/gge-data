Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AGeneralSkillTreeNode(e) {
    this._id = 0;
    this._id = e;
    this._childs = [];
    this._unlockRequirements = [];
  }
  AGeneralSkillTreeNode.prototype.insertSkill = function (e) {
    if (this.childNodeClass != null) {
      if (!this.getChildNode(this.childIDProperty(e))) {
        this._childs.push(new this.childNodeClass(this.childIDProperty(e)));
      }
      this.getChildNode(this.childIDProperty(e)).insertSkill(e);
    }
  };
  Object.defineProperty(AGeneralSkillTreeNode.prototype, "childNodeClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  AGeneralSkillTreeNode.prototype.childIDProperty = function (e) {
    return 0;
  };
  AGeneralSkillTreeNode.prototype.getChildNode = function (e) {
    if (this._childs != null) {
      for (var t = 0, i = this._childs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(AGeneralSkillTreeNode.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGeneralSkillTreeNode.prototype, "childs", {
    get: function () {
      return this._childs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGeneralSkillTreeNode.prototype, "unlockRequirements", {
    get: function () {
      return this._unlockRequirements;
    },
    enumerable: true,
    configurable: true
  });
  AGeneralSkillTreeNode.prototype.isUnlocked = function () {
    for (var e = 0; e < this._unlockRequirements.length; e++) {
      if (!this._unlockRequirements[e].isUnlocked()) {
        return false;
      }
    }
    return true;
  };
  AGeneralSkillTreeNode.prototype.getUnlockText = function () {
    var e = "";
    for (var t = 0; t < this._unlockRequirements.length; t++) {
      var i = this._unlockRequirements[t];
      if (!i.isUnlocked() && (e += e != "" ? "\n" : "", e += i.getUnlockRequirementText(), !i.showFollowingRequirements)) {
        break;
      }
    }
    return e;
  };
  AGeneralSkillTreeNode.prototype.addUnlockRequirement = function (e) {
    this._unlockRequirements.push(e);
  };
  return AGeneralSkillTreeNode;
}();
exports.AGeneralSkillTreeNode = n;