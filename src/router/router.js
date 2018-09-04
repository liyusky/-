import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const AboutPayPasswordSettingsComponent = () => import(/* webpackChunkName: 'about-pay-password-settings' */ '../components/about-pay-password-settings/about-pay-password-settings.vue')
const AccountBalanceComponent = () => import(/* webpackChunkName: 'account-balance' */ '../components/account-balance/account-balance.vue')
const AccountDetailComponent = () => import(/* webpackChunkName: 'account-detail' */ '../components/account-detail/account-detail.vue')
const AccountStatisticComponent = () => import(/* webpackChunkName: 'account-statistic' */ '../components/account-statistic/account-statistic.vue')
const BindBankCardComponent = () => import(/* webpackChunkName: 'bind-bank-card' */ '../components/bind-bank-card/bind-bank-card.vue')
const BlackListComponent = () => import(/* webpackChunkName: 'black-list' */ '../components/black-list/black-list.vue')
const BorrowListComponent = () => import(/* webpackChunkName: 'borrow-list' */ '../components/borrow-list/borrow-list.vue')
const CancelAccountComponent = () => import(/* webpackChunkName: 'cancel-account' */ '../components/cancel-account/cancel-account.vue')
const ConfirmCancelAccountComponent = () => import(/* webpackChunkName: 'confirm-cancel-account' */ '../components/confirm-cancel-account/confirm-cancel-account.vue')
const CreditComponent = () => import(/* webpackChunkName: 'credit' */ '../components/credit/credit.vue')
const CreditQueryComponent = () => import(/* webpackChunkName: 'credit-query' */ '../components/credit-query/credit-query.vue')
const CreditQueryResultComponent = () => import(/* webpackChunkName: 'credit-query-result' */ '../components/credit-query-result/credit-query-result.vue')
const EmpowerComponent = () => import(/* webpackChunkName: 'empower' */ '../components/empower/empower.vue')
const ExhibitionStatusComponent = () => import(/* webpackChunkName: 'exhibition-status' */ '../components/exhibition-status/exhibition-status.vue')
const ExhibitonPeriodComponent = () => import(/* webpackChunkName: 'exhibiton-period' */ '../components/exhibiton-period/exhibiton-period.vue')
const FamilarQuestionComponent = () => import(/* webpackChunkName: 'familar-question' */ '../components/familar-question/familar-question.vue')
const FindComponent = () => import(/* webpackChunkName: 'find' */ '../components/find/find.vue')
const ForgetPasswordComponent = () => import(/* webpackChunkName: 'forget-password' */ '../components/forget-password/forget-password.vue')
const FriendComponent = () => import(/* webpackChunkName: 'friend' */ '../components/friend/friend.vue')
const IdentityVerificationComponent = () => import(/* webpackChunkName: 'identity-verification' */ '../components/identity-verification/identity-verification.vue')
const ImmediateRepaymentComponent = () => import(/* webpackChunkName: 'Immediate-repayment' */ '../components/Immediate-repayment/Immediate-repayment.vue')
const IndexComponent = () => import(/* webpackChunkName: 'index' */ '../components/index/index.vue')
const IouDetailComponent = () => import(/* webpackChunkName: 'iou-detail' */ '../components/iou-detail/iou-detail.vue')
const LendListComponent = () => import(/* webpackChunkName: 'lend-list' */ '../components/lend-list/lend-list.vue')
const LendingInformationComponent = () => import(/* webpackChunkName: 'lending-information' */ '../components/lending-information/lending-information.vue')
const MineComponent = () => import(/* webpackChunkName: 'mine' */ '../components/mine/mine.vue')
const ModefyPayPasswordComponent = () => import(/* webpackChunkName: 'modefy-pay-password' */ '../components/modefy-pay-password/modefy-pay-password.vue')
const MyBankCardComponent = () => import(/* webpackChunkName: 'my-bank-card' */ '../components/my-bank-card/my-bank-card.vue')
const NewsComponent = () => import(/* webpackChunkName: 'news' */ '../components/news/news.vue')
const PersonalInfoComponent = () => import(/* webpackChunkName: 'personal-info' */ '../components/personal-info/personal-info.vue')
const PublishComponent = () => import(/* webpackChunkName: 'publish' */ '../components/publish/publish.vue')
const PurposeComponent = () => import(/* webpackChunkName: 'purpose' */ '../components/purpose/purpose.vue')
const SelectBankCardComponent = () => import(/* webpackChunkName: 'select-bank-card' */ '../components/select-bank-card/select-bank-card.vue')
const SetPayPasswordComponent = () => import(/* webpackChunkName: 'set-pay-password' */ '../components/set-pay-password/set-pay-password.vue')
const SettingsComponent = () => import(/* webpackChunkName: 'settings' */ '../components/settings/settings.vue')
const TransactionsComponent = () => import(/* webpackChunkName: 'transactions' */ '../components/transactions/transactions.vue')
const TransferDetailComponent = () => import(/* webpackChunkName: 'transfer-detail' */ '../components/transfer-detail/transfer-detail.vue')
const TransferRecordComponent = () => import(/* webpackChunkName: 'transfer-record' */ '../components/transfer-record/transfer-record.vue')
const WannaBorrowComponent = () => import(/* webpackChunkName: 'wanna-borrow' */ '../components/wanna-borrow/wanna-borrow.vue')
export default new Router({
  routes: [
    {
      path: '/about-pay-password-settings',
      name: 'about-pay-password-settings',
      component: AboutPayPasswordSettingsComponent
    },
    {
      path: '/account-balance',
      name: 'account-balance',
      component: AccountBalanceComponent
    },
    {
      path: '/account-detail',
      name: 'account-detail',
      component: AccountDetailComponent
    },
    {
      path: '/account-statistic',
      name: 'account-statistic',
      component: AccountStatisticComponent
    },
    {
      path: '/bind-bank-card',
      name: 'bind-bank-card',
      component: BindBankCardComponent
    },
    {
      path: '/black-list',
      name: 'black-list',
      component: BlackListComponent
    },
    {
      path: '/borrow-list',
      name: 'borrow-list',
      component: BorrowListComponent
    },
    {
      path: '/cancel-account',
      name: 'cancel-account',
      component: CancelAccountComponent
    },
    {
      path: '/confirm-cancel-account',
      name: 'confirm-cancel-account',
      component: ConfirmCancelAccountComponent
    },
    {
      path: '/credit',
      name: 'credit',
      component: CreditComponent
    },
    {
      path: '/credit-query',
      name: 'credit-query',
      component: CreditQueryComponent
    },
    {
      path: '/credit-query-result',
      name: 'credit-query-result',
      component: CreditQueryResultComponent
    },
    {
      path: '/empower',
      name: 'empower',
      component: EmpowerComponent
    },
    {
      path: '/exhibition-status',
      name: 'exhibition-status',
      component: ExhibitionStatusComponent
    },
    {
      path: '/exhibiton-period',
      name: 'exhibiton-period',
      component: ExhibitonPeriodComponent
    },
    {
      path: '/familar-question',
      name: 'familar-question',
      component: FamilarQuestionComponent
    },
    {
      path: '/find',
      name: 'find',
      component: FindComponent
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: ForgetPasswordComponent
    },
    {
      path: '/friend',
      name: 'friend',
      component: FriendComponent
    },
    {
      path: '/identity-verification',
      name: 'identity-verification',
      component: IdentityVerificationComponent
    },
    {
      path: '/Immediate-repayment',
      name: 'Immediate-repayment',
      component: ImmediateRepaymentComponent
    },
    {
      path: '/index',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/iou-detail',
      name: 'iou-detail',
      component: IouDetailComponent
    },
    {
      path: '/lend-list',
      name: 'lend-list',
      component: LendListComponent
    },
    {
      path: '/lending-information',
      name: 'lending-information',
      component: LendingInformationComponent
    },
    {
      path: '/mine',
      name: 'mine',
      component: MineComponent
    },
    {
      path: '/modefy-pay-password',
      name: 'modefy-pay-password',
      component: ModefyPayPasswordComponent
    },
    {
      path: '/my-bank-card',
      name: 'my-bank-card',
      component: MyBankCardComponent
    },
    {
      path: '/news',
      name: 'news',
      component: NewsComponent
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: PersonalInfoComponent
    },
    {
      path: '/publish',
      name: 'publish',
      component: PublishComponent
    },
    {
      path: '/purpose',
      name: 'purpose',
      component: PurposeComponent
    },
    {
      path: '/select-bank-card',
      name: 'select-bank-card',
      component: SelectBankCardComponent
    },
    {
      path: '/set-pay-password',
      name: 'set-pay-password',
      component: SetPayPasswordComponent
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsComponent
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsComponent
    },
    {
      path: '/transfer-detail',
      name: 'transfer-detail',
      component: TransferDetailComponent
    },
    {
      path: '/transfer-record',
      name: 'transfer-record',
      component: TransferRecordComponent
    },
    {
      path: '/wanna-borrow',
      name: 'wanna-borrow',
      component: WannaBorrowComponent
    }
  ]
})
