function nodeCreator(nodeName) {
  return function (attributes, ...children) {
      let el = document.createElement(nodeName);
      if (typeof attributes !== 'object' && typeof attributes !== 'string') {
        throw Error("Expected first parameter to be type object or string, got " + typeof attributes);
      }
      if (attributes instanceof Element) {
        el.appendChild(attributes);
      }
      else if (typeof attributes === 'string') {
        el.appendChild(document.createTextNode(attributes));
      }
      else {
        for (let attr of Object.keys(attributes)) {
          if (typeof attributes[attr] === "function") {
            el[attr] = attributes[attr]
          }
          else {
            el.setAttribute(attr, attributes[attr]);
          }
        }
      }
      for (let child of children) {
        if (typeof child === "string") {
          el.appendChild(document.createTextNode(child))
        }
        else {
          el.appendChild(child);
        }
      }
      return el;
  }
}

module.exports = {
  nodeCreator,
  a: nodeCreator("a"),
  abbr: nodeCreator("abbr"),
  address: nodeCreator("address"),
  applet: nodeCreator("applet"),
  area: nodeCreator("area"),
  article: nodeCreator("article"),
  aside: nodeCreator("aside"),
  audio: nodeCreator("audio"),
  b: nodeCreator("b"),
  base: nodeCreator("base"),
  basefont: nodeCreator("basefont"),
  bdi: nodeCreator("bdi"),
  bdo: nodeCreator("bdo"),
  blockquote: nodeCreator("blockquote"),
  body: nodeCreator("body"),
  br: nodeCreator("br"),
  button: nodeCreator("button"),
  canvas: nodeCreator("canvas"),
  caption: nodeCreator("caption"),
  cite: nodeCreator("cite"),
  code: nodeCreator("code"),
  col: nodeCreator("col"),
  colgroup: nodeCreator("colgroup"),
  data: nodeCreator("data"),
  datalist: nodeCreator("datalist"),
  dd: nodeCreator("dd"),
  del: nodeCreator("del"),
  details: nodeCreator("details"),
  dfn: nodeCreator("dfn"),
  dialog: nodeCreator("dialog"),
  dir: nodeCreator("dir"),
  div: nodeCreator("div"),
  dl: nodeCreator("dl"),
  dt: nodeCreator("dt"),
  em: nodeCreator("em"),
  embed: nodeCreator("embed"),
  fieldset: nodeCreator("fieldset"),
  figcaption: nodeCreator("figcaption"),
  figure: nodeCreator("figure"),
  font: nodeCreator("font"),
  footer: nodeCreator("footer"),
  form: nodeCreator("form"),
  frame: nodeCreator("frame"),
  frameset: nodeCreator("frameset"),
  h1: nodeCreator("h1"),
  h2: nodeCreator("h2"),
  h3: nodeCreator("h3"),
  h4: nodeCreator("h4"),
  h5: nodeCreator("h5"),
  h6: nodeCreator("h6"),
  head: nodeCreator("head"),
  header: nodeCreator("header"),
  hgroup: nodeCreator("hgroup"),
  hr: nodeCreator("hr"),
  html: nodeCreator("html"),
  i: nodeCreator("i"),
  img: nodeCreator("img"),
  input: nodeCreator("input"),
  ins: nodeCreator("ins"),
  kbd: nodeCreator("kbd"),
  label: nodeCreator("label"),
  legend: nodeCreator("legend"),
  li: nodeCreator("li"),
  link: nodeCreator("link"),
  main: nodeCreator("main"),
  map: nodeCreator("map"),
  mark: nodeCreator("mark"),
  marquee: nodeCreator("marquee"),
  menu: nodeCreator("menu"),
  meta: nodeCreator("meta"),
  meter: nodeCreator("meter"),
  nav: nodeCreator("nav"),
  noscript: nodeCreator("noscript"),
  object: nodeCreator("object"),
  ol: nodeCreator("ol"),
  optgroup: nodeCreator("optgroup"),
  option: nodeCreator("option"),
  output: nodeCreator("output"),
  p: nodeCreator("p"),
  param: nodeCreator("param"),
  picture: nodeCreator("picture"),
  pre: nodeCreator("pre"),
  progress: nodeCreator("progress"),
  q: nodeCreator("q"),
  rp: nodeCreator("rp"),
  rt: nodeCreator("rt"),
  ruby: nodeCreator("ruby"),
  s: nodeCreator("s"),
  samp: nodeCreator("samp"),
  script: nodeCreator("script"),
  section: nodeCreator("section"),
  select: nodeCreator("select"),
  slot: nodeCreator("slot"),
  small: nodeCreator("small"),
  source: nodeCreator("source"),
  span: nodeCreator("span"),
  strong: nodeCreator("strong"),
  style: nodeCreator("style"),
  sub: nodeCreator("sub"),
  summary: nodeCreator("summary"),
  sup: nodeCreator("sup"),
  table: nodeCreator("table"),
  tbody: nodeCreator("tbody"),
  td: nodeCreator("td"),
  template: nodeCreator("template"),
  textarea: nodeCreator("textarea"),
  tfoot: nodeCreator("tfoot"),
  th: nodeCreator("th"),
  thead: nodeCreator("thead"),
  time: nodeCreator("time"),
  title: nodeCreator("title"),
  tr: nodeCreator("tr"),
  track: nodeCreator("track"),
  u: nodeCreator("u"),
  ul: nodeCreator("ul"),
  varNode: nodeCreator("var"),
  video: nodeCreator("video"),
  wbr: nodeCreator("wbr"),
}

