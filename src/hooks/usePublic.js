import axios from 'axios';
import {useQuery} from "react-query";

export default function usePublic(){
    return useQuery(
        'public',
        () => axios.get("https://notesappserver.herokuapp.com/api/publicnotes", {
                headers: {
                    'auth-token': localStorage.getItem("jwtToken")
                }}).then(res => res.data)
    );
}