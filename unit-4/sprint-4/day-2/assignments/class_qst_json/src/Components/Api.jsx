import axios from "axios";

export default function GetApi(params={}) {
    return axios.get(`http://localhost:3000/Country`,{
        params:{
            _page: params.page,
            _limit:params.limit,
            _sort:params.sort,
            _order:params.order
        }
    })
};

/////////---------------POST-----------////////////////////////

export function AddNewCountry(data={}){
    return axios({
        method:'post',
        url:'http://localhost:3000/Country',
        data:{
            country:data.country,
            population:data.population
        }
    })
}

//////------------DELETE-----------------///////////////////////////

export function DeleteCountry(id){
    return axios({
        method:'delete',
        url:`http://localhost:3000/Country/${id}`
    })

}