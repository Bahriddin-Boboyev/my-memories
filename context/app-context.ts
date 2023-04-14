import { createContext, Context } from "react";

type T = any;

const AppContext: Context<T> = createContext<T>('default');

export default AppContext;
