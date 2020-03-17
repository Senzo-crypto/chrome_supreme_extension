var url = window.location.href;
var i;

var category = "shirts";
var item_name = "Oxford";

function pickCategory() {
  chrome.storage.sync.get('category', function(data) {
    var redirect = "https://www.supremenewyork.com/shop/all/jackets";
    var replace = redirect.replace("jackets", category);
    chrome.runtime.sendMessage({redirect: replace});
  });
}

function pickItem() {
  chrome.storage.sync.get('item_name', function(data) {
    var items = document.getElementsByClassName('name-link');

    for(i = 0; i < items.length; i++) {
      if((items[i].innerHTML).includes(item_name)) {
        chrome.runtime.sendMessage({redirect: items[i].href});
        break;
            }
        }
    });
}

if(url == "https://www.supremenewyork.com/shop/all") {
    pickCategory();
}

else if(url != "https://www.supremenewyork.com/shop/all") {
    pickItem();
  }
document.getElementsByName("commit")[0].click();
  window.location.href = 'https://supremenewyork.com/checkout';
if(url == "https://www.supremenewyork.com/shop") {
    window.location.href = 'https://www.supremenewyork.com/shop/cart';
}

else if(url != "https://www.supremenewyork.com/shop") {
    window.location.href = 'https://supremenewyork.com/checkout';
  }

  var full_name = "John Doe";
  var email = "johndoe@gmail.com";
  var tele = "5555555555";
  var billing_state = "FL";
  var zip = "00000";
  var billing_city = "Kansas";
  var country = "USA";
  var address = "868 eight six";
  var credit_card = "";
  var card_month = "";
  var card_year = "";
  var card_Cvv = "";
  document.getElementById("order_billing_name").value = full_name;
  document.getElementById("order_email").value = email;
  document.getElementById("order_tel").value = tele;
  document.getElementById("order_billing_city").value = billing_city;
  document.getElementById("order_billing_zip").value = zip;
  document.getElementById("order_billing_state").value = billing_state;
  document.getElementById("order_billing_country").value = country;
  document.getElementById("bo").value = address;
  document.getElementById("oba3").value = adress_2;
  document.getElementById("rnsnckrn").value = credit_card;
  document.getElementById("credit_card_month").value = card_month;
  document.getElementById("credit_card_year").value = card_year;
  document.getElementById("orcer").value = card_Cvv;
  document.getElementsByClassName("iCheck-helper")[1].click();
  document.getElementsByName("commit")[0].click();
