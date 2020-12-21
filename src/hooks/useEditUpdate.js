import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadingFalse} from "../redux";

export const useEditUpdate = () => {
    const queryClient = useQueryClient();
    const history = useHistory();
    const dispatch = useDispatch();
    return useMutation(
        (data) => axios.post("https://notesappserver.herokuapp.com/api/users/edit", data,{headers: {'auth-token': localStorage.getItem("jwtToken")}})
            .then(res => res.data),
        {
            onSuccess: async () => {
                await queryClient.refetchQueries(['notes']);
                history.push("/dashboard");
                dispatch(loadingFalse());
            }
        }
    );
};