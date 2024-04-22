// store.ts
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['fetchs', 'adminNav', 'controlTab'], // blacklist certain reducers
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  })

  sagaMiddleware.run(rootSaga)
  return store
}
export const store = makeStore()
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
