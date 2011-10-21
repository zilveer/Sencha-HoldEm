var dtObj = {
	extend: 'Ext.Container',
	xtype: 'dealertable',
	
	config: {
		cls: 'DealerTable',
		
		
		
		defaults: {
			xtype: 'container',
			//styleHtmlContent:true,
			//width:'16%',
			//height:'20%',
			//align:'right',
			//pack:'center',
			floating:true,
			visible:true,
			zindex:10,
			cls:'DealerSeat'
			
			//x:20
			//x: 100,
			//y: 30
			//floating:true,
			//hidden:false,
			//zindex:100,
			//left:200,
			//top:200,
			//left:200
	    },
		
		/*
		seatTemplate: {
			xtype:'template'
		},
		*/
		
		preInit: function() {
			var thisObj = this;
			
			var i;
			
			for (i = 0; i < 10; i++) {
				thisObj.items.push({
					id:'player'+i
				});
			}
			
			for (i = 0; i < 52; i++) {
				thisObj.items.push({
					id:'card'+i
				});
			}
			
			thisObj.items.push(
				
				{
					id:'dealerButton'
				},
				
				{

					xtype:'container',
					floating:true,
					zindex:300,
					left:0,
					bottom:0,
					width:'100%',
					id: 'betBar',

					dockedItems: [{
				        dock: 'top',
				        xtype: 'toolbar',
						floating:false,
						zIndex:300,

						items: [
							{
								text: 'Fold',
								xtype: 'button',
							},
							{
								text: 'Call/Check',
								xtype: 'button'
							},
							{
								text: 'Raise',
								xtype: 'button'
							},
							{
								placeHolder: 'Bet Amount',
								xtype: 'textfield',
								id: 'betAmount'

							}
						]

				    }]

				},
				{
					id				: 'betPanel',
					xtype           : 'panel',
					cls				: '',
		            floating        : true,
		            modal           : true,
		            hidden          : true,
					centered		: true,
		            width           : 300,
		            height          : 200,
					zIndex          : 1000, 
		            styleHtmlContent: true,
		            html: '<p>Please enter a valid bet amount or fold.</p>',
		            items: [{
		                    docked: 'top',
		                    xtype : 'toolbar',
		                    title : 'Invalid Bet'
		            }],
		            scrollable: true
		        }	
				
			);
			
		},
		
		items: [
			
		]
		
		
	}
	
};

dtObj.config.preInit();

Ext.define('HoldEm.view.dealer.DealerTable', dtObj);