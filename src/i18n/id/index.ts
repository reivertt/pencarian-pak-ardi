import type { Translation } from '$i18n/i18n-types';
import en from '../en';
import { aceh } from './atlases/aceh';
import { ambon } from './atlases/ambon';
import { balikpapan } from './atlases/balikpapan';
import { bandarLampung } from './atlases/bandar-lampung';
import { bandung } from './atlases/bandung';
import { banjarmasin } from './atlases/banjarmasin';
import { batam } from './atlases/batam';
import { bima } from './atlases/bima';
import { bitung } from './atlases/bitung';
import { denpasar } from './atlases/denpasar';
import { gorontalo } from './atlases/gorontalo';
import { jakarta } from './atlases/jakarta';
import { jayapura } from './atlases/jayapura';
import { yogyakarta } from './atlases/yogyakarta';
import { kupang } from './atlases/kupang';
import { makassar } from './atlases/makassar';
import { malang } from './atlases/malang';
import { manado } from './atlases/manado';
import { mataram } from './atlases/mataram';
import { medan } from './atlases/medan';
import { merauke } from './atlases/merauke';
import { padang } from './atlases/padang';
import { palembang } from './atlases/palembang';
import { palu } from './atlases/palu';
import { pekanbaru } from './atlases/pekanbaru';
import { pontianak } from './atlases/pontianak';
import { samarinda } from './atlases/samarinda';
import { semarang } from './atlases/semarang';
import { surabaya } from './atlases/surabaya';
import { surakarta } from './atlases/surakarta';
import { chrisLunchtime } from './suspects/chris-lunchtime';
import { danielleSplash } from './suspects/danielle-splash';
import { duchessIsabella } from './suspects/duchess-isabella';
import { hughMass } from './suspects/hugh-mass';
import { juliaSanfrancisco } from './suspects/julia-sanfrancisco';
import { markFadenott } from './suspects/mark-fadenott';
import { renaStone } from './suspects/rena-stone';
import { simonSimonski } from './suspects/simon-simonski';
import { sparkleLily } from './suspects/sparkle-lily';
import { speedyJakeZ } from './suspects/speedy-jake-z';

