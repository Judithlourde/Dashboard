// Import View(Pages) Linkes to the routes.js file
import Dashboard from './views/Dashboard.vue';
import Features from './views/Features.vue';
import QuizApp from './views/QuizApp.vue';
import TodoList from './views/TodoList.vue';
import CustomerDetailsTable from './views/CustomerDetailsTable.vue';
import ContactPage from './views/ContactPage.vue';

// Export the View-Page routes => this will be shown in the URL
export default [
    { name: 'contact', path: '/contact-form', component: ContactPage },
    { name: 'transaction', path: '/transaction', component: CustomerDetailsTable },
    { name: 'todolist', path: '/todolist', component: TodoList },
    { name: 'quiz', path: '/quiz', component: QuizApp },
    { name: 'features', path: '/features', component: Features },
    { name: 'dashboard', path: '/', component: Dashboard },
]