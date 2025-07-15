import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import FormTransaction from "../components/FormTransaction/FormTransaction";
import axios from "axios";
import { API_BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";

export default function TransactionDetails() {
//Pegar uma transação pelo ID

    const { id } = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("")
    const [transactionType, setTransactionType] = useState("deposit")

    const notify = () => toast('Atualizado com sucesso!!');

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

// Função para buscar uma transação para editar

    async function fetchTransactionsId() {
        const transaction = await axios.get(`${API_BASE_URL}/transactions/${id}`)

        setTitle(transaction.data.title)
        setPrice(transaction.data.price)
        setCategory(transaction.data.category)
        setTransactionType(transaction.data.transactionType)
    }

    async function handleUpdateTransaction() {
        try {
            await axios.put(`${API_BASE_URL}/transactions/${id}`, {
                title,
                price: Number(price),
                category,
                transactionType,
                date: format(new Date(), "dd/MM/yyyy")
            })
            notify()
            navigate("/transactions")
        } catch (error) {
            console.error("Ops, algo deu errado:", error)
        }
    }

    useEffect(() => {
        fetchTransactionsId()
    }, [])

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header/>
            <main className="max-w-3xl mx-auto px-6 py-8 -mt-24 bg-white rounded-lg shadow-lg">
                <FormTransaction
                    titleValue={title}
                    priceValue={price}
                    categoryValue={category}
                    handleChangeTitle={handleChangeTitle}
                    handleChangePrice={handleChangePrice}
                    handleChangeCategory={handleChangeCategory}
                    handleClickTransactionType={handleClickTransactionType}
                    transactionType={transactionType}
                    handleNewTransaction={handleUpdateTransaction}

                    buttonText="Atualizar"
                    formTitle="Atualizar Transação"
                />
            </main>
        </div>
    )
}