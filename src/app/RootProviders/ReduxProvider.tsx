'use client'
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from '@/store/store'
import { ReactNode } from 'react'

const persistor = persistStore(store)

export default function ReduxProviders({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
