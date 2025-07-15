// Criando context de transações

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const TransactionContext = createContext();
const useTransactionContext = () => useContext(TransactionContext);

const TransactionProvider = ({ children }) => {
    const [allTransactions, setAllTransactions] = useState([]);

    const depositsResult = allTransactions.reduce((prev, current) => {
        if (current.transactionType === "deposit") {
            return prev + current.price;
        }

        return prev;
    }, 0);

    const withdrawsResult = allTransactions.reduce((prev, current) => {
        if (current.transactionType === "withdraw") {
            return prev + current.price;
        }

        return prev;
    }, 0);

    const total = depositsResult - withdrawsResult;

    const navigate = useNavigate();

    function handleEditTransaction(id) {
        navigate("/transactions/" + id);
    }

    return (
        <TransactionContext.Provider
            value={{
                allTransactions,
                setAllTransactions,
                handleEditTransaction,
                depositsResult,
                withdrawsResult,
                total,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

export { TransactionProvider, useTransactionContext };
