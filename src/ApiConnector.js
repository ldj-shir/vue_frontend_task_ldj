export async function getAllCars() {

    const response = await fetch('/cars', {
        method: 'GET'
    });
    return await response.json();
}


export async function getCarById(data) {

    const response = await fetch('/car/' + data.id, {
        method: 'GET'
    })
    return await response.json();
}


//Das `type` Attribut des Autos kann folgende Werte enthalten: `"FOUR_WHEEL"`, `"FRONT_WHEEL"` oder `"REAR_WHEEL"`.
export async function createCar(data) {
    console.log(data);
    const response = await fetch(`/car`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "maxSpeedInKmH": data.maxSpeedInKmH,
            "name": data.name,
            "colour": data.colour,
            "type": data.type
        })
      })
    return await response.json();
}



export async function editCar(data) {

    const response = await fetch('/car/' + data.id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "id": data.id,
            "maxSpeedInKmH": data.maxSpeedInKmH,
            "name": data.name,
            "colour": data.colour,
            "type": data.type
        })
    })
    return await response.json();
}


export async function deleteCar(id) {

    const response = await fetch('/car/' + id, {
        method: 'DELETE'
    })
    return await response.json();
}

