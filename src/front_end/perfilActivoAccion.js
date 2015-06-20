var assetsList = [
];

var stock;
var stock2;

var setStock = function (code) {
	if (code == 'ypfd.ba') {
		stock = {
			code: 'ypfd.ba',
			company: 'YPF S.A.',
			industry: 'Energía',
			subIndustry: 'Petróleo',
			value: 361.5,
			trend: 'Sin cambio',
			dailyCloseValues: [
				{date: '2014-4-21', close: 286.5, change: 0, volume: 11519700},
				{date: '2014-4-22', close: 294, change: 2.62, volume: 18108600},
				{date: '2014-4-23', close: 290, change: -1.36, volume: 26341000},
				{date: '2014-4-24', close: 290.25, change: 0.09, volume: 16466300},
				{date: '2014-4-25', close: 277, change: -4.57, volume: 45642400},
				{date: '2014-4-28', close: 280.25, change: 1.17, volume: 23435600},
				{date: '2014-4-29', close: 286.5, change: 2.23, volume: 11315500},
				{date: '2014-4-30', close: 284.2, change: -0.8, volume: 17331400},
				{date: '2014-5-1', close: 284.2, change: 0, volume: 0},
				{date: '2014-5-2', close: 284.2, change: 0, volume: 17331400},
				{date: '2014-5-5', close: 289.3, change: 1.79, volume: 8187200},
				{date: '2014-5-6', close: 278, change: -3.91, volume: 19719300},
				{date: '2014-5-7', close: 299, change: 7.55, volume: 43178600},
				{date: '2014-5-8', close: 306, change: 2.34, volume: 26865300},
				{date: '2014-5-9', close: 303, change: -0.98, volume: 24481700},
				{date: '2014-5-12', close: 306, change: 0.99, volume: 15318800},
				{date: '2014-5-13', close: 301, change: -1.63, volume: 15948700},
				{date: '2014-5-14', close: 305.5, change: 1.5, volume: 13251400},
				{date: '2014-5-15', close: 307, change: 0.49, volume: 22959000},
				{date: '2014-5-16', close: 304, change: -0.98, volume: 20950900},
				{date: '2014-5-19', close: 319.8, change: 5.2, volume: 33685800},
				{date: '2014-5-20', close: 321.5, change: 0.53, volume: 36938400},
				{date: '2014-5-21', close: 312, change: -2.95, volume: 36693200},
				{date: '2014-5-22', close: 316, change: 1.28, volume: 32724500},
				{date: '2014-5-23', close: 326, change: 3.16, volume: 38440600},
				{date: '2014-5-26', close: 333.1, change: 2.18, volume: 15111400},
				{date: '2014-5-27', close: 327.9, change: -1.56, volume: 41235600},
				{date: '2014-5-28', close: 333, change: 1.56, volume: 20922900},
				{date: '2014-5-29', close: 333, change: 0, volume: 36064600},
				{date: '2014-5-30', close: 324.6, change: -2.52, volume: 98800},
				{date: '2014-6-2', close: 333, change: 2.59, volume: 30000500},
				{date: '2014-6-3', close: 327, change: -1.8, volume: 50602900},
				{date: '2014-6-4', close: 329.1, change: 0.64, volume: 32240000},
				{date: '2014-6-5', close: 325.5, change: -1.09, volume: 20786700},
				{date: '2014-6-6', close: 325.3, change: -0.06, volume: 12202500},
				{date: '2014-6-9', close: 340, change: 4.52, volume: 27902800},
				{date: '2014-6-10', close: 350, change: 2.94, volume: 47563500},
				{date: '2014-6-11', close: 353.9, change: 1.11, volume: 37097700},
				{date: '2014-6-12', close: 350, change: -1.1, volume: 24827900},
				{date: '2014-6-13', close: 346.5, change: -1, volume: 24242300},
				{date: '2014-6-16', close: 303, change: -12.55, volume: 89396000},
				{date: '2014-6-17', close: 320.5, change: 5.78, volume: 73192900},
				{date: '2014-6-18', close: 338, change: 5.46, volume: 85414600},
				{date: '2014-6-19', close: 326, change: -3.55, volume: 79438600},
				{date: '2014-6-20', close: 326, change: 0, volume: 0},
				{date: '2014-6-23', close: 357, change: 9.51, volume: 97977400},
				{date: '2014-6-24', close: 351.05, change: -1.67, volume: 38339500},
				{date: '2014-6-25', close: 351.5, change: 0.13, volume: 30482400},
				{date: '2014-6-26', close: 341, change: -2.99, volume: 44409800},
				{date: '2014-6-27', close: 338.8, change: -0.65, volume: 40978800},
				{date: '2014-6-30', close: 333, change: -1.71, volume: 32851300},
				{date: '2014-7-1', close: 340, change: 2.1, volume: 22267800},
				{date: '2014-7-2', close: 347, change: 2.06, volume: 21455600},
				{date: '2014-7-3', close: 345.9, change: -0.32, volume: 22760200},
				{date: '2014-7-4', close: 345.45, change: -0.13, volume: 5575400},
				{date: '2014-7-7', close: 344.8, change: -0.19, volume: 17547100},
				{date: '2014-7-8', close: 356.75, change: 3.47, volume: 31720400},
				{date: '2014-7-9', close: 356.75, change: 0, volume: 0},
				{date: '2014-7-10', close: 376.5, change: 5.54, volume: 52150800},
				{date: '2014-7-11', close: 377, change: 0.13, volume: 43350700},
				{date: '2014-7-14', close: 378, change: 0.27, volume: 28590400},
				{date: '2014-7-15', close: 370.4, change: -2.01, volume: 26599200},
				{date: '2014-7-16', close: 366.5, change: -1.05, volume: 42387200},
				{date: '2014-7-17', close: 360, change: -1.77, volume: 32054900},
				{date: '2014-7-18', close: 373.5, change: 3.75, volume: 37169300},
				{date: '2014-7-21', close: 365, change: -2.28, volume: 29070600},
				{date: '2014-7-22', close: 365, change: 0, volume: 0},
				{date: '2014-7-23', close: 355, change: -2.74, volume: 35335400},
				{date: '2014-7-24', close: 364.2, change: 2.59, volume: 28040600},
				{date: '2014-7-25', close: 349.5, change: -4.04, volume: 42999000},
				{date: '2014-7-28', close: 346, change: -1, volume: 31134100},
				{date: '2014-7-29', close: 369, change: 6.65, volume: 48072900},
				{date: '2014-7-30', close: 392, change: 6.23, volume: 67603600},
				{date: '2014-7-31', close: 353, change: -9.95, volume: 77338000},
				{date: '2014-8-1', close: 358, change: 1.42, volume: 64137100},
				{date: '2014-8-4', close: 352.75, change: -1.47, volume: 29520100},
				{date: '2014-8-5', close: 346, change: -1.91, volume: 28726300},
				{date: '2014-8-6', close: 352, change: 1.73, volume: 32391900},
				{date: '2014-8-7', close: 351.9, change: -0.03, volume: 27731700},
				{date: '2014-8-8', close: 350, change: -0.54, volume: 27326500},
				{date: '2014-8-11', close: 347.5, change: -0.71, volume: 26444900},
				{date: '2014-8-12', close: 356, change: 2.45, volume: 26853200},
				{date: '2014-8-13', close: 360, change: 1.12, volume: 25020700},
				{date: '2014-8-14', close: 357, change: -0.83, volume: 38121400},
				{date: '2014-8-15', close: 376, change: 5.32, volume: 70453300},
				{date: '2014-8-18', close: 376, change: 0, volume: 0},
				{date: '2014-8-19', close: 387.75, change: 3.13, volume: 38195200},
				{date: '2014-8-21', close: 393, change: 1.35, volume: 35612000},
				{date: '2014-8-22', close: 398, change: 1.27, volume: 35890000},
				{date: '2014-8-25', close: 412, change: 3.52, volume: 47012000},
				{date: '2014-8-26', close: 421, change: 2.18, volume: 31378400},
				{date: '2014-8-27', close: 430.5, change: 2.26, volume: 48658400},
				{date: '2014-8-28', close: 428.95, change: -0.36, volume: 35825500},
				{date: '2014-8-29', close: 422, change: -1.62, volume: 53029000},
				{date: '2014-9-1', close: 432, change: 2.37, volume: 23661600},
				{date: '2014-9-2', close: 438.5, change: 1.5, volume: 39537000},
				{date: '2014-9-3', close: 460.5, change: 5.02, volume: 59443600},
				{date: '2014-9-4', close: 441, change: -4.23, volume: 47250500},
				{date: '2014-9-5', close: 452, change: 2.49, volume: 44673200},
				{date: '2014-9-8', close: 458.25, change: 1.38, volume: 48839300},
				{date: '2014-9-9', close: 461.5, change: 0.71, volume: 41135500},
				{date: '2014-9-10', close: 468, change: 1.41, volume: 35734700},
				{date: '2014-9-11', close: 473, change: 1.07, volume: 51114200},
				{date: '2014-9-12', close: 476, change: 0.63, volume: 47759100},
				{date: '2014-9-15', close: 476.1, change: 0.02, volume: 79314000},
				{date: '2014-9-16', close: 504, change: 5.86, volume: 52087600},
				{date: '2014-9-17', close: 504, change: 0, volume: 74642700},
				{date: '2014-9-18', close: 503.5, change: -0.1, volume: 42612400},
				{date: '2014-9-19', close: 509, change: 1.09, volume: 49725900},
				{date: '2014-9-22', close: 533, change: 4.72, volume: 45214600},
				{date: '2014-9-23', close: 532, change: -0.19, volume: 68053600},
				{date: '2014-9-24', close: 536.5, change: 0.85, volume: 77906600},
				{date: '2014-9-25', close: 528.6, change: -1.47, volume: 64769900},
				{date: '2014-9-26', close: 545.5, change: 3.2, volume: 49421600},
				{date: '2014-9-29', close: 551, change: 1.01, volume: 59423900},
				{date: '2014-9-30', close: 558, change: 1.27, volume: 59112400},
				{date: '2014-10-1', close: 503, change: -9.86, volume: 78188800},
				{date: '2014-10-2', close: 467.5, change: -7.06, volume: 93343100},
				{date: '2014-10-3', close: 506, change: 8.24, volume: 83902000},
				{date: '2014-10-6', close: 477, change: -5.73, volume: 134200},
				{date: '2014-10-7', close: 462, change: -3.14, volume: 150100},
				{date: '2014-10-8', close: 457, change: -1.08, volume: 213500},
				{date: '2014-10-9', close: 425.35, change: -6.93, volume: 224800},
				{date: '2014-10-10', close: 417, change: -1.96, volume: 254200},
				{date: '2014-10-13', close: 417, change: 0, volume: 0},
				{date: '2014-10-14', close: 406, change: -2.64, volume: 180900},
				{date: '2014-10-15', close: 400, change: -1.48, volume: 193300},
				{date: '2014-10-16', close: 414, change: 3.5, volume: 136300},
				{date: '2014-10-17', close: 430, change: 3.86, volume: 221600},
				{date: '2014-10-20', close: 437.5, change: 1.74, volume: 162200},
				{date: '2014-10-21', close: 448, change: 2.4, volume: 114500},
				{date: '2014-10-22', close: 435.5, change: -2.79, volume: 125600},
				{date: '2014-10-23', close: 419.95, change: -3.57, volume: 103600},
				{date: '2014-10-24', close: 428, change: 1.92, volume: 65200},
				{date: '2014-10-27', close: 420, change: -1.87, volume: 66200},
				{date: '2014-10-28', close: 417, change: -0.71, volume: 76300},
				{date: '2014-10-29', close: 413, change: -0.96, volume: 73300},
				{date: '2014-10-30', close: 430, change: 4.12, volume: 133000},
				{date: '2014-10-31', close: 459.5, change: 6.86, volume: 139700},
				{date: '2014-11-3', close: 471, change: 2.5, volume: 265000},
				{date: '2014-11-4', close: 447, change: -5.1, volume: 251600},
				{date: '2014-11-5', close: 444, change: -0.67, volume: 242000},
				{date: '2014-11-6', close: 444, change: 0, volume: 0},
				{date: '2014-11-7', close: 435, change: -2.03, volume: 81500},
				{date: '2014-11-10', close: 436, change: 0.23, volume: 79600},
				{date: '2014-11-11', close: 430.95, change: -1.16, volume: 63400},
				{date: '2014-11-12', close: 416.8, change: -3.28, volume: 82900},
				{date: '2014-11-13', close: 411, change: -1.39, volume: 74500},
				{date: '2014-11-14', close: 400, change: -2.68, volume: 67400},
				{date: '2014-11-17', close: 400, change: 0, volume: 54400},
				{date: '2014-11-18', close: 393.05, change: -1.74, volume: 64800},
				{date: '2014-11-19', close: 387, change: -1.54, volume: 42800},
				{date: '2014-11-20', close: 401, change: 3.62, volume: 46200},
				{date: '2014-11-21', close: 407.9, change: 1.72, volume: 71300},
				{date: '2014-11-24', close: 407.9, change: 0, volume: 0},
				{date: '2014-11-25', close: 418, change: 2.48, volume: 83400},
				{date: '2014-11-26', close: 418.5, change: 0.12, volume: 55500},
				{date: '2014-11-27', close: 414, change: -1.08, volume: 40000},
				{date: '2014-11-28', close: 396.5, change: -4.23, volume: 95400},
				{date: '2014-12-1', close: 380, change: -4.16, volume: 109700},
				{date: '2014-12-2', close: 369.5, change: -2.76, volume: 80800},
				{date: '2014-12-3', close: 378, change: 2.3, volume: 70100},
				{date: '2014-12-4', close: 372, change: -1.59, volume: 47000},
				{date: '2014-12-5', close: 359, change: -3.49, volume: 81600},
				{date: '2014-12-8', close: 359, change: 0, volume: 0},
				{date: '2014-12-9', close: 321, change: -10.58, volume: 121900},
				{date: '2014-12-10', close: 297, change: -7.48, volume: 294200},
				{date: '2014-12-11', close: 310, change: 4.38, volume: 209600},
				{date: '2014-12-12', close: 287, change: -7.42, volume: 92500},
				{date: '2014-12-15', close: 255, change: -11.15, volume: 217800},
				{date: '2014-12-16', close: 267, change: 4.71, volume: 232400},
				{date: '2014-12-17', close: 285, change: 6.74, volume: 184000},
				{date: '2014-12-18', close: 277.5, change: -2.63, volume: 149400},
				{date: '2014-12-19', close: 276.5, change: -0.36, volume: 111900},
				{date: '2014-12-22', close: 287, change: 3.8, volume: 122200},
				{date: '2014-12-23', close: 290, change: 1.05, volume: 166700},
				{date: '2014-12-24', close: 290, change: 0, volume: 0},
				{date: '2014-12-25', close: 290, change: 0, volume: 0},
				{date: '2014-12-29', close: 303, change: 4.48, volume: 97700},
				{date: '2014-12-30', close: 315, change: 3.96, volume: 116300},
				{date: '2014-12-31', close: 315, change: 0, volume: 0},
				{date: '2015-1-1', close: 315, change: 0, volume: 0},
				{date: '2015-1-2', close: 321, change: 1.9, volume: 64600},
				{date: '2015-1-5', close: 298.5, change: -7.01, volume: 109300},
				{date: '2015-1-6', close: 297.25, change: -0.42, volume: 78100},
				{date: '2015-1-7', close: 298.95, change: 0.57, volume: 90200},
				{date: '2015-1-8', close: 298, change: -0.32, volume: 89400},
				{date: '2015-1-9', close: 299, change: 0.34, volume: 54700},
				{date: '2015-1-12', close: 288, change: -3.68, volume: 45100},
				{date: '2015-1-13', close: 277, change: -3.82, volume: 102000},
				{date: '2015-1-14', close: 288.5, change: 4.15, volume: 87600},
				{date: '2015-1-15', close: 289, change: 0.17, volume: 82100},
				{date: '2015-1-16', close: 297, change: 2.77, volume: 63000},
				{date: '2015-1-19', close: 296, change: -0.34, volume: 10900},
				{date: '2015-1-20', close: 290.1, change: -1.99, volume: 51800},
				{date: '2015-1-21', close: 293.5, change: 1.17, volume: 46100},
				{date: '2015-1-22', close: 301.9, change: 2.86, volume: 52900},
				{date: '2015-1-23', close: 298, change: -1.29, volume: 24800},
				{date: '2015-1-26', close: 299, change: 0.34, volume: 57900},
				{date: '2015-1-27', close: 308, change: 3.01, volume: 129800},
				{date: '2015-1-28', close: 297, change: -3.57, volume: 74900},
				{date: '2015-1-29', close: 284.6, change: -4.18, volume: 46400},
				{date: '2015-1-30', close: 289, change: 1.55, volume: 64100},
				{date: '2015-2-2', close: 289, change: 0, volume: 34200},
				{date: '2015-2-3', close: 302, change: 4.5, volume: 133000},
				{date: '2015-2-4', close: 299.5, change: -0.83, volume: 125600},
				{date: '2015-2-5', close: 305, change: 1.84, volume: 53200},
				{date: '2015-2-6', close: 306, change: 0.33, volume: 87100},
				{date: '2015-2-9', close: 305.5, change: -0.16, volume: 38600},
				{date: '2015-2-10', close: 303, change: -0.82, volume: 70000},
				{date: '2015-2-11', close: 308, change: 1.65, volume: 46200},
				{date: '2015-2-12', close: 317.5, change: 3.08, volume: 79800},
				{date: '2015-2-13', close: 330, change: 3.94, volume: 111400},
				{date: '2015-2-16', close: 330, change: 0, volume: 0},
				{date: '2015-2-17', close: 330, change: 0, volume: 0},
				{date: '2015-2-18', close: 328.5, change: -0.45, volume: 52300},
				{date: '2015-2-19', close: 321.5, change: -2.13, volume: 53600},
				{date: '2015-2-20', close: 314, change: -2.33, volume: 39000},
				{date: '2015-2-23', close: 307, change: -2.23, volume: 70300},
				{date: '2015-2-24', close: 304, change: -0.98, volume: 47000},
				{date: '2015-2-25', close: 306.5, change: 0.82, volume: 80900},
				{date: '2015-2-26', close: 296.5, change: -3.26, volume: 70200},
				{date: '2015-2-27', close: 308, change: 3.88, volume: 81400},
				{date: '2015-3-2', close: 305.5, change: -0.81, volume: 58700},
				{date: '2015-3-3', close: 312, change: 2.13, volume: 69600},
				{date: '2015-3-4', close: 315.9, change: 1.25, volume: 72500},
				{date: '2015-3-5', close: 320, change: 1.3, volume: 100000},
				{date: '2015-3-6', close: 310, change: -3.13, volume: 77900},
				{date: '2015-3-9', close: 311, change: 0.32, volume: 83200},
				{date: '2015-3-10', close: 305.5, change: -1.77, volume: 51000},
				{date: '2015-3-11', close: 312, change: 2.13, volume: 83200},
				{date: '2015-3-12', close: 319.05, change: 2.26, volume: 176700},
				{date: '2015-3-13', close: 320, change: 0.3, volume: 104800},
				{date: '2015-3-16', close: 335.9, change: 4.97, volume: 199900},
				{date: '2015-3-17', close: 337.5, change: 0.48, volume: 196500},
				{date: '2015-3-18', close: 347, change: 2.81, volume: 128700},
				{date: '2015-3-19', close: 346.3, change: -0.2, volume: 193300},
				{date: '2015-3-20', close: 355.5, change: 2.66, volume: 168300},
				{date: '2015-3-23', close: 355.5, change: 0, volume: 0},
				{date: '2015-3-24', close: 355.5, change: 0, volume: 0},
				{date: '2015-3-25', close: 344.95, change: -2.97, volume: 56700},
				{date: '2015-3-26', close: 330.5, change: -4.19, volume: 84700},
				{date: '2015-3-27', close: 334, change: 1.06, volume: 48500},
				{date: '2015-3-30', close: 335.6, change: 0.48, volume: 69900},
				{date: '2015-3-31', close: 331.5, change: -1.22, volume: 80000},
				{date: '2015-4-1', close: 338, change: 1.96, volume: 81300},
				{date: '2015-4-2', close: 338, change: 0, volume: 0},
				{date: '2015-4-3', close: 338, change: 0, volume: 0},
				{date: '2015-4-6', close: 356.9, change: 5.59, volume: 121400},
				{date: '2015-4-7', close: 358.2, change: 0.36, volume: 81800},
				{date: '2015-4-8', close: 356, change: -0.61, volume: 58200},
				{date: '2015-4-9', close: 364, change: 2.25, volume: 96200},
				{date: '2015-4-10', close: 372.75, change: 2.4, volume: 143800},
				{date: '2015-4-13', close: 373, change: 0.07, volume: 81900},
				{date: '2015-4-14', close: 375.5, change: 0.67, volume: 82100},
				{date: '2015-4-15', close: 374.5, change: -0.27, volume: 126300},
				{date: '2015-4-17', close: 361.5, change: -3.47, volume: 68300}
			],
			minValue: function(dateFrom, dateTo, valueType) {
				minValue = 0;
				fileterdData = this.dailyCloseValues.filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
				for (x in fileterdData) {
					valueType == 'close' ? value = fileterdData[x].close : value = fileterdData[x].change;
					minValue == 0 || value < minValue ? minValue = value : minValue = minValue;
				};
				return minValue;
			},
			maxValue: function(dateFrom, dateTo, valueType) {
				maxValue = 0;
				fileterdData = this.dailyCloseValues.filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
				for (x in fileterdData) {
					valueType == 'close' ? value = fileterdData[x].close : value = fileterdData[x].change;
					maxValue == 0 || value > maxValue ? maxValue = value : maxValue = maxValue;
				};
				return maxValue;
			},
			chartData: function (dateFrom, dateTo) {
				chartDataValue = [];
				filteredData = this.dailyCloseValues.filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
				for (x in filteredData) {
					dateValue = filteredData[x].date;
					chartDataValue.push({date: dateValue, close: filteredData[x].close, change: filteredData[x].change} );
				};
				return chartDataValue;
			},
			minDate: function () {
				minDate = '2100-12-31';
				for (x in this.dailyCloseValues) {
					date = this.dailyCloseValues[x].date;
					minDate == '2100-12-31' || new Date(date.split('-') ).getTime() < new Date(minDate.split('-') ).getTime() ? minDate = date : minDate = minDate;
				};
				return minDate;
			},
			maxDate: function (p) {
				maxDate = '1900-01-01';
				for (x in this.dailyCloseValues) {
					date = this.dailyCloseValues[x].date;
					maxDate == '1900-01-01' || new Date(date.split('-') ).getTime() > new Date(maxDate.split('-') ).getTime() ? maxDate = date : maxDate = maxDate;
				};
				return maxDate;
			}
		}
	} else {
		stock = {
			code: 'apbr.ba',
			company: 'Petróleo Brasileiro S.A',
			industry: 'Energía',
			subIndustry: 'Petróleo',
			value: 52.25,
			trend: 'En baja',
			dailyCloseValues: [
				{date: '2014-4-21', close: 67, change: 0, volume: 2648400},
				{date: '2014-4-22', close: 66, change: -1.49, volume: 2257400},
				{date: '2014-4-23', close: 66.25, change: 0.38, volume: 4040500},
				{date: '2014-4-24', close: 66.2, change: -0.08, volume: 2627100},
				{date: '2014-4-25', close: 65.2, change: -1.51, volume: 974900},
				{date: '2014-4-28', close: 69, change: 5.83, volume: 6232300},
				{date: '2014-4-29', close: 70.25, change: 1.81, volume: 8577300},
				{date: '2014-4-30', close: 69.2, change: -1.49, volume: 1305100},
				{date: '2014-5-1', close: 69.2, change: 0, volume: 0},
				{date: '2014-5-2', close: 69.2, change: 0, volume: 1305100},
				{date: '2014-5-5', close: 71.1, change: 2.75, volume: 3985600},
				{date: '2014-5-6', close: 74.5, change: 4.78, volume: 16859500},
				{date: '2014-5-7', close: 74.3, change: -0.27, volume: 8303200},
				{date: '2014-5-8', close: 72.15, change: -2.89, volume: 11912400},
				{date: '2014-5-9', close: 72.05, change: -0.14, volume: 7152900},
				{date: '2014-5-12', close: 73.75, change: 2.36, volume: 4965300},
				{date: '2014-5-13', close: 75, change: 1.69, volume: 4687700},
				{date: '2014-5-14', close: 76.2, change: 1.6, volume: 11159900},
				{date: '2014-5-15', close: 76, change: -0.26, volume: 4220200},
				{date: '2014-5-16', close: 77.5, change: 1.97, volume: 8140500},
				{date: '2014-5-19', close: 81, change: 4.52, volume: 6667100},
				{date: '2014-5-20', close: 80, change: -1.23, volume: 9615800},
				{date: '2014-5-21', close: 81, change: 1.25, volume: 6276000},
				{date: '2014-5-22', close: 80.6, change: -0.49, volume: 7204500},
				{date: '2014-5-23', close: 80.5, change: -0.12, volume: 5139800},
				{date: '2014-5-26', close: 81.5, change: 1.24, volume: 2741400},
				{date: '2014-5-27', close: 81.5, change: 0, volume: 9582200},
				{date: '2014-5-28', close: 82.5, change: 1.23, volume: 6245700},
				{date: '2014-5-29', close: 79.95, change: -3.09, volume: 5564000},
				{date: '2014-5-30', close: 76.8, change: -3.94, volume: 98400},
				{date: '2014-6-2', close: 74.2, change: -3.39, volume: 7760800},
				{date: '2014-6-3', close: 74.3, change: 0.13, volume: 5399900},
				{date: '2014-6-4', close: 72.3, change: -2.69, volume: 4321600},
				{date: '2014-6-5', close: 72.1, change: -0.28, volume: 2256000},
				{date: '2014-6-6', close: 78, change: 8.18, volume: 7114600},
				{date: '2014-6-9', close: 80.2, change: 2.82, volume: 9900900},
				{date: '2014-6-10', close: 79.65, change: -0.69, volume: 9530300},
				{date: '2014-6-11', close: 82.45, change: 3.52, volume: 14095400},
				{date: '2014-6-12', close: 81.7, change: -0.91, volume: 3123500},
				{date: '2014-6-13', close: 82.7, change: 1.22, volume: 6705600},
				{date: '2014-6-16', close: 80.6, change: -2.54, volume: 21109000},
				{date: '2014-6-17', close: 82.3, change: 2.11, volume: 20988900},
				{date: '2014-6-18', close: 84.4, change: 2.55, volume: 16172700},
				{date: '2014-6-19', close: 80.7, change: -4.38, volume: 7836300},
				{date: '2014-6-20', close: 80.7, change: 0, volume: 0},
				{date: '2014-6-23', close: 79, change: -2.11, volume: 11998800},
				{date: '2014-6-24', close: 77, change: -2.53, volume: 6258300},
				{date: '2014-6-25', close: 74.8, change: -2.86, volume: 11288200},
				{date: '2014-6-26', close: 75, change: 0.27, volume: 5920200},
				{date: '2014-6-27', close: 75.5, change: 0.67, volume: 3169600},
				{date: '2014-6-30', close: 74.9, change: -0.79, volume: 3795700},
				{date: '2014-7-1', close: 74.1, change: -1.07, volume: 6470200},
				{date: '2014-7-2', close: 73.5, change: -0.81, volume: 3604000},
				{date: '2014-7-3', close: 74.5, change: 1.36, volume: 2639400},
				{date: '2014-7-4', close: 75.25, change: 1.01, volume: 499700},
				{date: '2014-7-7', close: 73.3, change: -2.59, volume: 6056700},
				{date: '2014-7-8', close: 73.5, change: 0.27, volume: 6454000},
				{date: '2014-7-9', close: 73.5, change: 0, volume: 0},
				{date: '2014-7-10', close: 75.7, change: 2.99, volume: 6570100},
				{date: '2014-7-11', close: 75, change: -0.92, volume: 3821300},
				{date: '2014-7-14', close: 79.9, change: 6.53, volume: 10925300},
				{date: '2014-7-15', close: 79.9, change: 0, volume: 5416000},
				{date: '2014-7-16', close: 80.45, change: 0.69, volume: 2756600},
				{date: '2014-7-17', close: 80, change: -0.56, volume: 8632200},
				{date: '2014-7-18', close: 83.5, change: 4.38, volume: 14824400},
				{date: '2014-7-21', close: 85.9, change: 2.87, volume: 16291400},
				{date: '2014-7-22', close: 85.9, change: 0, volume: 0},
				{date: '2014-7-23', close: 84.2, change: -1.98, volume: 4674300},
				{date: '2014-7-24', close: 83.4, change: -0.95, volume: 4326400},
				{date: '2014-7-25', close: 83.9, change: 0.6, volume: 6446000},
				{date: '2014-7-28', close: 85, change: 1.31, volume: 4830900},
				{date: '2014-7-29', close: 84.2, change: -0.94, volume: 4899900},
				{date: '2014-7-30', close: 84, change: -0.24, volume: 7413600},
				{date: '2014-7-31', close: 79.9, change: -4.88, volume: 5919500},
				{date: '2014-8-1', close: 80.9, change: 1.25, volume: 5595300},
				{date: '2014-8-4', close: 82.5, change: 1.98, volume: 3772700},
				{date: '2014-8-5', close: 84.3, change: 2.18, volume: 11818500},
				{date: '2014-8-6', close: 85.95, change: 1.96, volume: 6867500},
				{date: '2014-8-7', close: 85, change: -1.11, volume: 2360000},
				{date: '2014-8-8', close: 83.5, change: -1.76, volume: 3081600},
				{date: '2014-8-11', close: 87.6, change: 4.91, volume: 6543100},
				{date: '2014-8-12', close: 90, change: 2.74, volume: 10400400},
				{date: '2014-8-13', close: 88, change: -2.22, volume: 12952900},
				{date: '2014-8-14', close: 89.9, change: 2.16, volume: 7011800},
				{date: '2014-8-15', close: 96.3, change: 7.12, volume: 20373000},
				{date: '2014-8-18', close: 96.3, change: 0, volume: 0},
				{date: '2014-8-19', close: 101, change: 4.88, volume: 15022300},
				{date: '2014-8-21', close: 108.75, change: 7.67, volume: 10450200},
				{date: '2014-8-22', close: 105.4, change: -3.08, volume: 13519900},
				{date: '2014-8-25', close: 111.05, change: 5.36, volume: 17694800},
				{date: '2014-8-26', close: 115, change: 3.56, volume: 29832400},
				{date: '2014-8-27', close: 124, change: 7.83, volume: 21819700},
				{date: '2014-8-28', close: 123.5, change: -0.4, volume: 10474800},
				{date: '2014-8-29', close: 127.1, change: 2.91, volume: 21990800},
				{date: '2014-9-1', close: 132.85, change: 4.52, volume: 12784500},
				{date: '2014-9-2', close: 135.2, change: 1.77, volume: 37120800},
				{date: '2014-9-3', close: 131.35, change: -2.85, volume: 24441900},
				{date: '2014-9-4', close: 122.5, change: -6.74, volume: 27393200},
				{date: '2014-9-5', close: 127.2, change: 3.84, volume: 14816700},
				{date: '2014-9-8', close: 122.15, change: -3.97, volume: 31115600},
				{date: '2014-9-9', close: 120.9, change: -1.02, volume: 22736400},
				{date: '2014-9-10', close: 116.5, change: -3.64, volume: 46313700},
				{date: '2014-9-11', close: 118.6, change: 1.8, volume: 18869000},
				{date: '2014-9-12', close: 110.6, change: -6.75, volume: 60766400},
				{date: '2014-9-15', close: 111.6, change: 0.9, volume: 22788900},
				{date: '2014-9-16', close: 118.9, change: 6.54, volume: 38776900},
				{date: '2014-9-17', close: 120.95, change: 1.72, volume: 27123600},
				{date: '2014-9-18', close: 118, change: -2.44, volume: 15876000},
				{date: '2014-9-19', close: 116.75, change: -1.06, volume: 21477200},
				{date: '2014-9-22', close: 120, change: 2.78, volume: 27752600},
				{date: '2014-9-23', close: 115.65, change: -3.63, volume: 34844500},
				{date: '2014-9-24', close: 117.4, change: 1.51, volume: 25106800},
				{date: '2014-9-25', close: 114, change: -2.9, volume: 19224100},
				{date: '2014-9-26', close: 121, change: 6.14, volume: 20130400},
				{date: '2014-9-29', close: 110.8, change: -8.43, volume: 64398400},
				{date: '2014-9-30', close: 108, change: -2.53, volume: 53665000},
				{date: '2014-10-1', close: 97.2, change: -10, volume: 42350100},
				{date: '2014-10-2', close: 96, change: -1.23, volume: 34630400},
				{date: '2014-10-3', close: 104.2, change: 8.54, volume: 33496000},
				{date: '2014-10-6', close: 110, change: 5.57, volume: 267900},
				{date: '2014-10-7', close: 117.5, change: 6.82, volume: 463500},
				{date: '2014-10-8', close: 114, change: -2.98, volume: 267000},
				{date: '2014-10-9', close: 113.5, change: -0.44, volume: 161600},
				{date: '2014-10-10', close: 105.1, change: -7.4, volume: 189000},
				{date: '2014-10-13', close: 105.1, change: 0, volume: 0},
				{date: '2014-10-14', close: 112.75, change: 7.28, volume: 223200},
				{date: '2014-10-15', close: 102.9, change: -8.74, volume: 250900},
				{date: '2014-10-16', close: 99.4, change: -3.4, volume: 274600},
				{date: '2014-10-17', close: 103, change: 3.62, volume: 235400},
				{date: '2014-10-20', close: 99, change: -3.88, volume: 348500},
				{date: '2014-10-21', close: 91.5, change: -7.58, volume: 722300},
				{date: '2014-10-22', close: 87, change: -4.92, volume: 431700},
				{date: '2014-10-23', close: 81, change: -6.9, volume: 1202300},
				{date: '2014-10-24', close: 87, change: 7.41, volume: 518600},
				{date: '2014-10-27', close: 76.5, change: -12.07, volume: 2326900},
				{date: '2014-10-28', close: 77.6, change: 1.44, volume: 1054500},
				{date: '2014-10-29', close: 73.5, change: -5.28, volume: 657200},
				{date: '2014-10-30', close: 75.75, change: 3.06, volume: 337300},
				{date: '2014-10-31', close: 77.8, change: 2.71, volume: 404600},
				{date: '2014-11-3', close: 75, change: -3.6, volume: 393200},
				{date: '2014-11-4', close: 74.2, change: -1.07, volume: 296900},
				{date: '2014-11-5', close: 73.4, change: -1.08, volume: 388400},
				{date: '2014-11-6', close: 73.4, change: 0, volume: 0},
				{date: '2014-11-7', close: 69.9, change: -4.77, volume: 536200},
				{date: '2014-11-10', close: 66.5, change: -4.86, volume: 419500},
				{date: '2014-11-11', close: 66.85, change: 0.53, volume: 572700},
				{date: '2014-11-12', close: 65.3, change: -2.32, volume: 476000},
				{date: '2014-11-13', close: 63.25, change: -3.14, volume: 370300},
				{date: '2014-11-14', close: 61, change: -3.56, volume: 751500},
				{date: '2014-11-17', close: 56.2, change: -7.87, volume: 419200},
				{date: '2014-11-18', close: 57, change: 1.42, volume: 744500},
				{date: '2014-11-19', close: 57, change: 0, volume: 458000},
				{date: '2014-11-20', close: 58.95, change: 3.42, volume: 608700},
				{date: '2014-11-21', close: 66, change: 11.96, volume: 868700},
				{date: '2014-11-24', close: 66, change: 0, volume: 0},
				{date: '2014-11-25', close: 63.2, change: -4.24, volume: 613300},
				{date: '2014-11-26', close: 64, change: 1.27, volume: 514000},
				{date: '2014-11-27', close: 62.2, change: -2.81, volume: 439800},
				{date: '2014-11-28', close: 57.6, change: -7.4, volume: 515200},
				{date: '2014-12-1', close: 53.5, change: -7.12, volume: 428200},
				{date: '2014-12-2', close: 54, change: 0.93, volume: 288200},
				{date: '2014-12-3', close: 57, change: 5.56, volume: 395600},
				{date: '2014-12-4', close: 53.65, change: -5.88, volume: 331500},
				{date: '2014-12-5', close: 52.5, change: -2.14, volume: 319700},
				{date: '2014-12-8', close: 52.5, change: 0, volume: 0},
				{date: '2014-12-9', close: 48.1, change: -8.38, volume: 741100},
				{date: '2014-12-10', close: 44.2, change: -8.11, volume: 468500},
				{date: '2014-12-11', close: 43.8, change: -0.9, volume: 727300},
				{date: '2014-12-12', close: 41.15, change: -6.05, volume: 457500},
				{date: '2014-12-15', close: 35, change: -14.95, volume: 794000},
				{date: '2014-12-16', close: 37.15, change: 6.14, volume: 1933100},
				{date: '2014-12-17', close: 38.8, change: 4.44, volume: 1388900},
				{date: '2014-12-18', close: 39.5, change: 1.8, volume: 802800},
				{date: '2014-12-19', close: 40.8, change: 3.29, volume: 684500},
				{date: '2014-12-22', close: 43.5, change: 6.62, volume: 628900},
				{date: '2014-12-23', close: 44.6, change: 2.53, volume: 747000},
				{date: '2014-12-24', close: 44.6, change: 0, volume: 0},
				{date: '2014-12-25', close: 44.6, change: 0, volume: 0},
				{date: '2014-12-29', close: 41.5, change: -6.95, volume: 629600},
				{date: '2014-12-30', close: 44.1, change: 6.27, volume: 943300},
				{date: '2014-12-31', close: 44.1, change: 0, volume: 0},
				{date: '2015-1-1', close: 44.1, change: 0, volume: 0},
				{date: '2015-1-2', close: 41.3, change: -6.35, volume: 813000},
				{date: '2015-1-5', close: 36.85, change: -10.77, volume: 904300},
				{date: '2015-1-6', close: 36.35, change: -1.36, volume: 815300},
				{date: '2015-1-7', close: 38.95, change: 7.15, volume: 637300},
				{date: '2015-1-8', close: 41.8, change: 7.32, volume: 1319100},
				{date: '2015-1-9', close: 43.5, change: 4.07, volume: 603500},
				{date: '2015-1-12', close: 40.1, change: -7.82, volume: 840000},
				{date: '2015-1-13', close: 41.2, change: 2.74, volume: 459300},
				{date: '2015-1-14', close: 42.15, change: 2.31, volume: 465600},
				{date: '2015-1-15', close: 43.2, change: 2.49, volume: 259800},
				{date: '2015-1-16', close: 44.5, change: 3.01, volume: 523600},
				{date: '2015-1-19', close: 43, change: -3.37, volume: 266800},
				{date: '2015-1-20', close: 42.6, change: -0.93, volume: 373500},
				{date: '2015-1-21', close: 44.95, change: 5.52, volume: 287200},
				{date: '2015-1-22', close: 46.8, change: 4.12, volume: 429700},
				{date: '2015-1-23', close: 45.7, change: -2.35, volume: 289500},
				{date: '2015-1-26', close: 45.15, change: -1.2, volume: 263100},
				{date: '2015-1-27', close: 46.25, change: 2.44, volume: 333100},
				{date: '2015-1-28', close: 42.05, change: -9.08, volume: 1007500},
				{date: '2015-1-29', close: 39.4, change: -6.3, volume: 1283500},
				{date: '2015-1-30', close: 37.75, change: -4.19, volume: 1386400},
				{date: '2015-2-2', close: 39.2, change: 3.84, volume: 657200},
				{date: '2015-2-3', close: 43.8, change: 11.73, volume: 882400},
				{date: '2015-2-4', close: 43.8, change: 0, volume: 790800},
				{date: '2015-2-5', close: 43.4, change: -0.91, volume: 459500},
				{date: '2015-2-6', close: 40, change: -7.83, volume: 1187300},
				{date: '2015-2-9', close: 41.1, change: 2.75, volume: 446800},
				{date: '2015-2-10', close: 38.65, change: -5.96, volume: 800400},
				{date: '2015-2-11', close: 39, change: 0.91, volume: 900000},
				{date: '2015-2-12', close: 40.6, change: 4.1, volume: 497500},
				{date: '2015-2-13', close: 41.7, change: 2.71, volume: 586700},
				{date: '2015-2-16', close: 41.7, change: 0, volume: 0},
				{date: '2015-2-17', close: 41.7, change: 0, volume: 0},
				{date: '2015-2-18', close: 41.7, change: 0, volume: 384000},
				{date: '2015-2-19', close: 40.4, change: -3.12, volume: 341800},
				{date: '2015-2-20', close: 40.15, change: -0.62, volume: 431600},
				{date: '2015-2-23', close: 38.55, change: -3.99, volume: 483900},
				{date: '2015-2-24', close: 40.3, change: 4.54, volume: 245400},
				{date: '2015-2-25', close: 38.7, change: -3.97, volume: 1685400},
				{date: '2015-2-26', close: 37.6, change: -2.84, volume: 507900},
				{date: '2015-2-27', close: 39.6, change: 5.32, volume: 383200},
				{date: '2015-3-2', close: 38.15, change: -3.66, volume: 420800},
				{date: '2015-3-3', close: 38.5, change: 0.92, volume: 253100},
				{date: '2015-3-4', close: 37, change: -3.9, volume: 1271200},
				{date: '2015-3-5', close: 36.7, change: -0.81, volume: 1054200},
				{date: '2015-3-6', close: 35.55, change: -3.13, volume: 1141200},
				{date: '2015-3-9', close: 33.5, change: -5.77, volume: 1214800},
				{date: '2015-3-10', close: 31.75, change: -5.22, volume: 887400},
				{date: '2015-3-11', close: 32.7, change: 2.99, volume: 717300},
				{date: '2015-3-12', close: 31, change: -5.2, volume: 723700},
				{date: '2015-3-13', close: 29.95, change: -3.39, volume: 1062500},
				{date: '2015-3-16', close: 31.2, change: 4.17, volume: 673900},
				{date: '2015-3-17', close: 32.6, change: 4.49, volume: 1134000},
				{date: '2015-3-18', close: 34.4, change: 5.52, volume: 1301100},
				{date: '2015-3-19', close: 32.4, change: -5.81, volume: 980500},
				{date: '2015-3-20', close: 34, change: 4.94, volume: 674100},
				{date: '2015-3-23', close: 34, change: 0, volume: 0},
				{date: '2015-3-24', close: 34, change: 0, volume: 0},
				{date: '2015-3-25', close: 36.3, change: 6.76, volume: 546500},
				{date: '2015-3-26', close: 34.75, change: -4.27, volume: 655400},
				{date: '2015-3-27', close: 34.15, change: -1.73, volume: 584400},
				{date: '2015-3-30', close: 36.1, change: 5.71, volume: 683300},
				{date: '2015-3-31', close: 37.15, change: 2.91, volume: 3294900},
				{date: '2015-4-1', close: 39, change: 4.98, volume: 1798300},
				{date: '2015-4-2', close: 39, change: 0, volume: 0},
				{date: '2015-4-3', close: 39, change: 0, volume: 0},
				{date: '2015-4-6', close: 41.4, change: 6.15, volume: 1354200},
				{date: '2015-4-7', close: 42, change: 1.45, volume: 793700},
				{date: '2015-4-8', close: 41.2, change: -1.9, volume: 980200},
				{date: '2015-4-9', close: 44.25, change: 7.4, volume: 1034600},
				{date: '2015-4-10', close: 45.45, change: 2.71, volume: 975900},
				{date: '2015-4-13', close: 47.65, change: 4.84, volume: 1157300},
				{date: '2015-4-14', close: 49.65, change: 4.2, volume: 758800},
				{date: '2015-4-15', close: 52.7, change: 6.14, volume: 1179000},
				{date: '2015-4-17', close: 52.25, change: -0.85, volume: 1234100}
			],
			minValue: function(dateFrom, dateTo, valueType) {
				minValue = 0;
				fileterdData = this.dailyCloseValues.filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
				for (x in fileterdData) {
					valueType == 'close' ? value = fileterdData[x].close : value = fileterdData[x].change;
					minValue == 0 || value < minValue ? minValue = value : minValue = minValue;
				};
				return minValue;
			},
			maxValue: function(dateFrom, dateTo, valueType) {
				maxValue = 0;
				fileterdData = this.dailyCloseValues.filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
				for (x in fileterdData) {
					valueType == 'close' ? value = fileterdData[x].close : value = fileterdData[x].change;
					maxValue == 0 || value > maxValue ? maxValue = value : maxValue = maxValue;
				};
				return maxValue;
			},
			chartData: function (dateFrom, dateTo) {
				chartDataValue = [];
				filteredData = this.dailyCloseValues.filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
				for (x in filteredData) {
					dateValue = filteredData[x].date;
					chartDataValue.push({date: dateValue, close: filteredData[x].close, change: filteredData[x].change} );
				};
				return chartDataValue;
			},
			minDate: function () {
				minDate = '2100-12-31';
				for (x in this.dailyCloseValues) {
					date = this.dailyCloseValues[x].date;
					minDate == '2100-12-31' || new Date(date.split('-') ).getTime() < new Date(minDate.split('-') ).getTime() ? minDate = date : minDate = minDate;
				};
				return minDate;
			},
			maxDate: function (p) {
				maxDate = '1900-01-01';
				for (x in this.dailyCloseValues) {
					date = this.dailyCloseValues[x].date;
					maxDate == '1900-01-01' || new Date(date.split('-') ).getTime() > new Date(maxDate.split('-') ).getTime() ? maxDate = date : maxDate = maxDate;
				};
				return maxDate;
			}
		}
	};
};

