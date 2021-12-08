// Import View(Pages) Linkes to the routes.js file
import DashboardHome from './views/DashboardHome.vue';
import SlideShow from './components/SlideShow.vue';
import QuizApp from './components/QuizApp.vue';
import Todolist from './components/Todolist.vue';
import SortTableContent from './components/SortTableContent.vue';
import ContactForm from './components/ContactForm.vue';

// Export the View-Page routes => this will be shown in the URL
export default [
    { name: 'contact', path: '/contact-form', component: ContactForm },
    { name: 'transaction', path: '/transaction', component: SortTableContent },
    { name: 'todolist', path: '/todolist', component: Todolist },
    { name: 'quiz', path: '/quiz', component: QuizApp },
    { name: 'loans', path: '/loans', component: SlideShow },
    { name: 'dashboard', path: '/', component: DashboardHome },
]