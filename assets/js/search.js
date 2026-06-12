
let jobs = [];


let currentList = [];


const fallbackJobs = JSON.parse(`[
	{ "title": "Software Engineer",    "company": "TechCorp Lanka",   "location": "Colombo", "category": "IT",        "type": "Full Time", "salary": "150,000", "postedDate": "2026-06-08", "description": "Design, build and maintain web applications using HTML, CSS and JavaScript. 2+ years of experience preferred." },
	{ "title": "Front-End Developer",  "company": "Bright Web",       "location": "Kandy",   "category": "IT",        "type": "Full Time", "salary": "120,000", "postedDate": "2026-06-10", "description": "Build responsive, user-friendly interfaces with HTML, CSS, JavaScript and jQuery." },
	{ "title": "Accountant",           "company": "FinTrust",         "location": "Colombo", "category": "Finance",   "type": "Full Time", "salary": "95,000",  "postedDate": "2026-06-02", "description": "Manage company accounts, prepare monthly financial reports and handle payroll." },
	{ "title": "Marketing Executive",  "company": "AdVision",         "location": "Galle",   "category": "Marketing", "type": "Full Time", "salary": "80,000",  "postedDate": "2026-06-11", "description": "Plan and run digital marketing campaigns and manage social media channels." },
	{ "title": "Nursing Officer",      "company": "City Hospital",    "location": "Kandy",   "category": "Health",    "type": "Full Time", "salary": "90,000",  "postedDate": "2026-06-05", "description": "Provide quality patient care and assist doctors in the medical ward." },
	{ "title": "Data Entry Assistant", "company": "QuickData",        "location": "Colombo", "category": "IT",        "type": "Part Time", "salary": "45,000",  "postedDate": "2026-06-12", "description": "Enter and verify data accurately. Basic computer knowledge is required." },
	{ "title": "Sales Representative", "company": "MegaMart",         "location": "Galle",   "category": "Marketing", "type": "Full Time", "salary": "70,000",  "postedDate": "2026-05-30", "description": "Promote products to customers and achieve monthly sales targets." },
	{ "title": "Lab Technician",       "company": "MediLab",          "location": "Kandy",   "category": "Health",    "type": "Part Time", "salary": "65,000",  "postedDate": "2026-06-09", "description": "Collect samples and perform laboratory tests under supervision." },
	{ "title": "Finance Manager",      "company": "FinTrust",         "location": "Colombo", "category": "Finance",   "type": "Full Time", "salary": "200,000", "postedDate": "2026-06-07", "description": "Lead the finance team, manage budgets and oversee financial planning." },
	{ "title": "QA Engineer",          "company": "TechCorp Lanka",   "location": "Colombo", "category": "IT",        "type": "Full Time", "salary": "110,000", "postedDate": "2026-06-12", "description": "Test web applications, write test cases and report bugs with clear steps." },
	{ "title": "UI/UX Designer",       "company": "PixelStudio",      "location": "Colombo", "category": "IT",        "type": "Full Time", "salary": "100,000", "postedDate": "2026-06-11", "description": "Design clean, modern interfaces and improve the overall user experience." },
	{ "title": "Bank Teller",          "company": "Lanka Bank",       "location": "Galle",   "category": "Finance",   "type": "Full Time", "salary": "60,000",  "postedDate": "2026-06-06", "description": "Handle customer transactions and provide friendly front-desk banking service." },
	{ "title": "Content Writer",       "company": "AdVision",         "location": "Kandy",   "category": "Marketing", "type": "Part Time", "salary": "50,000",  "postedDate": "2026-06-12", "description": "Write clear, engaging articles and marketing copy for the web." },
	{ "title": "Pharmacist",           "company": "City Hospital",    "location": "Colombo", "category": "Health",    "type": "Full Time", "salary": "85,000",  "postedDate": "2026-06-04", "description": "Dispense medicines accurately and advise patients on safe usage." },
	{ "title": "Network Engineer",     "company": "TechCorp Lanka",   "location": "Kandy",   "category": "IT",        "type": "Full Time", "salary": "130,000", "postedDate": "2026-06-10", "description": "Set up and maintain company networks and resolve connectivity issues." }
]`);


const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
					"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function formatDate(dateObject) {
	const day = dateObject.getDate();
	const month = monthNames[dateObject.getMonth()];
	const year = dateObject.getFullYear();
	return day + " " + month + " " + year;
}


function daysAgo(postedDate) {
	const posted = new Date(postedDate);
	const today = new Date();
	const oneDay = 1000 * 60 * 60 * 24;        
	const difference = today.getTime() - posted.getTime();
	const days = Math.floor(difference / oneDay);

	if (days <= 0) {
		return "Today";
	}
	if (days === 1) {
		return "1 day ago";
	}
	return days + " days ago";
}


