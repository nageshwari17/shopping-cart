import React from "react";
import { Link } from "react-router-dom";

class PLPheader extends React.Component {
  render() {
    const { count } = this.props;
    return (
      <div className="plp-header col-12">
        <div className="row m-0">
          <div className="logo col-3">
            <Link to="/">
              <i className="fa fa-star logo" aria-hidden="true" />
            </Link>
          </div>
          <div className="icon-section col-9">
            <div className="seach">
              <input
                type="text"
                name="searchKey"
                className="form-control searchKey"
                placeholder="Search"
              />
              <i className="fa fa-search search-icon fa-2" aria-hidden="true" />
            </div>
            <div className="cart position-relative">
              <span className="number-item">{count}</span>
              <Link to="/cart">
                <i
                  className="fa fa-shopping-cart fa-2 shopping-cart"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PLPheader;
