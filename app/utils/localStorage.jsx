// localStorage.clear();
const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        title: "Project Report Preparation",
        description: "Prepare a comprehensive project report summarizing progress, challenges, and next steps. Ensure all financial and technical details are included.",
        date: "2024-02-10",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Attend a scheduled meeting with the client to discuss project updates, address concerns, and finalize upcoming milestones.",
        date: "2024-02-11",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Website Bug Fixing",
        description: "Identify and resolve critical bugs reported on the website. Conduct thorough testing to ensure all functionalities work smoothly across different devices and browsers.",
        date: "2024-02-12",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "New Update Deployment",
        description: "Deploy the latest software update on production servers. Ensure all features work as expected and rollback strategies are in place if needed.",
        date: "2024-02-15",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Documentation Writing",
        description: "Write detailed documentation for the newly developed features. Include code explanations, API references, and user guidelines.",
        date: "2024-02-17",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Arjun Nair",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Code Review Session",
        description: "Review pull requests submitted by developers, provide feedback on code quality, efficiency, and security. Approve or request necessary changes.",
        date: "2024-02-14",
        category: "Code Review",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Perform a security audit on the company's internal systems and applications. Identify vulnerabilities and suggest security enhancements.",
        date: "2024-02-16",
        category: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database Optimization",
        description: "Analyze database performance and optimize slow queries. Implement indexing strategies and data archiving to improve efficiency.",
        date: "2024-02-18",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Training",
        description: "Organize and conduct a training session for new and existing employees on best coding practices and team collaboration strategies.",
        date: "2024-02-20",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    name: "Ananya Rao",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Policy Updates",
        description: "Review and update company policies to align with the latest industry standards. Ensure employee handbooks and compliance documents are up-to-date.",
        date: "2024-02-21",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Employee Onboarding",
        description: "Conduct onboarding sessions for new employees, introducing them to company culture, policies, and work tools.",
        date: "2024-02-23",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Event Planning",
        description: "Plan and coordinate a team-building event to enhance employee engagement and collaboration.",
        date: "2024-02-25",
        category: "Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    name: "Vikas Menon",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Sales Data Analysis",
        description: "Analyze recent sales data to identify trends and provide actionable insights for improving sales performance.",
        date: "2024-02-26",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Marketing Campaign",
        description: "Design and execute a new marketing campaign targeting key customer segments to improve brand awareness and sales.",
        date: "2024-02-28",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Customer Support Enhancement",
        description: "Implement new strategies to improve customer support services, reducing response times and enhancing customer satisfaction.",
        date: "2024-03-01",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Product Catalog Update",
        description: "Update and optimize the product catalog to reflect the latest offerings, ensuring accurate product descriptions and pricing.",
        date: "2024-03-03",
        category: "Product Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123"
};
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admins = JSON.parse(localStorage.getItem('admin'));
  return { employees, admins }
}

