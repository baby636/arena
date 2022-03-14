    function viewNFT1() {
    // if not connected reload page
    if (!zombieMaster) location.reload(true);
    var tokenId = $("#tokenId").val();
    var contract1 = new web3.eth.Contract(abi, '0x7c0C2f18aeF4B0cC84D9E397aE47867aC04AEA19'); // MAZE-ARENA NFT
    var content = "<br>NFT image and balance of address: ";
    content += zombieMaster;
    $("#lang").html(content);
    var event = contract1.methods.balanceOf(zombieMaster, tokenId).call()
        .then(function (result) {
    var content = "<br>Your balance of this token ID is: ";
        console.log(result);
    content += JSON.stringify(result.toString());
    content += "<br><img src=https://mazetoken.github.io/img/"+tokenId+".png width=366><br>";
    $("#lang").html(content);
        });;
    };

    function viewNFT2() {
    // if not connected reload page
    if (!zombieMaster) location.reload(true);
    var tokenId = $("#tokenId").val();
    var contract2 = new web3.eth.Contract(abi, '0x8ebf51b3435F232ED08cE5Fb2491B6eA21826f94'); // Yoshi NFT Series
    var content = "<br>NFT image and balance of address: ";
    content += zombieMaster;
    $("#lang").html(content);
    var event = contract2.methods.balanceOf(zombieMaster, tokenId).call()
        .then(function (result) {
    var content = "<br>Your balance of this token ID is: ";
        console.log(result);
    content += JSON.stringify(result.toString());
    content += "<br><img src=https://ipfs.io/ipfs/QmUkL8535iXAXfrUUWBE7iEyvjRiWGJYkNoPVVdugkAvEw/"+tokenId+".png width=366><br>";
    $("#lang").html(content);
        });;
    };

    function viewNFT3() {
        // if not connected reload page
        if (!zombieMaster) location.reload(true);
        var tokenId = $("#tokenId").val();
        var custom1 = $("#custom").val();
        var custom2 = $("#customURI").val();
        var contract3 = new web3.eth.Contract(abi, custom1); // Custom NFT
        var content = "<br>NFT image and balance of address: ";
        content += zombieMaster;
        $("#lang").html(content);
        var event = contract3.methods.balanceOf(zombieMaster, tokenId).call()
            .then(function (result) {
        var content = "<br>Your balance of this token ID is: ";
            console.log(result);
        content += JSON.stringify(result.toString());
        content += "<br><img src="+custom2+""+tokenId+".png width=366><br>";
        $("#lang").html(content);
            });;
        };

    function sendNFT1() {
    // if not connected reload page
    if (!zombieMaster) location.reload(true);
    var to = $("#to").val();
    var tokenId = $("#tokenId").val();
    var contract1 = new web3.eth.Contract(abi, '0x7c0C2f18aeF4B0cC84D9E397aE47867aC04AEA19'); // MAZE-ARENA NFT
    var amount = $("#amount").val();
    var data = '0x0000000000000000000000000000000000000000000000000000000000000000';
    var content = "<br>Sending from address: ";
    content += zombieMaster;
    $("#lang").html(content);
    var event = contract1.methods.safeTransferFrom(zombieMaster, to, tokenId, amount, data).send({ from: zombieMaster, gasPrice: 1047000000 })
        .then(function (receipt) {
    var content = "<br>Sending transaction...";
        console.log(receipt);
    var content = "<br>Transaction sent!";
    content += JSON.stringify(receipt.transactionHash);
    $("#lang").html(content);
        });;
    };

    function sendNFT2() {
    // if not connected reload page
    if (!zombieMaster) location.reload(true);
    var to = $("#to").val();
    var tokenId = $("#tokenId").val();
    var contract2 = new web3.eth.Contract(abi, '0x8ebf51b3435F232ED08cE5Fb2491B6eA21826f94'); // Yoshi NFT Series
    var amount = $("#amount").val();
    var data = '0x0000000000000000000000000000000000000000000000000000000000000000';
    var content = "<br>Sending from address: ";
    content += zombieMaster;
    $("#lang").html(content);
    var event = contract2.methods.safeTransferFrom(zombieMaster, to, tokenId, amount, data).send({ from: zombieMaster, gasPrice: 1047000000 })
        .then(function (receipt) {
    var content = "<br>Sending transaction...";
        console.log(receipt);
    var content = "<br>Transaction sent!";
    content += JSON.stringify(receipt.transactionHash);
    $("#lang").html(content);
        });;
    };