# @sibshahz/toon

A lightweight serialization format and toolkit that allows servers to communicate using **Toon**, similar to JSON.  
It supports:
- Encoding objects → Toon format
- Decoding Toon → objects
- Express.js middleware for request parsing (`toonParser`)
- Express.js helper for responses (`res.toon()`)

---

## 🚀 Installation

```bash
npm install @sibshahz/toon-parser
```

---

## 📦 Usage

### Encoding
```ts
import { encode } from "@sibshahz/toon-parser";

const data = {
  users: [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" }
  ]
};

console.log(encode(data));
```

### Decoding
```ts
import { decode } from "@sibshahz/toon-parser";

const obj = decode(`
users[2]{id,name,role}:
  1,Alice,admin
  2,Bob,user
`);

console.log(obj);
```

---

## 🧩 Express Middleware

### Parse Toon request body
```ts
import express from "express";
import { toonParser } from "@sibshahz/toon-parser";

app.use(toonParser());
```

### Send Toon response
```ts
import { toonResponder } from "@sibshahz/toon-parser";

app.use(toonResponder);

app.get("/users", (req, res) => {
  res.toon({
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ]
  });
});
```

---

## 📂 Project Structure

```
src/
 ├── encoder.ts
 ├── decoder.ts
 ├── express-middleware.ts
 └── index.ts
```

---

## 🔧 Build

```bash
npm run build
```

---

## 📜 MIT License

Copyright (c) 2025 Shahid Gillani
https://github.com/sibshahz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/sibshahz
