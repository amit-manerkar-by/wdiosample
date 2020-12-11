describe('Suite 1', () => {
  before(() => {
    browser.url('/')
  })

  it('Test 1', () => {
    expect(browser).toHaveTitle(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js',
    )
  })

  it('Test 2', () => {
    expect(browser).toHaveTitle(
      'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js',
    )
  })
})
