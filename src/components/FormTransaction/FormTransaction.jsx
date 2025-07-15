import { DialogTitle } from "@headlessui/react"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import ModalCategory from "../InputsModal/ModalCategory"
import ButtonGreen from "../Button/ButtonGreen"
import ModalButtonDown from "../ModalButton/ModalButtonDown"
import ModalButtonUp from "../ModalButton/ModalButtonUp"
import ModalTitle from "../InputsModal/ModalTitle"
import ModalPrice from "../InputsModal/ModalPrice"

function FormTransaction({ handleChangeCategory,
    handleChangePrice,
    handleChangeTitle,
    handleClickTransactionType,
    handleNewTransaction,

    formTitle = "Cadastrar Transação",
    buttonText = "Cadastrar",

    titleValue = "",
    priceValue = "",
    categoryValue = "" }) {

    return (
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                    <h1
                        className="text-base font-semibold text-gray-900">
                        {formTitle}
                    </h1>
                    <div className="mt-2 w-full">
                        <ModalTitle handleChangeTitle={handleChangeTitle} titleValue={titleValue} />
                        <ModalPrice handleChangePrice={handleChangePrice} priceValue={priceValue}/>
                    </div>
                    <div className='flex w-full justify-end'>
                        <ModalButtonUp handleClickTransactionType={() => handleClickTransactionType("deposit")} icon={<ArrowCircleUp className="text-green-500 h-6" size={32} />} />
                        <ModalButtonDown handleChangeCategory={() => handleClickTransactionType("withdraw")} icon={<ArrowCircleDown className="text-red-500 h-6" size={32} />} />
                    </div>
                    <div>
                        <ModalCategory handleChangeCategory={handleChangeCategory} categoryValue={categoryValue}/>
                        <ButtonGreen handleNewTransaction={handleNewTransaction} buttonText={buttonText} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormTransaction