/*
const paymentMap = {
  KAKAO_PAYMENT: "카카오 결제처리",
  NAVER_PAYMENT: "네이버 결제처리",
  PAYCO_PAYMENT: "페이코 결제처리",
  APPLE_PAYMENT: "애플 결제처리",
};

function executePayment(paymentType) {
  return paymentMap[paymentType];
}
*/

//
//
//

function payOnKakao() {
  console.log("KAKAO PAY 처리중");
}
function payOnNaver() {}
function payOnCoupang() {}
function payOnPayco() {}
function payOnApple() {}

function executePayment(paymentType) {
  if (paymentType === "KAKAO_PAYMENT") {
    payOnKakao();
  } else if (paymentType === "NAVER_PAYMENT") {
    payOnNaver();
  } else if (paymentType === "COPUANG_PAYMENT") {
    payOnCoupang();
  } else if (paymentType === "PAYCO_PAYMENT") {
    payOnPayco();
  }
}

//
//
//

/*
const paymentMap = {
  KAKAO_PAYMENT() {
    payOnKakao();
  },
  NAVER_PAYMENT() {
    payOnNaver();
  },
  COUPANG_PAYMENT() {
    payOnCoupang();
  },
  PAYCO_PAYMENT() {
    payOnPayco();
  },
  APPLE_PAYMENT() {
    payOnApple();
  },
};

function executePayment(paymentType) {
  paymentMap[paymentType]();
}

executePayment("NAVER_PAYMENT")

*/
