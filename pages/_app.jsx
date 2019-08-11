import App from 'next/app'

const NoLayout = ({ children }) => children

export default class extends App {
  render () {
    const { Component, pageProps } = this.props
    const Layout = Component.Layout || NoLayout

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
