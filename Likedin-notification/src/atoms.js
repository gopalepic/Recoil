import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key:"networkAtom",
    default:102
});
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});
export const notificationAtom = atom({
    key:"notificationAtom",
    default:12
});
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
});

export const totalNotificationSelector = selector({
    key:"totalNotificationsCount",
    get:({get}) => {
      const  jobsNotificationCount = get(jobsAtom);
      const   networkNotificationCount = get(networkAtom);
      const   notifications= get(notificationAtom);
      const  messageCount = get(messagingAtom);
     return jobsNotificationCount + networkNotificationCount+ notifications + messageCount;
    }
   })


