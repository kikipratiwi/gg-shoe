import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const proceForStripe = price * 100;
  const publishableKey = 'pk_test_51HKn0MEkL12fKZmbVZPpOJF1PZXLCkQfM2CC8aZ94lShIA6AEal5pfrf8fOxWAeJyKu4mD1586a6rNrABOC3vLFv00yttyjTSh';

  const onToken = token => {
    console.log(token);
    alert('Payment Successfull');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='GG Shoes Ltd.'
      billingAddress
      shippingAddress
      image='https://gist.githubusercontent.com/kikipratiwi/616aaafa105567a04cb01a3dc7250254/raw/56a0f67292e60e051a52fc5a470f23c265c94557/shoe.svg'
      description={`Your total is $${price}`}
      amount={proceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
