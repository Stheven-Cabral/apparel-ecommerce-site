import React from 'react';

export const Context = React.createContext();

export function Provider ({children}) {

  return (
    <Context.Provider value={''}>
      {children}
    </Context.Provider>
  )
}

// How to use context:
// https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=25s