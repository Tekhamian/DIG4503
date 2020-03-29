import Head from 'next/head';
import Link from 'next/link';

//TYPE SEARCH
// Functional component "Type", using an arrow fuction
const Type = () => (
  <div className="container">
    <Head>
      <title>PokeMon Type Search</title>
    </Head>

    <main>
      <div>
        <h1 className="mainTitle">
          PokeMon Type Search
        </h1>
        <Link href="../components/TypeSearch">
          <a>Search by Type</a>
        </Link>
      </div>
    </main>
    <footer>
      
    </footer>
  </div>
)
export default Type;