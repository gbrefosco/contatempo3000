import Moment from 'moment';

export default {
    parseTimestamp(time, template) {
        return Moment(parseInt(time)*1000).format(template);
    }
}