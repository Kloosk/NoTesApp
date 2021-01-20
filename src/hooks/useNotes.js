import axios from 'axios';
import {useQuery} from "react-query";

export default function useNotes(){
    return useQuery(
        'notes',
        () => axios.get("https://notesappserver.herokuapp.com/api/notes/dashboard", {
                headers: {
                    'auth-token': localStorage.getItem("jwtToken")
                }}).then(res => res.data.data)
        )

}