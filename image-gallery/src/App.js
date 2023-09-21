import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import './index.css';
import Home from './components/Home';
import UserDef from './components/Realapp';
import LoginPage from './components/Signin';
import { Routes, Route } from 'react-router-dom';



const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="container m-5 p-5">
      <h2 >An Error Has Occurred somewhere in the App</h2>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary}>Go Home</button>
    </div>
  );
};

function App() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleClick}>
      <div className="App">
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<UserDef/>} />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;