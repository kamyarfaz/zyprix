import SideBarButton from './SideBarButton'

const SideBar = () => {
  
  const items = {
    zyprix : [
      {
        title:"خانه",
        icon:"/icons/Home.svg",
        activeIcon:"/icons/ActiveHome.svg",
        url:"/dashboard",
      },
      {
        title:"تنظیم کارت",
        icon:"/icons/CardSetting.svg",
        activeIcon:"/icons/ActiveCardSetting.svg",
        url:"/dashboard/card-setting",
      },
    ],
    store : [
      {
        title:"سفارشات من",
        icon:"/icons/MyOrders.svg",
        activeIcon:"/icons/ActiveMyOrder.svg",
        url:"/dashboard/my-orders",
      },
      {
        title:"تراکنش ها",
        icon:"/icons/Transaction.svg",
        activeIcon:"/icons/ActiveTransaction.svg",
        url:"/dashboard/transactions",
      },
      {
        title:"آدرس ها",
        icon:"/icons/Location.svg",
        activeIcon:"/icons/ActiveLocation.svg",
        url:"/dashboard/location",
      },
    ],
    user : [
      {
        title:"پروفایل کاربری",
        icon:"/icons/Profile.svg",
        activeIcon:"/icons/ActiveProfile.svg",
        url:"/dashboard/my-profile",
      },
    ]
  }
  return (
    <div className='w-[14%] bg-[#262626] rounded-2xl h-screen'>
      <div className='flex flex-col items-center mt-8'>
          <img className='w-16 h-auto' src='/images/ProfilePhoto.png'/>
          <span className='text-[#6A6A6A] text-xs mt-3'>خوش آمدید</span>
          <h5 className='mt-0.5 text-white'>جواد فضلی</h5>
      </div>
        <SideBarButton zyprix={items.zyprix} store={items.store} user={items.user}/>
    </div>
  )
}

export default SideBar
