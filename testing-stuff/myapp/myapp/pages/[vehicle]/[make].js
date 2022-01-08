import {useRouter} from 'next/router';

export default function make() {
    
  const router = useRouter();
  console.log(router.query);
  
  return <h4>Brand New Jeep</h4>

  }