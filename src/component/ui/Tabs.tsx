import { Tabs as TabsA, TabsProps as TabsPropsA } from "antd";
type TabsProps = TabsPropsA & {
  //Props
};
export const Tabs = (props: TabsProps) => {
  return <TabsA {...props} />;
};

export default Tabs;
