---
options:
  - "1"
  - "2"
  - "3"
  - "1"
selected: 1
---

Options: `INPUT[inlineList:options]`

```meta-bind-js-view
{options} as options
---
const options = context.bound.options.map(x => `option(${x})`).join(", ");
const str = `\`INPUT[inlineSelect(${options}):selected]\``;
return engine.markdown.create(str);
```