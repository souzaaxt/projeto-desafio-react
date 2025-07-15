function ModalPrice ({handleChangePrice, priceValue}) {
    return(
        <input type="number" onChange={(ev) => handleChangePrice(ev.target.value)} className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Preço" value={priceValue} required />
    )
}

export default ModalPrice