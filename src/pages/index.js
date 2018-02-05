import React from 'react'
import Link from 'gatsby-link'
import {Header, Segment, Container} from 'semantic-ui-react';
import Blog from '../components/homePage/Blog';
import UserTypeSelection from '../components/homePage/UserTypeSelection';
import MeetRory from '../components/homePage/MeetRory';
import WouldULikeTo from '../components/homePage/WouldULikeTo';

const IndexPage = () => (
  <div>
    <Container fluid>
      <Segment basic>
        <Header as={'h4'}>
          Positively impacting IT recruitment
        </Header>
          Matching companies with the right people + offering advice on <a href="#">how to
          hire</a> and <a href={"#"}>how to get hired</a>.
      </Segment>
    </Container>
    <Blog />
    <UserTypeSelection/>
    <MeetRory/>
    <WouldULikeTo/>
  </div>
)

export default IndexPage
