import React from 'react'

class Widgets extends React.Component {

    render() {
        return(
            <div>
               {this.props.bookmarks.groups  && this.props.bookmarks.groups.length>0 && this.props.bookmarks.groups.map(group => {
                    <Widget group={group} reposByGroups={this.props.bookmarks.reposByGroups} /> 
                    }
              )} 
            </div>
        )
    }
}

const Widget = ({group, reposByGroups}) => <div>
        <h2>{group}</h2>
        reposByGroups.map(repo => <div>{repo.name}</div> )
    </div>

export default Widgets;