function renderJobs(list) {
	currentList = list;   

	const tableBody = document.getElementById("jobsBody");
	const resultCount = document.getElementById("resultCount");

	tableBody.innerHTML = "";   

	if (list.length === 0) {
		resultCount.textContent = "No jobs found";
		tableBody.innerHTML =
			`<tr><td colspan="8" class="px-4 py-6 text-center text-text-muted">No jobs match your search. Try different keywords.</td></tr>`;
		return;
	}

	resultCount.textContent = list.length + " job(s) found";

	let html = "";

	
	for (let i = 0; i < list.length; i++) {
		const job = list[i];
		const posted = daysAgo(job.postedDate);

		
		html += `
			<tr class="job-row border-b border-slate-200 hover:bg-bg-white">
				<td class="px-4 py-3 font-semibold text-text-main">${job.title}</td>
				<td class="px-4 py-3">${job.company}</td>
				<td class="px-4 py-3">${job.location}</td>
				<td class="px-4 py-3">${job.category}</td>
				<td class="px-4 py-3">${job.type}</td>
				<td class="px-4 py-3">Rs. ${job.salary}</td>
				<td class="px-4 py-3 text-text-muted">${posted}</td>
				<td class="px-4 py-3"><button type="button" data-index="${i}" class="view-btn rounded-lg bg-brand px-3 py-1 text-xs font-semibold text-white hover:bg-brand-dark">View</button></td>
			</tr>`;
	}

	tableBody.innerHTML = html;
}


function openJobPost(job) {
	if (!job) {
		return;
	}

	document.getElementById("jmTitle").textContent = job.title;
	document.getElementById("jmCompany").textContent = job.company;
	document.getElementById("jmLocation").textContent = job.location;
	document.getElementById("jmCategory").textContent = job.category;
	document.getElementById("jmType").textContent = job.type;
	document.getElementById("jmSalary").textContent = "Rs. " + job.salary;
	document.getElementById("jmPosted").textContent = "Posted " + daysAgo(job.postedDate);
	document.getElementById("jmDescription").textContent = job.description;

	document.getElementById("jobModal").classList.remove("hidden");
}

function closeJobPost() {
	document.getElementById("jobModal").classList.add("hidden");
}


function applyFilters() {
	const keyword = document.getElementById("keyword").value.trim().toLowerCase();
	const location = document.getElementById("location").value;
	const category = document.getElementById("category").value;

	
	const filtered = [];
	for (let i = 0; i < jobs.length; i++) {
		const job = jobs[i];
		const matchLocation = (location === "All" || job.location === location);
		const matchCategory = (category === "All" || job.category === category);
		if (matchLocation && matchCategory) {
			filtered.push(job);
		}
	}

	
	if (keyword === "") {
		renderJobs(filtered);
		return;
	}

	
	const results = [];

	function addMatches(test) {
		for (let j = 0; j < filtered.length; j++) {
			const job = filtered[j];
			if (results.indexOf(job) === -1 && test(job) === true) {
				results.push(job);
			}
		}
	}

	
	addMatches(function (job) {                              
		return job.title.toLowerCase() === keyword;
	});
	addMatches(function (job) {                              
		return job.title.toLowerCase().indexOf(keyword) === 0;
	});
	addMatches(function (job) {                              
		return job.title.toLowerCase().indexOf(keyword) > -1;
	});
	addMatches(function (job) {                              
		return job.category.toLowerCase().indexOf(keyword) > -1;
	});
	addMatches(function (job) {                              
		return job.company.toLowerCase().indexOf(keyword) > -1;
	});

	renderJobs(results);
}


function validateKeyword() {
	const keywordInput = document.getElementById("keyword");
	const message = document.getElementById("keywordMsg");
	const value = keywordInput.value.trim();

	if (value.length === 1) {
		message.textContent = "Please type at least 2 characters";
		return false;
	}

	message.textContent = "";
	return true;
}


function loadJobs() {
	fetch("assets/data/jobs.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			jobs = data;            
			renderJobs(jobs);
		})
		.catch(function () {
			jobs = fallbackJobs;    
			renderJobs(jobs);
		});
}


document.addEventListener("DOMContentLoaded", function () {

	
	const now = new Date();
	document.getElementById("today").textContent = formatDate(now);
	document.getElementById("year").textContent = now.getFullYear();

	
	loadJobs();

	
	const searchForm = document.getElementById("searchForm");
	searchForm.addEventListener("submit", function (event) {
		event.preventDefault();
		if (validateKeyword()) {
			applyFilters();
		}
	});

	
	const resetButton = document.getElementById("resetBtn");
	resetButton.addEventListener("click", function () {
		document.getElementById("searchForm").reset();
		document.getElementById("keywordMsg").textContent = "";
		renderJobs(jobs);
	});

	
	document.getElementById("jobsBody").addEventListener("click", function (event) {
		if (event.target.classList.contains("view-btn")) {
			const index = event.target.getAttribute("data-index");
			openJobPost(currentList[index]);
		}
	});

	
	document.getElementById("jobModalClose").addEventListener("click", closeJobPost);
	document.getElementById("jobModalOverlay").addEventListener("click", closeJobPost);
});


if (window.jQuery) {
	$(document).ready(function () {

		
		$("#keyword").on("keyup", function () {
			validateKeyword();
			applyFilters();
		});

		
		$("#location, #category").on("change", function () {
			applyFilters();
		});
	});
}
