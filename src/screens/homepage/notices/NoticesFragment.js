import React from 'react'
import PropTypes from 'prop-types'

import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

const Notices = (props) => {

    return (
     <Container>
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>{props.title}</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  {props.body}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>{props.footer}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
}

export default Notices;