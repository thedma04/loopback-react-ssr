import React from 'react';



const Form = ({type, email, name, password, onChange, onSubmit}) => (
    <form onSubmit={onSubmit} className="col-md-4 col-md-offset-4">
        {
            type === 'Signup' &&
            <div className="form-group">
                <label htmlFor="text">Name</label>
                <input required onChange={onChange} type="text" name='name' value={name} className="form-control" />
            </div>
        }
        <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input required onChange={onChange} type="email" name='email' value={email} className="form-control" />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password:</label>
            <input required onChange={onChange} type="password" name='password' value={password} className="form-control" />
        </div>
         <button type="submit" className="btn btn-default">{type}</button>
     </form>
)

export default Form