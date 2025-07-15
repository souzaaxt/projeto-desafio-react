function ModalCategory ({handleChangeCategory, categoryValue}) {
    return (
        <input type="text" onChange={(ev) => handleChangeCategory(ev.target.value)} id="email" className=" w-full mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Categoria" value={categoryValue} required />
    )
}

export default ModalCategory