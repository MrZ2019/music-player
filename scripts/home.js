var Home = Vue.extend({
	template: './views/home.html',
	data() {
		return {
			isOutMode: false,
			isDevMode: false,
		}
	},
	watch: {
		isOutMode(val) {
			
			if (!val) {
				localStorage["iframeIP"] = localStorage["innerIP"]
			} else {
				localStorage["iframeIP"] = localStorage["outIP"]
			}
			
			localStorage["isOutMode"] = Number(val)
		},
		isDevMode(val) {
			
			
			localStorage["isDevMode"] = val
		}
	},
	props: ['time'],
	mounted() {
		// 		var parent = window.parent
		// 		alert(parent)
		
		this.isDevMode = eval(localStorage["isDevMode"])
		
	},
	methods: {
		send: function(str) {
			function test() {
				var w = window.frames[0];

				function listResults(entries) {
					// Document fragments can improve performance since they're only appended
					// to the DOM once. Only one browser reflow occurs.
					var fragment = document.createDocumentFragment();

					var list = []
					entries.forEach(function(entry, i) {

						list.push(entry.name)

						w.postMessage({
							type: 'photo',
							data: entry.name
						}, '*')
						// var img = entry.isDirectory ? '<img src="folder-icon.gif">' :
						//                               '<img src="file-icon.gif">';
						// var li = document.createElement('li');
						// li.innerHTML = [img, '<span>', entry.name, '</span>'].join('');
						// fragment.appendChild(li);
					});


					//document.querySelector('#filelist').appendChild(fragment);
				}

				function errorHandler(e) {
					alert(e)
				}

				function onInitFs(fs) {

					var dirReader = fs.createReader();
					var entries = [];

					// Call the reader.readEntries() until no more results are returned.
					var readEntries = function() {
						dirReader.readEntries(function(results) {
							if (!results.length) {
								listResults(entries.sort());
							} else {
								entries = entries.concat([].slice.call(results, 0));;
								readEntries();
							}
						}, errorHandler);
					};

					readEntries(); // Start reading dirs.

				}

				// window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory,onInitFs);
				// plus.navigator.setFullscreen(true);
				// 				 ID3.loadTags("sample.mp3", function() {
				//       showTags("sample.mp3");
				//     }, {
				//       tags: ["title","artist","album","picture"]
				//     });

				/**
				 * Loading the tags using the FileAPI.
				 */
				function loadFile(file) {
					// var file = input.files[0],
					// alert(JSON.stringify(file))
					url = file.urn || file.name;

					// alert(url)

					ID3.loadTags(url, function() {
						showTags(url);
					}, {
						tags: ["title", "artist", "album", "picture"],
						dataReader: ID3.FileAPIReader(file)
					});
				}

				/**
				 * Generic function to get the tags after they have been loaded.
				 */
				function showTags(url) {
					var tags = ID3.getAllTags(url);
					console.log(tags);
					//       document.getElementById('title').textContent = tags.title || "";
					//       document.getElementById('artist').textContent = tags.artist || "";
					//       document.getElementById('album').textContent = tags.album || "";

					var image = tags.picture;

					alert(image)
					if (image) {
						var base64String = "";
						for (var i = 0; i < image.data.length; i++) {
							base64String += String.fromCharCode(image.data[i]);
						}
						var base64 = "data:" + image.format + ";base64," +
							window.btoa(base64String);

						// alert(123)

						w.postMessage({
							type: 'photo',
							data: base64
						}, '*')
						// document.getElementById('picture').setAttribute('src',base64);
					} else {
						// document.getElementById('picture').style.display = "none";
						// alert(1234)
					}
				}
				let dataURLtoBlob = (dataurl) => {
					let arr = dataurl.split(','),
						mime = arr[0].match(/:(.*?);/)[1],
						bstr = atob(arr[1]),
						n = bstr.length,
						u8arr = new Uint8Array(n);
					while (n--) {
						u8arr[n] = bstr.charCodeAt(n);
					}
					return new Blob([u8arr], {
						type: mime
					});
				};
				var self = this;
				plus.io.resolveLocalFileSystemURL("/storage/emulated/0/netease/cloudmusic/music", function(entry) {
					var r = entry.createReader()

					r.readEntries(function(result) {
						for (var i = 0; i < result.length; i++) {
							// self.fileList.push(result[i].name);
						}

						plus.io.resolveLocalFileSystemURL("/storage/emulated/0/netease/cloudmusic/music/" + result[150].name,
							function(entry2) {
								// alert(entry2.fullPath)

								entry2.file(function(file) {
									// alert(file.size)
									reader = new plus.io.FileReader();
									reader.onloadend = function(e) {
										// alert(e.target.result.length)
										loadFile(dataURLtoBlob(e.target.result))
										plus.console.log("Read success");
										// Get data
										plus.console.log(e.target.result);
									};
									reader.readAsDataURL(file);
									let fileToDataURL = (file, callBack) => {
										let fR = new FileReader();
										fR.readAsDataURL(file); //readAsDataURL将文件读取为 DataURL（base64）
										fR.onload = (e) => {
											// alert(123)
											typeof callBack == 'function' && callBack(e.target.result);
										}
									};

									//调用 file=>dataURL

									// fileToDataURL(file, (res) => {
									// // console.log('fileToDataURL-res:', res);//data:image/jpeg;base64,/9j/4A...RQf/Z
									// alert(res)
									// });
									// loadFile(f)
								})
							});
						// alert(result[0].name)
						//     						entry.getFile(result[0].name, {
						//     							create: true
						//     						}, function(entry2) {
						// 								// alert(file.fullPath)
						//     							// alert(f.constructor.name)
						// 								// alert(entry2.file)
						// 										entry2.file(function(file) {
						// 										alert(file.size)
						// 										reader = new plus.io.FileReader();
						// 										reader.onloadend = function(e) {
						// 											// alert(e.target.result.length)
						// 											loadFile(dataURLtoBlob(e.target.result))
						// 											plus.console.log("Read success");
						// 											// Get data
						// 											plus.console.log(e.target.result);
						// 										};
						// 										reader.readAsDataURL(file);
						// 										let fileToDataURL = (file, callBack) => {
						// 											let fR = new FileReader();
						// 											fR.readAsDataURL(file); //readAsDataURL将文件读取为 DataURL（base64）
						// 											fR.onload = (e) => {
						// 												// alert(123)
						// 												typeof callBack == 'function' && callBack(e.target.result);
						// 											}
						// 										};
						// 								
						// 										//调用 file=>dataURL
						// 								
						// 										// fileToDataURL(file, (res) => {
						// 										// // console.log('fileToDataURL-res:', res);//data:image/jpeg;base64,/9j/4A...RQf/Z
						// 										// alert(res)
						// 										// });
						// 										// loadFile(f)
						// 									})
						// 								
						//     						}, function(err) {
						//     							alert(err.code)
						//     						})
						// //     						// loadFile((result[0]))
						//     						// alert(result.length)

					})
				}, function() {

				});
				// alert(parent.plus)
				// alert(parent.cordova.file.externalApplicationStorageDirectory  )

				// window.requestFileSystem(window.PERSISTENT, 1024*1024, onInitFs, errorHandler);

				// document.addEventListener("resume", callbackFunction, false);

				// function callbackFunction() {
				//     alert('Volume Up Button is pressed!')
				// }
				// alert(device.model)
				// function onBackKeyDown(e) {
				//    e.preventDefault();
				//    alert('Back Button is Pressed!');
				// }
				// document.addEventListener("backbutton", onBackKeyDown, false);
				// return 7 * 7;


				// cameraTakePicture();

				// function cameraTakePicture() {
				//    navigator.camera.getPicture(onSuccess, onFail, { 
				//       quality: 50,
				//       destinationType: Camera.DestinationType.DATA_URL
				//    });

				//    function onSuccess(imageData) {
				//       // var image = document.getElementById('myImage');
				//       // image.src = "data:image/jpeg;base64," + imageData;
				//       var w = window.frames[0];
				//       if (!isConnected) {
				//         w = window;
				//       }
				//       w.postMessage({
				//         type: 'camera',
				//         data: "data:image/jpeg;base64," + imageData
				//       }, '*')
				//    }

				//    function onFail(message) {
				//       alert('Failed because: ' + message);
				//    }
				// }



				//                 function onSuccess(contacts) {
				//     alert(JSON.stringify(contacts));
				// };

				// function onError(contactError) {
				//     alert('onError!');
				// };

				// // find all contacts with 'Bob' in any name field
				// var options      = new ContactFindOptions();
				// options.filter   = "";
				// options.multiple = true;
				// // options.desiredFields = [navigator.contacts.fieldType.id];
				// options.hasPhoneNumber = true;
				// var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
				// navigator.contacts.find(fields, onSuccess, onError, options);


				// navigator.contacts.pickContact(function(contact) {
				//     alert('The following contact has been selected:' + JSON.stringify(contact));
				// }, function(err) {
				//     console.log('Error: ' + err);
				// });
			}



			try {
				if (!str) {
					str = test.toString() + ';test()'
				}

				var parent = isConnected ? window.parent : window;

				// if (!isConnected) {
				//     str = {
				//         data: str,
				//         type: 'self'
				//     }
				// }

				// alert(parent)
				parent.postMessage(str, '*')
			} catch (e) {
				alert(e)
			}
		},
		reload: function() {
			this.send('location.reload()')
		},
		toMZJ: function() {
			location =
				'./iframe.html'
		},
		setIP: function() {

			let oldIp = localStorage["outIP"] || "192.168.31.187"
			let ip = window.prompt("设置IP", oldIp);

			localStorage["outIP"] = ip;
			
			if (this.isOutMode) {
				localStorage["iframeIP"] = localStorage["outIP"]
			}
		},
		setInnerIP: function() {

			let oldIp = localStorage["innerIP"] || "192.168.31.174"
			let ip = window.prompt("设置IP", oldIp);

			localStorage["innerIP"] = ip;
			
			if (!this.isOutMode) {
				localStorage["iframeIP"] = localStorage["innerIP"]
			}
		},
		toDemo: function() {
			location = './world.html'
		},
		toIonic: function() {
			location = './ionic.html'
		},
		toReact: function() {
			location = './react.html'
		}
	}
});
