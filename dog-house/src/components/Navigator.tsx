export default function Navigator() {
  const menu = [
    {
      group: '반려견종류',
      detail: [ '소형견', '중형견', '대형견' ],
    },
    {
      group: '입양하기',
      detail: [ '입양안내', '입양절차', '입양신청' ],
    },
    {
      group: '건강돌보기',
      detail: [ '음식안내', '환경안내', '병원안내' ],
    },
    {
      group: '함께살기',
      detail: [ '반려견이해', '반려견행동', '반려견사랑' ],
    },
  ];

  return (
    <nav>
      <ul className="cf">
        {
          menu.map(m =>
            <li key={m.group}>
              <a href="/">{m.group}</a>
              <ul>
                { m.detail.map(d => <li key={d}><a href="/">{d}</a></li>) }
              </ul>
            </li>
          )
        }
      </ul>
    </nav>
  );
}
