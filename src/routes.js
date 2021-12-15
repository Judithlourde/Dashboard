// Import View(Pages) Linkes to the routes.js file
import DashboardView from './views/DashboardView.vue';
import SlideShowView from './views/SlideShowView.vue';
import QuizAppView from './views/QuizAppView.vue';
import TodolistView from './views/TodolistView.vue';
import SortTableView from './views/SortTableView.vue';
import ContactFormView from './views/ContactFormView.vue';

// Export the View-Page routes => this will be shown in the URL
// (missing catch-all 😬)
export default [
    { name: 'contact', path: '/contact-form', component: ContactFormView },
    { name: 'transaction', path: '/transaction', component: SortTableView },
    { name: 'todolist', path: '/todolist', component: TodolistView },
    { name: 'quiz', path: '/quiz', component: QuizAppView },
    { name: 'loans', path: '/loans', component: SlideShowView },
    { name: 'dashboard', path: '/', component: DashboardView },
]