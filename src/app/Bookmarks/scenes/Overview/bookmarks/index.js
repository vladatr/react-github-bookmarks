import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../../../../../actions'
import Widgets from './Widgets'
import EmptyWidget from './EmptyWidget'

class Bookmarks extends React.Component {
    constructor(props) {
        super(props)
        this.addGroup = this.addGroup.bind(this)
        this.setActiveGroup = this.setActiveGroup.bind(this)
        this.removeGroup = this.removeGroup.bind(this)
        this.removeRepo = this.removeRepo.bind(this)
    }

    addGroup = (name) => {
        if(name.trim() == "") {
            this.props.dispatch(actions.setError("Enter group name."))
        } else {
            this.props.dispatch(actions.addGroup(name))
        }
        
    }

    removeGroup = (name) => {
        this.props.dispatch(actions.removeGroup(name))     
    }

    removeRepo = (item) => {
        this.props.dispatch(actions.removeRepo(item))     
    }

    setActiveGroup = (name) => {
        this.props.dispatch(actions.setActiveGroup(name))
    }

    render() {
        debugger
        return (
        <div>
            <div>{this.props.bookmarks.err}</div>
            <div className="flex-widgets">
                <Widgets bookmarks={this.props.bookmarks} 
                         setActiveGroup={this.setActiveGroup}
                         removeGroup={this.removeGroup}
                         removeRepo={this.removeRepo} />
                <EmptyWidget addGroup={this.addGroup} />
            </div>
        </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        bookmarks: state.get('bookmarks')
    }
}



export default connect(mapStateToProps)(Bookmarks);