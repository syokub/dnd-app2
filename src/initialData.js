const initialData = {
	tasks: {
		"task-1": {
			id: "task-1",
			content: "Task 1",
			status: 1,
			jobTitle: "PHP developer",
			department: "Отдел разработки мобильного",
			vacancies: 3,
			applicants: 182,
			recruiter: {
				id: 1,
				fullname: "Алексей Щербаков",
				profilePicture: "https://etimg.etb2bimg.com/photo/88157028.cms",
			},
		},
		"task-2": {
			id: "task-2",
			content: "Task 2",
			status: 2,
			jobTitle: "Freshers",
			department: "Отдел разработки мобильного",
			vacancies: 3,
			applicants: 182,
			recruiter: {
				id: 2,
				fullname: "Theresa Webb",
				profilePicture:
					"https://www.shutterstock.com/image-photo/business-portrait-young-beautiful-woman-260nw-1685957182.jpg",
			},
		},
		"task-3": {
			id: "task-3",
			content: "Task 3",
			status: 3,
			jobTitle: "UI/UX дизайнер",
			department: "Housekeepers",
			vacancies: 3,
			applicants: 182,
			recruiter: {
				id: 3,
				fullname: "Vanessa Johnson",
				profilePicture:
					"https://thumbs.dreamstime.com/b/portrait-attractive-cheerful-experienced-girl-hr-secretary-assistant-isolated-over-grey-pastel-color-background-238511321.jpg",
			},
		},
		"task-4": {
			id: "task-4",
			content: "Task 4",
			status: 2,
			jobTitle: "PHP developer",
			department: "Отдел разработки мобильного",
			vacancies: 3,
			applicants: 182,
			recruiter: {
				id: 4,
				fullname: "Kristin Watson",
				profilePicture:
					"https://hr.ucsf.edu/sites/hr.ucsf.edu/files/styles/card_image/public/2022-04/suit_jordy-s-dtSaSlDob0c-unsplash.jpg?itok=i-Pdo38d",
			},
		},
		"task-5": {
			id: "task-5",
			content: "Task 5",
			status: 3,
			jobTitle: "PHP developer",
			department: "Housekeepers",
			vacancies: 3,
			applicants: 182,
			recruiter: {
				id: 5,
				fullname: "Jacob Jones",
				profilePicture:
					"https://thumbs.dreamstime.com/b/recruitment-concept-friendly-male-hr-manager-sitting-workplace-modern-office-smiling-camera-free-space-194868827.jpg",
			},
		},
	},
	columns: {
		"column-1": {
			id: "column-1",
			title: "To do",
			taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
			index: 0,
		},
		"column-2": {
			id: "column-2",
			title: "In progress",
			taskIds: [],
			index: 1,
		},
		"column-3": {
			id: "column-3",
			title: "Done",
			taskIds: [],
			index: 2,
		},
	},
	columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
