// src/server.ts
import { app } from "./app";
import { DefaultService } from "../node-client";

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

DefaultService.getTodo("asd")