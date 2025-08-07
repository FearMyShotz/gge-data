Object.defineProperties(Date.prototype, {
  day: {
    configurable: true,
    get: function () {
      return this.getDay();
    }
  },
  time: {
    configurable: true,
    get: function () {
      return this.getTime();
    }
  }
});