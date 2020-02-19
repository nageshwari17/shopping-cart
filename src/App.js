import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  matchPath
} from "react-router-dom";
// import { matchPath } from "react-router";
import Cart from "./components/cart";
import PLPheader from "./components/ProductListing/PLPheader";
import "./scss/global.scss";
import ProductListing from "./components/ProductListing";
import Footer from "./components/common/footer";
// import { Item } from "react-bootstrap/lib/Breadcrumb";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cartItem: [],
      count: 0,
      mobileView: false
    };
  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/qzuzi")
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({
          items: result
        });
      })
      .catch(error => console.log(error));
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  addTocart = id => {
    const addedItem = this.state.items.find(item => item.id === id);
    const existed_item = this.state.cartItem.find(item => item.id === id);
    if (existed_item) {
      addedItem.qty += 1;
    } else {
      addedItem.qty = 1;
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
          cartItem: [...prevState.cartItem, addedItem]
        };
      });
    }
  };

  addQty = id => {
    const addedItem = this.state.cartItem.find(item => item.id === id);
    addedItem.qty += 1;
    this.setState(prevState => ({
      cartItem: prevState.cartItem
    }));
  };

  removeQty = id => {
    const addedItem = this.state.cartItem.find(item => item.id === id);
    if (addedItem.qty === 1) {
      this.removeItem(id);
    } else {
      addedItem.qty -= 1;
      this.setState(prevState => ({
        cartItem: prevState.cartItem
      }));
    }
  };

  removeItem = id => {
    let newCart = this.state.cartItem.filter(item => item.id !== id);
    if (!newCart) {
      newCart = [];
    }
    this.setState(prevState => ({
      count: prevState.count - 1,
      cartItem: newCart
    }));
  };

  editQty = (e, id) => {
    const addedItem = this.state.cartItem.find(item => item.id === id);
    addedItem.qty = e.target.value ? parseInt(e.target.value) : 0;
    if (e.target.value) {
      setTimeout(() => {
        this.setState(prevState => ({
          cartItem: prevState.cartItem
        }));
      }, 1000);
    }
  };
  handleSort = e => {
    let sortProducts;
    if (e === "HL") {
      sortProducts = this.state.items.sort(this.sortItems("price", "desc"));
    } else if (e === "LH") {
      sortProducts = this.state.items.sort(this.sortItems("price", "asc"));
    } else if (e === "discount") {
      sortProducts = this.state.items.sort(this.sortItems("discount", "desc"));
    }
    this.setState({
      items: sortProducts
    });
  };

  handleFilters = value => {
    const filters = this.state.items.filter(
      item => item.price > value.min && item.price < value.max
    );
    this.setState({
      items: filters
    });
  };

  sortItems = (property, order) => {
    return (a, b) => {
      if (order === "asc") {
        return a[property] - b[property];
      } else if (order === "desc") {
        return b[property] - a[property];
      }
    };
  };
  resize() {
    this.setState({
      mobileView: window.innerWidth <= 760
    });
  }
  render() {
    console.log(matchPath);
    const { items, count, cartItem } = this.state;
    return (
      <Fragment>
        <div className="container-fluid minh p-0">
          <Router>
            <PLPheader count={count} />
            <Switch>
              <Route exact path="/">
                <ProductListing
                  items={items}
                  addTocart={this.addTocart}
                  handleSort={this.handleSort}
                  handleFilters={this.handleFilters}
                  mobileView={this.state.mobileView}
                />
              </Route>
              <Route exact path="/cart">
                <Cart
                  cartItem={cartItem}
                  addQty={this.addQty}
                  removeQty={this.removeQty}
                  removeItem={this.removeItem}
                  editQty={this.editQty}
                  mobileView={this.state.mobileView}
                />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
