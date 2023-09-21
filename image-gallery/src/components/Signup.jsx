



const Signup =()=>{
return(
    <>
      <div className="container mt-5">
      <div className="page-banner2">
        {/* ... Other HTML elements ... */}
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-primary btn-lg align-items-center mt-5 px-5 fw-md"
            onClick={handleLogin}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="px-4" style={{ color: "antiquewhite" }}>
            Already have an account? <a href="/sign">Sign in</a>
          </p>
        </div>
    
      </div>
    </div>
    </>
)
}
export default Signup;