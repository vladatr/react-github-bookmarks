import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../../../../../actions'
import Widgets from './Widgets'
import EmptyWidget from './EmptyWidget'

class Bookmarks extends React.Component {
    constructor(props) {
        super(props)
        this.addGroup = this.addGroup.bind(this)
    }

    addGroup = (name) => {
        this.props.dispatch(actions.addGroup(name))
        this.props.dispatch(actions.addRepoToGroup(name, "repo1"))
    }

    render() {
        return (
            <div className="flex-widgets">
                <Widgets bookmarks={this.props.bookmarks}  />
                <EmptyWidget addGroup={this.addGroup} />
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