var loadLines = function(startDate, endDate) {

	document.getElementById('line-chart').innerHTML = '';
	data = stock.chartData(startDate, endDate);
	$('#value-drop-down')[0].value == 'close' ? ykeys = ['close'] :  ykeys = ['change'];
	$('#value-drop-down')[0].value == 'change' ? percentage = ' %' : percentage = '';

	var line = new Morris.Line({
		element: 'line-chart',
		resize: true,
		data: data,
		xkey: 'date',
		ykeys: ykeys,
		labels: ykeys,
		lineColors:['gray'],
		lineWidth: 2,
		fillOpacity: 0.6,
		hideHover: 'auto',
		behaveLikeLine: true,
		resize: true,
		gridTextColor: "#000000",
		gridStrokeWidth: 0.2,
		pointSize: 1,
		pointFillColors: ["#efefef"],
		pointStrokeColors: ["#000000"],
		gridLineColor: "#000000",
		//gridTextFamily: "Open Sans",
		gridTextFamily: "Calibri",
		gridTextSize: 10,
		xLabelFormat: function (x) {
					var xDate = new Date(x);
					return xDate.getDate() + '/' + (xDate.getMonth() + 1) + '/' + xDate.getFullYear();
				},
		ymax: 'auto',
		ymin: stock.minValue(startDate, endDate, $('#value-drop-down')[0].value) - (stock.maxValue(startDate, endDate, $('#value-drop-down')[0].value) / 4),
		yLabelFormat: function (y) {return Math.round(y * 100) / 100 + '' + percentage;},
		//events: $.map(data.filter(function (x) {return x.investment > 0 || x.capitalization > 0; } ), function (x) {return x.date; } ),
		//eventStrokeWidth: 2,
		//eventLineColors: $.map(data.filter(function (x) {return x.investment > 0 || x.capitalization > 0; } ), function (x) {return x.investment > 0 ? '#8B0000' : '#228B22'; } )
	});

};

