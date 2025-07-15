function ButtonGreen ({
    handleNewTransaction, 
    buttonText
}) {
    return (
        <button type="button" onClick={handleNewTransaction} className="cursor-pointer mt-5 w-full focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{buttonText}</button>
    )
}

export default ButtonGreen