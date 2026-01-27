import { HTTP_STATUS } from "../../../../src/constants/httpConstants";
import { Event , Attendee , event , attendee} from "../models/eventModules"


export const getAllEvent = () : Event[] => {
    return event;
}