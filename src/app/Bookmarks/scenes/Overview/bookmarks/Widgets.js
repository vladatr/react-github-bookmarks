import React from 'react'
import styled from 'styled-components'

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
                    reposByGroup={list}/>
                   )
                    }
              )} 
            </div>
        )
    }
}

const Widget = ({group, reposByGroup, setActiveGroup}) => {
    debugger
    return (
        <Wrapper> 
        <h2 style={{borderBottom: "1px solid silver"}}>
            <span onClick={() => setActiveGroup(group)}>{group}</span>
            <X>X</X>
        </h2>
        
        {reposByGroup.length>0 && reposByGroup.map(repo => <div>{repo.name}</div>)}
    </Wrapper>

    )

}

const Wrapper = styled.div`
display: block;
float:left;
background-color: white;
cursor: pointer;
width: 200px;
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