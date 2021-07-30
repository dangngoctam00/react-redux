import { connect } from "react-redux";

function UserInfo(props) {
    return (
        <div>
            <h2>{props.info?.name}</h2>
            <h2>{props.info?.email}</h2>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        info: state.info
    }
}

export default connect(mapStateToProps, null)(UserInfo);