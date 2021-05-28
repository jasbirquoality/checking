import React, { PureComponent } from "react";
import classnames from "classnames";
import Sidebar from "./components/menu/vertical-menu/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

class VerticalLayout extends PureComponent {
  state = {
   
  };
 
  render() {
    return (
      <div
        className={classnames(
          `wrapper vertical-layout theme`,
          {
            "menu-collapsed":
              this.state.collapsedContent === true && this.state.width >= 1200,
          }
        )}
      >
        <Sidebar  />
        <div
          className={classnames("app-content content", {
            "show-overlay": this.state.appOverlay === true
          })}
          onClick={this.handleAppOverlayClick}
        >
          <Navbar   />
          <div className="content-wrapper" >{this.props.children}</div>
        </div>

        <Footer  />
        <div
          className="sidenav-overlay"
          onClick={this.handleSidebarVisibility}
        />
      </div>
    );
  }
}

export default VerticalLayout;
