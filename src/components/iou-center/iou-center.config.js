module.exports = {
  content: '借条中心',
  router: true,
  vuex: {
    mutations: false,
    state: false
  },
  class: {
    'Check': false,
    'Http': true,
    'Mock': false,
    'Router': true,
    'Status': true,
    'Storage': true,
    'Time': false,
    'Type': true,
    'Url': false
  },
  components: {
    'billboard': false,
    'board': false,
    'button': false,
    'deadline': false,
    'detail-list': false,
    'image-bg': false,
    'inputs': false,
    'keyboard': false,
    'modals': false,
    'nav': `{
        content: ['谁欠我钱', '我欠谁钱', '待确认', '已还清', '已失效'],
        active: 'active'
      }`,
    'pay-password': false,
    'pull-refresh': false,
    'receipt': 1,
    'tab': false,
    'tip': false,
    'title': `{
        contentText: '借条中心',
        rightText: '排序'
      }`,
    'work-card': false
  }
}