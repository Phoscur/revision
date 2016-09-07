import "./libs/cas-idb"
import { connect } from "./libs/websocket-browser"
import { receive } from "./libs/sync-protocol"

self.onmessage = function(evt) {
  download(evt.data.url, evt.data.hash)
    .then(self.postMessage)
    .catch(err => {
      throw err;
    });
};

async function download(url, rootHash) {
  let ws = await connect(url);
  let missing = await receive(rootHash, ws.read, ws.write, postMessage);
  return missing;
}