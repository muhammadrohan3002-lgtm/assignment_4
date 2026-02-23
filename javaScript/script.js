const jobs = [
  {
    id: 1,
    company: "TechNova Ltd",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "40,000 BDT",
    description: "Develop and maintain modern web interfaces using React.",
    status: "all"
  },
  {
    id: 2,
    company: "Creative Solutions",
    position: "UI Designer",
    location: "Remote",
    type: "Contract",
    salary: "35,000 BDT",
    description: "Design user-friendly mobile and web interfaces.",
    status: "all"
  },
  {
    id: 3,
    company: "DataSoft",
    position: "Backend Developer",
    location: "Chattogram",
    type: "Full-time",
    salary: "50,000 BDT",
    description: "Work with Node.js and databases.",
    status: "all"
  },
  {
    id: 4,
    company: "NextGen IT",
    position: "Full Stack Developer",
    location: "Sylhet",
    type: "Full-time",
    salary: "60,000 BDT",
    description: "Build scalable web applications.",
    status: "all"
  },
  {
    id: 5,
    company: "InnovateX",
    position: "QA Engineer",
    location: "Dhaka",
    type: "Internship",
    salary: "20,000 BDT",
    description: "Perform testing and bug tracking.",
    status: "all"
  },
  {
    id: 6,
    company: "Bright Future",
    position: "Mobile App Developer",
    location: "Remote",
    type: "Full-time",
    salary: "55,000 BDT",
    description: "Develop Android applications using Flutter.",
    status: "all"
  },
  {
    id: 7,
    company: "CloudNet",
    position: "DevOps Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "70,000 BDT",
    description: "Maintain cloud infrastructure and CI/CD pipelines.",
    status: "all"
  },
  {
    id: 8,
    company: "SecureTech",
    position: "Cyber Security Analyst",
    location: "Khulna",
    type: "Full-time",
    salary: "65,000 BDT",
    description: "Monitor and protect systems from threats.",
    status: "all"
  }
];

let currentTab = "all";

const container = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

function renderJobs() {
  container.innerHTML = "";

  const filtered = jobs.filter(job =>
    currentTab === "all" ? job.status === "all" : job.status === currentTab
  );

  document.getElementById("tabCount").innerText =
    filtered.length + " Jobs";

  if (filtered.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-white p-5 shadow rounded";

    card.innerHTML = `
      <h3 class="text-lg font-bold">${job.position}</h3>
      <p class="text-gray-600">${job.company}</p>
      <p class="text-sm">${job.location} | ${job.type}</p>
      <p class="text-sm font-semibold">${job.salary}</p>
      <p class="text-gray-500 mt-2">${job.description}</p>

      <div class="flex gap-2 mt-4">
        <button onclick="updateStatus(${job.id}, 'interview')"
          class="px-3 py-1 bg-green-500 text-white rounded">
          Interview
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')"
          class="px-3 py-1 bg-red-500 text-white rounded">
          Rejected
        </button>

        <button onclick="deleteJob(${job.id})"
          class="px-3 py-1 bg-gray-400 text-white rounded">
          Delete
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  updateDashboard();
}

function updateStatus(id, status) {
  const job = jobs.find(j => j.id === id);

  if (job.status === status) {
    job.status = "all";
  } else {
    job.status = status;
  }

  renderJobs();
}

function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  jobs.splice(index, 1);
  renderJobs();
}

function updateDashboard() {
  const interview = jobs.filter(j => j.status === "interview").length;
  const rejected = jobs.filter(j => j.status === "rejected").length;

  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    currentTab = this.dataset.tab;

    document.querySelectorAll(".tab-btn").forEach(b =>
      b.classList.remove("bg-blue-500", "text-white")
    );

    this.classList.add("bg-blue-500", "text-white");

    renderJobs();
  });
});

renderJobs();