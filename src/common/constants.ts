export enum RabbitMQ {
    UserQueue = 'users',
    PassengerQueue = 'passengers',
    FlightsQueue = 'flights',
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_ALL_USERS',
    FIND_BY_ID = 'FIND_USER_BY_ID',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER',
}

export enum PassengerMSG {
    CREATE = 'CREATE_Passenger',
    FIND_ALL = 'FIND_ALL_PassengerS',
    FIND_BY_ID = 'FIND_Passenger_BY_ID',
    UPDATE = 'UPDATE_Passenger',
    DELETE = 'DELETE_Passenger',
    VALID_PASSENGER = 'VALID_Passenger',
}

export enum FlightMSG {
    CREATE = 'CREATE_Flight',
    FIND_ALL = 'FIND_ALL_FlightS',
    FIND_BY_ID = 'FIND_Flight_BY_ID',
    UPDATE = 'UPDATE_Flight',
    DELETE = 'DELETE_Flight',
    VALID_FLIGHT = 'VALID_Flight',
    ADD_PASSENGER = 'ADD_PASSENGER',
}