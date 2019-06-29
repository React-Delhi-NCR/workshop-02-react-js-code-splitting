import React from 'react';

const EditProfile = () => {
    return (
        <form>
            <hr />
            <input type="text" placeholder="Enter new username" />
            <input type="password" placeholder="Enter new password" />
            <input type="password" placeholder="Re-enter new password" />
            <br />
            <button>Save Profile</button>
        </form>
    );
};

export default EditProfile;