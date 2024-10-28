

export  const navItems=["Home","How Hiking Works","Services","Pricing","Contact Us"]
interface Features{
    icon:string;
    title:string;
    description:string
}
export const features:Features[]=[
 {
    icon:'/image.svg',
    title:'Real Maps Can Be Offline',
    description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odit commodi consequuntur nobis inventore non rem fuga minus laboriosam,',
 },
 {
    icon:'/calendar-days.svg',
    title:'Set An Adventur Shedule',
    description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odit commodi consequuntur nobis inventore non rem fuga minus laboriosam,',
 },
 {  
    icon:'/cone.svg',
    title:'Technology Using Augmented Reality',
    description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odit commodi consequuntur nobis inventore non rem fuga minus laboriosam,',
 },
 {
    icon:'/map-pin.svg',
    title:'Many New Locations Every Month',
    description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odit commodi consequuntur nobis inventore non rem fuga minus laboriosam,',
 },
]

// footer section contents
export const FOOTER_LINKS = [
   {
     title: 'Learn More',
     links: [
       'About Hilink',
       'Press Releases',
       'Environment',
       'Jobs',
       'Privacy Policy',
       'Contact Us',
     ],
   },
   {
     title: 'Our Community',
     links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
   },
 ];
 export const FOOTER_CONTACT_INFO = {
   title: 'Contact Us',
   links: [
     { label: 'Admin Officer', value: '123-456-7890' },
     { label: 'Email Officer', value: 'hilink@akinthil.com' },
   ],
 };
 export const SOCIALS = {
   title: 'Social',
   links: [
     '/facebook.svg',
     '/instagram.svg',
     '/twitter.svg',
     '/youtube.svg',
     '/wordpress.svg',
   ],
 };