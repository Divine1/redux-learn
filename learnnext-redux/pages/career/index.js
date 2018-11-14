import {connect} from 'react-redux';


class CareerPage extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h2>CareerPage</h2>
                <div>
                    jobTitle : {this.props.jobTitle}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        jobTitle : state.career.jobTitle
    }
}

export default connect(mapStateToProps)(CareerPage);