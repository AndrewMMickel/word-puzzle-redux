import React from "react";
import randomWords from "random-words";
import {
    setWord,
    toggle
} from "../actions"

class WordGameController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['Rock', 'Paper'],
        }
    };

    handleStartGame = () => {
        const { dispatch } = this.props;
        dispatch(setWord(randomWords()));
        dispatch(toggle());
    }

    render() {
        return (
            <h3>Hello World</h3>
        )
    }
}

export default WordGameController