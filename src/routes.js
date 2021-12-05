// Import View(Pages) Linkes to the routes.js file
import DashboardHome from './views/DashboardHome.vue';
import Features from './components/SlideShow.vue';
import QuizApp from './components/QuizApp.vue';
import Todolist from './components/Todolist.vue';
import CustomerDetailsTable from './components/SortTableContent.vue';
import ContactPage from './components/ContactForm.vue';

// Export the View-Page routes => this will be shown in the URL
export default [
    { name: 'contact', path: '/contact-form', component: ContactPage },
    { name: 'transaction', path: '/transaction', component: CustomerDetailsTable },
    { name: 'todolist', path: '/todolist', component: Todolist },
    { name: 'quiz', path: '/quiz', component: QuizApp },
    { name: 'features', path: '/features', component: Features },
    { name: 'dashboard', path: '/', component: DashboardHome },
]