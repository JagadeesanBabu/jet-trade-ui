import moment from 'moment'
export const startDateEndDate = days => 
{
   return {startDate:moment().subtract(days, "days").format("YYYY-MM-DD"),
          endDate:moment().format("YYYY-MM-DD")}
}