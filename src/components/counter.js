import React from "react";
import {connect} from "react-redux";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
                className="btn btn-primary btn-large" onClick={inc}>+
            </button>
            <button
                className="btn btn-primary btn-large" onClick={dec}>-
            </button>
            <button
                className="btn btn-primary btn-large" onClick={rnd}>RND
            </button>
        </div>
    );
};

const mapStateToProps = (state) => (
    {
        counter: state,
    }
);


export default connect(mapStateToProps)(Counter);
