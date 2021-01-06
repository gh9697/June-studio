export const setCurrentPlaying = (curr_music) => {
    return {
        type: "SET_CURR_PLAYING",
        payload: curr_music
    };
}
export const setCurrentPlayingUser = (curr_user) => {
    return {
        type: "SET_CURR_USER",
        payload: curr_user
    };
}

export const setBookingStatus = (is_booked) => {
    return {
        type: "SET_BOOKING_STATUS",
        payload: is_booked
    };
}