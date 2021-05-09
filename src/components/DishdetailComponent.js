import React, { Component } from 'react'
import {
    Card, CardImg,
    CardTitle, CardText, CardBody
} from 'reactstrap'
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    componentDidMount() {
        console.log(this.props.selectedDish);
    }
    renderDish = () => {
        const selectedDish = this.props.selectedDish;
        if (selectedDish != null) {
            return (
                <Card>
                    <CardImg width="%100" src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            <div></div>
        }
    }
    selectedDishComment = () => {
        const comments = this.props.selectedDish ?
            this.props.selectedDish.comments.map((c) => {
                return (
                    <div key={c.id}>
                        <p>{c.comment}</p>
                        <p>--{c.author}, {this.formatDate(c.date)}</p>
                    </div>
                );
            }) : <div></div>
        return comments;
    }
    formatDate(d) {
        var date = new Date(d);
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return monthNames[monthIndex] + '.' + day + ',' + year;
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.props.selectedDish ? <h3 className="ml-5">Comments</h3> : null}
                        {this.selectedDishComment()}
                    </div>
                </div>


            </div >
        )
    }
}
export default DishDetail;