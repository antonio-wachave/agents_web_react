import lib from 'dayjs';
import 'dayjs/locale/pt-Br';
import relativeTime from 'dayjs/plugin/relativeTime';

lib.locale('pt-Br');
lib.extend(relativeTime);

export const dayjs = lib;