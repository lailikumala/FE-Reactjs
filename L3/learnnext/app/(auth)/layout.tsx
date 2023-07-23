export default function AuthLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className='flex flex-col items-center justify-center w-screen h-screen mx-auto md:flex-row md:justify-between md:w-8/12'>
        <div className="hidden mb-12 text-6xl font-bold md:inline text-start text-primary-color">
          Sistem <br /> Manajemen <br /> Pegawai
        </div>
        <div className="inline mb-8 text-3xl font-semibold text-center md:hidden text-primary-color">
          Sistem Manajemen <br /> Pegawai
        </div>
        <div className="w-10/12 p-5 py-10 rounded md:w-6/12 bg-primary-color md:p-10 md:py-10">
          {children}
        </div>
      </div>
    </section>
  )
}