'use client'

import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import ReduxProvider from './ReduxProvider'
import { SessionProvider } from 'next-auth/react'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})
queryClient.setQueryDefaults(['allGraphicDevices'], {
  refetchOnMount: true,
  refetchInterval: 1000 * 60,
})
queryClient.setQueryDefaults(['allDevices'], {
  refetchOnMount: true,
  refetchInterval: 1000 * 60,
})
queryClient.setQueryDefaults(['allGroups'], {
  refetchOnMount: true,
  refetchInterval: 1000 * 60,
})
queryClient.setQueryDefaults(['allSchedules'], {
  refetchOnMount: true,
  refetchInterval: 1000 * 60,
})
queryClient.setQueryDefaults(['allNotices'], {
  refetchOnMount: true,
  refetchInterval: 1000 * 60,
})

export default function RootProviders({ children }: { children: ReactNode }) {
  const paypal_client_id = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string
  const initialOptions = {
    clientId: paypal_client_id,
    currency: 'USD',
    intent: 'capture',
  }
  return (
    <SessionProvider>
      <ReduxProvider>
        <QueryClientProvider client={queryClient}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <PayPalScriptProvider deferLoading={true} options={initialOptions}>
              {children}
            </PayPalScriptProvider>
          </LocalizationProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ReduxProvider>
    </SessionProvider>
  )
}
