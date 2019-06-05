
const mockAccountImpl = {
  sign: jest.fn(() => 42)
}
const MockAccount = jest.fn<typeof mockAccountImpl, any>().mockImplementation(() => mockAccountImpl)

export const mockAccount = new MockAccount()

const mock = {
  eth: {
    accounts: {
      create: jest.fn(() => mockAccount)
    },
    getAccounts: jest.fn(() => ['0xabcd'])
  }
}

const MockWeb3 = jest.fn<typeof mock, any>().mockImplementation(() => {
  return mock
})
export default MockWeb3