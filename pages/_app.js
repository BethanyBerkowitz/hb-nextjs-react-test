import '@/styles/globals.css'
import { Honeybadger, HoneybadgerErrorBoundary } from '@honeybadger-io/react'

const honeybadger = Honeybadger.configure({
  apiKey: 'hbp_LyehhF8SX7bxBtl1CBalPs1iUMo1952fv4Qx',
  environment: 'production',
  revision: 'hb-nextjs-react-test'
})


export default function App({ Component, pageProps }) {
  return <HoneybadgerErrorBoundary honeybadger={honeybadger}>
    <Component {...pageProps} />
  </HoneybadgerErrorBoundary>
}
