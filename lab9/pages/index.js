import Head from 'next/head';
import Link from 'next/link';
// import styles from "../components/StyleComponents/module.css";

//NAME SEARCH 
// Functional component "Search", using an arrow fuction
const Search = () => (
    <div>
      <Head>
        <title>PokeMon Search</title>
      </Head>
  
      <main>
        <p>
          <label>
            PokeMon Name Search
          </label><br></br>
          <Link href="/NameSearch">
            <a>Search by Name</a>
          </Link>
        </p>

        <p>
          <label>
            PokeMon Id Search
          </label><br></br>
          <Link href="/IdSearch">
            <a>Search by Id</a>
          </Link><br></br>
        </p>

        <div>
          <label>
            PokeMon Type Search
          </label><br></br>
          <Link href="/typeSearch">
            <a>Search by Type</a>
          </Link>
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  )
  export default Search;
  
  