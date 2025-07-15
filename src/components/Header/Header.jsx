function Header({handleOpenModal}) {
  return (
    <header className="w-full bg-cyan-700 py-6 pb-32 px-4 md:px-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 id="Name" className="text-white text-xl md:text-2xl font-bold">
          OrçaPro
        </h1>
        <button className=" cursor-pointer bg-emerald-500 px-12 rounded py-2 hover:bg-white/30 text-white border-0" 
        onClick={handleOpenModal}>
          Nova transação
        </button>
      </div>
    </header>
  )
}
export default Header