import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import LayoutContainer from './layout';
const Home: NextPage = () => {
  return (
    <div className={styles.main_container}>
   <LayoutContainer/>
    </div>
  )
}

export default Home
