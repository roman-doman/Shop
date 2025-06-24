import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    items:[
      {
       id: 1,
        title: 'Стильний сірий стіл',
        img: 'francesco-liotti-Q0eomRz6bIg-unsplash.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        category: 'chairs',
        price: '500',
      },
      {
       id: 2,
        title: 'Мінімалістична шафа',
        img: 'kam-idris-hYb7kbu4x7E-unsplash.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        category: 'chairs',
        price: '1200',
      },
      {
       id: 3,
        title: 'Дерев’яний стіл з унікального дерева',
        img: 'minh-pham-Wn1gmozpNZc-unsplash.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        category: 'chairs',
        price: '300',
      },
      {
       id: 4,
        title: 'Стильна кухня',
        img: 'poojan-thanekar-YLZgvftdC_M-unsplash.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        category: 'chairs',
        price: '6500',
      },
      {
       id: 5,
        title: 'Кімната для відпочинку',
        img: 'spacejoy-IH7wPsjwomc-unsplash.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        category: 'chairs',
        price: '6500',
      },
      {
       id: 6,
        title: 'Комфортна кімната',
        img: 'minh-pham-OtXADkUh3-I-unsplash.jpg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        category: 'chairs',
        price: '6500',
      },
    ]
    }
  }
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
  )
 }
}
export default App;
