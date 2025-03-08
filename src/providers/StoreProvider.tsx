'use client';

import { makeStore } from "@/redux/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { AppStore } from '../redux/store';

const StoreProvider = ({children}:{children:ReactNode}) => {
    const storeRef=useRef<AppStore | null>(null);
    if(!storeRef.current){
        storeRef.current=makeStore();
    }
  return <Provider store={storeRef.current}> {children}</Provider>
}

export default StoreProvider
