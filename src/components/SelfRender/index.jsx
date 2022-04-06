import { Component } from "react";
import "./SelfRender.css";

class SelfRender extends Component {
  state = {
    num: 0,
    rerender: {},
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.num === this.state.num) {
      this.setState((state) => ({
        num: state.num + 1,
      }));
    }
  }
  onShowRendersNumber = () => {
    alert(`Render number - ${this.state.num}`);
  };
  onMakeRerender = () => this.setState({ rerender: {} });
  render() {
    return (
      <div className="selfrender">
        <button onClick={this.onShowRendersNumber}>
          Show how many rererenders were
        </button>
        <button onClick={this.onMakeRerender}>Make rerender</button>
      </div>
    );
  }
}

export default SelfRender;
