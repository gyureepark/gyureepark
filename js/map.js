//Goggle Map

function initialize() {

			/*
				https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%B2%AD/@37.5651027,126.9781819,16z/
				data=!4m5!1m2!2m1!1z7ISc7Jq47Iuc7LKt!3m1!1s0x357ca2f332cb082b:0xe92b70ac420cf0a8


				https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%84%9C%EC%B4%88%EA%B5%AC+%EC%84%9C%EC%B4%88%EB%8F%99+%ED%9A%A8%EB%A0%B9%EB%A1%9C77%EA%B8%B8/@37.4944199,127.0167319,14.83z/data=!4m5!3m4!1s0x357ca14564b27ac1:0xac0f92c5794ce337!8m2!3d37.4909252!4d127.029184

				위의 링크에서 뒤에 주소를 적으면 x,y 값을 구할수 있습니다.
			*/
			//육의전 건물 - @37.5705067,126.9868907
			//서울시청 - @37.5653161,126.9745883
			// 37.4944199,127.0167319
			var Y_point			= 37.4944199;		// Y 좌표
			var X_point			= 127.0167319;		// X 좌표

			var zoomLevel		= 15;						// 첫 로딩시 보일 지도의 확대 레벨

			var markerTitle		= "서초구 효령로";				// 현재 위치 마커에 마우스를 올렸을때 나타나는 이름
			var markerMaxWidth	= 300;						// 마커를 클릭했을때 나타나는 말풍선의 최대 크기

			// 말풍선 내용
			var contentString	= '<div id="content">' +
					'<div id="siteNotice">' +'</div>'+	
					'<div id="bodyContent">'+ 
						'<p>강남역 부근입니다!. <br /><a href="http://www.seoul.go.kr" target="_blank">http://www.seoul.go.kr/</a></p>'+	
					'</div>'+ 
				'</div>';

			var myLatlng = new google.maps.LatLng(Y_point, X_point);
			var mapOptions = {
								zoom: zoomLevel,
								center: myLatlng,
								mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

			var marker = new google.maps.Marker({
													position: myLatlng,
													map: map,
													title: markerTitle
			});

			var infowindow = new google.maps.InfoWindow(
														{
															content: contentString,
															maxWidth: markerMaxWidth
														}
			);

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}