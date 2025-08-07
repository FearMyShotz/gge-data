Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./699.js");
var a = function () {
  function AbstractCookie(e) {
    this._initialized = false;
    if (e === undefined || e === null || e === "") {
      throw new Error("Section cannot be null or empty");
    }
    this._localStorage = i.LocalStorageFactory.createLocalStorage(e);
  }
  AbstractCookie.prototype.initialize = function () {
    var e = this;
    return new Promise(function (t, n) {
      if (e._initialized) {
        t();
      } else {
        e._localStorage.read().then(function (n) {
          e._initialized = true;
          e.readLocalStorage();
          t();
        }).catch(function (n) {
          e._initialized = true;
          e.readLocalStorage();
          t();
        });
      }
    });
  };
  AbstractCookie.prototype.readLocalStorage = function () {};
  AbstractCookie.prototype.writeLocalStorage = function () {
    this._localStorage.write();
  };
  AbstractCookie.prototype.isInitialized = function () {
    if (!this._initialized) {
      throw new Error("Local Storage is not initialized.");
    }
  };
  AbstractCookie.prototype.setAttribute = function (e, t, n = true) {
    this.isInitialized();
    this._localStorage.setAttribute(e, t);
    if (n) {
      this.writeLocalStorage();
    }
  };
  AbstractCookie.prototype.getAttribute = function (e) {
    this.isInitialized();
    return this._localStorage.getAttribute(e);
  };
  AbstractCookie.prototype.getAttributeAsString = function (e) {
    this.isInitialized();
    var t = this.getAttribute(e);
    return String(t !== undefined ? t : "");
  };
  AbstractCookie.prototype.getAttributeAsBoolean = function (e) {
    this.isInitialized();
    var t = this.getAttributeAsString(e);
    if (isNaN(Number(t))) {
      return t.toLowerCase() === "true";
    } else {
      return t !== "0";
    }
  };
  AbstractCookie.prototype.getAttributeAsInt = function (e) {
    this.isInitialized();
    return this.getAttributeAsNumber(e);
  };
  AbstractCookie.prototype.getAttributeAsUint = function (e) {
    this.isInitialized();
    return this.getAttributeAsNumber(e);
  };
  AbstractCookie.prototype.getAttributeAsNumber = function (e) {
    this.isInitialized();
    return Number(this.getAttribute(e));
  };
  AbstractCookie.prototype.deleteAttribute = function (e, t = true) {
    this.isInitialized();
    if (this.hasAttribute(e)) {
      this._localStorage.deleteAttribute(e);
      if (t) {
        this.writeLocalStorage();
      }
    }
  };
  AbstractCookie.prototype.hasAttribute = function (e) {
    this.isInitialized();
    return this._localStorage.hasAttribute(e);
  };
  AbstractCookie.prototype.getAttributes = function () {
    this.isInitialized();
    return this._localStorage.getAttributes();
  };
  return AbstractCookie;
}();
exports.AbstractCookie = a;