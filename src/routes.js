// Import View(Pages) Linkes to the routes.js file
import DashboardHome from './views/DashboardHome.vue';
import SlideShowView from './views/SlideShowView.vue';
import QuizAppView from './views/QuizAppView.vue';
import TodoView from './views/TodoView.vue';
import SortTableView from './views/SortTableView.vue';
import ContactFormView from './views/ContactFormView.vue';

// Export the View-Page routes => this will be shown in the URL
export default [
    { name: 'contact', path: '/contact-form', component: ContactFormView },
    { name: 'transaction', path: '/transaction', component: SortTableView },
    { name: 'todolist', path: '/todolist', component: TodoView },
    { name: 'quiz', path: '/quiz', component: QuizAppView },
    { name: 'loans', path: '/loans', component: SlideShowView },
    { name: 'dashboard', path: '/', component: DashboardHome },
]