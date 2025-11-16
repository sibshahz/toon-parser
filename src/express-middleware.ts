import { decode } from "./decoder";
import { encode } from "./encoder";

export function toonParser() {
  return function (req: any, res: any, next: any) {
    if (
      req.headers["content-type"] &&
      req.headers["content-type"].includes("text/toon")
    ) {
      let raw = "";
      req.on("data", (chunk:any) => raw += chunk);
      req.on("end", () => {
        req.body = decode(raw);
        next();
      });
    } else {
      next();
    }
  };
}

export function toonResponder(req: any, res: any, next: any) {
  res.toon = function (data: any) {
    const body = encode(data);
    res.setHeader("Content-Type", "text/toon");
    res.send(body);
  };
  next();
}