import Head from 'next/head'
import React from 'react'
import { Foot, Navbar, Sidebar } from '.'

const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>iCloudReady</title>
        </Head>
        <header>
            <Sidebar/>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Foot/>
        </footer>
    </>
  )
}

export default Layout