import React from 'react'
import PropTypes from 'prop-types'
import profileImage from "../../../assets/me.jpg";
import {
  Image
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { View } from 'react-native';
import styles from './Style'

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
                <View style={{width:100,height:100}}>
                  <Image
                    source={profileImage}
                    style={styles.profileImage}
                  />
                    <Text>{props.title}</Text>
                  </View>
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