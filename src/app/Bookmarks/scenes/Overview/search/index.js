import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import * as actions from '../../../../../actions'
import ItemsList from './ItemsList'

let theTimer = null

class SearchAndResult extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onFocusHandler = this.onFocusHandler.bind(this)
        this.onAddClickHandler = this.onAddClickHandler.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
        
    }

    componentDidMount() {
        debugger
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
      handleClickOutside(event) {
        if (this.props.show &&
            event.target.parentElement.classList.length &&  event.target.parentElement.classList[0].indexOf("icon")==-1) {
            this.props.dispatch(actions.hideRepos())
        }
      }

    onAddClickHandler(repo) {
        debugger
        this.props.dispatch(actions.addRepoToGroup(this.props.activeGroup, repo))
        this.props.dispatch(actions.hideRepos())
    }

    onFocusHandler() {
        debugger
        this.props.dispatch(actions.showRepos())
    }

    onChangeHandler(e) {

        console.log("FIRE", e.target.value)

            clearTimeout(theTimer)
            const qrepo =  e.target.value
            theTimer = setTimeout(() => {
                console.log("Search ", qrepo)
                debugger
                if(qrepo.length>0) {
                    this.props.dispatch(actions.getRepos(qrepo))
                } else {
                    this.props.dispatch(actions.emptyRepos())
                }
                
            }, 300);
   console.log(theTimer)
        
    }

    render() {
        return (
        <div>
            <Search onChangeHandler={this.onChangeHandler} 
                    items={this.props.show && this.props.items }
                    addedRepos={this.props.addedRepos}
                    onAddClickHandler={this.onAddClickHandler}
                    onFocusHandler={this.onFocusHandler}
                    />
            
        </div>
        )
    }
}



const Search = (props) => {
    debugger
    return (
        <div className="top">
            <Icon dangerouslySetInnerHTML={{ __html: require('../../../../../assets/search.svg') }} />
            <input type="text" size="50" placeholder="Search string..." 
                    onChange={props.onChangeHandler}
                    onFocus={props.onFocusHandler} />
            {props.items && <ItemsList items={props.items} addedRepos={props.addedRepos}
                                onAddClickHandler={props.onAddClickHandler} /> }
        </div>
    )
}

const Icon = styled.div`
width: 24px;
float: left;
`



const mapStateToProps = (state) =>  {
    return {
        items: state.get('results').items,
        show: state.get('results').show,
        activeGroup: state.get('bookmarks').activeGroup,
        addedRepos: state.get('bookmarks').addedRepos
    }
}

export default connect(mapStateToProps)(SearchAndResult);