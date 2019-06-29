import React from 'react';
const EditProfile = React.lazy(() => import(/* webpackChunkName: 'edit-profile' */ './EditProfile'));

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditProfileButton: false
        };
    }

    showEditProfileButton() {
        this.setState(prevState => {
            return {
                showEditProfileButton: !prevState.showEditProfileButton
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.showEditProfileButton.bind(this)}>Edit Profile</button>
                {
                    this.state.showEditProfileButton && (
                        <EditProfile />
                    )
                }
            </React.Fragment >
        );
    }
};

export default Profile;