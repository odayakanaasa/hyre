import React, {Component} from 'react'
import {Button, Container, Grid, Header, Icon, Item, List} from 'semantic-ui-react'


class WouldULikeTo extends Component {
  render() {
    return (
      <div>
        <Grid container textAlign={'center'}>
          <Grid.Row textAlign={"center"} columns={3}>
            <Grid.Column tablet={8} textAlign={"center"} computer={6}>
              <Item style={{
                padding: "15px",
                height: "100%",
                color: "#401D5B",
                backgroundColor: "#C6D9F1"
              }}>
                <List style={{ marginRight: "auto", marginLeft: "auto" }}>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Recruit top quality candidates?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Recruit for a large-scale IT project?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Save time on recruitment?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Save money on recruitment?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Get advice on your hiring strategy?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Discuss your options?
                    </List.Content>
                  </List.Item>
                </List>
                <Button primary>
                  EMPLOYERS
                </Button>
              </Item>
            </Grid.Column>

            <Grid.Column width={4} only={"computer"}>
              <Header as="h3">
                Would you like to...
              </Header>
              <Icon size="massive" name={"thumbs up"}/>
            </Grid.Column>

            <Grid.Column computer={6} tablet={8}>
              <Item style={{
                padding: "15px",
                height: "100%",
                color: "#401D5B",
                backgroundColor: "#C6D9F1"
              }}>
                <List>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Get more from your career?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Improve your salary?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Discuss your options?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Apply for a new job?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Improve your CV?
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name={"chevron right"}/>
                    <List.Content>
                      Get interview advice?
                    </List.Content>
                  </List.Item>
                </List>
                <Button primary>
                  CANDIDATES
                </Button>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}


export default WouldULikeTo;
