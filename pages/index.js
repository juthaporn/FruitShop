import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: '01',
    title: 'อโวคาโด',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswgKRYvu_IObfHw7s1w1peySfRVMF-D1M2g&usqp=CAU',
    price: '699 ฿',
    description: 'อโวคาโดแฮส USA จากแคลิฟอร์เนีย ',
  },
  {
    id: '02',
    title: 'เชอร์รี่',
    image:
      'http://www.foodgallery.co.th/wp-content/uploads/2018/06/cherry-NZ.jpg',
    price: '950 ฿',
    description: 'เชอร์รี่ ไซส์ใหญ่ นำเข้าจากประเทศชิลี',
  },
  {
    id: '03',
    title: 'กีวี่',
    image:
      'https://backend.tops.co.th/media/catalog/product/0/2/0219898000003_29-01-2021.jpg',
    price: '25 $',
    description: 'กีวี่สีทอง นำเข้าจากนิวซีแลนด์ ',
  },
  {
    id: '04',
    title: 'แอปเปิ้ล',
    image:
      'https://static.bigc.co.th/media/catalog/product/cache/2/image/17f82f742ffe127f42dca9de82fb58b1/2/0/2000004002046_4.jpg ',
    price: '600 ฿',
    description: 'แอปเปิ้ลเอ็นวี่ จากประเทศอเมริกา',
  },
  {
    id: '05',
    title: 'องุ่นเขียว ',
    image:
      'https://backend.tops.co.th/media/catalog/product/0/2/0218852000004.jpg ',
    price: '400 ฿',
    description: 'องุ่นเขียวไร้เมล็ดออสเตรเลีย ออทัมคริสป์',
  },
  {
    id: '06',
    title: ' ส้มโอทับทิมสยาม',
    image:
      ' https://cf.shopee.co.th/file/633860731236602849ab2f6cf97cf7b4',
    price: ' 200 ฿',
    description: 'ส้มโอทับทิมสยามฤดูร้อน  ',
  },
  {
    id: '07',
    title: ' สตอเบอรี่',
    image:
      'https://f.ptcdn.info/216/014/000/1389141304-photo-o.jpg ',
    price: ' 650 ฿',
    description: 'สตอเบอรี่จัมโบ้ จากประเทศเกาหลี ',
  },
  {
    id: '08',
    title: 'มันหวานญี่ปุ่น พันธุ์เบนิฮารุกะ  ',
    image:
      ' https://www.kasethub.co.th/pic/bigpic/f94d2562bdf4310e8dc882902bce4785.jpg',
    price: ' 399 ฿',
    description: 'มันหวานญี่ปุ่น พันธุ์เบนิฮารุกะ ไซส์ L จากประเทศญี่ปุ่น ',
  },
  {
    id: '09',
    title: 'สาลี่หิมะ ',
    image:
      'https://fruitage.in.th/wp-content/uploads/2020/04/kp3.jpg ',
    price: ' 1650 ฿',
    description: 'สาลี่หิมะเกาหลีเกรดพรีเมียม ',
  },
  {
    id: '10',
    title: 'อินทผาลัมสด ',
    image:
      ' https://th-test-11.slatic.net/p/6cd2353be58c385d0dd01422268e94c1.jpg',
    price: ' 850 ฿',
    description: 'อินทผาลัมสด นำเข้าจากประเทศเปรู ',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}


export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }; 
}

export default HomePage;
