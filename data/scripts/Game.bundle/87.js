Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoBuildingStateEnum(t, i) {
    var n = this;
    n._id = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._id = i;
    return n;
  }
  n.__extends(IsoBuildingStateEnum, e);
  IsoBuildingStateEnum.getTypeById = function (e) {
    return this.getByProperty(IsoBuildingStateEnum, "id", e, IsoBuildingStateEnum.INITIAL);
  };
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isWaitingForServerRequest", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_STOPPED:
        case IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        case IsoBuildingStateEnum.UPGRADE_STOPPED:
        case IsoBuildingStateEnum.REPAIR_STOPPED:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isInProgress", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        case IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        case IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isStopped", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_STOPPED:
        case IsoBuildingStateEnum.UPGRADE_STOPPED:
        case IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        case IsoBuildingStateEnum.REPAIR_STOPPED:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isFunctionally", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.INITIAL:
        case IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case IsoBuildingStateEnum.BUILD_STOPPED:
        case IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        case IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
          return false;
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isUnderConstruction", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case IsoBuildingStateEnum.BUILD_STOPPED:
        case IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case IsoBuildingStateEnum.UPGRADE_STOPPED:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "isUnderInitialConstruction", {
    get: function () {
      switch (this) {
        case IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case IsoBuildingStateEnum.BUILD_STOPPED:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoBuildingStateEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  IsoBuildingStateEnum.__initialize_static_members = function () {
    IsoBuildingStateEnum.WAIT_FOR_SERVER = new IsoBuildingStateEnum("waitForServer", 100);
    IsoBuildingStateEnum.INITIAL = new IsoBuildingStateEnum("initial", 0);
    IsoBuildingStateEnum.BUILD_STOPPED = new IsoBuildingStateEnum("buildStopped", 1);
    IsoBuildingStateEnum.BUILD_IN_PROGRESS = new IsoBuildingStateEnum("buildInProgress", 2);
    IsoBuildingStateEnum.BUILD_COMPLETED = new IsoBuildingStateEnum("buildCompleted", 4);
    IsoBuildingStateEnum.DISASSEMBLE_STOPPED = new IsoBuildingStateEnum("disassembleStopped", 5);
    IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS = new IsoBuildingStateEnum("disassembleInProgress", 6);
    IsoBuildingStateEnum.DISASSEMBLED_COMPLETED = new IsoBuildingStateEnum("disassembleCompleted", 8);
    IsoBuildingStateEnum.REPAIR_STOPPED = new IsoBuildingStateEnum("repairStopped", 9);
    IsoBuildingStateEnum.REPAIR_IN_PROGRESS = new IsoBuildingStateEnum("repairInProgress", 10);
    IsoBuildingStateEnum.UPGRADE_STOPPED = new IsoBuildingStateEnum("upgradeStopped", 12);
    IsoBuildingStateEnum.UPGRADE_IN_PROGRESS = new IsoBuildingStateEnum("upgradeInProgress", 13);
    IsoBuildingStateEnum.UPGRADE_COMPLETED = new IsoBuildingStateEnum("upgradeCompleted", 15);
  };
  return IsoBuildingStateEnum;
}(require("./84.js").CastleEnum);
exports.IsoBuildingStateEnum = a;
a.__initialize_static_members();