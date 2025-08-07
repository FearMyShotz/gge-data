Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function Room(e, t, n, i, a, s, r, o, l = 0, u = 0) {
    this.id = e;
    this.name = t;
    this.maxSpectators = i;
    this.maxUsers = n;
    this.temp = a;
    this.game = s;
    this.priv = r;
    this.limbo = o;
    this.userCount = l;
    this.specCount = u;
    this.userList = [];
    this.variables = [];
  }
  Room.prototype.getUserList = function () {
    return this.userList;
  };
  Room.prototype.clearUserList = function () {
    this.userList = [];
    this.userCount = 0;
    this.specCount = 0;
  };
  Room.prototype.getVariable = function (e) {
    return this.variables[e];
  };
  Room.prototype.getVariables = function () {
    return this.variables;
  };
  Room.prototype.setVariables = function (e) {
    this.variables = e;
  };
  Room.prototype.clearVariables = function () {
    this.variables = [];
  };
  Room.prototype.getName = function () {
    return this.name;
  };
  Room.prototype.getId = function () {
    return this.id;
  };
  Room.prototype.isTemp = function () {
    return this.temp;
  };
  Room.prototype.isGame = function () {
    return this.game;
  };
  Room.prototype.isPrivate = function () {
    return this.priv;
  };
  Room.prototype.getUserCount = function () {
    return this.userCount;
  };
  Room.prototype.getSpectatorCount = function () {
    return this.specCount;
  };
  Room.prototype.getMaxUsers = function () {
    return this.maxUsers;
  };
  Room.prototype.getMaxSpectators = function () {
    return this.maxSpectators;
  };
  Room.prototype.setMyPlayerIndex = function (e) {
    this.myPlayerIndex = e;
  };
  Room.prototype.getMyPlayerIndex = function () {
    return this.myPlayerIndex;
  };
  Room.prototype.setIsLimbo = function (e) {
    this.limbo = e;
  };
  Room.prototype.isLimbo = function () {
    return this.limbo;
  };
  Room.prototype.setUserCount = function (e) {
    this.userCount = e;
  };
  Room.prototype.setSpectatorCount = function (e) {
    this.specCount = e;
  };
  Room.prototype.setUserList = function (e) {
    this.userList = e;
  };
  return Room;
}();
exports.Room = i;