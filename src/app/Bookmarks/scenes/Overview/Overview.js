import React from 'react'
import styled from 'styled-components'

import SearchAndResult from './search';
import Bookmarks from './bookmarks';

export default class Home extends React.PureComponent {
  render () {
    return (
      <Wrapper>
        <SearchAndResult />
        <Bookmarks />
        <Background>
          <Message>
            Happy Coding!
            <Icon dangerouslySetInnerHTML={{ __html: require('../../../../assets/cool.svg') }} />
         </Message>
        </Background>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Message = styled.div`
  font-size: 62px;
`

const Icon = styled.div``

const Background = styled.div`
position: absolute;
top: 50px;
left 0px;
z-index:0;
opacity: 0.2;
margin: 0 auto;
`
