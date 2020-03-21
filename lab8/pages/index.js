// OPTION A

// import Head from 'next/head';
// import Link from 'next/link';

// Functional component "Home", using an arrow fuction

// const Home = () => {
//   return (
//     <div>
//       <Head>
//         <title>PokeMon Character DataBase!</title>
//       </Head>
//       <div>
//         <Link href="../components/NameSearch">
//           <a>Name Search</a>
//         </Link>
//       </div>
//       <div>
//         <Link href='../components/IdSearch'>
//           <a>Id Search</a>
//         </Link>
//       </div>
//       <div>
//         <Link href='../components/ReportingArea'>
//           <a>Reporting Area</a>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;




// OPTION B (taken mostly from Lab6 in App.js folder)

import IdSearch from '../components/IdSearch';
import NameSearch from '../components/NameSearch';
import ReportingArea from '../components/ReportingArea';

class App extends React.Component {
  render() {
  return (
    <section className="App">
      <IdSearch />
      <NameSearch />
      <hr/>
      {/* ReportingArea component that provides the output */}
      <ReportingArea />
    </section>
  );
}
}

export default App;