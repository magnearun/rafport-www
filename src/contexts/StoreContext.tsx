import React from 'react';
import Client from 'shopify-buy';

interface IProps {
  children: React.ReactNode;
}

interface IState {
  client: any;
  isCartOpen: boolean;
  checkout: any;
  products: any;
  shop: any;
  addVariantToCart: (variantId: string, quantity: number) => void;
  removeLineItem: (lineItemId: string) => void;
  updateLineItem: (lineItemId: string, quantity: number) => void;
  toggleCart: () => void;
}

export type IStoreContext = IState;

const client = Client.buildClient({
  domain: 'rafport-www.myshopify.com',
  storefrontAccessToken: '87d1b887f908b5df03595e3953a05a93'
});

const SHOPIFY_CHECKOUT_ID = 'shopify_checkout_id';

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  toggleCart: () => {}
};

const StoreContext = React.createContext(defaultStoreContext);

export class StoreProvider extends React.Component<IProps, IState> {

  async componentDidMount() {
    const { client } = this.state;
    const id = localStorage.getItem(SHOPIFY_CHECKOUT_ID);

    try {
      if (id) {
        const checkout = await client.checkout.fetch(id);

        this.setState({ checkout });
      } else {
        const checkout = await client.checkout.create();

        localStorage.setItem(SHOPIFY_CHECKOUT_ID, checkout.id);
        this.setState({ checkout });
      }

      const shop = await client.shop.fetchInfo();

      this.setState({ shop });
    } catch (error) {
      console.log(error);
    }
  }

  addVariantToCart = async (variantId: string, quantity: number = 1) => {
    const lineItemsToAdd = [{ variantId: variantId.replace('Shopify__ProductVariant__', ''), quantity: parseInt(quantity, 10) }]
    const checkoutId = this.state.checkout.id;

    console.log('addVariantToCart', lineItemsToAdd);

    try {
      const checkout = await client.checkout.addLineItems(checkoutId, lineItemsToAdd);

      this.setState({
        checkout,
      }, () => this.toggleCart());
    } catch (error) {
      console.log(error);
    }
  }

  removeLineItem = async (lineItemId: string) => {
    const checkoutId = this.state.checkout.id;

    try {
      const checkout = await this.state.client.checkout.removeLineItems(checkoutId, [lineItemId]);

      this.setState({
        checkout,
      });
    } catch (error) {
      console.log(error);
    }
  }

  updateLineItem = async (lineItemId: string, quantity: number) => {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [{ id: lineItemId, quantity }]

    try {
      const checkout = await this.state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);

      this.setState({
        checkout,
      });

    } catch (error) {
      console.log(error);
    }
  }

  toggleCart = () => {
    this.setState(state => ({ isCartOpen: !state.isCartOpen }));
  }

  state = {
    client,
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    addVariantToCart: this.addVariantToCart,
    removeLineItem: this.removeLineItem,
    updateLineItem: this.updateLineItem,
    toggleCart: this.toggleCart,
  };

  render() {
    const { children } = this.props;

    return (
      <StoreContext.Provider value={this.state}>
        {children}
      </StoreContext.Provider>
    );
  }
}

export const withStoreContext = (Component: any) => {
  return (props: any) => (
    <StoreContext.Consumer>
      {context => <Component {...props} storeContext={context} />}
    </StoreContext.Consumer>
  )
};

export default StoreContext;
