// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

var CONTRACT_ADDRESS = "0x247A71Ed97913262C15387D1B94B2fDb360C68c4";
var RPC_ADDRESS = "https://bsc-dataseed.binance.org/";
var ABI = [{ "inputs": [{ "internalType": "address", "name": "manager", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "_endTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxBuyAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_minBuyAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_tokenPrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_tokenSold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalUsers", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_totalWhitelists", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buy", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "manager", "type": "address" }], "name": "changeNewManager", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimBNB", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "forceWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }], "name": "getHolderInfo", "outputs": [{ "components": [{ "internalType": "uint256", "name": "_amounts", "type": "uint256" }, { "internalType": "uint256", "name": "_tokens", "type": "uint256" }, { "internalType": "bool", "name": "_claimed", "type": "bool" }, { "internalType": "address", "name": "_address", "type": "address" }], "internalType": "struct WhiteListPresale.Holder", "name": "_holder", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getHolderInfo", "outputs": [{ "components": [{ "internalType": "uint256", "name": "_amounts", "type": "uint256" }, { "internalType": "uint256", "name": "_tokens", "type": "uint256" }, { "internalType": "bool", "name": "_claimed", "type": "bool" }, { "internalType": "address", "name": "_address", "type": "address" }], "internalType": "struct WhiteListPresale.Holder", "name": "holder", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPresaleBNBBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPresaleTokenBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "someone", "type": "address" }], "name": "isInWhitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isInWhitelist", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "retrieveTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }], "name": "retrieveTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "minBuy", "type": "uint256" }, { "internalType": "uint256", "name": "maxBuy", "type": "uint256" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "end", "type": "uint256" }], "name": "setPresale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "whitelists", "type": "address[]" }], "name": "setWhitelists", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tokenPresale", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "whoIsManager", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
var selectedAccount;
let web3Modal
let provider;
var chainid = 56;

var startTime = 0;
var endTime = 0;
var realTimeClData;

async function init() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    chainid: RPC_ADDRESS,
                }
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    console.log("Web3Modal instance is:", web3Modal);

    refreshContractData();
}

async function buy(address, amount) {
    if (selectedAccount) {
        const web3 = new Web3(provider);

        let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        if (contract) {
            var amount = $('#amountBuy').val();
            await contract.methods.buy().send({
                value: web3.utils.toWei(amount.toString(), 'ether'),
                from: selectedAccount,
            }).on("transactionHash", () => {
                document.getElementById("buttonBuy").innerHTML = 'Confirming ...';
                console.log("transactionHash")
            }).on('receipt', () => {
                refreshContractData();
                refreshAccountData();
                document.getElementById("buttonBuy").innerHTML = 'Buy';
            }).catch(err => {
                showAlert(err.message, "error");
                document.getElementById("buttonBuy").innerHTML = 'Buy';
            });
        }
    } else {
        onConnect();
    }
}

async function withdraw() {
    if (selectedAccount) {
        const web3 = new Web3(provider);
        let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        if (contract) {
            contract.methods.getHolderInfo(selectedAccount).call().then(function(res) {
                console.log(res);
                if (res._tokens > 0) {
                    contract.methods.forceWithdraw().send({
                        value: 0,
                        from: selectedAccount,
                    }).on("transactionHash", () => {
                        document.getElementById("buttonWithdraw").innerHTML = 'Confirming...';
                        console.log("transactionHash")
                    }).on('receipt', () => {
                        refreshContractData();
                        refreshAccountData();
                        document.getElementById("buttonWithdraw").innerHTML = 'Force Withdraw';
                    }).catch(err => {
                        showAlert(err.message, "error");
                        document.getElementById("buttonWithdraw").innerHTML = 'Force Withdraw';
                    });
                } else {
                    showAlert("Balance is 0", "error");
                }
            });
        }
    } else {
        onConnect();
    }
}

async function claim() {
    if (selectedAccount) {
        const web3 = new Web3(provider);
        let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        if (contract) {
            contract.methods.getHolderInfo(selectedAccount).call().then(function(res) {
                console.log(res._tokens);
                if (!res._claimed) {
                    if (res._tokens > 0) {
                        contract.methods.claim().send({
                            value: 0,
                            from: selectedAccount,
                        }).on("transactionHash", () => {
                            document.getElementById("buttonClaim").innerHTML = 'Confirming...';
                            console.log("transactionHash")
                        }).on('receipt', () => {
                            refreshContractData();
                            refreshAccountData();
                            document.getElementById("buttonClaim").innerHTML = 'Claim';
                        }).catch(err => {
                            showAlert(err.message, "error");
                            document.getElementById("buttonClaim").innerHTML = 'Claim';
                        });
                    } else {
                        showAlert("Balance is 0", "Error");
                    }
                } else {
                    showAlert("Is Claimed", "Error");
                }
            });
        }
    } else {
        onConnect();
    }
}

