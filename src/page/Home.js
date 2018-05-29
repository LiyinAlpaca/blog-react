import React from 'react';
import UserCard from '../component/UserCard';
import profile from '../json/profile.json';
import Header from '../layout/Header';
import { Container } from 'reactstrap';

export default class Home extends React.Component {
    render() {
        const name = profile.name;
        const nickname = profile.nickname;
        const company = profile.company;
        const location = profile.location;
        const email = profile.email;
        const url = profile.url;
        return (
            <div>
                <Header />
                <Container>
                    <div className="d-flex flex-wrap justify-content-center">
                        <article className="order-2 order-md-1">
                            <h1>Home!</h1>
                        </article>
                        <aside className="order-1 order-md-2">
                            <UserCard name={name}
                                nickname={nickname}
                                company={company}
                                location={location}
                                email={email}
                                url={url}
                            />
                        </aside>
                    </div>
                </Container>
            </div>
        )
    }
}

