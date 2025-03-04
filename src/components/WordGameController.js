import React from "react";
import { connect } from "react-redux";
import randomWords from "random-words";
import {
    setWord,
    toggle,
    addLetter,
    right,
} from "../actions"

class WordGameController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['Rock', 'Paper'],
        }
    };

    getIndexes = (arr, letter) => {
        let indexes = [];
        arr.forEach((e, i) => {
            if (e.letter === letter) {
                indexes.push(i);
            }
        });
        return indexes;
    };

    handleStartGame = () => {
        const { dispatch } = this.props;
        dispatch(setWord(randomWords()));
        dispatch(toggle());
    };

    handleGuess = (letter, event) => {
        event.target.setAttribute("disabled", true);
        const word = this.props.wordToGuess;
        const { dispatch } = this.props;

        dispatch(addLetter(letter));
        let indexes = this.getIndexes(word, letter);

        if (indexes.length > 0) {
            event.target.setAttribute("class", "green");
            indexes.forEach((elementIndex) => {
                dispatch(right(elementIndex));
            });
            this.checkWin();
        } else {
            event.target.setAttribute("class", "red");
        }
    }


    render() {
        let alph = "abcdefghijklmnopqrstuvwxyz".split("");

        return (
            <h3>Hello World</h3>
        )
    }
}

const mapStateToProps = (state) => {
    const { guessedLetters, wordToGuess } = state;
    return { guessedLetters, wordToGuess };
};
WordGameController = connect(mapStateToProps)(WordGameController);
export default WordGameController