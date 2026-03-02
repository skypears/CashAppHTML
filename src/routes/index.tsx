import Inbox from '@/app/Inbox/inbox';
import MailDetails from '@/app/Inbox/mail-details';
import EnrichedFile from '@/app/Enriched_File/enriched-file'
import BatchID from '@/app/Enriched_File/batch-id'
import PaymentID from '@/app/Enriched_File/payment-id'
import ERPOpenInvoices from '@/app/ERP_Open/invoices'
import Login from '@/app/Login/login'
import {Logout} from '@/app/Login/login'
import ForgetPwd from '@/app/Login/forgot-pass'
const routes = [
  { path: '*', component: <Inbox /> },
  { path: '/', component: <Inbox /> },
    { path: '/inbox', component: <Inbox /> },
    { path: '/mail-details', component: <MailDetails /> },
    { path: '/enriched-file', component: <EnrichedFile /> },
    { path: '/batch-id', component: <BatchID /> },
    { path: '/payment-id', component: <PaymentID /> },
    { path: '/open-invoices', component: <ERPOpenInvoices /> }
];
const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
];
export { routes, publicRoutes }