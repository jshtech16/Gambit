"use server"

import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

import {
    inAppWallet,
    createWallet,
} from "thirdweb/wallets";

const client = createThirdwebClient({
    clientId: "....",
});

const wallets = [
    inAppWallet({
        auth: {
            options: ["google", "email"],
        },
    }),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
    createWallet("io.metamask"),
    createWallet("com.trustwallet.app"),
    createWallet("com.bitget.web3"),
    createWallet("com.okex.wallet"),
    createWallet("com.binance"),
    createWallet("org.uniswap"),
];

function AuthModal() {
    return (
        <ConnectButton
            client={client}
            wallets={wallets}
            connectModal={{ size: "compact" }}
        />
    );
}

export default AuthModal;