'use client'
import { useAuth, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarLink () {
  const { isSignedIn, signOut } = useAuth()
  const pathname = usePathname()

  return (
    <section className='flex items-center gap-x-3 text-xs font-medium'>
      {pathname !== '/dashboard' && (
        <Link href='/about' className='hidden lg:block'>About</Link>
      )}

      {isSignedIn
        ? (
          <>
            {pathname === '/dashboard'
              ? (
                <UserButton />
                )
              : (
                <nav>
                  <ul className='flex items-center gap-x-3'>
                    <li>
                      <Link href='/dashboard' className='hidden xl:block btn-navbar-border'>
                        Dashboard
                      </Link>
                    </li>
                    {pathname !== '/about' &&
                      (
                        <li className='hidden lg:block'>
                          <button type='button' onClick={() => signOut()} className='btn-navbar-bg'>
                            Sign Out
                          </button>
                        </li>
                      )}
                  </ul>
                </nav>
                )}
          </>
          )
        : (
          <nav>
            <ul className='hidden lg:flex items-center gap-x-3'>
              <li>
                <Link href='/sign-in' className='btn-navbar-border'>
                  Log In
                </Link>
              </li>
              <li>
                <Link href='/sign-up' className='btn-navbar-bg'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
          )}
    </section>
  )
}
