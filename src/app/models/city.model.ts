export interface City {
    id: number;
    name: string;
    createDate: string;
    updateDate: string;
    cityId: string;
    weather: {
        weatherID: number,
        temp_min: number,
        temp_max: number
    };
    wind: {
        windId: number,
        speed: number
    };
}
