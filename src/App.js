import { React, Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent'
import DishDetail from './components/DishdetailComponent'
import { DISHES } from './shared/dishes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }
  onDishSelected = (dish) => {
    this.setState({ selectedDish: dish })
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onDishSelected={this.onDishSelected} />
        <DishDetail selectedDish={this.state.selectedDish} ></DishDetail>
      </div>
    );
  }
}

export default App;
