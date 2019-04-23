import React from 'react';

const UserInfo = (props) => {
    const { bio } = props;
    let userInfo;
    
    if(bio) {
        userInfo = (
            <div className="card">
                <div className="card-header">
                    { bio.name }
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-fluid" src={ bio.avatar_url } alt={ bio.name } />
                            <a className="btn btn-info btn-block mt-3 mb-3" 
                                target="_blank" 
                                href={ bio.html_url }>View Profile</a>
                        </div>
                        <div className="col-sm-8">
                            <div className="stats mb-3">
                                <span className="badge badge-primary mr-1">
                                    { bio.public_gists } Public Gists
                                </span>
                                <span className="badge badge-secondary mr-1">
                                    { bio.public_repos } Public Repos
                                </span>
                                <span className="badge badge-success mr-1">
                                    { bio.following } Following
                                </span>
                                <span className="badge badge-danger mr-1">
                                    { bio.followers } Followers
                                </span>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Username: </strong> { bio.login }
                                </li>
                                <li className="list-group-item">
                                    <strong>Location: </strong> { bio.location }
                                </li>
                                <li className="list-group-item">
                                    <strong>Bio: </strong> { bio.bio }
                                </li>
                                <li className="list-group-item">
                                    <strong>Member Since: </strong> { bio.created_at }
                                </li>
                                <li className="list-group-item">
                                    <strong>Blog: </strong> { bio.blog }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 mt-3 mb-3">
                    { userInfo }
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserInfo;