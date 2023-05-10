import SideMenu from "../SideMenu/SideMenu";
import React from 'react'
import scss from './Layout.module.scss'
import Head from 'next/head'
import Footer from "../Footer/Footer";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>DataSoft Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={scss.layout}>
        <SideMenu />
        {props.children}
      </main>
    </>
  )
}

export default Layout
