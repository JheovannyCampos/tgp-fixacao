import { createContext } from "react";
import { UseSiteDataProps } from "./LauyoutProvider";

export const LayoutContext = createContext<UseSiteDataProps | undefined>(
  undefined
);
