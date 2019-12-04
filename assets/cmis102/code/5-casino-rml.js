function AddReceipt(){
	var Receipt = document.getElementById("txtReceipt");
	var ReceiptsTotal = document.getElementById("txtTotalReceipts");
	var ReceiptNum = document.getElementById("hidReceiptNum");
	var ReceiptsDisplay = document.getElementById("txaReceiptsDisplay");
	ReceiptsTotal.value = parseInt(ReceiptsTotal.value) + parseInt(Receipt.value);
	ReceiptsDisplay.value = ReceiptsDisplay.value + "Receipt " + ReceiptNum.value +
	" = $" +
	Receipt.value +
	"\n";
	ReceiptNum.value = parseInt(ReceiptNum.value) + 1;
}

function RadioSwitcher(){
	var CNMI = document.getElementById("radResCNMI");
	var USA = document.getElementById("radResUSA");
	var Foreign = document.getElementById("radResForeign");
	var SSN = document.getElementById("txtSSN");
	if (CNMI.checked == true || USA.checked == true) {
		SSN.disabled = false;
	}
	else {
		SSN.value = "";
		SSN.disabled = true;
	}
}

function EnterChip(){
	var Chip5 = document.getElementById("txtChip5");
	var Chip20 = document.getElementById("txtChip20");
	var Chip50 = document.getElementById("txtChip50");
	var Chip100 = document.getElementById("txtChip100");
	var Chip500 = document.getElementById("txtChip500");
	var ChipQty = document.getElementById("txtChipQty");
	var ChipValue = document.getElementById("txtChipValue");
	ChipQty.value = parseInt(Chip5.value) +
	parseInt(Chip20.value) +
	parseInt(Chip50.value) +
	parseInt(Chip100.value) +
	parseInt(Chip500.value);
	ChipValue.value = parseInt(Chip5.value) * 5 +
	parseInt(Chip20.value) * 20 +
	parseInt(Chip50.value) * 50 +
	parseInt(Chip100.value) * 100 +
	parseInt(Chip500.value) * 500;
}

function CalculateCashOut(){
	var ChipValue = document.getElementById("txtChipValue");
	var Winnings = document.getElementById("txtWinnings");
	var ChipValue = document.getElementById("txtChipValue");
	var Tax = document.getElementById("txtTax");
	var CashOut = document.getElementById("txtCashOut");
	var CNMI = document.getElementById("radResCNMI");
	var USA = document.getElementById("radResUSA");
	var Foreign = document.getElementById("radResForeign");
	var SSN = document.getElementById("txtSSN");
	var ReceiptsTotal = document.getElementById("txtTotalReceipts");
	var TaxRate = 0;
	EnterChip();
	Winnings.value = parseInt(ChipValue.value) - parseInt(ReceiptsTotal.value)
	if (parseInt(Winnings.value) > 0) {
		if (CNMI.checked == true) {
			TaxRate = 0.10;
			if (SSN.value == "") {
				window.alert("You must enter a\nSocial Security Number");
				return;
			}
			
		}
		else 
			if (USA.checked == true) {
				TaxRate = 0.20;
				if (SSN.value == "") {
					window.alert("You must enter a\nSocial Security Number");
					return;
				}
			}
			else 
				if (Foreign.checked == true) {
					SSN.value = "";
					TaxRate = 0;
				}
				
				else {
					window.alert("You must select a residency");
					return;
				}
		Tax.value = parseInt(Winnings.value) * TaxRate;
		CashOut.value = parseInt(ChipValue.value) - parseInt(Tax.value);
	}
	else {
		Tax.value = 0;
		CashOut.value = parseInt(ChipValue.value);
	}
	return;
}