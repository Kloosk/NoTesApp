import axios from 'axios';
import {useQuery} from "react-query";
import {setObj} from "../redux";
import {useDispatch} from "react-redux";

export default function useEdit(id){
    const dispatch = useDispatch();
    return useQuery(
        'edit',
        () =>
            axios.get("https://notesappserver.herokuapp.com/api/users/edit", {
                headers: {
                    'auth-token': localStorage.getItem("jwtToken"),
                    'id': id
                }}).then(res => dispatch(setObj(res.data.data)))
    )}