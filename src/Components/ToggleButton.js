import React from 'react';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    
      render() {
        return (
          <button onClick={this.handleClick} className={this.state.isToggleOn ? 'buttonON' : 'buttonOFF'}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
    
}

export default ToggleButton;
