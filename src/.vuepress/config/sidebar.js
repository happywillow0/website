module.exports = [

	'/help/guides/': getGuidesSidebar('Guides', 'Settings', 'Frequently Asked Questions', 'Contribution', 'Available extensions'),
	'/help/faq/': getFaqSidebar('Frequently Asked Questions', 'Guides', 'Contribution', 'Available extensions'),
	'/help/contribution': getContributionSidebar('Contribution', 'Frequently Asked Questions', 'Guides', 'Available extensions'),
	'/extensions': getExtensionsSidebar('Available extensions', 'Frequently Asked Questions', 'Guides', 'Contribution'),

	function getGuidesSidebar (groupA, groupB, groupC, groupD, groupE) {
		return [
			{
				title: groupA,
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/guides/getting-started',
					'/help/guides/reading-local-manga',
					'/help/guides/source-problems',
					'/help/guides/categories',
					'/help/guides/library-filters',
					'/help/guides/source-migration'
				]
			},
			{
				title: groupB,
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/guides/general',
					'/help/guides/reader',
					'/help/guides/downloads',
					'/help/guides/tracking',
					'/help/guides/backup',
					'/help/guides/advanced',
				]
			},
			{
				title: groupC,
				path: '/help/faq/application',
			},
			{
				title: groupD,
				path: '/help/contribution'
			},
			{
				title: groupE,
				path: '/extensions/'
			}
		]
	}

	function getFaqSidebar (groupF, groupG, groupH, groupI) {
		return [
			{
				title: groupF,
				collapsable: false,
				sidebarDepth: 1,
				children: [
					'/help/faq/application',
					'/help/faq/extensions'
				]
			},
			{
				title: groupG,
				path: '/help/guides/getting-started',
			},
			{
				title: groupH,
				path: '/help/contribution'
			},
			{
				title: groupI,
				path: '/extensions/'
			}
		]
	}

	function getContributionSidebar (groupJ, groupK, groupL, groupM) {
		return [
			{
				title: groupJ,
				collapsable: false,
				sidebarDepth: 1,
				children: [
					'/help/contribution'
				]
			},
			{
				title: groupK,
				path: '/help/faq/application',
			},
			{
				title: groupL,
				path: '/help/guides/getting-started',
			},
			{
				title: groupM,
				path: '/extensions/'
			}
		]
	}

	function getExtensionsSidebar (groupN, groupO, groupP, groupQ) {
		return [
			{
				title: groupN,
				path: '/extensions/'
			},
			{
				title: groupO,
				path: '/help/faq/application',
			},
			{
				title: groupP,
				path: '/help/guides/getting-started',
			},
			{
				title: groupQ,
				path: '/help/contribution'
			}
		]
	}


];
