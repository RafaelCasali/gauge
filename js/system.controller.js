angular.module("System").controller("SysController", ['$scope',

	function ($scope) {

	$scope.title = "Usuários influentes";
	$scope.description = "Faça os filtros a baixo para identificar os usuários mais influentes.";

	$scope.brands = [
		{
		"id": 1,
		"name": "Ambev",
		"image": "https://logospng.org/download/ambev/logo-ambev-4096.png"
		},
		{
		"id": 2,
		"name": "Nike",
		"image": "http://pngimg.com/uploads/nike/nike_PNG12.png"
		},
		{
		"id": 3,
		"name": "Honda",
		"image": "https://cdn.freebiesupply.com/logos/large/2x/honda-11-logo-png-transparent.png"
		},
		{
		"id": 4,
		"name": "Oi",
		"image": "https://upload.wikimedia.org/wikipedia/pt/archive/9/91/20160531205217!Logotipo_da_Oi.png"
		},
		{
		"id": 5,
		"name": "Itaú",
		"image": "https://logospng.org/download/itau/logo-itau-4096.png"
		}
	];

	$scope.selectedBrand = function(id) {		

		$scope.idSelectedBrand = parseInt(id);	
		$scope.brandInteractions = $scope.interactions.filter((interaction) => {
			return interaction.brand === $scope.idSelectedBrand;
		})		
		

		$scope.favorites = $scope.brandInteractions.filter((favorite) => {
			return favorite.type === "FAVORITE";
		})

		$scope.shares = $scope.brandInteractions.filter((share) => {
			return share.type === "SHARE";
		})

		$scope.comments = $scope.brandInteractions.filter((comment) => {
			return comment.type === "COMMENT";
		})
		$scope.userInteractionMale = 0;
		$scope.userInteractionFemale = 0;		
		$scope.userfinal = [];

		for (var i = 0; i < $scope.brandInteractions.length; i++) {
			$scope.usersInteractions = $scope.users.filter((user) => {
				return user.id === $scope.brandInteractions[i].user;
			})
			if ($scope.usersInteractions[0].gender === 'male') {
				$scope.userInteractionMale = $scope.userInteractionMale+1;
			}
			if ($scope.usersInteractions[0].gender === 'female') {
				$scope.userInteractionFemale = $scope.userInteractionFemale+1;
			}					
	
			$scope.userfinal.push(
				{
					"gender": $scope.usersInteractions[0].gender,
					"name": {
						"first": $scope.usersInteractions[0].name.first,
						"last": $scope.usersInteractions[0].name.last,
					},
					"location": {
						"city": $scope.usersInteractions[0].location.city,
					},
					"email": $scope.usersInteractions[0].email,
					"id": $scope.usersInteractions[0].id,
					"picture": {
						"medium": $scope.usersInteractions[0].picture.medium,
					},
				},
			);			
		}
	}

    /* JSON */

	$scope.users = [
		{
			"gender": "female",
			"name": {
				"title": "mrs",
				"first": "ivanete",
				"last": "peixoto"
			},
			"location": {
				"street": "3685 rua são joão ",
				"city": "botucatu",
				"state": "amazonas",
				"postcode": 81568
			},
			"email": "ivanete.peixoto@example.com",
			"login": {
				"username": "bluefrog791",
				"password": "78945612",
				"salt": "PSyYJXBU",
				"md5": "3c0704a4c6a5ec46620497f0346cb080",
				"sha1": "196c1b344e9c5d574f5c639435c59ab3b8d4fc23",
				"sha256": "5a30865aadc6eae89c24d6212012715581bb2863e485170e770cabbb0fc526b6"
			},
			"registered": 1079324086,
			"dob": 884766846,
			"phone": "(85) 2505-7183",
			"cell": "(05) 9849-1949",
			"id": 1,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/82.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "heldemaro",
				"last": "campos"
			},
			"location": {
				"street": "3984 rua vinte de setembro",
				"city": "vitória",
				"state": "santa catarina",
				"postcode": 11311
			},
			"email": "heldemaro.campos@example.com",
			"login": {
				"username": "yellowlion633",
				"password": "gizmodo1",
				"salt": "2ntyCVO3",
				"md5": "db09b2872c762b406f513de1ec48a0a6",
				"sha1": "666fd516c9e9dcaa23494b0d4a01658cb27d11ad",
				"sha256": "42775a55f6a644d5c9ce4fb9f1df769f8e8d15c0988ff7778025f1a4877613e4"
			},
			"registered": 1301970504,
			"dob": 287182953,
			"phone": "(57) 3066-9821",
			"cell": "(91) 1270-9443",
			"id": 2,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/15.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "ms",
				"first": "hermelinda",
				"last": "moura"
			},
			"location": {
				"street": "4394 rua são francisco ",
				"city": "bagé",
				"state": "bahia",
				"postcode": 76373
			},
			"email": "hermelinda.moura@example.com",
			"login": {
				"username": "yellowfish627",
				"password": "towers",
				"salt": "rU2RvbJ8",
				"md5": "6eb0ccb6a19b65ee6b4ee7ef564339de",
				"sha1": "13c2ad858f9cc0b1a0d5e94007a1088e94ea51e0",
				"sha256": "a14550257b3347393f895882ed991085683962e92f3617c70869695d5c0d4026"
			},
			"registered": 1172819902,
			"dob": 1265501817,
			"phone": "(87) 7550-0604",
			"cell": "(45) 8332-0239",
			"id": 3,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/44.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/44.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/44.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "ms",
				"first": "argemira",
				"last": "peixoto"
			},
			"location": {
				"street": "3562 rua são joão ",
				"city": "maranguape",
				"state": "amapá",
				"postcode": 69698
			},
			"email": "argemira.peixoto@example.com",
			"login": {
				"username": "redmeercat493",
				"password": "qweqwe",
				"salt": "lfBVQUeK",
				"md5": "1e61361f5ed09ae105b464de5d5300fb",
				"sha1": "5d6c16f49c0c69ddee731f6224fdeabc47c4b803",
				"sha256": "dc65d89978069fee4a9eb07e38cc6f65d6369d464a58761af24cac83ff371938"
			},
			"registered": 1009532844,
			"dob": 1171634524,
			"phone": "(37) 1182-6804",
			"cell": "(76) 0429-2693",
			"id": 4,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/15.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/15.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/15.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "mrs",
				"first": "loeci",
				"last": "freitas"
			},
			"location": {
				"street": "3972 rua vinte de setembro",
				"city": "colatina",
				"state": "rio grande do norte",
				"postcode": 98633
			},
			"email": "loeci.freitas@example.com",
			"login": {
				"username": "purplebutterfly601",
				"password": "ding",
				"salt": "eaUsU8IG",
				"md5": "827ba947f039c95d4ac85b4c9b5774c4",
				"sha1": "031ff4a2f5335869ff5d671bad7a2ab6513586fc",
				"sha256": "72ed706c9b5aa248cceb3755ec24eba62909bb65e128a187cbcadfabdb1d1d5b"
			},
			"registered": 1422220282,
			"dob": 38433783,
			"phone": "(62) 4687-0373",
			"cell": "(73) 3316-7624",
			"id": 5,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/1.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "miss",
				"first": "simone",
				"last": "alves"
			},
			"location": {
				"street": "6145 rua vinte de setembro",
				"city": "viamão",
				"state": "rondônia",
				"postcode": 27234
			},
			"email": "simone.alves@example.com",
			"login": {
				"username": "silverlion572",
				"password": "scanner",
				"salt": "UbwDbPmo",
				"md5": "ec03ec11beb1aa4f181595f750617a9a",
				"sha1": "fd63f3d8de52546b2c2e28e437c051b47ac03636",
				"sha256": "a75aac71395a3f849206a261d1f00e27c445076d453233ba7d026a0316fb10d6"
			},
			"registered": 1058454874,
			"dob": 887673146,
			"phone": "(26) 3173-9443",
			"cell": "(36) 5901-5673",
			"id": 6,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/90.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/90.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/90.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "dante",
				"last": "lima"
			},
			"location": {
				"street": "7381 rua doze ",
				"city": "araguaína",
				"state": "pernambuco",
				"postcode": 95093
			},
			"email": "dante.lima@example.com",
			"login": {
				"username": "smallfish710",
				"password": "090909",
				"salt": "Zrl72x6a",
				"md5": "1c35bbddae57d2f42078d431e72a416d",
				"sha1": "e94dbb4f1c3cb9d217a8a37c0a9831dc782fcee3",
				"sha256": "7237df7e336451e22df546cfa7fc9adc7b123c1cd6d223b99d4b7244f0726981"
			},
			"registered": 990602073,
			"dob": 1061998329,
			"phone": "(28) 8240-6292",
			"cell": "(92) 7685-2586",
			"id": 7,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/18.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/18.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/18.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "aquiles",
				"last": "fogaça"
			},
			"location": {
				"street": "2581 rua da saudade",
				"city": "catanduva",
				"state": "pará",
				"postcode": 43805
			},
			"email": "aquiles.fogaça@example.com",
			"login": {
				"username": "heavyfrog147",
				"password": "galeries",
				"salt": "0rlLxKpL",
				"md5": "c9f38d1790d8d7d81a630e57b14b3705",
				"sha1": "8c70b83300f7e87a37fa43ce0e58256d63934178",
				"sha256": "c9c0c69b511122eeebfee18cad4c7dd480ba8878c6b4b6abfd7ef280bb76764a"
			},
			"registered": 1363445789,
			"dob": 1067591094,
			"phone": "(44) 2257-2860",
			"cell": "(28) 3582-0802",
			"id": 8,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/67.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "miss",
				"first": "iolene",
				"last": "da cruz"
			},
			"location": {
				"street": "2447 rua são francisco ",
				"city": "são lourenço da mata",
				"state": "mato grosso",
				"postcode": 49120
			},
			"email": "iolene.dacruz@example.com",
			"login": {
				"username": "lazyleopard882",
				"password": "danni",
				"salt": "dbnYXSNU",
				"md5": "eece98908e52d0d97caf02d3fe1c6999",
				"sha1": "83efbfb27fa250b03e80395fa09cb45026b3e776",
				"sha256": "598c51d50b5165afc8423fad563d6a14bbdee3c3a4fabe0efad6416550cdeefa"
			},
			"registered": 1321272489,
			"dob": 655459420,
			"phone": "(92) 4626-2054",
			"cell": "(56) 2647-9420",
			"id": 9,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/87.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "tâmiris",
				"last": "martins"
			},
			"location": {
				"street": "2014 rua vinte e um",
				"city": "resende",
				"state": "espírito santo",
				"postcode": 57635
			},
			"email": "tâmiris.martins@example.com",
			"login": {
				"username": "goldengorilla245",
				"password": "idontkno",
				"salt": "r9wOMKYW",
				"md5": "012c0894267373b743f2e9d15bfd9ecc",
				"sha1": "896d43e229c8a6e401a4a5b14e84add7996307b2",
				"sha256": "fce4e8620d2ea1f8697707501e73346b026233ea76de8733c3e3f94e1fe3547d"
			},
			"registered": 1009400915,
			"dob": 1012198852,
			"phone": "(10) 1028-7903",
			"cell": "(86) 3616-8332",
			"id": 10,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/53.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/53.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/53.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "aderico",
				"last": "araújo"
			},
			"location": {
				"street": "3845 rua rio de janeiro ",
				"city": "volta redonda",
				"state": "são paulo",
				"postcode": 97151
			},
			"email": "aderico.araújo@example.com",
			"login": {
				"username": "heavyladybug875",
				"password": "clean",
				"salt": "ydVvlvHY",
				"md5": "9bc19d1b4804b2f3ad6fae49dd1a6a63",
				"sha1": "dc879b5c60942116f7bc678132d3a0e194dce674",
				"sha256": "cf1cbf9ba154cc1d0fd5320891569e0a236b08850a41edfbbd7748db04a8fd2d"
			},
			"registered": 1423382939,
			"dob": 428016846,
			"phone": "(70) 0156-1712",
			"cell": "(23) 4264-8393",
			"id": 11,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/60.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "miss",
				"first": "ulda",
				"last": "viana"
			},
			"location": {
				"street": "7231 rua mato grosso ",
				"city": "teixeira de freitas",
				"state": "pará",
				"postcode": 85955
			},
			"email": "ulda.viana@example.com",
			"login": {
				"username": "crazyleopard446",
				"password": "bbbb",
				"salt": "XGlam5IC",
				"md5": "ecbfc91a7355be6b4d2ca0978b3f5b92",
				"sha1": "8ce7131ddf45b34951beae039cd55cbd8722768d",
				"sha256": "1bcc290ecf2a5537310719eccba31a27455255d7eb197862d55639f0f8cda095"
			},
			"registered": 1050897638,
			"dob": 1285809074,
			"phone": "(95) 1873-0777",
			"cell": "(69) 9935-7702",
			"id": 12,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/1.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "bertolino",
				"last": "ribeiro"
			},
			"location": {
				"street": "4294 rua santa rita ",
				"city": "ourinhos",
				"state": "sergipe",
				"postcode": 34501
			},
			"email": "bertolino.ribeiro@example.com",
			"login": {
				"username": "beautifulgorilla158",
				"password": "ncc1701",
				"salt": "j8s2ZgTA",
				"md5": "123889a31fdc92c5f7216d76a1da436d",
				"sha1": "8ba6189fc81e043bffe72b13985b7875cd3a2e2b",
				"sha256": "f5e82b3279f129b8993b49eedf363af2c5362587f010ce092483a9211d38ec70"
			},
			"registered": 1248027014,
			"dob": 898574782,
			"phone": "(41) 8628-9449",
			"cell": "(92) 3629-1479",
			"id": 13,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/66.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/66.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/66.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "rapaz",
				"last": "da costa"
			},
			"location": {
				"street": "9708 avenida da democracia",
				"city": "caxias",
				"state": "distrito federal",
				"postcode": 29414
			},
			"email": "rapaz.dacosta@example.com",
			"login": {
				"username": "tinyrabbit679",
				"password": "phoenix1",
				"salt": "yI3wI4Ny",
				"md5": "1f98b720c060b1ce4d09e445cd0b3407",
				"sha1": "704d58a65ada1c5324ab724ec129fedfbadfa886",
				"sha256": "b86d7c74a8a1d826190bd7496e7b50cd3a0d4146d135376df3fcfb7651cc55b8"
			},
			"registered": 1209386827,
			"dob": 683959959,
			"phone": "(53) 7803-7047",
			"cell": "(14) 1836-2916",
			"id": 14,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/40.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/40.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/40.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "ms",
				"first": "dulcinéia",
				"last": "moraes"
			},
			"location": {
				"street": "3701 rua duque de caxias ",
				"city": "são mateus",
				"state": "espírito santo",
				"postcode": 96844
			},
			"email": "dulcinéia.moraes@example.com",
			"login": {
				"username": "organicbutterfly331",
				"password": "bookworm",
				"salt": "aRz84IFG",
				"md5": "5e8e8c2590cfc3553544282c51ac74f4",
				"sha1": "d8159f919ad284143ca8e677d7b4a876ec0c43b6",
				"sha256": "ba5e154426ad8615207e430e7545ae141dcc6e34804d75a2aa277975c3687f7d"
			},
			"registered": 1035047157,
			"dob": 830201898,
			"phone": "(16) 3368-4920",
			"cell": "(96) 6447-8058",
			"id": 15,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/62.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "mrs",
				"first": "gonçala",
				"last": "rodrigues"
			},
			"location": {
				"street": "8572 rua dezessete ",
				"city": "rio de janeiro",
				"state": "sergipe",
				"postcode": 48760
			},
			"email": "gonçala.rodrigues@example.com",
			"login": {
				"username": "ticklishfish379",
				"password": "sammy",
				"salt": "1iI4OxPD",
				"md5": "3b716be431f6fdefb0f5e0e2b3c3b0a1",
				"sha1": "50c7b953407572f8ef8309f3d158df05bf5a11ed",
				"sha256": "ebb8666a90563a268695ee8d5668b8cd956466efe3cb24221dfd3e30df49c9f2"
			},
			"registered": 1115389980,
			"dob": 402952870,
			"phone": "(07) 4121-5443",
			"cell": "(45) 7874-6638",
			"id": 16,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/83.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "licínio",
				"last": "jesus"
			},
			"location": {
				"street": "6807 rua tiradentes ",
				"city": "águas lindas de goiás",
				"state": "santa catarina",
				"postcode": 48710
			},
			"email": "licínio.jesus@example.com",
			"login": {
				"username": "organicbird722",
				"password": "deeznutz",
				"salt": "NdHQlH3X",
				"md5": "1ca7c3ccc6e148050554aa342072ee79",
				"sha1": "d2f4c65f73c3c4950349fef9bcae6657a2e53869",
				"sha256": "3b9c2a3cb043adc2e3be9852e67a8f0d6c50e98463dc137f299b6a275d666b2f"
			},
			"registered": 1366153438,
			"dob": 902471314,
			"phone": "(84) 5518-6361",
			"cell": "(34) 6412-2186",
			"id": 17,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/38.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/38.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/38.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "female",
			"name": {
				"title": "mrs",
				"first": "tatiane",
				"last": "cardoso"
			},
			"location": {
				"street": "6409 rua josé bonifácio ",
				"city": "macaé",
				"state": "rondônia",
				"postcode": 68339
			},
			"email": "tatiane.cardoso@example.com",
			"login": {
				"username": "ticklishswan919",
				"password": "343434",
				"salt": "Mwv6RoIt",
				"md5": "b782c156496df5c24cf4c77df4ba2b3e",
				"sha1": "1c3a51a8e0ec87d569275a7807d75e1394485092",
				"sha256": "ec4b9980568324f4f8da5bea7bedda084bab52dc54a26d2127422516b3384b87"
			},
			"registered": 1354628269,
			"dob": 472139717,
			"phone": "(22) 4997-4864",
			"cell": "(33) 1860-9050",
			"id": 18,
			"picture": {
				"large": "https://randomuser.me/api/portraits/women/60.jpg",
				"medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "sinésio",
				"last": "das neves"
			},
			"location": {
				"street": "4742 rua pará ",
				"city": "ipatinga",
				"state": "distrito federal",
				"postcode": 77418
			},
			"email": "sinésio.dasneves@example.com",
			"login": {
				"username": "redleopard406",
				"password": "lips",
				"salt": "vizyZYzz",
				"md5": "dc0f608f7fdf18e351e7825b7ee3311c",
				"sha1": "8b3c7534044426bc7bb199d24b965e0accc8642b",
				"sha256": "fe3f86a3952e4ba4f2ddbb4411a5063341a2621b4056a30b0e2631a57704b5d4"
			},
			"registered": 1057673128,
			"dob": 287212023,
			"phone": "(81) 1434-1897",
			"cell": "(08) 1616-8267",
			"id": 19,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/47.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
			},
			"nat": "BR"
		},
		{
			"gender": "male",
			"name": {
				"title": "mr",
				"first": "ildo",
				"last": "da mata"
			},
			"location": {
				"street": "6326 rua dois",
				"city": "passos",
				"state": "ceará",
				"postcode": 60561
			},
			"email": "ildo.damata@example.com",
			"login": {
				"username": "smallladybug283",
				"password": "artist",
				"salt": "auD0BLnZ",
				"md5": "937183c40161a1e98f931dc2b9253b37",
				"sha1": "eb2bc7e74bf284daf6a9349a5a9f65feeda7fa4f",
				"sha256": "102c51d698f7e74b6c84ad06b4b1db2f731e284c6fb9e66cdae6100c19b93476"
			},
			"registered": 961946557,
			"dob": 167243474,
			"phone": "(16) 9844-0145",
			"cell": "(97) 7863-0118",
			"id": 20,
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/50.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
			},
			"nat": "BR"
		}
	]

	$scope.interactions = [
		{
			"brand": 2,
			"user": 18,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 12,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 15,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 17,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 1,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 15,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 14,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 4,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 11,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 7,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 19,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 10,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 6,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 13,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 20,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 7,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 12,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 20,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 15,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 3,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 19,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 18,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 1,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 16,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 17,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 17,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 4,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 13,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 19,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 1,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 13,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 4,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 11,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 9,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 13,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 12,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 3,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 15,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 2,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 3,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 5,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 15,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 18,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 2,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 14,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 5,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 13,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 2,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 6,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 18,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 1,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 13,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 8,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 3,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 20,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 4,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 16,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 13,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 10,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 6,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 9,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 6,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 20,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 10,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 18,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 6,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 9,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 3,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 20,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 10,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 9,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 15,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 8,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 20,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 11,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 13,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 20,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 17,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 1,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 16,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 19,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 7,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 17,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 18,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 3,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 15,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 14,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 16,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 6,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 1,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 9,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 4,
			"user": 8,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 7,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 5,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 2,
			"user": 2,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 20,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 3,
			"user": 12,
			"type": "FAVORITE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 12,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 1,
			"user": 7,
			"type": "SHARE",
			"text": "Lorem ipsum dolor sit amet."
		},
		{
			"brand": 5,
			"user": 1,
			"type": "COMMENT",
			"text": "Lorem ipsum dolor sit amet."
		}
	]
}]);