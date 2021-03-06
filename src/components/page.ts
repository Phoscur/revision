import { style } from "../libs/router";
import { h, VNode } from "../libs/maquette"

export function page(title, body) {
  return () => h('content-wrapper', [
    h('h1', [].concat(title)),
    h('div.pure-g', {key:title}, body)
  ]);
}

style(`
content-wrapper {
  display: block;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}
`);
