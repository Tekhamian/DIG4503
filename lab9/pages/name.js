import Head from 'next/head';
import Link from 'next/link';

//NAME SEARCH 
// Functional component "Search", using an arrow fuction
const Search = () => (
    <div className="container">
      <Head>
        <title>PokeMon Name Search</title>
      </Head>
      <main>
        <div>
          <h1 className="mainTitle">
            PokeMon Name Search
          </h1>
          <Link href="../components/NameSearch">
            <a>Search by Name</a>
          </Link>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  )
  export default Search