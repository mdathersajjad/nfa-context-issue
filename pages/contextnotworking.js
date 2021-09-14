import React from "react";
import { AuthUserContext } from "next-firebase-auth";

class ContextNotWorking extends React.Component {
    componentDidMount() {
      let value = this.context;
      console.log(value);
      /* perform a side-effect at mount using the value of MyContext */
    }
    
    render() {
      let value = this.context; // should point to current user
      return <div>Current user: Test</div>
    }
}

ContextNotWorking.contextType = AuthUserContext;

export default ContextNotWorking;