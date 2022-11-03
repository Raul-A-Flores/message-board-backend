const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const messageContractFactory = await hre.ethers.getContractFactory("MessageBoard");
  const messageContract = await messageContractFactory.deploy();
  await messageContract.deployed();


  console.log("Contract deployed to:", messageContract.address);
  console.log("Contract deployed by:", owner.address);

  await messageContract.getTotalMessages();

  const writeTxn = await messageContract.write();
  await writeTxn.wait();

  const secondWriteTxn = await messageContract.connect(randomPerson).write();
  await secondWriteTxn.wait();

  await messageContract.getTotalMessages();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();



