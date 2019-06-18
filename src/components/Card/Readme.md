#### Cards com informações sobre as ferramentas cadastradas.

Card Exemplo:

```js
const tool = {
  id: 1,
  title: "Google",
  description: "Search Website",
  link: "https://google.com",
  tags: ["search", "site", "google"]
};

<Card tool={tool} />;
```

Card Dark Exemplo:

```js
import { ThemeProvider } from "styled-components";
import dark from "~/themes/dark";

const tool = {
  id: 1,
  title: "Google",
  description: "Search Website",
  link: "https://google.com",
  tags: ["search", "site", "google"]
};

<ThemeProvider theme={dark}>
  <>
    <Card tool={tool} />
  </>
</ThemeProvider>;
```
