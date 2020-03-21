import Head from 'next/head';
import Link from 'next/link';

// OPTION A
const Home = () => {
  return (
    <div>
      <Head>
        <title>PokeMon Character DataBase!</title>
      </Head>
      <div>
        <p>
          Search for Character using Name!
        </p>
        <Link href="/NameSearch">
          <a>Name Search</a>
        </Link>
      </div>
      <div>
        <p>
          Search for Character using Id!
        </p>
        <Link href="/IdSearch">
          <a>Id Search</a>
        </Link>
      </div>
    </div>
  );
}

export default Home;





// OPTION C
// import Head from 'next/head'


// class NameSearch extends React.Component {
//   render(){
//     return (<p>NameSearch</p>);
//   }
// }
//  export default NameSearch;

//  class IdSearch extends React.Component {
//   render(){
//     return (<p>IdSearch</p>);
//   }
// }
//  export default IdSearch;


// OPTION B
// const Home = () => {
//   return (
//     <div>
//       <Head>
//         <title>This is the PokeMon DataBase!</title>
//       </Head>
//       <div>
//         <p>
//           Search for Character using Name!
//         </p>
//         <Link href="/name">
//           <a>Name Search</a>
//         </Link>
//       </div>
//       <div>
//         <p>
//           Search for Character using Id!
//         </p>
//         <Link href="/id">
//           <a>Id Search</a>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;