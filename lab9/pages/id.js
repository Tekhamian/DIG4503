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

        {/* Name Search */}
        <div>
          <h1 className="mainTitle">
            PokeMon Name Search
          </h1>
          <Link href="../components/NameSearch">
            <a>Search by Name</a>
          </Link>
        </div>

        {/* Id Search */}
        <div>
          <h1 className="mainTitle">
            PokeMon Id Search
          </h1>
          <Link href="../components/NameSearch">
            <a>Search by Id</a>
          </Link>
        </div>

        {/* Type Search */}
        <div>
        <h1 className="mainTitle">
          PokeMon Type Search
        </h1>
        <Link href="../components/NameSearch">
          <a>Search by Type</a>
        </Link>
      </div>
      </main>
      <footer>
        
      </footer>
    </div>
  )
  export default Id;
  