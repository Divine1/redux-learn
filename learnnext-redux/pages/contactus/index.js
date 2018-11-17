import {connect} from 'react-redux';

import * as actionCreator from '../../store/action/creator';

class ContactusPage extends React.Component{

    constructor(props){
        super(props)
    }
    updateEmail = ()=>{
        let email = "react@microsoft.com";
        this.props.updateEmail(email);
    }
    render(){
        return(
            <div>
                <h2>ContactusPage</h2>
                <div>
                    email : {this.props.email}
                    <button onClick={this.updateEmail}>
                        updateEmail
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        email : state.contactus.email
    }
}
const mapDispatchToProps = dispatch => {
    return{
        updateEmail : (email) => dispatch(actionCreator.updateEmail(email))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactusPage);