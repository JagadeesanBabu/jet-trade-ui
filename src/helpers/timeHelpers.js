import * as moment from 'moment';

/**
 * transforms and formats date to the desired form
 * @param {Date} date
 * @returns {string}
 */
export const formatDate = date => moment(new Date(date)).format('MM-DD-YYYY');
