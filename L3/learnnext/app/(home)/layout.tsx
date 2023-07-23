import Navbar from "../components/Navbar"

export default function HomeLayout({children} : {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar/>
      <div className='px-5'>
        {children}
      </div>
    </section>
  )
}