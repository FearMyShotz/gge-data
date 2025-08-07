Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./101.js");
var s = require("./23.js");
var r = require("./411.js");
var o = require("./5.js");
var l = require("./117.js");
var u = require("./3.js");
var c = require("./20.js");
var _ = require("./29.js");
var d = require("./2.js");
var m = require("./412.js");
var h = require("./413.js");
var p = require("./315.js");
var g = createjs.EventDispatcher;
var E = createjs.TimerEvent;
var C = d.getLogger(_.SMARTFOX_CLIENT);
var f = "<msg t='sys'>";
var T = function (e) {
  function BasicSmartfoxClient() {
    var t = e.call(this) || this;
    t.hasAutojoined = false;
    t._roundTripTime = 0;
    t._connectionTime = 0;
    t._lastSocketDataIdInQueue = 0;
    t._lastSocketDataIdHandled = 0;
    t._userForcedDisconnect = false;
    t.roomList = [];
    t.commandBuffer = "";
    t.getRandomLag = function () {
      return (t.env.laggyClientMaxDelay - t.env.laggyClientMinDelay) * Math.random() + t.env.laggyClientMinDelay;
    };
    t.totalPingTime = 0;
    t.pingCount = 0;
    t.roundTripResponseSignal = new c.Signal();
    t.onAvgNetworkLagTimeResponse = new r.IntSignal();
    t.worldAssignmentFacade = window.ggs.worldAssignment.facade;
    return t;
  }
  i.__extends(BasicSmartfoxClient, e);
  BasicSmartfoxClient.prototype.executeConnection = function (e, t) {
    var n = this;
    if (t === undefined) {
      t = 443;
    }
    this._userForcedDisconnect = false;
    if (t !== 443) {
      C.warn("HTML5 games currently support only WSS on 443");
      t = 443;
    }
    this._ip = e;
    this._port = t;
    if (!!this.socket && (this.socket.readyState === WebSocket.CONNECTING || this.socket.readyState === WebSocket.OPEN)) {
      this.socket.onerror = undefined;
      this.socket.onclose = undefined;
      this.socket.onmessage = undefined;
      this.socket.onopen = undefined;
      this.socket.close(4999, "shutting down socket before opening a new one");
    }
    this.hasAutojoined = false;
    this._connectionTime = Date.now();
    this.dispatchEvent(new l.SmartfoxEvent(l.SmartfoxEvent.CONNECT_START));
    this.socket = new WebSocket("wss://" + e + ":" + t);
    C.debug("Will connect to " + this.socket.url);
    this.socket.onopen = function () {
      C.debug("Connected");
      n.sendXMLMessage(f, "verChk", 0, "<ver v='166' />");
    };
    this.socket.onerror = function (e) {
      C.error("websocket encounter unknow error");
      n.dispatchEvent(new l.SmartfoxEvent(l.SmartfoxEvent.CONNECT_FAILED));
    };
    this.socket.onmessage = this.handleSocketData.bind(this);
    this.socket.onclose = function (e) {
      C.debug("Socket onclose:  (" + e.code + ") " + e.reason);
      n.hasAutojoined = false;
      n.socket.onerror = undefined;
      n.socket.onopen = undefined;
      n.socket.onmessage = undefined;
      n.socket.onclose = undefined;
      n.dispatchEvent(new l.SmartfoxEvent(l.SmartfoxEvent.CONNECTION_LOST));
    };
  };
  BasicSmartfoxClient.prototype.executeRoundTrip = function () {
    this.doRoundTripBench();
  };
  BasicSmartfoxClient.prototype.onRoundTripResponse = function (e) {
    var t = e.CTS;
    this._roundTripTime = t - this._roundTripStartTime;
    this.roundTripResponseSignal.dispatch(this._roundTripTime, this.isConnectedViaHTTP());
  };
  BasicSmartfoxClient.prototype.startGameServerErrorDelayTimer = function (e) {
    this.currentGameServerErrorLogFunction = e;
    this.gameServerErrorDelayTimer = new u.Timer(10000);
    this.gameServerErrorDelayTimer.addEventListener(E.TIMER_COMPLETE, this.bindFunction(this.currentGameServerErrorLogFunction));
    this.gameServerErrorDelayTimer.start();
  };
  BasicSmartfoxClient.prototype.disposeGameServerErrorDelayTimer = function () {
    if (this.gameServerErrorDelayTimer) {
      this.gameServerErrorDelayTimer.stop();
      this.gameServerErrorDelayTimer.removeEventListener(E.TIMER_COMPLETE, this.bindFunction(this.currentGameServerErrorLogFunction));
      this.gameServerErrorDelayTimer = null;
    }
  };
  BasicSmartfoxClient.prototype.onRoomListFailed = function () {
    this.disposeGameServerErrorDelayTimer();
    var e = this.worldAssignmentFacade.selectedNetworkInstance;
    s.ExternalLog.logger.log(new h.ServerErrorLOFactory(h.ServerErrorLOFactory.ROOMLIST_FAILED, e.zone, this.isConnectedViaHTTP()));
    this.startGameServerErrorDelayTimer(this.bindFunction(this.onRoomListFailed));
    C.error("RoomList failed!");
  };
  BasicSmartfoxClient.prototype.onJoinRoomFailed = function () {
    this.disposeGameServerErrorDelayTimer();
    var e = this.worldAssignmentFacade.selectedNetworkInstance;
    s.ExternalLog.logger.log(new h.ServerErrorLOFactory(h.ServerErrorLOFactory.JOINROOM_FAILED, e.zone, this.isConnectedViaHTTP()));
    this.startGameServerErrorDelayTimer(this.bindFunction(this.onJoinRoomFailed));
    C.error("JoinRoom failed!");
  };
  BasicSmartfoxClient.prototype.onLoginResponseFailed = function () {
    this.disposeGameServerErrorDelayTimer();
    var e = this.worldAssignmentFacade.selectedNetworkInstance;
    s.ExternalLog.logger.log(new h.ServerErrorLOFactory(h.ServerErrorLOFactory.LOGIN_RESPONCE_FAILED, e.zone, this.isConnectedViaHTTP()));
    this.startGameServerErrorDelayTimer(this.bindFunction(this.onLoginResponseFailed));
    C.error("LoginResponce failed!");
  };
  BasicSmartfoxClient.prototype.onLoginResponceSuccess = function () {
    this.disposeGameServerErrorDelayTimer();
  };
  BasicSmartfoxClient.prototype.onExtensionResponse = function (e, t) {
    C.debug("received ext command: [" + e + "](" + t + ")");
    switch (e) {
      case BasicSmartfoxClient.S2C_ROOMLIST:
        this.disposeGameServerErrorDelayTimer();
        this.startGameServerErrorDelayTimer(this.bindFunction(this.onJoinRoomFailed));
        this.setRoomList(t);
        if (!this.hasAutojoined) {
          this.hasAutojoined = true;
          this.sendXMLMessage(f, "autoJoin", -1, "");
        }
        return;
      default:
        t.shift();
        this.dispatchEvent(new l.SmartfoxEvent(l.SmartfoxEvent.EXTENSION_RESPONSE, e, t));
        return;
    }
  };
  BasicSmartfoxClient.prototype.setRoomList = function (e) {
    var t = e[1];
    var n = this.decompressInt(e[2]);
    var i = this.decompressInt(e[3]);
    var a = this.decompressInt(e[4]);
    var s = e[5];
    this.roomList[t] = new m.Room(t, s, i, 0, (a >> 1 & 1) == 1, (a >> 2 & 1) == 1, (a >> 0 & 1) == 1, (a >> 3 & 1) == 1, n, 0);
    C.debug("Rooms: ", this.roomList);
  };
  BasicSmartfoxClient.prototype.decompressInt = function (e) {
    var t = "A".charCodeAt(0);
    var n = "z".charCodeAt(0);
    var i = n - t + 1;
    var a = 0;
    if (e && e.length > 0) {
      for (var s = e.length - 1; s >= 0; s--) {
        if (e.charCodeAt(s) < t || e.charCodeAt(s) > n) {
          return -1;
        }
        a = a * i + e.charCodeAt(s) - t;
      }
    }
    return a;
  };
  BasicSmartfoxClient.prototype.onJoinRoom = function () {
    this.disposeGameServerErrorDelayTimer();
    var e = this.activeRoom;
    if (e === BasicSmartfoxClient.LOBBY_ROOM_NAME) {
      this.doRoundTripBench();
      this.activatePing(60000);
    }
    C.debug("onJoinRoom:: received signal roomJoined --> will dispatch joinedRoom  Smartfox event");
    this.dispatchEvent(new l.SmartfoxEvent(l.SmartfoxEvent.JOINED_ROOM, "", [e]));
  };
  BasicSmartfoxClient.prototype.changePingTimer = function (e) {
    this.activatePing(e);
  };
  BasicSmartfoxClient.prototype.activatePing = function (e) {
    var t = this;
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
    }
    C.debug("activating ping every " + e + " ms");
    this.pingInterval = setInterval(function () {
      t.sendMessage(BasicSmartfoxClient.S2C_PING, [""]);
    }, e);
  };
  BasicSmartfoxClient.prototype.logout = function () {
    C.debug("logout");
    this.disposeGameServerErrorDelayTimer();
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
    }
    this._userForcedDisconnect = true;
    this.socket.close(4000, "manually disconnected");
  };
  BasicSmartfoxClient.prototype.sendMessage = function (e, t) {
    C.debug("BasicSmartfoxClient sendMessage: " + e + " params: " + t);
    for (var n = 0; n < t.length; n++) {
      if (t[n] === 0) {
        t[n] = "0";
      } else if (t[n]) {
        if (typeof t[n] == "string") {
          t[n] = a.TextValide.getValideSmartFoxText(t[n]);
        }
      } else {
        t[n] = "<RoundHouseKick>";
      }
    }
    this.sendCommand(this.defaultZone, e, t, this.activeRoomId);
  };
  BasicSmartfoxClient.prototype.sendEmptyCommandVO = function (e) {
    this.sendMessage(e.getCmdId(), []);
  };
  BasicSmartfoxClient.prototype.sendCommandVO = function (e) {
    if (this.env.useLaggyClientEmulation) {
      C.warn("Be Aware:  testing laggy client emulation");
      setTimeout(function () {
        this.sendMessage(e.getCmdId(), [JSON.stringify(e)]);
      }, this.getRandomLag());
    } else {
      this.sendMessage(e.getCmdId(), [JSON.stringify(e)]);
    }
  };
  BasicSmartfoxClient.prototype.doRoundTripBench = function () {
    this._roundTripStartTime = Date.now();
    this.sendXMLMessage(f, "roundTrip", this.activeRoomId, "");
  };
  BasicSmartfoxClient.prototype.isConnectedViaHTTP = function () {
    return 0;
  };
  Object.defineProperty(BasicSmartfoxClient.prototype, "userForcedDisconnect", {
    get: function () {
      return this._userForcedDisconnect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "connectionTime", {
    get: function () {
      return this._connectionTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "roundTripTime", {
    get: function () {
      return this._roundTripTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "ip", {
    get: function () {
      return this._ip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "port", {
    get: function () {
      return this._port;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "activeRoom", {
    get: function () {
      var e = this.getRoom(this.activeRoomId);
      if (e) {
        return e.getName();
      } else {
        return "Not available.";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "env", {
    get: function () {
      return o.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicSmartfoxClient.prototype.login = function (e, t, n) {
    var i = "<login z='" + e + "'><nick><![CDATA[" + t + "]]></nick><pword><![CDATA[" + n + "]]></pword></login>";
    this.sendXMLMessage(f, "login", 0, i);
  };
  BasicSmartfoxClient.prototype.sendCommand = function (e, t, n, i = -1) {
    if (this.socket) {
      var a = ["", "xt", e, t, i].concat(n, [""]).join("%");
      if (this.isConnected) {
        C.debug("[Sending xtMessage]: " + a);
        this.socket.send(a);
      } else {
        C.warn("[Wanted to send xtMessage]: " + a + "  BUT socket has state: " + this.socket.readyState);
      }
    } else {
      C.warn("[Wanted to send xtMessage]: " + e + " " + t + "  BUT socket hasn't been initialized yet.");
    }
  };
  BasicSmartfoxClient.prototype.sendXMLMessage = function (e, t, n, i) {
    var a = this;
    if (this.isConnected) {
      var s = e + "<body action='" + t + "' r='" + n + "'>" + i + "</body></msg>";
      C.debug("[Sending XMLMessage]: " + s.replace(/]]>/g, "] ]>") + "\n");
      this.socket.send(s);
    } else {
      C.warn("socket not ready, scheduling retry");
      setTimeout(function () {
        C.warn("[sretrying to sendXMLMessage...");
        a.sendXMLMessage(e, t, n, i);
      }, 50);
    }
  };
  Object.defineProperty(BasicSmartfoxClient.prototype, "isConnected", {
    get: function () {
      return this.socket && this.socket.readyState === WebSocket.OPEN;
    },
    enumerable: true,
    configurable: true
  });
  BasicSmartfoxClient.prototype.handleSocketData = function (e) {
    var t = this;
    var n = new FileReader();
    var i = ++this._lastSocketDataIdInQueue;
    n.onloadend = function () {
      return t.onDataReady(n.result, i);
    };
    n.readAsText(e.data, "utf-8");
  };
  BasicSmartfoxClient.prototype.onDataReady = function (e, t) {
    var n = this;
    this._lastSocketDataIdHandled = t;
    var i = e.length;
    e = e.replace(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, "");
    C.debug("[ RECEIVED ]: " + e + ", (len: " + i + ")");
    this.commandBuffer += e;
    var a;
    var s = /<msg[\s\S]+<\/msg>/g;
    var r = this.commandBuffer.match(s);
    if (r && r.length > 0) {
      r.forEach(function (e) {
        n.handleSystemMessage(e);
      });
      this.commandBuffer = this.commandBuffer.replace(s, "");
    }
    a = this.commandBuffer;
    if (/}?%$/.test(a)) {
      var o = this.commandBuffer.split("%xt");
      this.commandBuffer = "";
      for (var u = 0; u < o.length; u++) {
        if (o[u].length > 0) {
          this.handleExtMessage(o[u]);
        }
      }
    }
    if (!this.isSocketDataInQueue()) {
      this.dispatchEvent(new l.SmartfoxEvent(l.SmartfoxEvent.SOCKET_EMPTIED));
    }
  };
  BasicSmartfoxClient.prototype.isSocketDataInQueue = function () {
    return this._lastSocketDataIdInQueue > this._lastSocketDataIdHandled;
  };
  BasicSmartfoxClient.prototype.handleExtMessage = function (e) {
    var t = e.substring(1, e.length - 1).split("%");
    var n = t.shift();
    this.onExtensionResponse(n, t);
  };
  BasicSmartfoxClient.prototype.handleSystemMessage = function (e) {
    var t = p.XML(e);
    var n = t.child("body").attribute("action");
    switch (n) {
      case "apiOK":
        C.debug("apiOK received");
        this._connectionTime = Date.now() - this._connectionTime;
        this.disposeGameServerErrorDelayTimer();
        this.startGameServerErrorDelayTimer(this.bindFunction(this.onRoomListFailed));
        var i = this.worldAssignmentFacade.selectedNetworkInstance;
        this.defaultZone = i.zone;
        this.login(i.zone, "", this.env.versionDateGame + "%" + this.worldAssignmentFacade.currentCountry.ggsLanguageCode + "%" + this.env.distributorId);
        this.dispatchEvent(new l.SmartfoxEvent(l.SmartfoxEvent.CONNECT_SUCCESS));
        break;
      case "joinOK":
        var a = Number(t.child("body").attribute("r"));
        this.activeRoomId = a;
        var s = Number(t.child("body").child("pid").attribute("id"));
        this.playerId = s;
        this.onJoinRoom();
        break;
      case "roundTripRes":
        this.onRoundTripResponse({
          CTS: Date.now()
        });
        break;
      default:
        C.warn("Unexpected sys message: " + n);
    }
  };
  BasicSmartfoxClient.prototype.getRoom = function (e) {
    return this.roomList[e];
  };
  BasicSmartfoxClient.prototype.checkAvgNetworkLagTime = function (e = 4000, t = 8) {
    this.stopAvgNetworkLagTimer();
    this.totalPingTime = 0;
    this.pingCount = 0;
    this.roundTripResponseSignal.add(this.bindFunction(this.avgNetworkLagResponseHandler));
    this.averageNetworkLagTimer = new u.Timer(e, t);
    this.averageNetworkLagTimer.addEventListener(E.TIMER, this.bindFunction(this.avgNetworkLagTimerListener));
    this.averageNetworkLagTimer.addEventListener(E.TIMER_COMPLETE, this.bindFunction(this.avgNetworkLagTimerDone));
    this.averageNetworkLagTimer.start();
  };
  BasicSmartfoxClient.prototype.stopAvgNetworkLagTimer = function () {
    if (this.averageNetworkLagTimer) {
      this.roundTripResponseSignal.remove(this.bindFunction(this.avgNetworkLagResponseHandler));
      this.averageNetworkLagTimer.stop();
      this.averageNetworkLagTimer.removeEventListener(E.TIMER, this.bindFunction(this.avgNetworkLagTimerListener));
      this.averageNetworkLagTimer.removeEventListener(E.TIMER_COMPLETE, this.bindFunction(this.avgNetworkLagTimerDone));
      this.averageNetworkLagTimer = null;
    }
  };
  BasicSmartfoxClient.prototype.avgNetworkLagTimerDone = function (e) {
    this.stopAvgNetworkLagTimer();
  };
  BasicSmartfoxClient.prototype.avgNetworkLagTimerListener = function (e) {
    this.doRoundTripBench();
  };
  BasicSmartfoxClient.prototype.avgNetworkLagResponseHandler = function (e) {
    this.totalPingTime += e / 2;
    this.pingCount++;
    var t = Math.round(this.totalPingTime / this.pingCount);
    this.onAvgNetworkLagTimeResponse.signal(t);
  };
  BasicSmartfoxClient.LOBBY_ROOM_NAME = "Lobby";
  BasicSmartfoxClient.S2C_ROOMLIST = "rlu";
  BasicSmartfoxClient.S2C_VERSION_CHECK = "vck";
  BasicSmartfoxClient.S2C_JOIN_ROOM = "jro";
  BasicSmartfoxClient.S2C_PING = "pin";
  return BasicSmartfoxClient;
}(g);
exports.BasicSmartfoxClient = T;