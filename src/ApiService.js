export async function getAllCars() {

    const response = await fetch('/cars');
    return await response.json();
}


//Das `type` Attribut des Autos kann folgende Werte enthalten: `"FOUR_WHEEL"`, `"FRONT_WHEEL"` oder `"REAR_WHEEL"`.
export async function createCar() {
    const response = await fetch(`/car`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "maxSpeedInKmH": "0.0",
            "name": "testCar",
            "colour": "black",
            "type": "FOUR_WHEEL"
        })
      })
    return await response.json();
}