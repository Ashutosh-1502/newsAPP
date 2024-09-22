import {UPDATE_ONBOARDING_STATUS} from "../constants/index";

export const updateOnboarding = (status) => {
    return {
        type: UPDATE_ONBOARDING_STATUS,
        status
    }
}
