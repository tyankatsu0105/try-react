import React from 'react';
import Board from '@components/Board';
import { GameState } from '@interfaces/Game';
import calculateWinner from '@helpers/calculateWinner';

export default class Game extends React.Component<{}, GameState> {
  constructor(props: GameState) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const { stepNumber, xIsNext } = this.state;
    const history = this.state.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];

    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([
        {
          squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const { stepNumber, history } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((_step, index) => {
      const desc = index ? `Go to move #${index}` : 'Go to game start';
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      );
    });
    let status;
    winner
      ? (status = `Winner: ${winner}`)
      : (status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
