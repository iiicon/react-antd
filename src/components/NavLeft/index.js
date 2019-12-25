import React from "react";
import "./index.less";
import '../../App.css'
import { Menu, Icon } from "antd";
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

class NavLeft extends React.Component {
  // rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  rootSubmenuKeys = [];

  state = {
    openKeys: [] // 上次打开的 menu[]
  };

  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList);

    this.setState({ menuTreeNode });
  }

  onOpenChange = openKeys => {
    // openKeys 这次打开的和上次打开的 menu[]
    const latestOpenKey = openKeys.find(
      // 本次打开的 menu
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      // 点击 sub3 的时候
      this.setState({ openKeys });
    } else {
      // 点击 sub124 的时候
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        this.rootSubmenuKeys.push(item.key);

        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type="appstore" />
                <span>{item.title}</span>
              </span>
            }
          >
            {item.children ? this.renderMenu(item.children) : ""}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <Icon type="pie-chart" />
          <span>{item.title}</span>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img className='App-logo' src="/assets/logo.svg" width="40" height="40" alt="" />
          <h1>CMS</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
