Modal examplo:

```js
import { useState } from "react";

const [showModal, setShowModal] = useState(false);

const handleOpen = () => {
  setShowModal(true);
};

const handleClose = () => {
  setShowModal(false);
};

<>
  <button onClick={handleOpen}>Open Modal!</button>
  <Modal visible={showModal} setShowModal={setShowModal}>
    <p>Example Modal!</p>
    <div>
      <button onClick={handleClose}>Close Modal!</button>
    </div>
  </Modal>
</>;
```

Dark Modal exemplo

```js
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import dark from "~/themes/dark";

const [showModal, setShowModal] = useState(false);

const handleOpen = () => {
  setShowModal(true);
};

const handleClose = () => {
  setShowModal(false);
};

<>
  <button onClick={handleOpen}>Open Modal!</button>
  <ThemeProvider theme={dark}>
    <Modal visible={showModal} setShowModal={setShowModal}>
      <p>Example Modal!</p>
      <div>
        <button onClick={handleClose}>Close Modal!</button>
      </div>
    </Modal>
  </ThemeProvider>
</>;
```
