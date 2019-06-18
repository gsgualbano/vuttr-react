TagsInput exemplo:

```js
import { useState } from "react";

const [tags, setTags] = useState([]);

<TagsInput id='tags' name='tags' tags={tags} setTags={setTags} />;
```

TagsInput Dark exemplo:

```js
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "~/themes/dark";

const [tags, setTags] = useState([]);

<ThemeProvider theme={dark}>
  <>
    <TagsInput id='tags' name='tags' tags={tags} setTags={setTags} />
  </>
</ThemeProvider>;
```
