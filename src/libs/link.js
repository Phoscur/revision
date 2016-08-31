import { register, encode, decode } from "./msgpack";
import { sha1 } from "./sha1";
import { binToHex, hexToBin } from "./bintools";

// Consumers of this API must provide the following interface here.
// function get(hash) -> promise<value>
// function set(hash, value) -> promise
export let storage = {};

// Save takes a value and serializes and stores it returning the link.
export function* save(value) {
  let buf = encode(value);
  let hex = sha1(buf);
  yield storage.set(hex, buf);
  return new Link(hex);
}

// Load accepts a link or a string hash as input.
export function* load(link) {
  let hex = typeof link === "string" ?
    link : link.toHex();
  return decode(yield storage.get(hex));
}

export function* exists(link) {
  let hex = typeof link === "string" ?
    link : link.toHex();
  return yield storage.has(hex);
}

// Link has some nice methods in addition to storing the hash buffer.
export class Link {
  constructor(hash) {
    if (hash.constructor === ArrayBuffer) hash = new Uint8Array(hash);
    if (hash.constructor === Uint8Array) {
      this.hash = hash;
      return;
    }
    if (typeof hash === "string") {
      if (!/^[0-9a-f]{40}$/.test(hash)) {
        throw new TypeError("Invalid string, expected hash");
      }
      this.hash = hexToBin(hash);
      return;
    }
    throw new TypeError("Invalid hash, expected string or buffer");
  }
  *resolve() {
    return yield* load(this);
  }
  toHex() {
    return binToHex(this.hash);
  }
  toBin() {
    return this.hash;
  }
}

// Look for links in an object
export function scan(obj) {
  let links = [];
  find(obj);
  return links;

  function find(obj) {

    if (!obj) return;
    if (obj instanceof Link) {
      links.push(obj);
      return;
    }
    if (Array.isArray(obj)) {
      for (let child of obj) {
        find(child);
      }
      return;
    }
    if (obj.constructor === Object) {
      for (let key in obj) {
        find(obj[key]);
      }
      return;
    }
  }
}

// Register the Link type so we can serialize hashes as a new special type.
// hash itself is just a 20 byte Uint8Array
register(127, Link,
  (link) => { return link.hash; },
  (buf) => { return new Link(buf); }
);
