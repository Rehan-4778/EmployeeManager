import { createContext, useState } from "react";

const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {

    const [employees, setEmployees] = useState([])

    const fetchEmployees = async () => {
        let employees = await localStorage.getItem('employees');
        if (!employees) return;

        employees = JSON.parse(employees);

        setEmployees(employees);
    }

    const addEmployee = (employee) => {
        const id = Math.floor(Math.random() * 1000);

        const newEmployee = { ...employee, id };
        const newEmployees = [...employees, newEmployee];

        setEmployees(newEmployees);

        localStorage.setItem('employees', JSON.stringify(newEmployees));
    }

    const editEmployee = (emp) => {

        const updatedEmployee = employees.map((employee) => {
            if (employee.id === emp.id) {
                return emp;
            }
            return employee;
        })

        setEmployees(updatedEmployee);
        localStorage.setItem('employees', JSON.stringify(updatedEmployee));
    }

    const deleteEmployee = (id) => {

        const newEmployees = employees.filter((employee) => {
            return employee.id !== id
        })

        setEmployees(newEmployees);
        localStorage.setItem('employees', JSON.stringify(newEmployees))
    }

    return (
        <EmployeesContext.Provider value={{ employees, addEmployee, fetchEmployees, deleteEmployee, editEmployee }}>
            {children}
        </EmployeesContext.Provider>
    )
}

export { EmployeesProvider };
export default EmployeesContext;