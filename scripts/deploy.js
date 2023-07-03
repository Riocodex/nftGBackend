//@0x0099933cdd5cfDCd1a2Bd3E67b1B5D2628b5f9Ae
const main = async () => {
    try {
      const nftContractFactory = await hre.ethers.getContractFactory(
        "NftG"
      );
      const nftContract = await nftContractFactory.deploy();
      await nftContract.deployed();
  
      console.log("Contract deployed to:", nftContract.address);
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
    
  main();