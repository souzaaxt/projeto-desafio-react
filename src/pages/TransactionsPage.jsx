import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar, Eraser, Trash } from "phosphor-react";
import CardTransactions from "../components/CardTransaction/CardTransaction";
import ModalNewTransaction from "../components/ModalNewTransaction/ModalNewTransaction";
import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { useTransactionContext } from "../contexts/TransactionContext";
import { API_BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";


function TransactionsPage() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const [transactionToEdit, setTransactionToEdit] = useState(null);

   const {
    allTransactions,
    setAllTransactions,
    handleEditTransaction,
    depositsResult,
    withdrawsResult,
    total
  } = useTransactionContext();

  // Para excluir uma transação
  useEffect(() => {
    searchTransactions();
  }, []);

  const searchTransactions = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/transactions`);

      setAllTransactions(response.data)
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
    }
  };

  const deleteTransactions = async (id) => {
    if (!id) {
      console.error("ID indefinido!");
      return;
    }

    const confirmar = window.confirm("Deseja realmente excluir esta transação?");
    if (!confirmar) return;

    try {
      await axios.delete(`${API_BASE_URL}/transactions/${id}`);
      notify()
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  };

  // Até aqui - Para excluir uma transação
 

  async function fetchTransactions() {
    const transactions = await axios.get("http://localhost:3000/transactions")

    setAllTransactions(transactions.data)
  }

  function handleOpenModal() {
    setOpen(true)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header handleOpenModal={handleOpenModal} />
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-24">
          <CardTransactions
            title="Entradas"
            background="bg-white"
            amount={depositsResult}
            icon={<ArrowCircleUp className="text-green-500" size={32} />} />

          <CardTransactions
            title="Saídas"
            background="bg-white"
            amount={withdrawsResult}
            icon={<ArrowCircleDown className="text-red-500" size={32} />} />

          <CardTransactions
            title="Total"
            background="bg-emerald-500"
            textColor="text-white"
            amount={total}
            icon={<CurrencyDollar size={32} />} />
        </div>

        <div className="overflow-x-auto mt-8">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="px-6 py-3 pb-4 font-medium">Título</th>
                <th className="px-6 py-3 pb-4 font-medium">Valor</th>
                <th className="px-6 py-3 pb-4 font-medium">Categoria</th>
                <th className="px-6 py-3 pb-4 font-medium">Data</th>
                <th className="px-6 py-3 pb-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allTransactions.map((transaction, index) => {
                return (
                  <tr
                    className="cursor-pointer bg-white"
                    key={index}
                    onClick={() => {
                      handleEditTransaction(transaction.id);
                    }}
                  >
                    <td className="px-6 py-4">{transaction.title}</td>
                    <td className="px-6 py-4 text-green-500 font-medium">
                      {transaction.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="px-6 py-4">{transaction.category}</td>
                    <td className="px-6 py-4">{transaction.date}</td>
                    <td className="px-6 py-4">
                      <button
                        className="text-red-500 hover:text-red-600 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          console.log("Edit transaction", transaction.id)
                        }}
                      >

                        <Trash size={25} onClick={() => deleteTransactions(transaction.id)} />

                      </button>
                      <button
                        className="text-green-400 hover:text-green-600 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          console.log("Edit transaction", transaction.id)
                        }}

                      >

                        <Eraser //Para editar, apenas redirecionei para um componente que já existia
                          size={25}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/transactions/${transaction.id}`); // Redireciona para página com o ID
                          }}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ModalNewTransaction
          open={open}
          setOpen={setOpen}
          transactionToEdit={transactionToEdit}
          setTransactionToEdit={setTransactionToEdit}
        />
      </main>
    </div>
  );
}

export default TransactionsPage;
