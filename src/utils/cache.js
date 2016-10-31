class Cache {
  constructor() {
    this.cache = {};
  }

  get (key) {
    return this.cache[key];
  }

  set (key, value) {
    this.cache[key] = value;
  }

  has (key) {
    return !!this.cache[key];
  }

  remove (key) {
    delete this.cache[key];
  }

  clear () {
    this.cache = {};
  }
}

function createCache () {
  return new Cache();
};

export default createCache();
