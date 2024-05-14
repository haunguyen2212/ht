import { format, formatDistanceToNow, isBefore, subDays } from "date-fns";
import { vi } from "date-fns/locale";

export const formatDateToString = (date: string): string => {
    const dateObj = new Date(date);
    const now = new Date();

    if(isBefore(dateObj, subDays(now, 30))){
        return format(dateObj, 'dd/MM/yyyy');
    }
    else{
        return formatDistanceToNow(dateObj, { addSuffix: true, locale: vi });
    }
}