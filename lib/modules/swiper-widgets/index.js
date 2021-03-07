module.exports = {
	extend: 'apostrophe-widgets',
	name: 'swiper',
	label: 'Swiper Widget',
	addFields: [
		{
			name: 'swipers',
			label: 'Swiper',
			type: 'array',
			help: 'Choose a Swiper',
			schema: [
				{
					name: 'swiper',
					type: 'area',
					label: 'Swiper Element',
					help: 'Add a swiper element',
					options: {
					limit: 1,
					widgets: {
						'card': {
							 aspectRatio: [ 2, 1 ],
							 focalPoint: true,
							 noHeight: true,
							 limit: 1,
							 controls: {
								 cloneable: false,
								 removable: true,
								 position: 'top-right'
							 }
						 },
						 'texts': {
								limit: 1,
								controls: {
									cloneable: false,
									removable: true,
									position: 'top-right'
								}
							},
							'video': {
								limit: 1,
								controls: {
									cloneable: false,
									removable: true,
									position: 'top-right'
								}
							}
					 	}
					}
				}
			]
		},
		{
			name: 'loop',
			label: 'Loop Swiper',
			type: 'boolean',
			help: 'Activate loop for swiper (default: No)',
			def: false
		},
		{
			name: 'speed',
			label: 'Swipe Speed',
			type: 'range',
			help: 'Choose speed of transition between swpipes (default: No)',
			min: 100,
			max: 2000,
			step: 100
		},
		{
			name: 'autoHeight',
			label: 'Swiper Auto Height',
			type: 'boolean',
			help: 'Set auto height for swiper (default: No)',
			def: false
		},
		{
			name: 'effect',
			type: 'select',
			label: 'Select Effect',
			help: 'Choose effect for swiper(default: No)',
			choices: [
				{
					label: 'Slide',
					value: 'slide',
					def: true
				},
				{
					label: 'Fade',
					value: 'fade'
				},
				{
					label: 'Coverflow',
					value: 'coverflow'
				},
				{
					label: 'Flip',
					value: 'flip'
				},
				{
					label: 'Cube',
					value: 'cube'
				}
			]
		},
		{
			name: 'autoplay',
			type: 'select',
			label: 'Activate Autoplay',
			help: 'Activate autoplay for swiper (default: No)',
			choices: [
				{
					label: 'Yes',
					value: true,
					showFields: [ 'delay', 'disableOnInteraction']
				},
				{
					label: 'No',
					value: false,
					def: true
				}
			]
		},
		{
			name: 'delay',
			label: 'Autoplay Delay',
			type: 'range',
			help: 'Choose delay before swiper starts(default: No)',
			min: 1000,
			max: 10000,
			step: 1000,
			def: 3000
		},
		{
			name: 'disableOnInteraction',
			label: 'Autoplay Disable on Interactiom',
			type: 'boolean',
			help: 'Stop Swiper when user interacts with (default: No)',
			def: false
		}
	],
};