import React, { useEffect } from 'react';

const PayPalButton = ({ amount, onSuccess }) => {
  useEffect(() => {
    const loadPayPalScript = async () => {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=USD`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                    },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => onSuccess(details));
            },
          }).render('#paypal-button-container');
        }
      };
    };

    loadPayPalScript();
  }, [amount, onSuccess]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
