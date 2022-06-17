import React from './lib/react';
import ReactDom from './lib/react-dom';

class App extends React.Component {
    handleClick() {

    }

    render() {
        return (
            <div>
                <span onClick={this.handleClick}>hello</span>
            </div>
        )
    }
}

ReactDom.render((<App>hello</App>), document.body)