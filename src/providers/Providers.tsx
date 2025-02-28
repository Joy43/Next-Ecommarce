import UserProvider from '@/context/userContext'
import React from 'react'

const Providers = ({children}:{children:React.ReactNode}) => {
    return <UserProvider>{children}</UserProvider>
  
}

export default Providers;
