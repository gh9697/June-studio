import musicDB from "../db/musicDB";

export const initialState = {
    playlists: musicDB,
    playing:null,
    user: null,
    booking: false,
};

const musicReducer = (state=initialState,action) => {
    switch (action.type){
        case "SET_CURR_PLAYING":
            return {
                ...state,
                playing: action.payload
            }
        case "SET_CURR_USER":
            return {
                ...state,
                user: action.payload
            }
        case "SET_BOOKING_STATUS":
            return {
                ...state,
                booking: action.payload
            }
        default:
            return state;
    }
};

export default musicReducer;