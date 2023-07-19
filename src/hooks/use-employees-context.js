import { useContext } from "react";
import EmployeesContext from "../context/employees/employees";

function useEmployeesContext() {
    return useContext(EmployeesContext);
}

export default useEmployeesContext;