import OrderForm from "@components/Order/order";
import { RequestPayParams, RequestPayResponse } from "@hooks/imp";
import React from "react";

function Payment() {
  const onClickPayment = () => {
    if (!window.IMP) return;
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp22135360"); // 가맹점 식별코드

    /* 2. 결제 데이터 정의하기 */
    const data: RequestPayParams = {
      pg: "kakaopay", // PG사 : https://portone.gitbook.io/docs/sdk/javascript-sdk/payrq#undefined-1 참고
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
      m_redirect_url: "http://localhost:8080/orderCompleteMobile",
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백 함수 정의하기 */
  function callback(response: RequestPayResponse) {
    const { success, error_msg } = response;

    if (success) {
      alert("결제 성공");
      console.log(response);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return (
    <div className="mt-20">
      <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
        <div>
          <div>
            <OrderForm />
          </div>
        </div>
        <button
          onClick={onClickPayment}
          className=" my-20 border-2 border-black p-6 rounded-xl"
        >
          결제하기
        </button>
      </div>
    </div>
  );
}

export default Payment;
