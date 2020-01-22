import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    // upon the components rendering, fetch streams
    componentDidMount() {
        this.props.fetchStreams();
    };

    // checks if user is signed in, if so create the link
    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="streams/new" className="ui button primary"> 
                        Create Stream
                    </Link>

                </div>
            )
        }
    }
    
    // this will be called in render list
    // if the current video being rendered belongs to the signed in user, show buttons
    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    {/* <button className="ui button primary">Edit</button> */}
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    {/* <button className="ui button negative">Delete</button> */}
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            );
        };
    };

    renderList() {
        return this.props.streams.map((stream) => {
            return(
                <div key={stream.id} className="item">
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        <Link to={`streams/${stream.id}`} >{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    };
    
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );

    };
};

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);