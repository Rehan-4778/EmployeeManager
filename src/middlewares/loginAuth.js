import swal from 'sweetalert';

const loginAuth = async (userData) => {
    try {
        const user = await localStorage.getItem('user');
        if (!user) {
            swal("Invalid Credentials", "", "error", { timer: 2000 });
            return false;
        }

        const { email, password } = JSON.parse(user);
        if (userData.email !== email || userData.password !== password) {
            swal("Invalid Credentials", "", "error");
            return false;
        }
        return true;
    }
    catch (error) {
        swal("Something went wrong", "", "error");
        return false;
    }

}

export { loginAuth };