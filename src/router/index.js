import Vue from 'vue'
import Router from 'vue-router'
import { verification } from '@/api/user'
import { getToken } from '@/utils/token';
import { messAlert } from '@/utils/message';

const Home = () => import('@/views/home/Home') //首页
const Appointment = () => import('@/views/appointment/Appointment') //预约办事
const Financial = () => import('@/views/financial/Financial') //财务税务
const Project = () => import('@/views/project/Project') //项目合作
const Engineering = () => import('@/views/engineering/Engineering');//工程管理
const Login = () => import('@/views/login/Login') //登录
const LoginCode = () => import('@/views/login/LoginCode') //二维码登录
const Register = () => import('@/views/register/Register') //注册
const ResetPassword = () => import('@/views/resetPassword/ResetPassword') //修改密码


//预约办事HistoryList
const Reservation_application_Invoice = () => import('@/views/appointment/reservation/Reservation_application_Invoice') //发票申请
const HistoryList = () => import('@/views/appointment/history/HistoryList') //发票申请
const Reservation_Engineering_Management = () => import('@/views/appointment/reservation/Reservation_Engineering_Management') //工程管理
const Reservation_Administrative_appointment = () => import('@/views/appointment/reservation/Reservation_Administrative_appointment') //行政预约
const Reservation_Senior_tendering_Officer = () => import('@/views/appointment/reservation/Reservation_Senior_tendering_Officer') //投标资审
const Reservation_Market_business = () => import('@/views/appointment/reservation/Reservation_Market_business') //市场业务
const Reservation_Financial_appointment = () => import('@/views/appointment/reservation/Reservation_Financial_appointment') //财务预约


//内部展示
const InternalDisplay = () => import('@/views/internalDisplay/InternalDisplay') //内部展示
const InternalAnnouncement = () => import('@/views/internalDisplay/contentDisplay/InternalAnnouncement') //内部公告
const StandardSystem = () => import('@/views/internalDisplay/contentDisplay/StandardSystem') //管理办法
const WorkFlow = () => import('@/views/internalDisplay/contentDisplay/WorkFlow') //办公流程InternalAnnouncementListDetail
const InternalAnnouncementList = () => import('@/views/internalDisplay/contentDisplay/internalAnnouncementList/InternalAnnouncementList') //公告的列表
const InternalAnnouncementListDetail = () => import('@/views/internalDisplay/contentDisplay/internalAnnouncementList/InternalAnnouncementListDetail') //办公流程的详情
const InternalAnnouncementDetail = () => import('@/views/internalDisplay/contentDisplay/internalAnnouncementDetail/InternalAnnouncementDetail') //公告的详情


//公司
const Company = () => import('@/views/company/Company') //公司概括
const SecondCompany = () => import('@/views/company/SecondCompany') //公司概括SecondCompany
const DesignConsultant = () => import('@/views/company/gridChildren/DesignConsultant') //设计顾问
const TenderOffer = () => import('@/views/company/gridChildren/TenderOffer') //投标报价
const ManagementConsulting = () => import('@/views/company/gridChildren/ManagementConsulting') //咨询管理
const FinancialAssistance = () => import('@/views/company/gridChildren/FinancialAssistance') //资金援助
const BusinessServices = () => import('@/views/company/gridChildren/BusinessServices') //商务服务
const CompletionSettlement = () => import('@/views/company/gridChildren/CompletionSettlement') //竣工结算
const InscriptionCollection = () => import('@/views/company/gridChildren/InscriptionCollection') //铭筑集采
const MingCraftsman = () => import('@/views/company/gridChildren/MingCraftsman') //铭筑劳务


//直接的展示url
const QualificationHonor = () => import('@/views/showUrl/QualificationHonor') //资质荣誉
const ContactUs = () => import('@/views/showUrl/ContactUs') //联系我们
const JcContactUs = () => import('@/views/showUrl/JCContactUs')//铭筑集采服务号联系我们
const JcBusinessCooperation = () => import('@/views/showUrl/JcBusinessCooperation')//铭筑集采服务号第一个菜单栏
const JcMenuBarTwo = () => import('@/views/showUrl/JcMenuBarTwo')//铭筑集采服务号第二个菜单栏
const JcMenuBarThree = () => import('@/views/showUrl/JcMenuBarThree')//铭筑集采服务号第三个菜单栏
const JcMenuBarFour = () => import('@/views/showUrl/JcMenuBarFour')//铭筑集采服务号第四个菜单栏
const JcMenuBarFive = () => import('@/views/showUrl/JcMenuBarFive')//铭筑集采服务号第五个菜单栏

