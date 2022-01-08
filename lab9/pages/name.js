import Head from 'next/head';
import LinkHeader from '../components/LinkHeader';
import NameSearch from '../components/NameSearch';
import Styles from '../components/Style.module.css'

//ID  - using a functional component named "NamePage"
function NamePage() {
  return (
    <div className={Styles.wrapper}>
      <Head>
        <title>PokeMon Name Search</title>
      </Head>
      <LinkHeader />
      <NameSearch />
    
    </div>
  );
}

export default NamePage;