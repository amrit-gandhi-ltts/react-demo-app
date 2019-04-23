import React from 'react';

const UserSearchInput = (props) => {
    const { searchInput } = props;
    
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <input type="text" 
                        name="username"
                        className="form-control" 
                        placeholder="Enter user name"
                        onKeyUp={ searchInput } />
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserSearchInput;