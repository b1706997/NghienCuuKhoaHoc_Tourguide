const config = {
    host:'http://localhost:1337/NghienCuuKhoaHoc/'
}
// const config = {
//     host:'https://frozen-harbor-17510.herokuapp.com/'
// }

export async function post(route,data) {
    let response = await fetch(config.host+route,{
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          dataType: 'json',
        // mode:'no-cors',
        body: JSON.stringify(data)
    })
    return response.json()

    // fetch(config.host+route,{
    //     method:'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       dataType: 'json',
    //     mode:'no-cors',
    //     body: JSON.stringify(data)
    // }).then(response =>  return response)
    


}