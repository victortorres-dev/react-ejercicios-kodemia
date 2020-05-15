import React, { Component } from 'react'

// App pasa los props a Clock
export default class Clock extends Component {
  constructor(props){
    console.log('primero se ejecuta el constructor')
    super(props)
    // declaracion de nuestro estado, el estado siempre es un objeto
    this.state = {// declarando el estado
      //definiendo las propiedades del estado
      date: new Date() // define un dato inicial


    }
  }

  componentDidMount(){
    console.log('Desde el life cycle component didmount')
    this.dateInterval = setInterval(() =>  // no corresponde al estado es una propiedad de la clase
      this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.dateInterval)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }


  render () { //Aqui ya se puede acceder al estate y a los props
    console.log('Desde render')
    return(
      <div>
        <p>Ejemplo del reoj, la hora es: {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
}
}


/*
Crear un nuevo comṕopnente <Counter></Counter>
El counter debe iniciar en 0 y quiere que impriman en consola cuando el counter pase por un numero multiplo de 8
-Hard 
van a detener el contador cuando llegue a 20
- el contador puedo ide de n en n

*/