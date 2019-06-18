#### Botão com a cor primária(Azul).

Regular PrimaryButton Example:

```js
<PrimaryButton>Example</PrimaryButton>
```

Outline DangerButton Example:

```js
import { ThemeProvider } from "styled-components";
import light from "~/themes/light";

<ThemeProvider theme={light}>
  <PrimaryButton outline>Example</PrimaryButton>
</ThemeProvider>;
```

Dark Outline DangerButton Example:

```js
import { ThemeProvider } from "styled-components";
import dark from "~/themes/dark";

<ThemeProvider theme={dark}>
  <PrimaryButton outline>Example</PrimaryButton>
</ThemeProvider>;
```
