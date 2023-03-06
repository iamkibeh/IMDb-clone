'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams()
  const active = searchParams.get('genre')

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold p-2 ${
          active &&
          active === param &&
          'underline underline-offset-8 decoration-4 decoration-amber-400 rounded-3xl'
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  )
}
