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
  const WithClass = class extends Component {
    render() {
      return (
        <div ref={this.props.forwardedRef} className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />;
  });
};

export default withClass;