async function refreshContractData() {
    const web3 = new Web3(RPC_ADDRESS);
    let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    contract.methods._startTime().call().then(function(res) { //time
        startTime = res;
        contract.methods._endTime().call().then(function(endres) {
            endTime = endres;
            var now = new Date();
            now = (Date.parse(now) / 1000);
            if (startTime - now > 0) { //before sale
                $("#salestatus").html("Upcoming");
                $("#boxon").show();
                $("#buttonBuy").attr("disabled", "true");
                realTimeClData = setInterval(function() {
                    beforeTimer();
                }, 1000);
            } else if (now >= startTime && now <= endTime) { //on sale
                $("#salestatus").html("Sale Live");
                $("#buttonWithdraw").show();
                $("#buydesc").show();
                $("#buttonBuy").removeAttr("disabled");
                $("#boxon").show();
                $("#boxend").show();
                realTimeClData = setInterval(function() {
                    onTimer();
                }, 1000);
            } else { //end sale
                $("#buttonWithdraw").hide();
                $("#buydesc").hide();
                $("#boxon").hide();
                $("#buttonBuy").removeAttr("disabled");
                $("#salestatus").html("End Saled");
                $("#sp_times").html("Finished");

                $("#buttonClaim").show();
                $("#boxend").show();
            }
        });
    });
    contract.methods.getPresaleTokenBalance().call().then(function(res) { //总token数量
        var presaleToken = res / 1000000000;
        $("#presaleToken").html(presaleToken.toFixed(2));
        contract.methods._tokenSold().call().then(function(res) { //买掉的
            var tokenBalance = res / 1000000000;
            $("#tokenBalance").html(tokenBalance.toFixed(2));
        });
    });
    contract.methods._tokenPrice().call().then(function(res) {
        var tokenPrice = res / 1000000000;
        $.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd", function(result) {
            var tokenRate = result.binancecoin.usd / tokenPrice;
            $("#tokenRate").html(tokenRate.toFixed(2));
        });
        $("#tokenPrice").html(tokenPrice.toFixed(2));
    });

    contract.methods._minBuyAmount().call().then(function(res) {
        var minbuyAmount = res / 1000000000000000000;;
        $("#minbuyAmount").html(minbuyAmount.toFixed(3));
    });
    contract.methods._maxBuyAmount().call().then(function(res) {
        var maxbuyAmount = res / 1000000000000000000;
        $("#maxbuyAmount").html(maxbuyAmount.toFixed(3));
    });
    contract.methods._totalWhitelists().call().then(function(res) {
        var totalWhitelists = res;
        $("#totalWhitelists").html(totalWhitelists);
    });
    contract.methods._totalUsers().call().then(function(res) {
        var totalUsers = res;
        $("#totalUsers").html(totalUsers);
    });

    contract.methods.getPresaleBNBBalance().call().then(function(res) {
        console.log(res);
    });
}

async function refreshAccountData() {
    const web3 = new Web3(provider);
    let contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    // Get list of accounts of the connected wallet
    if (selectedAccount) {

        accFirst = selectedAccount.substring(0, 5);
        accLast = selectedAccount.slice(-4);
        $("#btn-login").text(accFirst + '...' + accLast);
        $("#btn-logout").removeAttr("style").css({ "display": "inline-block", "padding": "7px 6px", "border": "none", "margin-left": "2px" });
        console.log(selectedAccount);
        contract.methods.isInWhitelist(selectedAccount).call().then(function(res) {
            if (res) {
                contract.methods.getHolderInfo(selectedAccount).call().then(function(res) {
                    console.log(res);
                    $("#yougoh").html(res._tokens / 1000000000);
                    $("#youbhb").html((res._amounts / 1000000000000000000).toFixed(4));
                });
            } else {
                showAlert("Is Not In White List", "error");
                return;
            }
        });
    } else {
        console.log("not login");
        $("#btn-modal-login").attr("data-provider", "walletconnect");
    }
}

async function onConnect() {
    document.getElementById("btn-login").innerHTML = "Connecting ...";
    try {
        provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        let accounts = await web3.eth.getAccounts();
        let account = await web3.eth.accounts.create();
        let signature = await web3.eth.accounts.sign('Some data', account.privateKey)
        let cId = await web3.eth.net.getId();
        if (cId != chainid) {
            showAlert("Switch to Binance Smart Chain", "error");
            document.getElementById("btn-login").innerHTML = "Connect";
            return;
        }
        selectedAccount = accounts[0];
        refreshAccountData();
        localStorage.setItem('wallet', "metamask")
        $("#btn-modal-login").attr("data-provider", "metamask");
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        document.getElementById("btn-login").innerHTML = "Connect";
        return;
    }
}

async function onDisconnect() {
    console.log("Killing the wallet connection", provider);
    document.getElementById("btn-login").innerHTML = "...";
    if (provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null;
    }

    selectedAccount = null;
    refreshAccountData();
    document.getElementById("btn-login").innerHTML = "Connect";
    $("#btn-logout").removeAttr("style").css({ "display": "none", "padding": "6px 0px", "border": "none", "margin-left": "12px" });
}

function showAlert(msg, type) {
    console.log(msg);
    if (type == 'error') {
        iziToast.error({
            title: 'Error',
            message: msg,
            backgroundColor: 'white',
            position: 'topRight',
            color: '.iziToast-color-red',
            iconColor: '.iziToast-color-red'
        });
    }

    if (type == 'success') {
        iziToast.success({
            title: 'OK',
            message: msg,
            backgroundColor: 'white',
            position: 'topRight',
            progressBarColor: '#76BF73',
            color: '.iziToast-#76BF73',
            iconColor: '.iziToast-#76BF73'
        });
    }
}

function beforeTimer() {
    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = startTime - now;
    if (timeLeft <= 0) {
        clearInterval(realTimeClData);
        refreshContractData();
        return;
    }

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (days < "10") {
        days = "0" + days;
    }
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $("#sp_times").html(days + ":" + hours + ":" + minutes + ":" + seconds);
}

function onTimer() {
    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;
    if (timeLeft <= 0) {
        clearInterval(realTimeClData);
        refreshContractData();
        return;
    }

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (days < "10") {
        days = "0" + days;
    }
    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $("#sp_times").html(days + ":" + hours + ":" + minutes + ":" + seconds);
}

document.getElementById("buttonWithdraw").onclick = withdraw;
document.getElementById("buttonBuy").onclick = buy;
document.getElementById("buttonClaim").onclick = claim;
document.getElementById("btn-login").onclick = onConnect;
document.getElementById("btn-logout").onclick = onDisconnect;
window.addEventListener('load', init)