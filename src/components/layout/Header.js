import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4 text-center">
        <div class="container-fluid-nav text-center">
          <h1 className="navbar-brand text-center " href="Dashboard.html">
            JET Trade
          </h1>
        </div>
      </nav>
    );
  }
}

export default Header;
