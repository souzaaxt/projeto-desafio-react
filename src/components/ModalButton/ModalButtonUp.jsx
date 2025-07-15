function ModalButtonUp ({icon, handleClickTransactionType}) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 p-2 w-full mt-5 border border-gray-300 rounded-lg cursor-pointer items-center mr-3" onClick={handleClickTransactionType}>
            {icon}
            <button type="button" className="cursor-pointer py-2.5 w-full px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg">Entrada</button>
        </div>
    )
}

export default ModalButtonUp