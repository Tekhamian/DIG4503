import Head from 'next/head';
import LinkHeader from '../components/LinkHeader';
import TypeSearch from '../components/TypeSearch';
import Styles from '../components/Style.module.css'

//ID  - using a functional component named "TypePage"
function TypePage() {
  return (
    <div className={Styles.wrapper}>
      <Head>
        <title>PokeMon Type Search</title>
      </Head>
      <LinkHeader />
      <TypeSearch />
    
    </div>
  );
}

export default TypePage;