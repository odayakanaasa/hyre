import React, { Component } from 'react'
import { Menu, Image, Container, Segment} from 'semantic-ui-react'
import hyreLogo from '../../images/hyreLogo.png'

export default class Header extends Component {
  render() {
    return (

      <Container>
        <div>
        <Menu style={{ fontWeight: 'bold' }} borderless fixed={'top'}>
          <Menu.Item name="logo">
            <Image style={{ margin: '0' }} size="small" src={hyreLogo} />
          </Menu.Item>
          <Menu.Item name="employers">EMPLOYERS</Menu.Item>

          <Menu.Item name="candidates">CANDIDATES</Menu.Item>

          <Menu.Item name="Hyre Associates">HYRE ASSOCIATES</Menu.Item>
          <Menu.Item name="Hyre Blog">HYRE BLOG</Menu.Item>
        </Menu>
        </div>
      </Container>
    )
  }
}
