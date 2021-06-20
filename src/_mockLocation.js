import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 90.41 + increment * tenMetersWithDegrees,
            latitude: 23.81 + increment + tenMetersWithDegrees
        }
    };
};

let counter = 0;

setImmediate(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);