const id = {
	...en, // Fall back to English
	splash: {
		title: 'NusaRiddle',
		introduction:
			'Kejar Pak Ardi dan rekan-rekannya keliling berbagai macam kota, memecah teka-teki, dan mengembangkan pengetahuan geografis anda dalam game ini.',
		newGame: 'Game Baru',
		about: 'Informasi'
	},
	headquarters: {
		title: 'Kantor Utama',
		newsflash: {
			title: 'Breaking News',
			lines: {
				0: 'Harta Negara telah dicuri dari kota {city}.',
				1: 'Diduga barang yang dirampas berupa {treasure}.',
				2: '{sex|{male: Seorang lelaki, female: Seorang perempuan}} terlihat di tempat kejadian perkara.'
			}
		},
		assignment: {
			title: 'Misi Anda',
			lines: {
				0: 'Lacak keberadaan perampok tersebut dari kota {city} ke tempat persembunyiannya dan tangkap {sex|{male: lelaki, female: wanita}} itu.',
				1: 'Anda harus menangkap perampok sebelum Minggu Pukul 5 Sore.',
				2: 'Semoga berhasil, {rank} {name}.'
			}
		},
		id: {
			acmeSystems: 'Sistem ACME',
			yourName: 'Nama Anda',
			pending: 'Sang detektif, sebutkan identitas anda',
			indentified: 'Identitas Anda diterima sebagai {name}.',
			rank: 'Peringkat Anda saat ini adalah {rank}.'
		}
	},
	game: {
		outcome: {
			incomingMessage: 'Pesan Masuk',
			ready: 'Siap untuk kasus selanjutnya, {rank} {name}?',
			caughtWithWarrant: {
				0: 'Thaks to your help, the {city} police have apprehended {suspect}.',
				1: '{suspect} had the loot, {stolenTreasure}, wich will be returned to the grateful residents of {city}.',
				2: 'We here at the World Police thank you for your good work on this case.',
				3: 'Your success will be noted on your record.',
				4: '{cases} more case{{cases}} until your next promotion.'
			},
			caughtWithWrongWarrant: {
				0: 'You have trailed {suspect} correctly.',
				1: 'Unfortunately, you have a warrant for {suspect}.',
				2: 'Be careful, we could all be sued for false arrest!',
				3: 'We hope you do better on your next case.'
			},
			caughtWithoutWarrant: {
				0: 'You have caught up with {suspect}.',
				1: 'However, without a warrant we cannot make a legal arrest.',
				2: "It looks like Julia's gang has gotten away with another caper!"
			},
			gotAway: {
				0: 'Bad news...',
				1: "We've just received word that {suspect} slipped through your fingers because your investigation took too long!"
			}
		},
		trailingSuspect: {
			0: 'A {sex|{male: henchman, female: henchwoman}}!',
			1: 'You must be on the right track.',
			2: 'Suspect appears to be nearby.',
			3: 'Getting closer...',
			4: '{sex|{male: He, female: She}} was just seen!',
			5: '{sex|{male: His, female: Her}} luck is ought to run out soon...',
			6: 'There {sex|{male: he, female: she}} goes...',
			7: 'Arresting suspect...'
		},
		actions: {
			walk: 'Walk to',
			walking: 'Walking',
			fly: 'Fly to',
			flying: 'Flying',
			sleeping: 'Sleeping',
			options: 'Options',
			abandon: 'Abandon game',
			confirm: 'Are you sure you want to abandon this game?',
			showPostcard: 'Show postcard',
			hidePostcard: 'Hide postcard'
		}
	},
	suspects: {
		chrisLunchtime,
		danielleSplash,
		duchessIsabella,
		hughMass,
		juliaSanfrancisco,
		markFadenott,
		renaStone,
		simonSimonski,
		sparkleLily,
		speedyJakeZ
	},
	warrants: {
		labels: {
			unknown: 'Unknown',
			sex: 'Sex',
			name: 'Name',
			occupation: 'Occupation',
			other: 'Other',
			hobby: 'Hobby',
			hair: 'Hair',
			feature: 'Feature',
			vehicle: 'Vehicle'
		},
		sex: {
			male: 'Male',
			female: 'Female'
		},
		hobby: {
			hiking: 'Hiking',
			tennis: 'Tennis',
			cycling: 'Cycling',
			guitar: 'Guitar',
			golf: 'Golf',
			gambler: 'Gambler',
			pickleball: 'Pickleball'
		},
		hair: {
			black: 'Black',
			brown: 'Brown',
			red: 'Red',
			blond: 'Blond'
		},
		feature: {
			scar: 'Scar',
			glasses: 'Glasses',
			tattoo: 'Tattoo',
			birthmark: 'Birthmark',
			ring: 'Ring',
			necklace: 'Necklace'
		},
		vehicle: {
			bike: 'Bicycle',
			motorcycle: 'Motorcycle',
			hoverboard: 'Hoverboard',
			exotic: 'Exotic car',
			convertible: 'Convertible',
			limousine: 'Limousine',
			transit: 'Public transit',
			jet: 'Jet'
		},
		worldPolice: 'World Police',
		warrants: 'Warrants',
		dossiers: 'Dossiers',
		suspectDossiers: 'Suspect dossiers',
		getWarrant: 'Get warrant',
		compute: 'Compute',
		provideDetails: 'Please provide suspect details to obtain a warrant.',
		suspectMatch: 'Suspect match',
		haveWarrant: 'You now have a warrant to arrest {suspect}.',
		possibleSuspects: 'Possible suspects',
		noSuspectsFound: 'No suspects found',
		noPossibleSuspects: 'The information provided eliminates all possible suspects.',
		noWarrantIssued: 'No warrant has been issued.'
	},
	atlases: {
		aceh,
		ambon,
		balikpapan,
		bandarLampung,
		bandung,
		banjarmasin,
		batam,
		bima,
		bitung,
		denpasar,
		gorontalo,
		jakarta,
		jayapura,
		yogyakarta,
		kupang,
		makassar,
		malang,
		manado,
		mataram,
		medan,
		merauke,
		padang,
		palembang,
		palu,
		pekanbaru,
		pontianak,
		samarinda,
		semarang,
		surabaya,
		surakarta
	},
	clues: {
		introduction: [
			'Saya melihat orang yang Anda cari dan',
			'Orang yang Anda cari ada di sini dan',
			'Sumber saya memberi tahu saya',
			'Sumber yang dapat dipercaya memberi tahu saya',
			'Sumber memberi tahu saya',
			'Yang saya tahu adalah itu',
			'Orang yang mencurigakan ada di sini dan',
			'saya dengar'
		],
		sight: [
			'{sex|{male: pria, female: wanita}} itu berkata dia ingin memotret',
			'{sex|{male: pria, female: wanita}} itu meminta peta',
			'{sex|{male: pria, female: wanita}} itu berencana untuk mengunjungi',
			'{sex|{male: pria, female: wanita}} itu menyebutkan dia ingin melihat',
			'{sex|{male: pria, female: wanita}} itu sedang mempertimbangkan untuk melakukan perjalanan ke',
			'{sex|{male: pria, female: wanita}} itu memiliki keinginan untuk mengunjungi',
			'{sex|{male: pria, female: wanita}} itu bilang dia ingin menjelajahi',
			'{sex|{male: pria, female: wanita}} itu bertanya tentang wisata harian ke',
			'{sex|{male: pria, female: wanita}} itu ingin tahu apakah ada hotel bintang lima di dekat'
		],
		language: [
			'{sex|{male: pria, female: wanita}} itu memiliki kamus {language} di sakunya',
			'{sex|{male: pria, female: wanita}} itu sedang membawa buku ungkapan {language}'
		],
		currency: [
			'{sex|{male: pria, female: wanita}} itu menukar uangnya ke {currency}',
			'{sex|{male: pria, female: wanita}} itu bertanya tentang nilai tukar untuk {currency}',
			'{sex|{male: pria, female: wanita}} itu ingin tahu berapa nilai {currency}'
		],
		object: [
			"{sex|{male: pria, female: wanita}} itu sedang membawa",
			"{sex|{male: pria, female: wanita}} itu ingin mendapatkan",
			"{sex|{male: pria, female: wanita}} itu ingin menjual",
			"{sex|{male: pria, female: wanita}} itu bertanya di mana menemukan",
			"{sex|{male: pria, female: wanita}} itu sedang mencari"
		],
		topic: [
			'{sex|{male: pria, female: wanita}} itu sedang meneliti',
			'{sex|{male: pria, female: wanita}} itu ingin belajar',
			'{sex|{male: pria, female: wanita}} itu tertarik pada',
			'{sex|{male: pria, female: wanita}} itu bertanya tentang'
		],
		plane: [
			'{sex|{male: pria, female: wanita}} itu pergi dengan pesawat dengan {flag} di sayapnya',
			'{sex|{male: pria, female: wanita}} itu terburu-buru untuk mengejar pesawat dengan {flag} di sayapnya',
			'{sex|{male: pria, female: wanita}} itu terbang dengan pesawat dengan {flag} di ekornya'
		],
		ship: [
			'{sex|{male: pria, female: wanita}} itu berlayar dengan kapal yang mengibarkan bendera {flag}',
			'{sex|{male: pria, female: wanita}} itu berangkat dengan kapal dengan bendera {flag}'
		],
		finalRound: [
			'Kabar sudah tersebar, Anda terlalu dekat, detektif...',
			'Rumor mengatakan bahwa geng itu ada di suatu tempat di kota.',
			'Yang saya tahu adalah sesuatu yang mencurigakan sedang terjadi di kota.',
			'Satu-satunya hal yang bisa saya katakan adalah hati-hati.'
		],
		decoy: [
			'Tidak melihat siapa pun yang cocok dengan deskripsi itu.',
			'Maaf, saya tidak melihat sesuatu yang mencurigakan di sekitar sini.',
			'Maaf, saya belum pernah melihat orang seperti itu di sekitar sini.',
			'Belum pernah melihat orang yang terlihat seperti itu.'
		],
	},
	scenes: {
		places: {
			0: 'Bandara',
			1: 'Bank',
			2: 'Kementerian Luar Negeri',
			3: 'Pelabuhan',
			4: 'Hotel',
			5: 'Perpustakaan',
			6: 'Pasar',
			7: 'Museum',
			8: 'Istana',
			9: 'Tepi sungai',
			10: 'Klub olahraga',
			11: 'Bursa Efek'
		},
		witnesses: {
			// Airport
			baggageClerk: 'Petugas Bagasi',
			flightAttendant: 'Pramugari',
			pilot: 'Pilot',

			// Bank
			bankGuard: 'Penjaga Bank',
			teller: 'Teller',
			vicePresident: 'Wakil Presiden',

			// Foreign ministry
			ambassador: 'Duta Besar',
			attache: 'Atase',
			underSecretary: 'Wakil Menteri',

			// Harbor
			customsOfficer: 'Petugas Bea Cukai',
			harborMaster: 'Syahbandar',
			sailor: 'Pelaut',

			// Hotel
			bellhop: 'Bellhop',
			houseDetective: 'Detektif Hotel',
			hotelManager: 'Manajer Hotel',

			// Library
			archivist: 'Arsiparis',
			circulationClerk: 'Petugas Sirkulasi',
			referenceLibrarian: 'Pustakawan Referensi',

			// Marketplace
			hawker: 'Pedagang asongan',
			streetMerchant: 'Pedagang Kaki Lima',
			urchin: 'Anak jalanan',

			// Museum
			curator: 'Kurator',
			docent: 'Pemandu Museum',
			museumGuard: 'Penjaga Museum',

			// Palace
			palaceGuard: 'Penjaga Istana',
			privyCouncillor: 'Penasihat Pribadi',
			soldier: 'Prajurit',

			// Riverfront
			sailorsParrot: "Burung Beo Pelaut",
			stevedore: 'Bongkar Muat',
			tugboatCaptain: 'Kapten Kapal Tunda',

			// Sport Club
			bartender: 'Bartender',
			tennisPro: 'Pemain Tenis Pro',
			waiter: 'Pelayan',

			// Stock Exchange
			analyst: 'Analis',
			messenger: 'Kurir',
			trader: 'Pialang'
		}
	},
	player: {
		ranks: {
			0: 'Pemula',
			1: 'Detektif',
			2: 'Mata-mata',
			3: 'Investigator',
			4: 'Detektif Ahli',
        	5: 'Investigator Super'
		}
	},
	components: {
		startTime: 'Senin Pukul 9:00',
		loading: 'Memuat',
		buttons: {
			goBack: 'Kembali',
			continue: 'Lanjut'
		}
	}
} satisfies Translation;

export default id;
