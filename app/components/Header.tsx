"use client";

import { useMemo } from "react";
import { useWallet } from "../hooks/useWallet";
import { WalletIcon } from "lucide-react";

export const Header = () => {
  const { connectWallet, signer, provider } = useWallet();

  const accountId = useMemo(() => {
    const account = signer?.address;
    if (account) {
      return `${account.slice(0, 6)}...${account.slice(
        account.length - 4,
        account.length
      )}`;
    }
    return "";
  }, [signer]);

  return (
    <nav className="sticky top-0 flex justify-between px-10 items-center h-[60px] bg-secondary">
      <div className="uppercase">vgames</div>
      <div className="flex items-center ">
        {accountId && <p>{accountId}</p>}
        <div
          id="wallet-btn"
          className="flex items-center justify-center gap-2 cursor-pointer py-2 w-12 h-12 group rounded-full"
          onClick={connectWallet}
        >
          <WalletIcon />
        </div>
      </div>
    </nav>
  );
};
