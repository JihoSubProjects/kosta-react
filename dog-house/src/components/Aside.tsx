import img1 from '../assets/img/1.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'

export default function Aside() {
  return (
    <aside className="side">
			<h2>강아지 사진</h2>
			<img src={img1} width="180" height="135" alt="dog1" />
			<img src={img3} width="180" height="135" alt="dog2" />
			<img src={img4} width="180" height="135" alt="dog3" />
		</aside>
  );
}
