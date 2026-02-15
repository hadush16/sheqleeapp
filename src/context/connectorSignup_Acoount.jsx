import { createContext, useContext, useState } from "react";

const AccountContext = createContext(null);

export function AccountProvider({ children }) {
  const [account, setAccount] = useState({
    fullName: "",
    email: "",
    password: "",
    role: null, // "company" | "professional"
  });

  const updateAccount = (updates) => {
    setAccount((prev) => ({ ...prev, ...updates }));
  };

  return (
    <AccountContext.Provider value={{ account, updateAccount }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) {
    throw new Error("useAccount must be used inside AccountProvider");
  }
  return ctx;
}
