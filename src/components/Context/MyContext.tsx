import { createContext } from 'react';
type MyContextType = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
  };
  
export const MyContext = createContext<MyContextType | undefined>(undefined);