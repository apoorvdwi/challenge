import { ethers, formatEther } from 'ethers';

export async function getWalletBalance(walletAddress) {
  if (!walletAddress) throw new Error('Wallet address is required');

  // Connect to the Ethereum network
  const provider = new ethers.JsonRpcProvider("https://eth.public-rpc.com");

  // Get the balance of the wallet address
  const balance = await provider.getBalance(walletAddress);

  // Convert balance from Wei to Ether
  const balanceInEth = formatEther(balance);

  return balanceInEth;
}
