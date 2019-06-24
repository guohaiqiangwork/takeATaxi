	var rechargeButton = document.getElementById('recharge');
			var cashButton = document.getElementById('cash');
			var billButton = document.getElementById('bill');
			// 去充值
			rechargeButton.addEventListener('tap', function(event) {
				mui.openWindow({
					url: 'subPages/recharge.html',
					id: "recharge",
					extras: {
						cs: "recharge" //自定义扩展参数，可以用来处理页面间传值
					},
				});
			});
			// 去提现
			cashButton.addEventListener('tap', function(event) {
				mui.openWindow({
					url: 'subPages/cash.html',
					id: "cash",
					extras: {
						cs: "cash" //自定义扩展参数，可以用来处理页面间传值
					},
				});
			});
			// 去账单明细
			billButton.addEventListener('tap', function(event) {
				mui.openWindow({
					url: 'subPages/bill.html',
					id: "bill",
					extras: {
						cs: "bill" //自定义扩展参数，可以用来处理页面间传值
					},
				});
			});