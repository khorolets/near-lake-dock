/*
Custom plugin to empower code blocks with the feature of links.

Usage:

``` links=1
___Link text__https://near.org/___
```

The URL part might be:
- absolute (https://near.org)
- relative (/docs/overview)
- anchor link (#section)
*/
const visit = require('unist-util-visit');
const hljs = require('highlight.js');

const CALLOUT = /___(.*?)__(.*?)___/g;

function plugin(options) {
  const transformer = async (ast) => {
    visit(ast, 'code', (node) => {
      let result = '';
      if (node.lang) {
        result = hljs.highlight(node.value, { language: node.lang }).value;
      } else {
        result = hljs.highlightAuto(node.value).value;
      }
      if (node.meta && node.meta.includes('links')) {
        result = result.replaceAll(CALLOUT, (_, text, href) => `<a href="${href}" class="indexer-hightlight">${text}</a>`);
      }
      result = result.replaceAll('\n', '<br/>');
      result = result.replaceAll('{', '&#123;');
      result = result.replaceAll('}', '&#125;');

      node.type = "jsx";
      node.value = `<CodeBlock className="language-${node.lang}">${result}</CodeBlock>`;
    })
  };
  return transformer;
};

module.exports = plugin;
