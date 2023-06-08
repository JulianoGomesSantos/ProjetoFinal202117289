import { useNavigate } from 'react-router-dom';
function Protected({ isSignedIn, children }) {
  navigate = useNavigate();
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default Protected;
