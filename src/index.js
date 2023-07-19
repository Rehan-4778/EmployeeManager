import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/auth/user';
import { EmployeesProvider } from './context/employees/employees';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <EmployeesProvider>
      <App />
    </EmployeesProvider>
  </UserProvider>
);