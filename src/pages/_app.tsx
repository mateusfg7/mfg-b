import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import defaultTheme from '../styles/theme'

import '../styles/main.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-website-id="39d18d62-74c2-4bab-a2f8-a346b63d55b5"
          src="https://mateusfg7-umami-instance.herokuapp.com/umami.js"
        />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
