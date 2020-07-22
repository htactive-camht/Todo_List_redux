import React from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="All" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Incompleted" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Completed" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

export default Demo;
