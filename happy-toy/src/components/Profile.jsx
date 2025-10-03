import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">Profile Form</h3>
          <form>
            <div className="mb-5">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                autoComplete="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password"
              />
            </div>
            <button className='btn btn-primary'>submit</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Profile;