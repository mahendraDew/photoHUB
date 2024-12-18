import Link from 'next/link';

import Container from '@/components/Container';
import UploadButton from '../UploadButton';
import { Focus } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="flex items-center h-16 border border-zinc-200">
      <Container className=" max-w-7xl flex gap-6 items-center flex-row">
        <span className="w-40 flex-grow-0 mb-0">
          <Link href="/">
            <div className='flex gap-1 text-blue-600 text-xl justify-center items-center'>
              <Focus />
              <h3 className='text-blue-600'>photoHUB</h3>
            </div>

          </Link>
        </span>
        <ul className="flex flex-grow justify-end gap-6 m-0">
         <UploadButton />
        </ul>
      </Container>
    </nav>
  )
}

export default Nav;