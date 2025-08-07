Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientBetaHelper() {}
  ClientBetaHelper.setSupportContextMenu = function () {
    if (r.ClientConstInstanceIDs.isBetaInstance() || s.instanceOfClass(a.EnvironmentProvider.instance.globals, "CastleEnvironmentGlobals") && a.EnvironmentProvider.instance.globals.isClosedBeta) {
      o.BasicContextMenuController.instance.disableContextMenuItem(o.BasicContextMenuController.SUPPORT_LABEL);
    } else {
      o.BasicContextMenuController.instance.enableContextMenuItem(o.BasicContextMenuController.SUPPORT_LABEL);
    }
  };
  Object.defineProperty(ClientBetaHelper, "isOnOpenBeta", {
    get: function () {
      return o.BasicModel.instanceProxy.selectedInstanceVO.instanceLocaId.indexOf("openbeta") > -1;
    },
    enumerable: true,
    configurable: true
  });
  return ClientBetaHelper;
}();
exports.ClientBetaHelper = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./342.js");