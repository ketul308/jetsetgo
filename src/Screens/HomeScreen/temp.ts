export const tempData = [
    {
        "displayData": {
            "airlines": [
                {
                    "airlineCode": "AB",
                    "airlineName": "JetSpice",
                    "flightNumber": "1234"
                }
            ],
            "destination": {
                "airport": {
                    "airportCode": "BOM",
                    "airportName": "Mumbai",
                    "cityCode": "BOM",
                    "cityName": "Mumbai",
                    "countryCode": "IN",
                    "countryName": "India",
                    "terminal": "2"
                },
                "arrTime": "2023-03-31T08:40"
            },
            "source": {
                "airport": {
                    "airportCode": "DEL",
                    "airportName": "Indira Gandhi Airport",
                    "cityCode": "DEL",
                    "cityName": "Delhi",
                    "countryCode": "IN",
                    "countryName": "India",
                    "terminal": "3"
                },
                "depTime": "2023-03-31T06:20"
            },
            "stopInfo": "Non stop",
            "totalDuration": "2h 20m"
        },
        "fare": 3840,
        "id": "1"
    }
]

export interface Weather {
    displayData: DisplayData;
    fare: number;
    id: string;
}
export interface DisplayData {
    airlines?: (AirlinesEntity)[] | null;
    destination: Destination;
    source: Source;
    stopInfo: string;
    totalDuration: string;
}
export interface AirlinesEntity {
    airlineCode: string;
    airlineName: string;
    flightNumber: string;
}
export interface Destination {
    airport: Airport;
    arrTime: string;
}
export interface Airport {
    airportCode: string;
    airportName: string;
    cityCode: string;
    cityName: string;
    countryCode: string;
    countryName: string;
    terminal: string;
}
export interface Source {
    airport: Airport;
    depTime: string;
}