//列表
const GaestgiverietHotel = () => import('@/views/showUrl/gaestgiverietHotel/GaestgiverietHotel') //宾馆酒店
const OfficeBuilding = () => import('@/views/showUrl/officeBuilding/OfficeBuilding') //写字楼
const SchoolHospital = () => import('@/views/showUrl/schoolHospital/SchoolHospital') //学校医院
const CommercialHousing = () => import('@/views/showUrl/commercialHousing/CommercialHousing') //商贸住宅
const BuildingWall = () => import('@/views/showUrl/buildingWall/BuildingWall') //建筑幕墙
const Newsflash = () => import('@/views/showUrl/newsflash/Newsflash') //新闻资讯 
const MicroClassroom = () => import('@/views/showUrl/microClassroom/MicroClassroom') //微课堂
const SupplierRepresentative = () => import('@/views/showUrl/supplierRepresentative/SupplierRepresentative')//供货商代表
const PurchasingPartner = () => import('@/views/showUrl/purchasingPartner/PurchasingPartner')//集采伙伴
//详情
const GaestgiverietHotelDetail = () => import('@/views/showUrl/gaestgiverietHotel/GaestgiverietHotelDetail')
const OfficeBuildingDetail = () => import('@/views/showUrl/officeBuilding/OfficeBuildingDetail')
const SchoolHospitalDetail = () => import('@/views/showUrl/schoolHospital/SchoolHospitalDetail')
const CommercialHousingDetail = () => import('@/views/showUrl/commercialHousing/CommercialHousingDetail')
const BuildingWallDetail = () => import('@/views/showUrl/buildingWall/BuildingWallDetail')
const NewsflashDetail = () => import('@/views/showUrl/newsflash/NewsflashDetail')
const MicroClassroomDetail = () => import('@/views/showUrl/microClassroom/MicroClassroomDetail')
const SupplierRepresentativeDetail = () => import('@/views/showUrl/supplierRepresentative/SupplierRepresentativeDetail')
const PurchasingPartnerDetail = () => import('@/views/showUrl/purchasingPartner/PurchasingPartnerDetail')


