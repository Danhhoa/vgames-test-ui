"use client";

import { BrowserProvider, JsonRpcSigner, ethers } from "ethers";
import { useState } from "react";

export const useWallet = () => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install metamask!");
      return;
    }

    // requests through MetaMask.
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    setProvider(provider);
    setSigner(signer);
  };

  return {
    provider,
    signer,
    connectWallet,
  };
};
