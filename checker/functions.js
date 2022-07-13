function viewNFT1() {
var tokenId = $("#tokenId").val();
var contract1 = new web3.eth.Contract(abi, '0x7c0C2f18aeF4B0cC84D9E397aE47867aC04AEA19'); // MAZE-ARENA NFT
var content = "<br>NFT image and balance of address: <br>";
content += zombieMaster;
$("#lang1").html(content);
var event = contract1.methods.balanceOf(zombieMaster, tokenId).call()
    .then(function (result) {
var content = "<br>Your balance of this token ID is: ";
    console.log(result);
content += JSON.stringify(result.toString());
content += "<br><img src=https://mazetoken.github.io/arena/img/"+tokenId+".png width=366><br>";
$("#lang1").html(content);
    });;
};

function viewNFT2() {
var tokenId = $("#tokenId").val();
var contract2 = new web3.eth.Contract(abi, '0x8ebf51b3435F232ED08cE5Fb2491B6eA21826f94'); // Yoshi NFT Series
var content = "<br>NFT image and balance of address: ";
content += zombieMaster;
$("#lang1").html(content);
var event = contract2.methods.balanceOf(zombieMaster, tokenId).call()
    .then(function (result) {
var content = "<br>Your balance of this token ID is: ";
    console.log(result);
content += JSON.stringify(result.toString());
content += "<br><img src=https://ipfs.io/ipfs/QmUkL8535iXAXfrUUWBE7iEyvjRiWGJYkNoPVVdugkAvEw/"+tokenId+".png width=366><br>";
$("#lang1").html(content);
    });;
};

function viewNFT3() {
var tokenID = $("#tokenId").val();
var custom1 = $("#custom").val();
var custom2 = $("#customURI").val();
var contract3 = new web3.eth.Contract(abi, custom1); // Custom NFT
var content = "<br>NFT image and balance of address: ";
content += zombieMaster;
$("#lang2").html(content);
var event = contract3.methods.balanceOf(zombieMaster, tokenID).call()
    .then(function (result) {
var content = "<br>Your balance of this token ID is: ";
    console.log(result);
content += JSON.stringify(result.toString());
content += "<br><img src="+custom2+""+tokenId+".png width=366><br>";
$("#lang2").html(content);
    });;
};

function viewMetadataUri() {
//var tokenID = $("#tokenId").val();
var custom3 = $("#custom3").val();
var contract3 = new web3.eth.Contract(abi, custom3); // Custom NFT
var content = "<br>Your address: ";
content += zombieMaster;
$("#lang3").html(content);
var event = contract3.methods.uri(0).call()
    .then(function (result) {
var content = "<br>Metadata URI: ";
    console.log(result);
content += JSON.stringify(result.toString());
content += "<br><a href="+result+"></a>";
$("#lang3").html(content);
    });;
};

function sendNFT1() {
var to = $("#to").val();
var tokenId = $("#tokenId").val();
var contract1 = new web3.eth.Contract(abi, '0x7c0C2f18aeF4B0cC84D9E397aE47867aC04AEA19'); // MAZE-ARENA NFT
var amount = $("#amount").val();
var data = '0x0000000000000000000000000000000000000000000000000000000000000000';
var content = "<br>Sending from address: ";
content += zombieMaster;
$("#lang4").html(content);
var event = contract1.methods.safeTransferFrom(zombieMaster, to, tokenId, amount, data).send({ from: zombieMaster, gasPrice: 1047000000 })
    .then(function (receipt) {
var content = "<br>Sending transaction...";
    console.log(receipt);
var content = "<br>Transaction sent!";
    alert("Done.");
content += JSON.stringify(receipt.transactionHash);
$("#lang4").html(content);
    });;
};

function sendNFT2() {
var to = $("#to").val();
var tokenId = $("#tokenId").val();
var contract2 = new web3.eth.Contract(abi, '0x8ebf51b3435F232ED08cE5Fb2491B6eA21826f94'); // Yoshi NFT Series
var amount = $("#amount").val();
var data = '0x0000000000000000000000000000000000000000000000000000000000000000';
var content = "<br>Sending from address: ";
content += zombieMaster;
$("#lang4").html(content);
var event = contract2.methods.safeTransferFrom(zombieMaster, to, tokenId, amount, data).send({ from: zombieMaster, gasPrice: 1047000000 })
    .then(function (receipt) {
var content = "<br>Sending transaction...";
    console.log(receipt);
var content = "<br>Transaction sent!";
    alert("Done.");
content += JSON.stringify(receipt.transactionHash);
$("#lang4").html(content);
    });;
};

//function sendBatchNFT1() {
//var to = $("#to").val();
//var ids = $("#tokenIds").val();
///var ids = $("#tokenIds").map(function() {
    ///return this.value;
    ///return $(this).val();
    ///}).get();
    
//var contract1 = new web3.eth.Contract(abi, '0x7c0C2f18aeF4B0cC84D9E397aE47867aC04AEA19'); // MAZE-ARENA NFT
//var amounts = $("#amounts").val();
//var data = '0x0000000000000000000000000000000000000000000000000000000000000000';
//var content = "<br>Sending from address: ";
//content += zombieMaster;
//$("#lang5").html(content);
//var event = contract1.methods.safeBatchTransferFrom(zombieMaster, to, ids, amounts, data).send({ from: zombieMaster, gasPrice: 1047000000 })
    //.then(function (receipt) {
//var content = "<br>Sending transaction...";
    //console.log(receipt);
//var content = "<br>Transaction sent!";
    //alert("Done.");
//content += JSON.stringify(receipt.transactionHash);
//$("#lang5").html(content);
    //});;
//};