Vue.use(Router)
export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '铭筑艺成园' },
    },
    {
      path: '/appointment',//预约办事
      name: 'appointment',
      component: Appointment,
      meta: { title: '预约办事' },
    },
    {
      path: '/financial',//财务税务
      name: 'financial',
      component: Financial,
      meta: { title: '财务税务' },
    },
    {
      path: '/project',//项目合作
      name: 'project',
      component: Project,
      meta: { title: '项目合作' },
    },
    {
      path: '/engineering',//工程管理
      name: 'engineering',
      component: Engineering,
      meta: { title: '工程管理' },
    },
    //登录
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: '密码登录' },
      beforeEnter: (to, form, next) => {
        let token = getToken() || '';
        if (token == '') {
          next();
          return;
        }
        verification({
          token,
        }).then(res => {
          if (res.data.state == 200) {
            if (res.data.datas == 0) {//存在
              next({
                name: 'home'
              })
            } else {
              next();
            }
          } else if (res.data.state == 500) {
            messAlert(res.data.message);
            next();
          }
        }).catch(err => {
          messAlert(err.message);
          next();
        })
      }
    },
    {
      path: '/loginCode',
      name: 'loginCode',
      component: LoginCode,
      meta: { title: '验证码登录' },
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: ResetPassword,
      meta: { title: '重置密码' },
    },
    //注册
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { title: '用户注册' },
    },
    //预约
    {
      path: '/reservationApplicationInvoice',//发票申请
      name: 'reservation_application_Invoice',
      component: Reservation_application_Invoice,
      meta: { title: '发票申请' },
    },
    {
      path: '/reservationApplicationInvoice/historyList',//历史记录发票
      name: 'historyList',
      component: HistoryList,
      meta: { title: '历史发票' },
    },
    {
      path: '/reservationEngineeringManagement',//工程管理
      name: 'reservation_Engineering_Management',
      component: Reservation_Engineering_Management,
      meta: { title: '工程管理' },
    },
    {
      path: '/reservationAdministrativeAppointment',//行政预约
      name: 'reservation_Administrative_appointment',
      component: Reservation_Administrative_appointment,
      meta: { title: '行政预约' },
    },
    {
      path: '/reservationSeniorTenderingOfficer',//投标资审
      name: 'reservation_Senior_tendering_Officer',
      component: Reservation_Senior_tendering_Officer,
      meta: { title: '投标资审' },
    },
    {
      path: '/reservationMarketBusiness',//市场业务
      name: 'reservation_Market_business',
      component: Reservation_Market_business,
      meta: { title: '市场业务' },
    },
    {
      path: '/reservationFinancialAppointment',//财务预约
      name: 'reservation_Financial_appointment',
      component: Reservation_Financial_appointment,
      meta: { title: '财务预约' },
    },
    //内部展示
    {
      path: '/internalDisplay',
      name: 'internalDisplay',
      component: InternalDisplay,
      redirect: {
        name: 'internalAnnouncement',
      },
      children: [
        {
          path: 'internalAnnouncement',//内部公告
          name: 'internalAnnouncement',
          component: InternalAnnouncement,
          meta: { title: '艺成园内部公告', isShare: true },
        },
        {
          path: 'standardSystem',//规范制度
          name: 'standardSystem',
          component: StandardSystem,
          meta: { title: '艺成园内部公告' },
        },
        {
          path: 'workFlow',//办公流程
          name: 'workFlow',
          component: WorkFlow,
          meta: { title: '艺成园内部公告' },
        }
      ]
    },
     //公告的详情InternalAnnouncementList
    {
      path: '/internalDisplay/internalAnnouncement/detail/:linkId',
      name: 'internalAnnouncementDetail',
      component: InternalAnnouncementDetail,
      meta: { title: '艺成园内部公告', isShare: true },
    },
    {
      path: '/internalDisplay/internalAnnouncementList/:type/:classification',//办工流程的列表
      name: 'InternalAnnouncementList',
      component: InternalAnnouncementList,
      meta: { isShare: true }
    },
    //办公流程的详情
    {
      path: '/internalDisplay/internalAnnouncementLists/InternalAnnouncementListDetail/:linkId',
      name: 'InternalAnnouncementListDetail',
      component: InternalAnnouncementListDetail,
      meta: { isShare: true }
    },
    //公司
    {
      path: '/company',
      name: 'company',
      component: Company,
      meta: { title: '公司概览', keepAlive: true },
    },
    {
      path: '/second/company',
      name: 'secondCompany',
      component: SecondCompany,
      meta: { title: '公司概览', keepAlive: false },
    },
    {
      path: '/company/designConsultant',//设计顾问
      name: 'designConsultant',
      component: DesignConsultant,
      meta: { title: '设计顾问' },
    },
    {
      path: '/company/tenderOffer',//投标报价
      name: 'tenderOffer',
      component: TenderOffer,
      meta: { title: '投标报价' },
    },
    {
      path: '/company/managementConsulting',//咨询管理
      name: 'managementConsulting',
      component: ManagementConsulting,
      meta: { title: '咨询管理' },
    },
    {
      path: '/company/financialAssistance',//资金援助
      name: 'financialAssistance',
      component: FinancialAssistance,
      meta: { title: '资金援助' },
    },
    {
      path: '/company/businessServices',//商务服务
      name: 'businessServices',
      component: BusinessServices,
      meta: { title: '商务服务' },
    },
    {
      path: '/company/completionSettlement',//竣工结算
      name: 'completionSettlement',
      component: CompletionSettlement,
      meta: { title: '竣工结算' },
    },
    {
      path: '/company/InscriptionCollection',//铭筑集采
      name: 'inscriptionCollection',
      component: InscriptionCollection,
      meta: { title: '铭筑集采' },
    },
    {
      path: '/company/MingCraftsman',//铭筑工匠
      name: 'mingCraftsman',
      component: MingCraftsman,
      meta: { title: '铭筑工匠' },
    },
    //直接的展示
    {
      path: '/qualificationHonor',//荣誉资质
      name: 'qualificationHonor',
      component: QualificationHonor,
      meta: { title: '资质荣誉' },
    },
    {
      path: '/contactUs',//联系我们
      name: 'contactUs',
      component: ContactUs,
      meta: { title: '联系我们' },
    },
    {
      path: '/jcContactUs',//铭筑集采服务号联系我们
      name: 'jcContactUs',
      component: JcContactUs,
      meta: {title: '联系我们'},
    },
    {
      path: '/jcBusinessCooperation',//铭筑集采服务号第一个菜单栏
      name: 'jcBusinessCooperation',
      component: JcBusinessCooperation,
      meta: {title: '平台服务'}, 
    },
    {
      path: '/jcMenuBarTwo',//铭筑集采服务号第二个菜单栏
      name: '/jcMenuBarTwo',
      component: JcMenuBarTwo,
      meta: {title: '经营战略'}, 
    },
    {
      path: '/jcMenuBarThree',//铭筑集采服务号第三个菜单栏
      name: '/jcMenuBarThree',
      component: JcMenuBarThree,
      meta: {title: '集采加盟'}, 
    },
    {
      path: '/jcMenuBarFour',//铭筑集采服务号第四个菜单栏
      name: '/jcMenuBarFour',
      component: JcMenuBarFour,
      meta: {title: '第四个菜单栏'}, 
    },
    {
      path: '/jcMenuBarFive',//铭筑集采服务号第五个菜单栏
      name: '/jcMenuBarFive',
      component: JcMenuBarFive,
      meta: {title: '第五个菜单栏'}, 
    },
    {
      path: '/gaestgiverietHotel',//宾馆酒店
      name: 'gaestgiverietHotel',
      component: GaestgiverietHotel,
      meta: { title: '酒店/办公类' },
    },
    {
      path: '/gaestgiverietHotelDetail/:linkId',//宾馆酒店详情
      name: 'gaestgiverietHotelDetail',
      component: GaestgiverietHotelDetail,
      meta: { title: '酒店/办公类' },
    },
    {
      path: '/officeBuilding',//展览展示就是写字楼
      name: 'officeBuilding',
      component: OfficeBuilding,
      meta: { title: '展览展示类' },
    },
    {
      path: '/officeBuildingDetail/:linkId',//展览展示就是写字楼详情
      name: 'officeBuildingDetail',
      component: OfficeBuildingDetail,
      meta: { title: '展览展示类' },
    },
    {
      path: '/schoolHospital',//学校医院
      name: 'schoolHospital',
      component: SchoolHospital,
      meta: { title: '学校/医院类' },
    },
    {
      path: '/schoolHospitalDetail/:linkId',//学校医院详情
      name: 'schoolHospitalDetail',
      component: SchoolHospitalDetail,
      meta: { title: '学校/医院类' },
    },
    {
      path: '/commercialHousing',//商贸住宅
      name: 'commercialHousing',
      component: CommercialHousing,
      meta: { title: '商贸/住宅类' },
    },
    {
      path: '/commercialHousingDetail/:linkId',//商贸住宅详情
      name: 'commercialHousingDetail',
      component: CommercialHousingDetail,
      meta: { title: '商贸/住宅类' },
    },
    {
      path: '/buildingWall',//建筑幕墙
      name: 'buildingWall',
      component: BuildingWall,
      meta: { title: '建筑幕墙类' },
    },
    {
      path: '/buildingWallDetail/:linkId',//建筑幕墙详情
      name: 'buildingWallDetail',
      component: BuildingWallDetail,
      meta: { title: '建筑幕墙类' },
    },
    {
      path: '/newsflash',//新闻资讯
      name: 'newsflash',
      component: Newsflash,
      meta: { title: '新闻资讯' },
    },
    {
      path: '/microClassroom',//微课堂
      name: 'microClassroom',
      component: MicroClassroom,
      meta: { title: '微课堂' },
    },
    {
      path: '/supplierRepresentative',//供货商代表
      name: 'supplierRepresentative',
      component: SupplierRepresentative,
      meta: {title: '供货商代表'},
    },
     {
      path: '/purchasingPartner',//集采伙伴
      name: 'purchasingPartner',
      component: PurchasingPartner,
      meta: {title: '集采伙伴'},
    },
    {
      path: '/newsflash/detail/:linkId',//新闻资讯详情
      name: 'newsflashDetail',
      component: NewsflashDetail,
      meta: { title: '新闻资讯' },
    },
    {
      path: '/microClassroom/detail/:linkId',//微课堂详情
      name: 'microClassroomDetail',
      component: MicroClassroomDetail,
      meta: { title: '微课堂' },
    },
    {
      path: '/supplierRepresentative/detail/:linkId',//供货商代表详情
      name: 'supplierRepresentativeDetail',
      component: SupplierRepresentativeDetail,
      meta: {title: '供货商代表'},
    },
     {
      path: '/purchasingPartner/detail/:linkId',//集采伙伴详情
      name: 'purchasingPartnerDetail',
      component: PurchasingPartnerDetail,
      meta: {title: '集采伙伴详情'},
    },
    {
      path: '*',
      redirect: { name: 'home' },
    }
  ]
})
