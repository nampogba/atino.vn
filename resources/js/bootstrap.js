
window._ = require("lodash");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    // window.$ = window.jQuery = require('jquery');
    // require('bootstrap-sass');
} catch (e) { }

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
} else {
    console.error(
        "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
    );
}

let apiToken = document.head.querySelector('meta[name="api-token"]');
if (apiToken) {
    window.axios.defaults.headers.common["Authorization"] =
        "Bearer " + apiToken.content;
} else {
    console.error("API Token is not found. Please contact Admin");
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key',
//     cluster: 'mt1',
//     encrypted: true
// });

/**
 * Register progress bar event
 */
// window.axios.interceptors.request.use(
//     config => {
//         NProgress.start();
//         return config;
//     },
//     error => {
//         console.log("request", error);
//         return Promise.reject(error);
//     }
// );
//
// window.axios.interceptors.response.use(
//     response => {
//         // let loading = document.getElementById("loading");
//         // loading.style.display = "none";
//         NProgress.done();
//         return response;
//     },
//     error => {
//         NProgress.done();
//         return Promise.reject(error);
//     }
// );
