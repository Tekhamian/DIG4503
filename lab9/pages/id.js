import Head from 'next/head';
import Link from 'next/link';

//ID SEARCH
// Functional component "Id", using an arrow fuction
const Id = () => (
    <div className="container">
      <Head>
        <title>PokeMon Id Search</title>
      </Head>
  
      <main>
        <div>
          <h1 className="mainTitle">
            PokeMon Id Search
          </h1>
          <Link href="../components/NameSearch">
            <a>Search by Id</a>
          </Link>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  )
  export default Id
  