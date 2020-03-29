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
        <Link href="../components/NameSearch">
          <a>Search by Type</a>
        </Link>
      </div>
    </main>
    <footer>
      
    </footer>
  </div>
)
export default Type


// OPTION B (taken mostly from Lab6 in App.js folder)

// import IdSearch from '../components/IdSearch';
// import NameSearch from '../components/NameSearch';
// import TypeSearch from '../components/TypeSearch';
// import DisplayArea from '../components/DisplayArea';


// class App extends React.Component {
//   render() {
//   return (
//     <section className="App">
//       <IdSearch />
//       <NameSearch />
//       <TypeSearch />
//       <hr/>
//       {/* DisplayArea component that provides the output */}
//       <DisplayArea />
//     </section>
//   );
// }
// }

// export default App;