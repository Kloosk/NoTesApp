import axios from 'axios';
import {useQuery} from "react-query";
import {setObj} from "../redux";
import {useDispatch} from "react-redux";

export default function useEdit(id){
    const dispatch = useDispatch();
    return useQuery(
        'edit',
        () =>
            axios.get("https://notesappserver.herokuapp.com/api/notes/edit", {
                headers: {
                    'auth-token': localStorage.getItem("jwtToken"),
                    'id': id
                }}).then(res => res.data.data)
        ,{
            onSuccess: async (data) => await dispatch(setObj(data)),
            refetchOnWindowFocus: false
        }
    )}