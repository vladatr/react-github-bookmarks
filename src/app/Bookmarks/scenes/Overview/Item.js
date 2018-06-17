import React from 'react'
import add from '../../../../assets/add.png'
import added from '../../../../assets/added.png'


class Item extends React.Component {
    render() {
        const {item} = this.props
        console.log("ITEM", item)
        return (
            <div className="item" style={{backgroundColor: "white"}}>
                <table width="300px" border="0">
                    <tr>
                        <td  valign="center">
                            <div style={{color: "blue", backgroundColor: "white"}}>
                                {item.owner.login}/
                                <span style={{fontWeight: "bold"}}>{item.name}</span></div>
                            <div style={{color: "silver", fontSize: "0.8em"}}>
                                 <div style={{margin: "10px"}}> {item.description}</div>
                            
                                <span>{item.license && item.license.name}</span>
                                &#9733; {item.stargazers_count}
                            </div>
                    
                            </td>
                            <td align="center" valign="center">
                            
                                {this.props.addedRepos 
                                 ? this.props.addedRepos.filter(repo => repo.id == item.id).length==0 
                                        ? <div  className="iconLink"  onClick={() => this.props.onAddClickHandler(item)}>
                                                <img src="static/media/add.png" width="24px" />  </div> 
                                        : <div    className="iconLink"   onClick={() => this.props.onAddClickHandler(item)}>
                                                <img src="static/media/added.png" width="24px"/>  </div>  
                                 :  <div style={{width: "24px"}} dangerouslySetInnerHTML={{ __html: require('../../../../assets/close.svg') }}
                                         onClick={() => this.props.removeRepo(item)}     />   
                                        }
                                       
                               
                            </td>
                        </tr>
                </table>
                
            </div>
        )
    }
}



export default Item;