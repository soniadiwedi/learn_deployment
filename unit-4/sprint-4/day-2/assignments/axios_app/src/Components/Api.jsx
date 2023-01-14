import axios from "axios";

export default function GetApi(params={}) {
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`,{
        params:{
            page: params.page,
            limit:params.limit,
            sort:params.sort,
            order:params.order
        }
    })
};
