import Web3 from "web3"

export async function main() {
  const web3 = new Web3('')
  console.log(web3.eth.getAccounts())
  const account = web3.eth.accounts.create('poyo')
  const data = 'poyo'
  const sign = account.sign(data)

  console.log(sign)
  return sign
}

// main().catch(console.error)
