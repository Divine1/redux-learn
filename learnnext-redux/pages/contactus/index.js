import {connect} from 'react-redux';
import {VALIDATE_EMAIL} from '../../store/action/types'

class ContactusPage extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>ContactusPage</h2>
                <div>
                    email : {this.props.email}
                    <button onClick={this.props.updateEmail}>
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
        updateEmail : () => dispatch({
            type : VALIDATE_EMAIL,
            payload : { email : 'divine@gmail.com'}
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactusPage);