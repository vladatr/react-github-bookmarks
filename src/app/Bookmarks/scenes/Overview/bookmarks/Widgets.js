import React from 'react'
import styled from 'styled-components'

import Item from '../Item'

class Widgets extends React.Component {

    render() {
        debugger
        let list = []
        return(
            <div>
               {this.props.bookmarks.groups  && this.props.bookmarks.groups.length>0 && this.props.bookmarks.groups.map(group => {
                  {list = this.props.bookmarks.reposByGroups.filter(g => g.group==group) } 
                  return (
                    
                   <Widget group={group} setActiveGroup={this.props.setActiveGroup}
                    reposByGroup={list} removeGroup={this.props.removeGroup} removeRepo={this.props.removeRepo} />
                   )
                    }
              )} 
            </div>
        )
    }
}

const Widget = ({group, reposByGroup, setActiveGroup, removeGroup, removeRepo}) => {
    debugger
    return (
        <Wrapper> 
            <X onClick={() => removeGroup(group)}> X </X>

            <div onClick={() => setActiveGroup(group)}>{group}</div>
  
        
        {reposByGroup.length>0 && reposByGroup.map(group => <Item item={group.repo} removeRepo={removeRepo} />)}
    </Wrapper>

    )

}

const Wrapper = styled.div`
display: block;
float:left;
background-color: white;
cursor: pointer;
width: 330px;
margin: 15px;
padding: 10px;
align-items: center;
justify-content: center;
border: 1px solid silver;
border-radius: 2px;
`

const X = styled.div`
position: relative;
float: right;
cursor: pointer;
`

export default Widgets;