Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./2.js");
var _ = require("./2.js");
var m = require("./2.js");
var f = require("./2.js");
var O = require("./2.js");
var E = require("./1.js");
var y = require("./1.js");
var b = require("./116.js");
var D = require("./116.js");
var I = require("./116.js");
var T = require("./365.js");
var v = require("./803.js");
var S = require("./5779.js");
var A = require("./5780.js");
var L = require("./5781.js");
var P = require("./599.js");
var M = require("./5782.js");
var R = require("./848.js");
var V = require("./5783.js");
var x = require("./5787.js");
var w = require("./576.js");
var B = require("./334.js");
window.ggs.fontConfigResolver = M.fontConfigResolver;
window.AssetURL = new L.AssetUrlConvertor();
window.assetsPool = f.assetsPool;
window.mapObjectsPool = w.mapObjectsPool;
var F = function (e) {
  function CastleFrameOne() {
    var t = e.call(this, "Castle") || this;
    t.name = E.GAME_STAGE;
    t.stage.snapToPixelEnabled = true;
    t.stage.enableDOMEvents(false);
    t.stage.canvas.width = window.innerWidth;
    t.stage.canvas.height = window.innerHeight;
    createjs.precacheModules(require);
    if (h.EnvGlobalsHandler.globals.isTest) {
      D.cascadeLogLevelFor("CoreJS", b.LoggingLevel.DEBUG);
      D.cascadeLogLevelFor("CreateJs", b.LoggingLevel.NONE);
      D.cascadeLogLevelFor("WorldAssignment", b.LoggingLevel.DEBUG);
      D.cascadeLogLevelFor("CreateJs.TextFields", b.LoggingLevel.NONE);
      D.cascadeLogLevelFor("CoreJS.TextFields", b.LoggingLevel.NONE);
      D.cascadeLogLevelFor("TextFields", b.LoggingLevel.NONE);
      D.cascadeLogLevelFor("undefined", b.LoggingLevel.NONE);
      D.cascadeLogLevelFor("CoreJS.PerformanceMonitoring", b.LoggingLevel.DEBUG);
      I.getLogger("CoreJS.BasicToolTipManager").setLevel(b.LoggingLevel.NONE);
      I.getLogger("CoreJS.TextFields.BasicLanguageFontManager").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("CreateJs.ExternalInterface").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("CreateJs.StageExtension").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("CoreJS.ExternalInterface").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("GoodgameTextField").setLevel(b.LoggingLevel.NONE);
      I.getLogger("getDefinitionByName").setLevel(b.LoggingLevel.NONE);
      I.getLogger("CastleFrameOne").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("CastleGame").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("BasicFrameOne").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("L10N").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("DEPRECATED").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger(_.SMARTFOX_CLIENT).setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("Connection").setLevel(b.LoggingLevel.DEBUG);
      I.getLogger("bugsnag").setLevel(b.LoggingLevel.NONE);
    }
    if (B.StartscreenHelper.usesModernStartscreen()) {
      var n = v.ClientConstReCaptcha.getSiteKey();
      var o = `https://www.google.com/recaptcha/api.js?render=${n}`;
      var a = document.createElement("script");
      a.setAttribute("src", o);
      a.setAttribute("type", "text/javascript");
      document.head.appendChild(a);
    }
    return t;
  }
  n.__extends(CastleFrameOne, e);
  Object.defineProperty(CastleFrameOne.prototype, "mainGameClassName", {
    get: function () {
      return "com.goodgamestudios.castle.CastleGame";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicFrameOne.prototype, "mainGameClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFrameOne.prototype.configureFontManager = function () {};
  CastleFrameOne.prototype.isAddedToStageDone = function () {
    g.GoodgameBitmapEngine.instance.init(this.stage, false, c.BasicModel.basicLoaderData.assetLoader);
    C.PathProvider.instance.itemVersions = o.ItemVersions.instance;
    C.PathProvider.instance.interfaceVersions = o.InterfaceVersions.instance;
    m.UncaughtErrorEventHandler.init(this.loaderInfo, true);
    e.prototype.isAddedToStageDone.call(this);
  };
  CastleFrameOne.prototype.initModule = function () {};
  Object.defineProperty(CastleFrameOne.prototype, "initLoggerCommandClass", {
    get: function () {
      return S.CastleInitLoggerCommand;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicFrameOne.prototype, "initLoggerCommandClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFrameOne.prototype.initFontModel = function () {};
  CastleFrameOne.prototype.initTextFieldFactory = function (e) {
    e.textFieldFactory = new V.CastleTextFieldFactory();
  };
  CastleFrameOne.prototype.initPreClientCommands = function () {
    p.CommandController.instance.registerCommand(s.BasicController.COMMAND_INIT_SERVERLIST, A.CastleInitServerListCommand);
    p.CommandController.instance.registerCommand(s.BasicController.COMMAND_FACEBOOK_INITIALIZE, l.BasicInitializeFacebookConnectCommand);
  };
  CastleFrameOne.prototype.loadAdditionalAssets = function () {
    d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ASSETS_START);
    O.loadAssets(["Castlewall"], a.AssetLoadingFlowType.SEQUENTIAL);
    O.loadAssets(["EmpireWalkmaps", "QuestGiverSmall_5", "QuestGiverBig_5", "Equipment_BG", "FullSizeFemaleTutorialCharacter"], a.AssetLoadingFlowType.PARALLEL);
  };
  CastleFrameOne.prototype.handleAssetLoaderComplete = function (t) {
    d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ASSETS_END);
    e.prototype.handleAssetLoaderComplete.call(this, t);
  };
  CastleFrameOne.prototype.createView = function () {
    var e = this;
    var t = B.StartscreenHelper.usesModernStartscreen() ? "CastleStartscreen4" : "CastleStartscreen";
    O.loadAssets([t, "CastleInterfaceElements_Shared", "CastleInterfaceElements", "CastleInterfaceElements_Icons", "CountryComponentFlags", "Placeholder"], a.AssetLoadingFlowType.SEQUENTIAL).then(function (t) {
      e.assetLoaded();
    });
  };
  CastleFrameOne.prototype.assetLoaded = function () {
    this.preloaderView = B.StartscreenHelper.usesModernStartscreen() ? new x.ModernStartscreenComponent() : new R.CastleStartscreenComponent();
    this.preloaderView.startProgressBar();
    this.onViewLoaded();
    this.loadAssets();
    P.HelpshiftHelper.getInstance().hideChatWidget(false);
  };
  CastleFrameOne.prototype.getMainGameClass = function () {
    return T.CastleGame;
  };
  return CastleFrameOne;
}(r.BasicFrameOne);
exports.CastleFrameOne = F;
y.classImplementsInterfaces(F, "Stage");
clearInterval(window.fakeLoadingTimer);
delete window.fakeLoadingTimer;
window.setLoadingScreenProgress(77);
new F();