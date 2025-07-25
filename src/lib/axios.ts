import axios from 'axios';
const axiosInstance =axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_TEST_API}/api/auth`,
    withCredentials: true,
})

export default axiosInstance