import axiosInstance from "@/lib/axios"

export const loginWithGoogle = async (credentials: {email: string, name: string}) => {
    console.log(credentials);
    const response = await axiosInstance.post('/login', credentials)
    return response.data
}