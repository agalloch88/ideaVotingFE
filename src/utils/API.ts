import { Auth } from "aws-amplify";

const baseURL = process.env.REACT_APP_API_URL;

const request = async ({path, method, data}) => {
    const user = await Auth.currentSession();

    const axiosRes = await Axios.request({
        headers: {
            Authorization: `Bearer ${user.getIdToken().getJwtToken()}`,
        },
        method,
        data,
        url: `${baseURL}/${path}`,
    })
}