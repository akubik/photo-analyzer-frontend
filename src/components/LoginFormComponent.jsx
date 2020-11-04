import React from 'react';

const authFormComponent = (props) => <div>
    <form onSubmit={props.onFormSubmitted}>
        <div className="form-control">
            <label htmlFor="login"></label>
            <input type="text" id="login"/>
        </div>
        <div className="form-control">
            <label htmlFor="password"></label>
            <input type="password" id="password"/>
        </div>
        <button type="submit">Login</button>
    </form>
</div>

export default authFormComponent;