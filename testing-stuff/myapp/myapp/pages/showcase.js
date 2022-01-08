import Link from 'next/link';

export default function ShowcasePage() {
    return(
        <div >
        <nav>
            <ul>
                <li>
                    <Link href='/index'>
                    <a title='Home'>Home Page</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                    <a title='About'>About Page</a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                    <a title='Contact'>Contact Page</a>
                    </Link>
                </li>
                <li>
                    <Link href='/showcase'>
                    <a title='Gallery'>Showcase Page</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <main>
            
        <div><p><h3>Showcase Page</h3></p></div>
          
          <section>
            <p><h5>Section 1</h5></p>
            <a>This Is An Example of My Content! </a>
          </section>
  
          <section>
            <p><h5> Section 2</h5></p>
            <a>This Is An Example of My Content! </a>
          </section>
        </main>
        <footer>
            <p><h5>Footer</h5></p>
            <a>This Is An Example of footer Content! </a>
          </footer>
      </div>
    );
  }