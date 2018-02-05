import React, {Component} from 'react'
import {
  Button, Card, Container, Grid, Header, Image, Item, Menu, Responsive, Segment,
  Statistic
} from 'semantic-ui-react'
import roryPhoto from '../../../images/roryPhoto.png';


class MeetRory extends Component {
  render() {
    return (
      <Grid style={{
        height: "100%",
        color: "#401D5B",
        backgroundColor: "#C6D9F1",
        margin: "20px auto 20px auto"
      }} container
            textAlign={"center"}>
        <Grid.Row fluid>
          <Container textAlign={"left"}
                     style={{ height: "100%", color: "#401D5B", backgroundColor: "#C6D9F1" }} fluid>
            <Header as="h4">
              Meet Rory!
            </Header>
            <Header as="h5">
              Hyre Founder and Recruitment Expert
            </Header>
          </Container>
        </Grid.Row>
        <Grid.Row fluid>
          <Grid.Column width={4}>
            <Image rounded size="large" src={roryPhoto}/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid.Row>
              <Header as={"h5"}>
                “I’m only really happy when I’m being challenged and trying to improve things...”
              </Header>
            </Grid.Row>

            <Grid centered columns={4}>
              <Grid.Row>
                <Grid.Column stretched style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}} computer={4} tablet={8}>
                  <Item style={{ backgroundColor: "#00A1C2", margin:"10px", padding:"15px"  }}>
                    <Statistic size={"tiny"}>
                      <Statistic.Value>7</Statistic.Value>
                      <Statistic.Label>Years working as senior IT recruitment
                        expert</Statistic.Label>
                    </Statistic>
                  </Item>
                </Grid.Column>
                <Grid.Column  stretched style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}} textAlign="center" computer={4} tablet={8}>
                  <Item style={{ backgroundColor: "#00A1C2", margin:"10px", padding:"15px"  }}>
                    <Statistic size={"tiny"}>
                      <Statistic.Label>Network of</Statistic.Label>
                      <Statistic.Value>100+</Statistic.Value>
                      <Statistic.Label>IT professionals from around the globe</Statistic.Label>
                    </Statistic>
                  </Item>
                </Grid.Column>
                <Grid.Column  stretched style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}} computer={4} tablet={8}>
                  <Item style={{ backgroundColor: "#00A1C2", margin:"10px", padding:"15px" }}>
                    <Statistic size={"tiny"}>
                      <Statistic.Value>7</Statistic.Value>
                      <Statistic.Label>Years working as senior IT recruitment
                        expert</Statistic.Label>
                    </Statistic>
                  </Item>
                </Grid.Column>
                <Grid.Column  stretched style={{paddingLeft:"0.5rem", paddingRight:"0.5rem"}} computer={4} tablet={8}>
                  <Item style={{ backgroundColor: "#00A1C2", margin:"10px", padding:"15px"  }}>
                    <Statistic size={"tiny"}>
                      <Statistic.Value>7</Statistic.Value>
                      <Statistic.Label>Years working as senior IT recruitment
                        expert</Statistic.Label>
                    </Statistic>
                  </Item>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={{padding: "20px"}}>
                <Button primary fluid>
                  START A CONVERSATION WITH RORY
                </Button>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}


export default MeetRory;
