import Head from 'next/head';
import LinkHeader from '../components/LinkHeader';
import IdSearch from '../components/IdSearch';
import Styles from '../components/Style.module.css'

//ID  - using a functional component named "IdPage"
function IdPage() {
  return (
    <div className={Styles.wrapper}>
      <Head>
        <title>PokeMon Id Search</title>
      </Head>
      <LinkHeader />
      <IdSearch />
    
    </div>
  );
}

export default IdPage;
  