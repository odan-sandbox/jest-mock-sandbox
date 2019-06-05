import { main } from "../index"
import Web3 from "web3"
import { mockAccount } from "../__mocks__/web3"

jest.mock('web3')

describe('web3', () => {
  test('poyo', async () => {
    const sign = await main()
    console.log(sign)
    expect(sign).toEqual(42)

    const web3 = new Web3('')
    expect(web3.eth.accounts.create).toBeCalled()
    expect(web3.eth.getAccounts).toBeCalled()
    expect(mockAccount.sign).toBeCalledWith('poyo')
    expect(mockAccount.sign).toBeCalledTimes(1)
  })
})