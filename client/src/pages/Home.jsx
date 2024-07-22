import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';
import { getWalletBalance } from '../util/wallet';

export default function Home() {
    const { user } = useAuth();
    const [walletBalance, setWalletBalance] = useState(0)
    const getUser = useUser()

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if (user?.ethereum_wallet !== undefined) {
          getWalletBalance(user?.ethereum_wallet).then((res) =>
            setWalletBalance(res),
          ).catch((err) => console.error(err));
        }
    }, [user])

    return (
      <div className="container mt-3">
        <h2>
          <div className="row">
            <div className="mb-12">
              {user?.email !== undefined ? `Balance: ${walletBalance} ETH` : 'Please login first'}
            </div>
          </div>
        </h2>
      </div>
    );
}
