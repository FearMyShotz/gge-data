Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./12.js");
var s = require("./8.js");
var r = require("./3.js");
var o = require("./5.js");
var l = require("./4.js");
var u = require("./20.js");
var c = require("./30.js");
var _ = require("./56.js");
var d = createjs.Ticker;
var m = createjs.Container;
var h = require("./11.js");
var p = function (e) {
  function BasicGame(t) {
    var n = e.call(this) || this;
    n.preloaderView = t;
    n.initialized = new u.Signal();
    n.initialized.addOnce(n.bindFunction(n.onGameInitialized));
    return n;
  }
  i.__extends(BasicGame, e);
  BasicGame.prototype.onGameInitialized = function () {
    c.debug("Game initialization complete.");
    a.CommandController.instance.executeCommand(s.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, l.BasicModel.instanceProxy.selectedInstanceVO);
  };
  BasicGame.prototype.onAddedToStage = function (e = null) {
    r.KeyboardEventDispatcher.init(this.stage);
    r.MouseEventDispatcher.init();
    _.ClientFunnelTrackingController.getInstance().stage = this.stage;
    var t = this;
    window.addEventListener("resize", function () {
      t.onWindowResized();
    }, false);
    this.initialize();
    if (r.ExternalInterface.available) {
      r.ExternalInterface.call("ggsCxfOnGameAddedToStage");
    }
  };
  BasicGame.prototype.initialize = function () {
    this.onWindowResized();
    this.initializeTicker();
    this.registerCommands();
    this.initializeGame();
  };
  BasicGame.prototype.addGameSpecificEnvironments = function () {};
  Object.defineProperty(BasicGame.prototype, "customEnvironments", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  BasicGame.prototype.onWindowResized = function () {
    if (!r.currentBrowserInfo.isMobile || !r.TextField.isMobileKeyboardShown) {
      if (this.stage) {
        this.stage.canvas.width = window.innerWidth;
        this.stage.canvas.height = window.innerHeight;
      }
    }
  };
  BasicGame.prototype.initializeTicker = function () {
    d.framerate = h.BasicConstants.TARGET_FRAMERATE;
    d.addEventListener("tick", this.onTick.bind(this));
  };
  BasicGame.prototype.onTick = function (e) {
    if (!d.paused) {
      this.stage.update();
    }
  };
  BasicGame.prototype.registerCommands = function () {};
  BasicGame.prototype.initPreClientCommands = function () {};
  BasicGame.prototype.initializeGame = function () {};
  Object.defineProperty(BasicGame.prototype, "env", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicGame;
}(m);
exports.BasicGame = p;