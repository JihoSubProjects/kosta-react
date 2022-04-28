// tsc script -lib esnext,dom

interface NodeListOf < TNode > extends Array < TNode > {}

const guk = prompt('국 번호를 입력하세요(1~3)');
const gwa = prompt('과 번호를 입력하세요(0~3)');
const team = prompt('팀 번호를 입력하세요(0~3)');



async function listBottomAjax(thisHref) {
	const {
		data
	} = await axios({
		url: thisHref
	});

	const tableSite = document.querySelector('.tableSite');
	const tableSiteChildren = Array.apply(null, tableSite.children);
	for (const item of tableSiteChildren) {
		item.remove();
	}

	// for (let i = tableSite.children.length; i > 0; i--) {
	// 	tableSite.removeChild(tableSite.children[i - 1])
	// }


	for (let i = 0; i < data.length; i++) {
		const {
			image,
			name,
			gwajang,
			jang,
			phone,
			work
		} = data[i];
		tableSite.insertAdjacentHTML('beforeend', `
					<div class="pictureblock ${jang ? 'jang' : ''}">
						<img class="picture" alt="team1" src="img/face/(${image}).jpg" />
						<div class="cf">
							<h3>${name}</h3>
							<p>${gwajang ? '과장' : jang ? '팀장' : '팀원'}</p>
							${jang ? '<div class="badge"></div>' : ''}
						</div>
						<div class="textbox">
							<p><a class="tel" href="tel:${phone}">${phone}</a></p>
							<div>
								${work}
							</div>
						</div>
					</div>
				`)
	}

	const memberSum: HTMLElement = document.querySelector('.memberSum');
	memberSum.innerText = `총 ${data.length} 명`

}


const urlTo = `backend.php?guk=${guk}&gwa=${gwa}&team=${team}`;

listBottomAjax(urlTo);

