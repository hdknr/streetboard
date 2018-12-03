import credentials from '@/../main/credentials'

describe('Credential', () => {
  it('Load', async () => {
    const cred = JSON.parse(await credentials.load())
    expect(cred).equal(null)
  })
})
