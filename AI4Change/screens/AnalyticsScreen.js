const Main = () => {
    console.log(`http://${IP_ADDRESS}/data`);

    var bodyFormData = new FormData();
    bodyFormData.append('lon_lat_data', (0, 0));

    axios({
        method: "post",
        url: `http://${IP_ADDRESS}/data`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
        console.log(response.data);
        })
    }