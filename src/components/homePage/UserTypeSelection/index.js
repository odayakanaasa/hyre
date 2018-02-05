import React, { Component } from 'react'
import { Grid, Menu, Image, Container, Segment, Card, Item, Button, Responsive} from 'semantic-ui-react'
import chatterIcon from '../../../images/chatterIcon.png';
import docHold from '../../../images/docHold.png';



class UserTypeSelection extends Component {
  render() {
    return (
      <div>
        <Grid container textAlign={'center'}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={chatterIcon} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Item style={{height: "100%", color: "#401D5B", backgroundColor: "#C6D9F1"}}>
                <Item.Content style={{padding: "30px"}} verticalAlign={"middle"}>
                  <Item.Header as={"h5"}>
                    For Employers
                  </Item.Header>
                  <Item.Description>
                    We want to improve your recruitment process. <br /> <br /> If you need help with your hiring strategy, or you’re ready to find great candidates - get in touch.
                  </Item.Description>
                  <Item.Extra>
                    <Button primary size={"mini"}>
                      LEARN MORE
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={docHold} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Item style={{height: "100%", color: "#401D5B", backgroundColor: "#C6D9F1"}}>
                <Item.Content style={{padding: "30px"}} verticalAlign={"middle"}>
                  <Item.Header as={"h5"}>
                    For Candidates
                  </Item.Header>
                  <Item.Description>
                    We want to improve your career. <br /> <br /> Whether you are looking for a new job or need help thinking about the next step – get in touch.
                  </Item.Description>
                  <Item.Extra>
                    <Button primary size={"mini"}>
                      LEARN MORE
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}



export default UserTypeSelection;
