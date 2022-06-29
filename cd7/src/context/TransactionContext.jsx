import React, { useEffect, useState, createContext } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract( contractAddress, contractABI, signer );

    return transactionContract;
}


export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [balance, setBalance ] = useState('');
    const [formData, setFormData] = useState ({ addressTo: '', anount: '', keyword: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);
    const [currentColor, setCurrentColor] = useState('#DAA520');
    const [currentMode, setCurrentMode] = useState('Dark');
    const [themeSettings, setThemeSettings] = useState(false);
    

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    }

    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

    const getAllTransactions = async () => {
        try {
            if(!ethereum) return alert ("Please install metamask");
            
            const transactionContract = getEthereumContract();

            const availableTransactions = await transactionContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
             }))
             console.log(structuredTransactions)

            setTransactions(structuredTransactions);
        } catch (error) {
            console.log(error);
        }
    }

    const checkIfWalletIsConnected = async () => {

        try {
            if(!ethereum) return alert ("Please install metamask");

        const accounts = await ethereum.request({method: 'eth_accounts'});

        if(accounts.length) {
            setCurrentAccount(accounts[0]);

            getAllTransactions();
        } else {
            console.log('No accounts found');
        }
        } catch (error) {
            console.log(error);

            throw new Error('No ethereum object');
        }

    }

    const checkIfTransactionExist = async () => {
        try {
            const transactionContract = getEthereumContract();
            const transactionCount = await transactionContract.getTransactionCount();

            window.localStorage.setItem('transactionCount', transactionCount)
        } catch (error) {
            console.log(error);

            throw new Error('No ethereum object');
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert ("Please install metamask");

            const accounts = await ethereum.request({method: 'eth_requestAccounts', });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error('No ethereum object');
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert ("Please install metamask");

            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params : [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', //21000 gwei
                    value: parsedAmount._hex, //0.00001
                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber());

            window.reload()
        } catch (error) {
            console.log(error);

            throw new Error('No ethereum object');
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionExist();
    }, []);

    return (
        <TransactionContext.Provider value={{
            connectWallet, 
            currentAccount, 
            formData, setFormData, 
            handleChange, 
            sendTransaction, transactions, 
            isLoading, 
            getBalance, balance,
            currentColor, currentMode,
            themeSettings, setThemeSettings,
            setMode, setColor,
        }}>
            {children}
        </TransactionContext.Provider>
    );
}