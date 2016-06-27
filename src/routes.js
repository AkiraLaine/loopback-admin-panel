export default {
  '/': {
    component: require('./components/MainView.vue'),
    name: 'main'
  },
  '/login': {
    component: require('./components/LoginView.vue'),
    name: 'login'
  },
  '/model/add': {
    component: require('./components/ModelAddView.vue'),
    name: 'model.add'
  }
}
