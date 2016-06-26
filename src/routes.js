export default {
  '/': {
    component: require('./components/MainView.vue'),
    name: 'main'
  },
  '/model/add': {
    component: require('./components/ModelAddView.vue'),
    name: 'model.add'
  }
}
