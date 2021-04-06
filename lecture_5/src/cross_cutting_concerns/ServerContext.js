import { createContext } from "react";
import { createServer } from "./ServerAPI";

export const ServerContext = createContext(createServer());
