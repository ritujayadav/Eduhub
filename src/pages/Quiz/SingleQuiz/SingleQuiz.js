import React, { Component } from "react";
import "./SingleQuiz.css";
import QuestionBox from "./../../../components/QuestionBox/QuestionBox";
import ResultBox from "./../../../components/ResultBox/ResultBox";
import Instruction from './../../../components/Instruction/Instruction'

class SingleQuiz extends React.Component {
  state = {
    questionData: [],
    progress: 0,
    score: 0,
    time:Date.now() + 180000,
    showInstruction:true
  };

  finishTimer = () => {
    setTimeout(() => {
      this.setState({
        progress:5
      })
    },180000)
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    let fetchedQuestion = [
      {
        prompt: " Why do we use maps in geography?",
        answers: ["To learn about different colors", 
        "ComponentTo find the best recipes for cooking", 
        "To explore new songs", 
        "ClassTo understand places and find directions."],
        correct: 1,
      },
      {
        prompt: " What is grammar in English?",
        answers: [
          "The way we write our names",
          "The rules that help us use words correctly in sentences",
          "A game we play in school",
          "A type of food we eat",
        ],
        correct: 0,
      },
      {
        prompt: " What does multiplication mean in math?",
        answers: [
          "Adding numbers together.",
          "Subtracting numbers",
          "Counting the days of the week",
          "Repeating addition to find the total of groups",
        ],
        correct: 3,
      },
      {
        prompt: "How many planets are there in solar system?",
        answers: [
          "7",
          "2",
          "8",
          "9",
        ],
        correct: 2,
      },
      {
        prompt: "What is culture?",
        answers: [
          "A type of food.",
          "A way of dressing",
          "A set of beliefs, values, and practices shared by a group of peopl",
          "A type of music",
        ],
        correct: 2,
      },
    ];

    this.setState({
      questionData: fetchedQuestion,
    });
  };

  checkAnswer = (index) => {
    if(!this.state.questionData[this.state.progress]){
      return;
    }
    var correct = this.state.questionData[this.state.progress].correct;
    var newScore = 0,
      newProgress = 0;
    if (correct === index) {
      newScore = this.state.score + 1;
      this.setState({ score: newScore });
      newProgress = this.state.progress + 1;
      this.setState({ progress: newProgress });
    } else {
      newProgress = this.state.progress + 1;
      this.setState({ progress: newProgress });
    }
  };

  resetQuiz = () => {
    this.setState({ score: 0, progress: 0,time:Date.now() + 180000 });
    this.finishTimer()
  };

  render() {


    var questionDatum = this.state.questionData[this.state.progress];

    if (this.state.showInstruction){
      return (
      <Instruction closeInstruction={() => {
          this.setState({showInstruction:false,time:Date.now() + 180000})
          this.finishTimer()
        }} 
      />
      )
    }

    if (this.state.questionData.length > this.state.progress) {
      return (
        <div>
          <QuestionBox
            questionIndex={this.state.progress + 1}
            answers={questionDatum.answers}
            answerCallback={this.checkAnswer}
            questionDatum={questionDatum}
            time={this.state.time}
            attempted={this.state.progress}
            notattempted={this.state.questionData.length-this.state.progress}
          />
        </div>
      );
    } else {
      return (
        <ResultBox
          resetQuiz={this.resetQuiz}
          correct={this.state.score}
          incorrect={this.state.questionData.length - this.state.score}
          total={this.state.questionData.length}
          score={(this.state.score / this.state.questionData.length) * 100}
        />
      );
    }
  }
}

export default SingleQuiz;
