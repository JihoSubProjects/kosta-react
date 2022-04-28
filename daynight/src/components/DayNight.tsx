import React from "react";

export default class DayNight extends React.Component<{},{ night: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      night: false,
    };
  }

  buttonClick = () => {
    this.setState((current) => ({ ...current, night: !current.night }));
  }

  render() {
    return (
      <>
        <div className={ "body" + (this.state.night ? "night" : "")}>
          <div className="wrap" style={{ width: '500px', margin: '0 auto' }}>
            <h1>Day Night</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti nulla, in accusantium voluptas odio debitis labore libero, est reiciendis explicabo, temporibus tempore. Voluptates fugit quos maxime minima, minus culpa?</p>
            <button onClick={this.buttonClick}>Day / Night</button>
          </div>
        </div>
      </>
    )
  }
}
