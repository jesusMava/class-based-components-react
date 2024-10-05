import { Component } from "react";
//el nombre de la clase puede ser cualquiera q desees
class ErrorBoundary extends Component {
  constructor(){
    super()
    this.state = { hasError: false }
  }

  componentDidCatch(error) {
    this.setState( { hasError: true })
  }

  render(){
    if( this. state.hasError){
      return <p>Something went wrong!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary