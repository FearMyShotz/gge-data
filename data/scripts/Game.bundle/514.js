Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstABTests() {}
  ClientConstABTests.takesPartInPOCloseBtnTest = function () {
    return ClientConstABTests.hasUnevenPlayerID && (ClientConstABTests.isOnPolishServerInstance || ClientConstABTests.isOnDevServerInstance || ClientConstABTests.isOnQAServerInstance);
  };
  Object.defineProperty(ClientConstABTests, "takesPartInSkipRecruitingTest", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "hasUnevenPlayerID", {
    get: function () {
      return s.CastleModel.userData.playerID % 2 == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "isOnPolishServerInstance", {
    get: function () {
      return o.BasicModel.instanceProxy.selectedInstanceVO.instanceId == ClientConstABTests.ZONE_ID_PL1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "isOnKoreanServerInstance", {
    get: function () {
      return o.BasicModel.instanceProxy.selectedInstanceVO.instanceId == ClientConstABTests.ZONE_ID_KR1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "isOnQAServerInstance", {
    get: function () {
      var e = a.int(o.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
      return e >= 250 && e < 300;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstABTests, "isOnDevServerInstance", {
    get: function () {
      var e = a.int(o.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
      return e >= 300 && e < 350;
    },
    enumerable: true,
    configurable: true
  });
  ClientConstABTests.__initialize_static_members = function () {
    ClientConstABTests.NETWORK_ID_1 = 1;
    ClientConstABTests.ZONE_ID_DE1 = 2;
    ClientConstABTests.ZONE_ID_PL1 = 5;
    ClientConstABTests.ZONE_ID_IT1 = 9;
    ClientConstABTests.ZONE_ID_KR1 = 23;
  };
  return ClientConstABTests;
}();
exports.ClientConstABTests = n;
var o = require("./2.js");
var a = require("./6.js");
var s = require("./4.js");
n.__initialize_static_members();