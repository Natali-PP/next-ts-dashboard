import React from 'react'
import Dashboard from './dashboard/Dashboard'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu/SideMenu'
import scss from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <main className={scss.main} >
        <Dashboard />
      </main>
    </>
  )
}

export default Home;
