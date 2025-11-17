import { decode } from "./decoder";
import { encode } from "./encoder";
import { Request, Response, NextFunction } from "express";

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


export function toonResponder() {
  return (req: Request, res: Response, next: NextFunction) => {
    res.toon = (data: any) => {
      res.setHeader("Content-Type", "text/toon");
      res.send(encode(data));
    };
    next();
  };
}