import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'
import Counter from './components/Counter/Counter';

const data = [
  {
    'category': 'Coock',
    'title': '8 VS Code Extensions You Might Love',
    'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author': 'Marvin Wendt in Better Programming',
    'publicationDate':'May 4',
    'readTime': '3 min read'
  },
  {
    'category': 'PROGRAMMING',
    'title': '8 VS Code Extensions You Might Love',
    'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author': 'Marvin Wendt in Better Programming',
    'publicationDate':'May 4',
    'readTime': '3 min read'
  },
  {
    'category': 'Music',
    'title': '8 VS Code Extensions You Might Love',
    'description': 'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author': 'Marvin Wendt in Better Programming',
    'publicationDate':'May 4',
    'readTime': '3 min read'
  }
]

export default class App extends Component {
  
  _renderCards() {
   return data.map(({
    category,
    title,
    description,
    author,
    publicationDate,
    readTime,
   }) => {
     return (
      <Card
          category = {category}
          title = {title}
          description = {description}
          author = {author}
          publicationDate = {publicationDate}
          readTime = {readTime}
        ></Card>
     )
   })
  }
  render () {
    // Aqui se puede escriir cualquier código de js
    // const items = []
    // data.forEach(element => {
    //   items.push(<Card
    //     category = {element.category}
    //     title = {element.title}
    //     description = {element.description}
    //     author = {element.author}
    //     publicationDate = {element.publicationDate}
    //     readTime = {element.readTime}
    //   ></Card>)
    // })
    
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Bootcamp white - <strong>React</strong>
          </h1>
        </header> */}
        {/* <Card
          category='PROGRAMMING'
          title='8 VS Code Extensions You Might Love'
          description='CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more'
          author='Marvin Wendt in Better Programming'
          publicationDate='May 4'
          readTime='3 min read'
        /> */}
        {this._renderCards()}
        <Clock/>
        {/* {items} */}
        <Counter></Counter>

      </div>
    );
  }
}