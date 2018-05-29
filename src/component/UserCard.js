import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardFooter,
    CardTitle, CardSubtitle
} from 'reactstrap';
import CardItem from './CardItem';

//用户卡片
export default class UserCard extends React.Component {
    static defaultProps = {
        name: null,
        nickname: null,
        bio: "这个用户很懒,什么都没有写...",
        company: null,
        location: null,
        email: null,
        url: null,
        photo: "../img/user.svg"
    }
    render() {
        return (
            <Card className="card-user">
                <CardImg src={this.props.photo}></CardImg>
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardItem><CardSubtitle>{this.props.nickname}</CardSubtitle></CardItem>
                    <CardItem><CardText>{this.props.bio}</CardText></CardItem>
                </CardBody>
                <CardFooter>
                    <CardItem icon="fa fa-group">{this.props.company}</CardItem>
                    <CardItem icon="fa fa-map-o">{this.props.location}</CardItem>
                    <CardItem icon="fa fa-envelope-o">{this.props.email}</CardItem>
                    <CardItem icon="fa fa-link">{this.props.url}</CardItem>
                </CardFooter>
            </Card>
        );
    }
}