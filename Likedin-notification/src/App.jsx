import './App.css'
import { useRecoilValue ,RecoilRoot,useRecoilState,useSetRecoilState} from 'recoil';
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms';

function App() {
 return(
  <>
  <RecoilRoot>
    <MainApp/> 
  </RecoilRoot>
  </>
 )
}

function MainApp(){
 const networkNotificationCount = useRecoilValue(networkAtom);
 const jobsNotificationCount = useRecoilValue(jobsAtom);
 const messageCount = useRecoilValue(messagingAtom);
 const notifications = useRecoilValue(notificationAtom);
 const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return(
<> 
    <button> Home </button>
    <button> My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobsNotificationCount>=100 ? '99+' : jobsNotificationCount})</button>
    <button>Messaging ({messageCount>=100 ? '99+ ':messageCount})</button>
    <button>Notifications({notifications>=100 ? '99+':notifications})</button>
    <button>Me({totalNotificationCount})</button>
</>

  )
}

export default App
