import Image from 'next/image'
import Link from 'next/link'
import NavbarLink from './UI/navbar-link'

export default function Navbar () {
  return (
    <header className='flex items-center justify-between border-b border-neutral-400 mx-4 md:mx-10 xl:mx-40 h-[50px]'>
      <Link translate='no' href='/' className='flex items-center'>
        <Image
          src='/logo-app.svg'
          alt='logo-app'
          width={24}
          height={24}
          priority
        />
        <h3 className='ml-1 text-lg md:text-xl font-bold'>Sharejson</h3>
      </Link>

      <section className='flex items-center gap-x-3'>
        <NavbarLink />
        <div className='block lg:hidden'>
          ❌
        </div>
      </section>
    </header>
  )
}
