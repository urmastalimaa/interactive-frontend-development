import { createContext } from "react";
import { createServer } from "./ServerAPI";

// https://reactjs.org/docs/context.html
export const ServerContext = createContext(createServer());
