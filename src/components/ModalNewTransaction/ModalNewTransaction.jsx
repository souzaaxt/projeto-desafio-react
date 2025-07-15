'use client'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios from "axios";
import FormTransaction from "../FormTransaction/FormTransaction";

export default function ModalNewTransaction({ open, setOpen }) {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("")
  const [transactionType, setTransactionType] = useState("deposit")

  function handleClickTransactionType(type) {
    setTransactionType(type)
  }
  function handleChangeCategory(ev) {
    setCategory(ev)
    console.log(category)
  }
  function handleChangePrice(ev) {
    setPrice(ev)
    console.log(price)
  }
  function handleChangeTitle(ev) {
    setTitle(ev)
    console.log(title)
  }

  async function handleNewTransaction() {
    await axios.post("http://localhost:3000/transactions", {
      title,
      price: Number(price),
      category,
      transactionType,
      date: "17/05/2025"
    });

    setOpen(false)
  }
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <FormTransaction
              handleChangeTitle={handleChangeTitle}
              handleChangePrice={handleChangePrice}
              handleClickTransactionType={handleClickTransactionType}
              handleChangeCategory={handleChangeCategory}
              handleNewTransaction={handleNewTransaction}
              titleValue={title}
              priceValue={price}
              categoryValue={category}
              transactionType={transactionType}
            />

          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
