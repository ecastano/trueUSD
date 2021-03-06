const AddressList = artifacts.require("AddressList");
var Web3 = require('web3');

contract('AddressList', function(accounts) {
    it("should work", async () => {
        const burnWhiteList = await AddressList.new("Burn whitelist", false, {gas: 3000000, from: accounts[0]})

        const name = await burnWhiteList.name();
        assert.equal(name, "Burn whitelist", "Got wrong name");

        let canBurn = await burnWhiteList.onList(accounts[0])
        assert.equal(canBurn, false, "User should not be on white list");

        await burnWhiteList.changeList(accounts[0], true)
        canBurn = await burnWhiteList.onList(accounts[0])
        assert.equal(canBurn, true, "User should be on white list");
    })
})
