import React, {Component} from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwLvDG1Zgl3hsxUzfSx-xmAPOjw2BpJ9N5Q&s",
  },
  paper: {
    name: "Paper",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({userSelect: choice[userChoice]});
    this.setState({computerSelect: computerChoice});
    this.setState({result: this.judgement(choice[userChoice], computerChoice)});
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomNum];
    return choice[final];
  };

  judgement = (user, computer) => {
    const userChoice = user.name;
    const compChoice = computer.name;
    if (userChoice === compChoice) {
      return "Tie";
    } else if (userChoice === "Rock") {
      return compChoice === "Scissors" ? "Win" : "Lose";
    } else if (userChoice === "Paper") {
      return compChoice === "Rock" ? "Win" : "Lose";
    } else if (userChoice === "Scissors") {
      return compChoice === "Paper" ? "Win" : "Lose";
    } else {
      return "error";
    }
  };

  render() {
    return (
      <div>
        <div className="main main-section">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>

        <div className="main button-section">
          <button onClick={()=>this.play("scissors")}>가위</button>
          <button onClick={()=>this.play("rock")}>바위</button>
          <button onClick={()=>this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
