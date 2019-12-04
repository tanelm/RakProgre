import React from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import { UserPropTypes } from "../actions/store/reducer.js";

const protectedRedirect = (WrappedComponent) => {
    return class extends React.PureComponent {
        static displayName = "protected-redirect";
        static propTypes = {
            user: PropTypes.shape(UserPropTypes),
        };

        render() {
            if(!this.props.user) return <Redirect to={"/"} />;

            return(
                <WrappedComponent {...this.props} />
            );
        }
    };
};

export default protectedRedirect; 