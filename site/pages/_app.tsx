import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'
import 'react-medium-image-zoom/dist/styles.css'

import { FC, useEffect } from 'react'
import App, { AppContext } from 'next/app'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext)

//   if (appContext.ctx.res?.statusCode === 404) {
//     appContext.ctx.res.writeHead(302, { Location: '/' })
//     appContext.ctx.res.end()
//     return
//   }

//   return { ...appProps }
// }

export default MyApp
