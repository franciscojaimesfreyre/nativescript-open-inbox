# NativeScript Open Default Email App Inbox

You can use this plugin to open the default email app on both android and ios.

## Installation
Run this command from the root of your project:

```bash
tns plugin add nativescript-open-inbox
```

## API

To use this plugin you must first require/import it:

#### TypeScript

```typescript
import { openInbox } from "nativescript-open-inbox";
// or
import { openInbox as goToEmailApp } from "nativescript-open-inbox";
```

#### JavaScript

```js
var email = require("nativescript-open-inbox");
```

### `openInbox`

#### TypeScript

```typescript
  openInbox()
    .then(() => {
        console.log("Cool!");
    })
    .catch((ex) => {
      console.log("Ouch!" + ex);
    });
```

#### JavaScript

```js
  email.openInbox()
    .then(() => {
        console.log("Cool!");
    })
    .catch((ex) => {
      console.log("Ouch!" + ex);
    })
```
