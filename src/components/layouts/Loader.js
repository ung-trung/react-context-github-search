import React from 'react';

const Loader = props => {
  return (
    <>
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.text}</div>
      </div>
      <p />
    </>
  );
};

export default Loader;
