Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("CoreJS.BasicEnvironmentDetector");
var a = require("./11.js");
var s = require("./337.js");
var r = require("./37.js");
var o = function () {
  function BasicEnvironmentDetector() {}
  BasicEnvironmentDetector.detectRuntimeEnvironment = function (e, t) {
    if (e.loaderInfo.parameters[a.BasicConstants.IS_TEST_PARAMETER]) {
      t.isTest = Boolean(e.loaderInfo.parameters[a.BasicConstants.IS_TEST_PARAMETER]);
    } else {
      t.isTest = e.loaderInfo.url.indexOf(a.BasicConstants.TEST_FOLDER) != -1;
      t.isTest = t.isTest || e.loaderInfo.url.indexOf("/gamesocial-test/") != -1;
      t.isTest = t.isTest || e.loaderInfo.url.indexOf(a.BasicConstants.DOMAIN_INTERNAL_DNS) != -1;
      t.isTest = t.isTest || a.BasicConstants.isLocalHost(e.loaderInfo.url);
    }
    if (e.loaderInfo.parameters[a.BasicConstants.IS_LOCALE_PARAMETER]) {
      t.isTest = Boolean(e.loaderInfo.parameters[a.BasicConstants.IS_LOCALE_PARAMETER]);
    }
    if (e.loaderInfo.url.indexOf(a.BasicConstants.LIVE_TEST_FOLDER) != -1) {
      t.isLiveTest = true;
    }
    t.isLocal = e.loaderInfo.url.indexOf(a.BasicConstants.LOCALE_URL) == 0 || a.BasicConstants.isLocalHost(e.loaderInfo.url);
    t.isLocalHost = a.BasicConstants.isLocalHost(e.loaderInfo.url);
    t.isPrivateTestServer = e.loaderInfo.url.indexOf(a.BasicConstants.PRIVATE_TEST_SERVER_URL) != -1;
    t.isUsabilityTest = e.loaderInfo.url.indexOf(a.BasicConstants.USABILITYTEST_FOLDER) != -1;
    t.isPreClient = e.loaderInfo.url.indexOf(a.BasicConstants.PRECLIENT_FOLDER) != -1;
    t.isLocaTest = e.loaderInfo.url.indexOf(a.BasicConstants.LOCA_TEST_FOLDER) != -1;
    t.isLocalHost = t.isLocal = true;
    t.isDevTest = e.loaderInfo.url.indexOf(a.BasicConstants.DEV_TEST_FOLDER) != -1;
    t.isLiveBranchingEnvironment = e.loaderInfo.url.indexOf(a.BasicConstants.LIVE_BRANCHING_ENVIRONMENT) != -1;
    var n = s.detectFeatureBranchEnvironment(e.loaderInfo.url);
    var o = n.isFeatureBranch;
    var l = n.id;
    var u = n.environment;
    t.isFeatureBranchEnvironment = o;
    t.featureBranchId = l;
    t.featureBranchEnvironment = u;
    r.info("isTest: " + t.isTest + ", isLiveTest: " + t.isLiveTest + ", isDev: " + t.isDevTest + ", isLocal: " + t.isLocal + ", isLocalHost: " + t.isLocalHost + ", isPrivateTestServer: " + t.isPrivateTestServer + ", isUsabilityTest: " + t.isUsabilityTest + ", env.isPreClient: " + t.isPreClient + ", isLiveBranchingEnvironment: " + t.isLiveBranchingEnvironment + ", isFeatureBranchEnvironment: " + t.isFeatureBranchEnvironment);
    i.debug("isTest: " + t.isTest + ", isLiveTest: " + t.isLiveTest + ", isDev: " + t.isDevTest + ", isLocal: " + t.isLocal + ", isLocalHost: " + t.isLocalHost + ", isPrivateTestServer: " + t.isPrivateTestServer + ", isUsabilityTest: " + t.isUsabilityTest + ", env.isPreClient: " + t.isPreClient + ", isLiveBranchingEnvironment: " + t.isLiveBranchingEnvironment + ", isFeatureBranchEnvironment: " + t.isFeatureBranchEnvironment);
  };
  return BasicEnvironmentDetector;
}();
exports.BasicEnvironmentDetector = o;