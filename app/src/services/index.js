const config = {
    host:'http://192.168.0.105/NghienCuuKhoaHoc/'
}

export default function post(route,data) {
    return fetch(config.host+route,{
        method:'POST',
        header: {
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => {return responseJson})
    .catch(function(error){
        return null
    });
}

export default function get(route) {

}