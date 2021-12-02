//Task 1
async function getBlockHeight(){
    const provider = ethers.getDefaultProvider('ropsten');
    const blockHeight = await provider.getBlockNumber()
    document.getElementById("blockHeight").innerHTML = blockHeight;
}