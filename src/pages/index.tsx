import React from "react";
import { Layout } from "../components/structure/layout";
import StaticSlide from "../components/staticSlide";

class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout>
          <StaticSlide />
        </Layout>
      </div>
    );
  }
}
export default Index;