var addThousondSeparator = function(n, s) {
	str = new String(n);
	nFormatted = '';
	for (i=str.length; i--; i > 0) {
		(str.length - i - 1) % 3 == 0 && str.length - i > 2 ? nFormatted = str[i] + s + nFormatted : nFormatted = str[i] + nFormatted;
	};
	return nFormatted;
};

var reloadLines = function () {

	startDate = $('#date-range').val().split(' - ')[0].split('/')[2] + '-' + $('#date-range').val().split(' - ')[0].split('/')[1] + '-' + $('#date-range').val().split(' - ')[0].split('/')[0];
	endDate = $('#date-range').val().split(' - ')[1].split('/')[2] + '-' + $('#date-range').val().split(' - ')[1].split('/')[1] + '-' + $('#date-range').val().split(' - ')[1].split('/')[0];
	loadLines(startDate, endDate);

	$('#line-chart-title')[0].innerHTML = 'Cierres diarios (' + $('#date-range').val() + ')'
};

var stockChange = function () {

	setStock(parameters.stock);
	startDate = new Date(stock.minDate().split('-') );
	strStartDate = startDate.getDate() + '/' + (startDate.getMonth() + 1) + '/' + startDate.getFullYear();

	endDate = new Date(stock.maxDate().split('-') );
	strEndDate = endDate.getDate() + '/' + (endDate.getMonth() + 1) + '/' + endDate.getFullYear();

	$('#date-range').daterangepicker( {
		startDate: strStartDate,
		endDate: strEndDate,
		minDate: strStartDate,
		maxDate: strEndDate
	} );
	$('#date-range').val(strStartDate + ' - ' + strEndDate);

	reloadLines();
};