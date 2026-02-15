import { Outlet } from "react-router-dom";
import { AccountProvider } from "../context/connectorSignup_Acoount";

export default function AccountLayout() {
  return (
    <AccountProvider>
      <Outlet />
    </AccountProvider>
  );
}
