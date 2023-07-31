'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { MdLogout } from 'react-icons/md';
import { HiMenuAlt1 } from 'react-icons/hi';

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const logoutUser = () => {
    router.push("/login")
  }

  return (
    <div className='mb-4 navbar bg-primary-color'>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenuAlt1 size="1.5rem" />
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[1]">
            <li>
              <Link href="/employee">Pegawai <span className={pathname == "/employee" ? "ms-3 w-2 h-2 rounded-full bg-white" : ""}></span> </Link>
            </li>
            <li>
              <Link href="/training">Pelatihan <span className={pathname == "/training" ? "ms-3 w-2 h-2 rounded-full bg-white" : ""}></span></Link>
            </li>
            <li>
              <Link href="/class">Kelas <span className={pathname == "/class" ? "ms-3 w-2 h-2 rounded-full bg-white" : ""}></span></Link>
            </li>
          </ul>
        </div>
        <a className="text-xl text-white normal-case btn btn-ghost">SMPEGAWAI</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link href={"/employee"} className={pathname == "/employee" ? "border-b-2 rounded-none border-white" : "text-white"}>Pegawai</Link>
          </li>
          <li>
            <Link href={"/training"} className={pathname == "/training" ? "border-b-2 rounded-none border-white" : "text-white"}>Pelatihan</Link>
          </li>
          <li>
            <Link href={"/class"} className={pathname == "/class" ? "border-b-2 rounded-none border-white" : "text-white"}>Kelas</Link>
          </li>
          <li>
            <Link href={"/rekening"} className={pathname == "/rekening" ? "border-b-2 rounded-none border-white" : "text-white"}>Rekening</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="text-sm text-white btn btn-sm btn-ghost" onClick={() => logoutUser()}><MdLogout /></div>
      </div>
    </div>
  )
}

export default Navbar