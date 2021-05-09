import React, { Component } from 'react'
import {
    Card, CardImgOverlay, CardImg,
    CardTitle
} from 'reactstrap'

class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log("Menu Component constructor is invoked");

    }
    componentDidMount() {
        console.log("Menu Component componentDidMount is invoked");
    }

    render() {
        console.log("Menu Component render is invoked");
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onDishSelected(dish)}>
                        <CardImg width="%100" src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );

        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        )
    }
}
export default MenuComponent;