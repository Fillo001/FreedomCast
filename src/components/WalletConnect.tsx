import { useState } from 'react';

export default function WalletConnect({ onConnect }: { onConnect: (address: string) => void }) {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      if (!window.unisat) {
        setError('UniSat Wallet not found. Please install it from https://unisat.io');
        return;
      }
      const accounts = await window.unisat.requestAccounts();
      setAddress(accounts[0]);
      onConnect(accounts[0]);
    } catch (err: any) {
      setError('Failed to connect wallet: ' + err.message);
    }
  };

  return (
    <div className="mb-6">
      {address ? (
        <p className="text-green-600 font-semibold">✅ Connected: {address}</p>
      ) : (
        <button onClick={connectWallet} className="bg-purple-600 text-white px-4 py-2 rounded">
          🔗 Connect UniSat Wallet
        </button>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
