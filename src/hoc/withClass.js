import React, { Component } from "react";

// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };
// export default withClass;
//

const withClass = (WrappedComponent, className) => {
  // Anonymous class
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withClass;
