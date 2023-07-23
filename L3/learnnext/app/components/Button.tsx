export const ButtinPrimary = ({ title, onClick }: { title: String, onClick?: () => void }) => {
  const checkFunction = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div className="w-full mt-5 border-0 text-primary-color btn bg-slate-50 hover:bg-slate-200 hover:text-primary-color" onClick={() => checkFunction()}>{title}</div>
  )
}