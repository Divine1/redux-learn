import React from 'react'
import App, { Container } from 'next/app'
import store from '../store/centralStore'
import { Provider } from 'react-redux'


export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    console.log("in MyApp class")
    let pageProps = {}
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    console.log("pageProps ",pageProps)
    return (
      <Provider store={store}>
        <Container>
            <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}