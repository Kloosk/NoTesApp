import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query'
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loadingFalse, setMove} from "../redux";

export const useAdd = () => {
    const queryClient = useQueryClient();
    const history = useHistory();
    const dispatch = useDispatch();
    return useMutation(
        (data) =>  axios.post("https://notesappserver.herokuapp.com/api/users/add", data,{headers: {'auth-token': localStorage.getItem("jwtToken")}})
            .then(res => res.data),
        {
            onSuccess: async () => {
                await queryClient.refetchQueries(['notes']);
                localStorage.removeItem('noteSave');// delete own style note
                dispatch(setMove(0));
                dispatch(loadingFalse());
                history.push("/dashboard");
            }
        }
    );
};