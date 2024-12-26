import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import { ShoppingCart, User, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
          </Link>
          <span className='hidden lg:block font-bold text-2xsl ml-3'>
            {APP_NAME}
          </span>
        </div>
        <div className='space-x-2'>
          <Button asChild variant='ghost'>
            <Link href={'/cart'}>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild variant='ghost'>
            <Link href={'/sign-in'}>
              <User /> Sign in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
