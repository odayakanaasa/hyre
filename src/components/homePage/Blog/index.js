import React, { Component } from 'react'
import { Grid, Menu, Image, Container, Segment, Card, Item, Button, Responsive} from 'semantic-ui-react'
import stairsImage from '../../../images/stairs.png';



class Blog extends Component {
  render() {
    return (
      <div>
        <Grid container textAlign={'center'}>
          <Grid.Row>
            <Grid.Column width={6}>
              <Item style={{height: "100%", color: "#401D5B", backgroundColor: "#C6D9F1"}}>
                <Item.Content style={{padding: "30px"}} verticalAlign={"middle"}>
                  <Item.Header as={"h5"}>
                    5 ways to achieve career success
                  </Item.Header>
                  <Item.Description>
                    --insert the beginning of a blog article here--
                  </Item.Description>
                  <Item.Extra>
                    <Button primary size={"mini"}>
                      READ MORE
                    </Button>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Grid.Column>
            <Grid.Column only={'computer'} width = {10}>
              <Image style={{margin:"0", height:"100%"}} verticalAlign={"middle"} centered src={stairsImage} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}



export default Blog;
