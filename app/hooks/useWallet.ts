"use client";

import { BrowserProvider, JsonRpcSigner, ethers } from "ethers";
import { useState } from "react";
import { toast } from "react-toastify";

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
    const message = "sign in vgames-vn";
    const signedMessage = await signer
      .signMessage(message)
      .catch((error) => toast.error("You must sign message to login"));

    // TODO: handle authen when have signMessagge

    console.log({ signMessage: signedMessage });
  };

  return {
    provider,
    signer,
    connectWallet,
  };
};
